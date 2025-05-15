import type { FrameNotificationDetails } from "@farcaster/frame-sdk";
import { redis } from "@/clients/redis";

const baseKey = "fappstore";

interface NotificationSubscription {
  fid: string;
  url: string;
  token: string;
}

function getUserNotificationDetailsKey(fid: number): string {
  return `${baseKey}:user:${fid}`;
}

export async function getAllUserNotificationDetails(): Promise<
  NotificationSubscription[]
> {
  if (!redis) {
    return [];
  }

  const keys = await redis.keys(`${baseKey}:user:*`);
  const notificationDetails = await redis.mget<FrameNotificationDetails[]>(
    keys
  );

  return keys.map((key: string, index: number) => {
    const fid = key.replace(`${baseKey}:user:`, "");
    return {
      fid,
      url: notificationDetails[index].url,
      token: notificationDetails[index].token,
    };
  });
}

export async function getUserNotificationDetails(
  fid: number
): Promise<FrameNotificationDetails | null> {
  if (!redis) {
    return null;
  }

  return await redis.get<FrameNotificationDetails>(
    getUserNotificationDetailsKey(fid)
  );
}

export async function setUserNotificationDetails(
  fid: number,
  notificationDetails: FrameNotificationDetails
): Promise<void> {
  if (!redis) {
    return;
  }

  await redis.set(getUserNotificationDetailsKey(fid), notificationDetails);
}

export async function deleteUserNotificationDetails(
  fid: number
): Promise<void> {
  if (!redis) {
    return;
  }

  await redis.del(getUserNotificationDetailsKey(fid));
}
