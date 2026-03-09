import { getDictionary, hasLocale, type Locale } from "@/infrastructure/i18n";
import { notFound } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang as Locale);

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-black text-8xl text-white">
      {dict.common.appName}
    </main>
  );
}
