import { useQuery } from "@tanstack/react-query";
import { sdk } from "@farcaster/frame-sdk";
import { DEFAULT_CACHE_TIME } from "@/utils/config";

export function useFarcasterReady(enabled: boolean = true) {
  return useQuery({
    queryKey: ["frames", "ready"],
    queryFn: async () => {
      await sdk.actions.ready();
      return true;
    },
    staleTime: DEFAULT_CACHE_TIME,
    enabled,
  });
}
