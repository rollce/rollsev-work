import { createClient } from "redis";

const redisUrl = process.env.REDIS_URL;

declare global {
  var __redisClient: ReturnType<typeof createClient> | undefined;
}

export async function getRedisClient() {
  if (!redisUrl) {
    throw new Error("Missing REDIS_URL");
  }

  if (!globalThis.__redisClient) {
    globalThis.__redisClient = createClient({
      url: redisUrl,
    });

    globalThis.__redisClient.on("error", (error) => {
      console.error("Redis client error", error);
    });
  }

  if (!globalThis.__redisClient.isOpen) {
    await globalThis.__redisClient.connect();
  }

  return globalThis.__redisClient;
}
