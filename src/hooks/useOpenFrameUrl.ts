import { sdk } from "@farcaster/frame-sdk";
import { useIsFarcasterApp } from "@/hooks/useIsFarcasterApp";

export function useOpenFrameUrl() {
  const { data: isFarcasterApp } = useIsFarcasterApp();

  return async (frameUrl?: string): Promise<void> => {
    if (!frameUrl) return;

    if (isFarcasterApp) {
      try {
        await sdk.actions.openUrl(
          `https://farcaster.xyz/~/frames/launch?url=${frameUrl}`
        );
      } catch (error) {
        console.error("Failed to open frame URL:", error);
      }
    } else {
      window.open(
        `https://farcaster.xyz/?launchFrameUrl=${encodeURIComponent(frameUrl)}`,
        "_blank"
      );
    }
  };
}
