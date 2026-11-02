import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/infrastructure/i18n";
import { NotifySection } from "@/modules/waitlist/components/NotifySection";
import { ComingSoon } from "@/shared/ui/ComingSoon";

export default async function ForumPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { auth, community } = await getDictionary(lang);
  return (
    <ComingSoon
      title={community.forumTitle}
      backHref={`/${lang}`}
      backLabel={auth.back}
    >
      <NotifySection />
    </ComingSoon>
  );
}
