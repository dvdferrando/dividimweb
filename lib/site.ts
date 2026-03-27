/** Replace via NEXT_PUBLIC_APP_STORE_ID in `.env.local` when the app is on the App Store. */
export const APP_STORE_ID =
  process.env.NEXT_PUBLIC_APP_STORE_ID ?? "0000000000";

export const appStoreUrl = `https://apps.apple.com/app/id${APP_STORE_ID}`;

/** Google Play listing — set NEXT_PUBLIC_GOOGLE_PLAY_URL in `.env.local` when published. */
export const googlePlayUrl =
  process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ??
  "https://play.google.com/store/apps/details?id=app.dividim";

export const supportEmail = "support@dividim.cat";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://dividim.cat";
