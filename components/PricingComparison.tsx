import type { Dictionary } from "@/lib/dictionaries";

type PricingComparisonProps = {
  dict: Dictionary;
};

export function PricingComparison({ dict }: PricingComparisonProps) {
  const { home: h } = dict;
  const rows = h.compareRows;

  return (
    <div className="mt-14 space-y-10 md:mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          {h.featuresTitle}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {h.featuresSubtitle}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col rounded-3xl border border-zinc-200/90 bg-white p-6 shadow-sm ring-1 ring-zinc-900/5 dark:border-zinc-700 dark:bg-zinc-900/40 dark:ring-white/10">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              {h.freemiumTitle}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {h.freemiumDesc}
            </p>
          </div>
          <ul className="flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
            {h.freemiumFeatures.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-emerald-600 dark:text-emerald-400" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col rounded-3xl border border-violet-200/90 bg-gradient-to-b from-violet-50/90 to-white p-6 shadow-md ring-2 ring-violet-500/15 dark:border-violet-500/30 dark:from-violet-950/40 dark:to-zinc-900/60 dark:ring-violet-400/20">
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-700 dark:text-violet-300">
              {h.proTitle}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {h.proDesc}
            </p>
          </div>
          <ul className="flex flex-1 flex-col gap-3 text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
            {h.proFeatures.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-violet-600 dark:text-violet-400" aria-hidden>
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
          {h.compareTitle}
        </h3>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-900/50">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 bg-zinc-50/80 dark:border-zinc-700 dark:bg-zinc-800/50">
                <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                  {h.compareColFeature}
                </th>
                <th className="px-4 py-3 font-semibold text-zinc-700 dark:text-zinc-300">
                  {h.compareColFree}
                </th>
                <th className="px-4 py-3 font-semibold text-violet-700 dark:text-violet-300">
                  {h.compareColPro}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b border-zinc-100 last:border-0 dark:border-zinc-800"
                >
                  <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                    {row.feature}
                  </td>
                  <td className="px-4 py-3 text-zinc-600 tabular-nums dark:text-zinc-400">
                    {row.free}
                  </td>
                  <td className="px-4 py-3 font-medium text-zinc-900 dark:text-zinc-100">
                    {row.pro}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-zinc-500 dark:text-zinc-500">
        {h.permissionNote}
      </p>
    </div>
  );
}
