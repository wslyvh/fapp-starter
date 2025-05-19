import { PropsWithChildren } from "react";
import { QueryProvider } from "./query";

export function Providers(props: PropsWithChildren) {
  return <QueryProvider>{props.children}</QueryProvider>;
}
