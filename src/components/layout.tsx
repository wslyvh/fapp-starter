import {
  APP_EMOJI,
  APP_NAME,
  SOCIAL_FARCASTER,
  SOCIAL_GITHUB,
} from "@/utils/config";
import { PropsWithChildren } from "react";
import Link from "next/link";
import { Account } from "./account";

export function Layout(props: PropsWithChildren) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4">
        <Link href="/">
          {APP_EMOJI} {APP_NAME}
        </Link>

        <Account />
      </header>

      <main className="flex flex-col flex-1 container mx-auto px-4 gap-8">
        {props.children}
      </main>

      <footer className="flex flex-col items-center justify-center mt-8 p-4 gap-2">
        <p className="flex gap-4">
          <Link
            href={`https://www.github.com/${SOCIAL_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={`https://warpcast.com/${SOCIAL_FARCASTER}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Farcaster
          </Link>
        </p>
      </footer>
    </div>
  );
}
