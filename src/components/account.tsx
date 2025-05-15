"use client";

import { useFarcasterAccount } from "@/hooks/useFarcasterAccount";
import { useFrameAdded } from "@/hooks/useFrameAdded";
import { useAddFrame } from "@/hooks/useAddFrame";

export function Account() {
  const { data: account } = useFarcasterAccount();
  const { data: frameAdded } = useFrameAdded();
  const addFrame = useAddFrame();

  if (!account) return null;

  return (
    <div className="flex items-center gap-4">
      {!frameAdded && (
        <button className="btn btn-xs btn-soft" onClick={addFrame}>
          Add
        </button>
      )}

      <div className="avatar">
        <div className="w-8 rounded-full">
          <img src={account.pfpUrl} />
        </div>
      </div>
    </div>
  );
}
