import { PropsWithChildren } from "react";
import { QueryProvider } from "./query";
import { FarcasterProvider } from "./farcaster";

export function Providers(props: PropsWithChildren) {
  return (
    <QueryProvider>
      <FarcasterProvider>{props.children}</FarcasterProvider>
    </QueryProvider>
  );
}
