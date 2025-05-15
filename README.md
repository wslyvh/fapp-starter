This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Fapp Starter 💦

Quickly ship Farcaster Apps

## Getting started

First, run the development server `yarn dev`.

You can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Run `yarn tunnel` in parallel to get a public url (e.g. 420-69.ngrok-free.app) to run as [Farcaster preview](https://farcaster.xyz/~/developers/mini-apps/preview).

## Configuration

Basic App configuration can be found `src/utils/config.ts`.

The following variables are necessary to [publish your App](https://miniapps.farcaster.xyz/docs/guides/publishing). You can generate your account association using the [Manifest tool](https://warpcast.com/~/developers/mini-apps/manifest?domain=fapp.nexth.dev). Copy them into the config value.

- FARCASTER_ACCOUNT_ASSOCIATION
  - header
  - payload
  - signature

If you want to use notification you can use [Upstash](https://upstash.com/redis). Free tier works fine to get started.

- REDIS_URL=
- REDIS_TOKEN=

## Learn More

To learn more about Next.js, take a look at the following resources:

- Next.js Documentation - https://nextjs.org/docs
- Farcaster Docs - https://docs.farcaster.xyz/
- Farcaster Mini Apps https://miniapps.farcaster.xyz/
