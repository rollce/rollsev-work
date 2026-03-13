import { NextResponse } from "next/server";
import { cookies } from "next/headers";

import { getRedisClient } from "@/lib/redis";

export const dynamic = "force-dynamic";

const uniqueVisitorsKey = process.env.UNIQUE_VISITORS_SET_KEY ?? "rollsev:unique-visitors";
const visitorCookieName = process.env.VISITOR_COOKIE_NAME ?? "rv_uid";

async function addVisitor(visitorId: string) {
  const redis = await getRedisClient();
  await redis.sAdd(uniqueVisitorsKey, visitorId);
  return redis.sCard(uniqueVisitorsKey);
}

async function readVisitors() {
  const redis = await getRedisClient();
  return redis.sCard(uniqueVisitorsKey);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const action = searchParams.get("action") === "get" ? "get" : "increment";
    const cookieStore = await cookies();

    let visitorId = cookieStore.get(visitorCookieName)?.value;
    let shouldSetCookie = false;

    if (!visitorId) {
      visitorId = crypto.randomUUID();
      shouldSetCookie = true;
    }

    const count = action === "get" ? await readVisitors() : await addVisitor(visitorId);
    const response = NextResponse.json({ count, metric: "unique_visitors" }, { status: 200 });

    if (shouldSetCookie) {
      response.cookies.set({
        name: visitorCookieName,
        value: visitorId,
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 365 * 3,
      });
    }

    return response;
  } catch {
    return NextResponse.json({ error: "counter_unavailable" }, { status: 503 });
  }
}
