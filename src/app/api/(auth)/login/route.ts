import { requestHandler } from "@/lib/api/requestHandler";
import { serverLogin } from "@/lib/api/server/auth";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  return requestHandler(() => serverLogin(body));
}
