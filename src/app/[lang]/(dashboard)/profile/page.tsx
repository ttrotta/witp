import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/infrastructure/i18n";
import { NotifySection } from "@/modules/waitlist/components/NotifySection";
import { ComingSoon } from "@/shared/ui/ComingSoon";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { auth, dashboard } = await getDictionary(lang);
  return (
    <ComingSoon
      title={dashboard.profileTitle}
      backHref={`/${lang}`}
      backLabel={auth.back}
    >
      <NotifySection />
    </ComingSoon>
  );
}
