import { useQuery } from "@tanstack/react-query";
import { sdk } from "@farcaster/frame-sdk";
import { DEFAULT_CACHE_TIME } from "@/utils/config";

export function useIsFarcasterApp(enabled: boolean = true) {
  return useQuery({
    queryKey: ["frames", "fapp"],
    queryFn: async () => {
      return sdk.isInMiniApp();
    },
    staleTime: DEFAULT_CACHE_TIME,
    enabled,
  });
}
