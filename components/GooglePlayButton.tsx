import type { Dictionary } from "@/lib/dictionaries";
import { googlePlayUrl } from "@/lib/site";

type GooglePlayButtonProps = {
  dict: Dictionary;
  className?: string;
};

export function GooglePlayButton({
  dict,
  className = "",
}: GooglePlayButtonProps) {
  return (
    <a
      href={googlePlayUrl}
      target="_blank"
      rel="noopener noreferrer"
      title={`${dict.googlePlay.line2} — ${dict.googlePlay.badge}`}
      className={`relative inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-5 py-3 pr-6 text-sm font-medium text-zinc-900 shadow-sm transition-transform hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.98] dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:border-zinc-500 dark:hover:bg-zinc-800 ${className}`}
    >
      <span
        className="absolute -right-1 -top-2 z-10 whitespace-nowrap rounded-full bg-amber-500 px-2 py-0.5 text-[10px] font-semibold leading-none text-amber-950 shadow-sm ring-2 ring-white dark:bg-amber-400 dark:text-amber-950 dark:ring-zinc-900"
        aria-hidden
      >
        {dict.googlePlay.badge}
      </span>
      <PlayGlyph className="h-7 w-7 shrink-0" aria-hidden />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-normal uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
          {dict.googlePlay.line1}
        </span>
        <span className="text-base font-semibold tracking-tight">
          {dict.googlePlay.line2}
        </span>
      </span>
    </a>
  );
}

function PlayGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85c-.5-.25-.84-.77-.84-1.35zm13.81-5.38L6.05 21.34l8.49-8.49 2.27 2.27zm3.35-4.31-2.27 2.27L6.05 2.66l10.76 6.15c.5.25.84.77.84 1.35v.01c0 .58-.34 1.1-.84 1.35z"
      />
    </svg>
  );
}
