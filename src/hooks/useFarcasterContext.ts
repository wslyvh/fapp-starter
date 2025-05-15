import { DEFAULT_CACHE_TIME } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import sdk from "@farcaster/frame-sdk";

export function useFarcasterContext(enabled: boolean = true) {
  return useQuery({
    queryKey: ["frames", "context"],
    queryFn: async () => {
      return sdk.context;
    },
    staleTime: DEFAULT_CACHE_TIME,
    enabled,
  });
}
