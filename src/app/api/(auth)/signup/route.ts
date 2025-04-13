import { requestHandler } from "@/lib/api/requestHandler";
import { serverSignUp } from "@/lib/api/server/auth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return requestHandler(() => serverSignUp(body));
}
