"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/ca");
  }, []);

  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center justify-center px-6 text-center">
      <p className="text-zinc-600 dark:text-zinc-400">
        Redirigint a la versio en catala.{" "}
        <Link href="/ca" className="font-medium underline underline-offset-4">
          Continua aqui
        </Link>
        .
      </p>
    </main>
  );
}
