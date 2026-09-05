import { hasLocale } from "@/infrastructure/i18n";
import { notFound } from "next/navigation";
import { NotifySection } from "@/modules/waitlist/components/NotifySection";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-black">
      <NotifySection />
    </main>
  );
}
