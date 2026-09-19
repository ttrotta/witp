import { getDictionary, hasLocale } from "@/infrastructure/i18n";
import { notFound } from "next/navigation";
import { getSessionUser } from "@/infrastructure/auth/session";
import { AnatomyCanvas } from "@/modules/anatomy-3d/components/AnatomyCanvas";
import { PainLogSidebar } from "@/modules/pain-tracking/components/PainLogSidebar";
import { getPainHistory } from "@/modules/pain-tracking/actions";
import { AuthForm } from "@/modules/auth/components/AuthForm";
import { signOut } from "@/modules/auth/actions";
import { Navbar } from "@/shared/ui/Navbar";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const [dictionary, user, history] = await Promise.all([
    getDictionary(lang),
    getSessionUser().catch(() => null),
    getPainHistory(),
  ]);
  const t = dictionary.anatomy;

  return (
    <>
      <Navbar
        account={
          user ? (
            <form action={signOut}>
              <button type="submit" className="text-accent text-sm">
                {dictionary.nav.signOut}
              </button>
            </form>
          ) : undefined
        }
      />
      <main>
        <section
          id="body-map"
          className="anatomy-workspace"
          aria-label={t.select}
        >
          <AnatomyCanvas />
          <PainLogSidebar
            signedIn={Boolean(user)}
            authForm={<AuthForm />}
            entries={history.entries}
            historyError={history.error}
          />
          <p className="model-note">{t.modelNote}</p>
        </section>
        <section
          id="features"
          className="mx-auto grid max-w-6xl gap-8 border-t border-white/10 px-6 py-20 md:grid-cols-2 md:gap-20 lg:px-10"
        >
          <h2 className="max-w-sm text-3xl leading-tight font-medium tracking-tight">
            {t.features}
          </h2>
          <p className="text-muted max-w-lg text-base leading-relaxed">
            {t.featureText}
          </p>
        </section>
        <section id="faq" className="mx-auto max-w-6xl px-6 pb-20 lg:px-10">
          <h2 className="mb-8 text-2xl font-medium">{t.faqTitle}</h2>
          {[
            [t.faqQuestion, t.faqAnswer],
            [t.medicalQuestion, t.medicalAnswer],
          ].map(([question, answer]) => (
            <details key={question} className="border-t border-white/15 py-5">
              <summary className="cursor-pointer text-sm font-medium">
                {question}
              </summary>
              <p className="text-muted mt-4 max-w-2xl text-sm leading-relaxed">
                {answer}
              </p>
            </details>
          ))}
        </section>
      </main>
      <footer className="text-muted mx-auto flex max-w-6xl items-center justify-between gap-6 border-t border-white/10 px-6 py-8 text-xs">
        <span className="text-foreground text-lg font-semibold">witp.</span>
        <span>{t.footer}</span>
      </footer>
    </>
  );
}
