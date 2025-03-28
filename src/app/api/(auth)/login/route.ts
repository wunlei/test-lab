import { NextRequest } from "next/server";
import { requestHandler, serverLogin } from "@/lib/api";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return requestHandler(() => serverLogin(body));
}
