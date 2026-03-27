export function ScreenshotPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex aspect-[9/19.5] w-full max-w-[220px] flex-col overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-gradient-to-b from-zinc-100 to-zinc-200/90 shadow-lg shadow-zinc-900/5 ring-1 ring-zinc-900/5 dark:border-zinc-700 dark:from-zinc-800 dark:to-zinc-900 dark:ring-white/10"
      role="img"
      aria-label={`Screenshot placeholder: ${label}`}
    >
      <div className="mx-auto mt-3 h-6 w-20 rounded-full bg-zinc-300/80 dark:bg-zinc-600/80" />
      <div className="mt-6 flex flex-1 flex-col gap-3 px-4 pb-6">
        <div className="h-3 w-[75%] rounded bg-zinc-300/90 dark:bg-zinc-600/80" />
        <div className="h-24 rounded-xl bg-white/80 dark:bg-zinc-700/60" />
        <div className="h-3 w-[50%] rounded bg-zinc-300/90 dark:bg-zinc-600/80" />
        <div className="mt-auto h-12 rounded-xl bg-zinc-900/10 dark:bg-white/10" />
      </div>
    </div>
  );
}
