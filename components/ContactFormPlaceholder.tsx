import type { Dictionary } from "@/lib/dictionaries";

type ContactFormPlaceholderProps = {
  dict: Dictionary;
};

export function ContactFormPlaceholder({ dict }: ContactFormPlaceholderProps) {
  const c = dict.contact;
  return (
    <div className="mt-12 w-full max-w-md text-left">
      <p className="mb-6 text-center text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
        {c.formSoon}
      </p>
      <fieldset
        disabled
        className="space-y-4 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-700 dark:bg-zinc-900/40"
      >
        <legend className="sr-only">Contact form (coming soon)</legend>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {c.formName}
          </label>
          <input
            type="text"
            readOnly
            placeholder={c.formName}
            className="w-full cursor-not-allowed rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-400 dark:border-zinc-600 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {c.formEmail}
          </label>
          <input
            type="email"
            readOnly
            placeholder={c.formEmail}
            className="w-full cursor-not-allowed rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-400 dark:border-zinc-600 dark:bg-zinc-900"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-zinc-500 dark:text-zinc-400">
            {c.formMessage}
          </label>
          <textarea
            readOnly
            placeholder={c.formMessage}
            rows={4}
            className="w-full cursor-not-allowed resize-none rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-400 dark:border-zinc-600 dark:bg-zinc-900"
          />
        </div>
        <button
          type="button"
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-zinc-200 py-3 text-sm font-semibold text-zinc-500 dark:bg-zinc-700 dark:text-zinc-400"
        >
          {c.formSubmit}
        </button>
      </fieldset>
    </div>
  );
}
