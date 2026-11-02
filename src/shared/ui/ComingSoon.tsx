import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "./Navbar";

// The body map stays the skip-link target so the Navbar works on every page.
export function ComingSoon({
  title,
  backHref,
  backLabel,
  children,
}: {
  title: string;
  backHref: string;
  backLabel: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main
        id="body-map"
        className="mx-auto min-h-screen max-w-md px-5 pt-36 pb-16"
      >
        <h1 className="mb-6 text-[clamp(2.3rem,3.7vw,3.7rem)] leading-[1.08] font-medium tracking-[-0.035em]">
          {title}
        </h1>
        <div className="glass rounded-2xl p-7">
          {children}
          <Link
            href={backHref}
            className="text-accent mt-7 block text-sm underline underline-offset-4"
          >
            {backLabel}
          </Link>
        </div>
      </main>
    </>
  );
}
