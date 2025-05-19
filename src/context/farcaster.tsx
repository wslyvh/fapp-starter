"use client";

import { PropsWithChildren, useEffect } from "react";
import { sdk } from "@farcaster/frame-sdk";

export function FarcasterProvider(props: PropsWithChildren) {
  useEffect(() => {
    sdk.actions.ready().then(() => {
      console.log("Farcaster SDK ready...");
    });
  }, []);

  return <>{props.children}</>;
}
