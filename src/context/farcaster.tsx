"use client";

import { PropsWithChildren } from "react";
import { useFarcasterReady } from "@/hooks/useFarcasterReady";

export function FarcasterProvider(props: PropsWithChildren) {
  const { data: isReady } = useFarcasterReady();

  if (!isReady) return null;

  return <>{props.children}</>;
}
