export const APP_EMOJI = "💦";
export const APP_NAME = "Fapp Starter";
export const APP_DESCRIPTION = "Quickly ship Farcaster Apps";
export const APP_DOMAIN =
  process.env.NEXT_PUBLIC_APP_DOMAIN || "fapp.nexth.dev";
export const APP_URL =
  process.env.NEXT_PUBLIC_APP_URL || `https://${APP_DOMAIN}`;

// More info // https://miniapps.farcaster.xyz/docs/specification#frame
export const APP_ICON = `${APP_URL}/icon.png`; // 1024 x 1024 for Farcaster
export const APP_IMAGE = `${APP_URL}/image.png`; // 1200 x 800 for Farcaster
export const APP_OG_IMAGE = `${APP_URL}/og.png`; // 1200 x 630 for Open Graph + Twitter. Can replace with /opengraph-image
export const APP_WEBHOOK = `${APP_URL}/api/webhook`;
export const APP_FRAME_VERSION = "next";
export const APP_FRAME_PRIMARY_CATEGORY = "utility";
export const APP_FRAME_TAGS = ["farcaster", "app"];

export const FARCASTER_ACCOUNT_ASSOCIATION = {
  header:
    "eyJmaWQiOjEyNTgwLCJ0eXBlIjoiY3VzdG9keSIsImtleSI6IjB4NTQzOTY4YzU4YTRlYTEyNTllMTIxOUI2MjE5MjBDMjQ2OTMxRGYxRiJ9",
  payload: "eyJkb21haW4iOiJmYXBwLm5leHRoLmRldiJ9",
  signature:
    "MHg2ZmE3MGFmMWY4NzNmNzdiYjY2NDY2ODFjZmU2MTZhYmUyN2NmZjg4MGM1M2FmMDdlOGIxNTkzNWI2NzQ4NWRjN2Y4YTk2MDY5MDU5N2ZlYjJhMWJjZTdiMTE0OGQ1MzFkYzIzZTgyNmFhNTUzYTI1YjgzOWM5Y2UzZDZiYTM4MzFj",
};

export const SOCIAL_TWITTER = "wslyvh";
export const SOCIAL_FARCASTER = "wslyvh.eth";
export const SOCIAL_GITHUB = "wslyvh/fapp-starter";

export const DEFAULT_CACHE_TIME = 24 * 60 * 60 * 1000; // 24-hrs (e.g. user context)
