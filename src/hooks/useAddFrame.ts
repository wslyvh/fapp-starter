import { sdk } from "@farcaster/frame-sdk";
import { useQueryClient } from "@tanstack/react-query";

export function useAddFrame() {
  const queryClient = useQueryClient();

  return async (): Promise<void> => {
    try {
      console.log("Adding frame..");
      await sdk.actions.addFrame().then(async () => {
        // refetch frame added data
        await queryClient.refetchQueries({ queryKey: ["frames", "added"] });
      });
    } catch (error) {
      console.error("Error adding frame", error);
    }
  };
}
