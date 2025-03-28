import { NextResponse } from "next/server";

export async function requestHandler(fetcher: () => Promise<Response>) {
  try {
    const response = await fetcher();
    const json = await response.json().catch(() => null);

    const nextResponse = NextResponse.json(json, { status: response.status });
    const cookies = response.headers.getSetCookie();

    if (cookies.length > 0) {
      cookies.forEach((cookieStr) => {
        nextResponse.headers.append("Set-Cookie", cookieStr);
      });
    }

    return nextResponse;
  } catch (error) {
    return NextResponse.json(
      {
        error: "Network error or unexpected failure",
        message: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
