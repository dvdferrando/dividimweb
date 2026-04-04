import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import type { Dictionary } from "@/lib/dictionaries";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";

type HomeScreenshotsProps = {
  dict: Dictionary;
};

function getScreenshotFilenames(): string[] {
  const dir = path.join(process.cwd(), "public", "screenshots");
  try {
    if (!fs.existsSync(dir)) return [];
    return fs
      .readdirSync(dir)
      .filter(
        (f) =>
          f.toLowerCase().endsWith(".png") &&
          !f.startsWith(".") &&
          f !== ".gitkeep",
      )
      .sort();
  } catch {
    return [];
  }
}

function screenshotAlt(dict: Dictionary, index: number): string {
  const named = [
    dict.home.shotBalances,
    dict.home.shotGroups,
    dict.home.shotSettle,
  ];
  return named[index] ?? `${dict.home.screenshotsTitle} ${index + 1}`;
}

const slideClass =
  "relative aspect-[9/19.5] w-[200px] shrink-0 snap-center overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-zinc-100 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 sm:w-[220px] dark:border-zinc-700 dark:bg-zinc-800 dark:ring-white/10";

export function HomeScreenshots({ dict }: HomeScreenshotsProps) {
  const files = getScreenshotFilenames();

  return (
    <section className="mt-20 md:mt-28">
      <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {dict.home.screenshotsTitle}
      </h2>
      <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-500 dark:text-zinc-400">
        {dict.home.screenshotsSubtitle}
      </p>

      <div className="mt-10">
        {files.length === 0 ? (
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-6 sm:gap-8">
            <ScreenshotPlaceholder label={dict.home.shotBalances} />
            <ScreenshotPlaceholder label={dict.home.shotGroups} />
            <ScreenshotPlaceholder label={dict.home.shotSettle} />
          </div>
        ) : (
          <div className="relative mx-auto max-w-4xl">
            <div
              className="pointer-events-none absolute inset-y-2 left-0 z-10 w-10 bg-gradient-to-r from-zinc-50 to-transparent dark:from-zinc-950 sm:w-14"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-y-2 right-0 z-10 w-10 bg-gradient-to-l from-zinc-50 to-transparent dark:from-zinc-950 sm:w-14"
              aria-hidden
            />

            <div
              role="region"
              aria-roledescription="carousel"
              aria-label={dict.home.screenshotsTitle}
              className="snap-x snap-mandatory overflow-x-auto scroll-smooth px-4 pb-1 [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] sm:px-6"
              tabIndex={0}
            >
              <div className="flex w-max max-w-none gap-4 py-2">
                {files.map((filename, index) => {
                  const src = `/screenshots/${encodeURIComponent(filename)}`;
                  return (
                    <figure key={filename} className={slideClass}>
                      <Image
                        src={src}
                        alt={screenshotAlt(dict, index)}
                        fill
                        className="object-cover object-top"
                        sizes="220px"
                        priority={index < 3}
                      />
                    </figure>
                  );
                })}
              </div>
            </div>

            {files.length > 3 ? (
              <p className="mt-3 text-center text-xs text-zinc-500 dark:text-zinc-500">
                {dict.home.screenshotsScrollHint}
              </p>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
