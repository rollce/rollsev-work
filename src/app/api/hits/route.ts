import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const namespace = process.env.COUNTAPI_NAMESPACE ?? "rollsev.work";
const key = process.env.COUNTAPI_KEY ?? "total-hits";

async function countRequest(mode: "hit" | "get") {
  const endpoint =
    mode === "hit"
      ? `https://api.countapi.xyz/hit/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`
      : `https://api.countapi.xyz/get/${encodeURIComponent(namespace)}/${encodeURIComponent(key)}`;

  const response = await fetch(endpoint, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Count API failed with status ${response.status}`);
  }

  const payload = (await response.json()) as { value?: number };

  return typeof payload.value === "number" ? payload.value : 0;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action") === "get" ? "get" : "hit";

  try {
    const count = await countRequest(action);
    return NextResponse.json({ count }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "counter_unavailable" }, { status: 503 });
  }
}
