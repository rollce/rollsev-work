import { NextResponse } from "next/server";

import { getRedisClient } from "@/lib/redis";

export const dynamic = "force-dynamic";

const key = process.env.HITS_KEY ?? "rollsev:total-hits";

async function incrementHits() {
  const redis = await getRedisClient();
  return redis.incr(key);
}

async function readHits() {
  const redis = await getRedisClient();
  const value = await redis.get(key);
  return value ? Number(value) : 0;
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action") === "get" ? "get" : "increment";
    const count = action === "get" ? await readHits() : await incrementHits();

    return NextResponse.json({ count }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "counter_unavailable" }, { status: 503 });
  }
}
