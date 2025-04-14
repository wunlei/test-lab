import { NextRequest } from "next/server";
import { requestHandler } from "@/lib/api/requestHandler";
import { serverLogin } from "@/lib/api/server/auth";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return requestHandler(() => serverLogin(body));
}
