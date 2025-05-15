import { DEFAULT_CACHE_TIME } from "@/utils/config";
import { useQuery } from "@tanstack/react-query";
import { useFarcasterContext } from "./useFarcasterContext";

export function useFrameAdded(enabled: boolean = true) {
  const context = useFarcasterContext(enabled);

  return useQuery({
    queryKey: ["frames", "added"],
    queryFn: async () => {
      if (!context.data) throw new Error("No context available");
      return context.data.client.added;
    },
    staleTime: DEFAULT_CACHE_TIME,
    enabled: enabled && !!context.data,
  });
}
