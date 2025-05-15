import {
  APP_FRAME_PRIMARY_CATEGORY,
  APP_FRAME_TAGS,
  APP_FRAME_VERSION,
  APP_ICON,
  APP_IMAGE,
  APP_NAME,
  APP_URL,
  APP_WEBHOOK,
  FARCASTER_ACCOUNT_ASSOCIATION,
} from "@/utils/config";

export async function GET() {
  return Response.json({
    accountAssociation: FARCASTER_ACCOUNT_ASSOCIATION,
    frame: {
      version: APP_FRAME_VERSION,
      name: APP_NAME,
      homeUrl: APP_URL,
      iconUrl: APP_ICON,
      imageUrl: APP_IMAGE,
      webhookUrl: APP_WEBHOOK,
      primaryCategory: APP_FRAME_PRIMARY_CATEGORY,
      tags: APP_FRAME_TAGS,
    },
  });
}
