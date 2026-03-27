import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  /** Narrower width for long-form legal text */
  variant?: "default" | "prose";
};

export function PageContainer({
  children,
  variant = "default",
}: PageContainerProps) {
  const maxClass = variant === "prose" ? "max-w-2xl" : "max-w-4xl";
  return (
    <div className={`mx-auto w-full ${maxClass} px-5 py-12 md:px-6 md:py-16`}>
      {children}
    </div>
  );
}
