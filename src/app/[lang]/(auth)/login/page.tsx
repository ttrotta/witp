import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/infrastructure/i18n";
import { AuthForm } from "@/modules/auth/components/AuthForm";
import { Navbar } from "@/shared/ui/Navbar";

export default async function LoginPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { auth } = await getDictionary(lang);
  return (
    <>
      <Navbar />
      <main
        id="body-map"
        className="mx-auto min-h-screen max-w-md px-5 pt-36 pb-16"
      >
        <div className="glass rounded-2xl p-7">
          <AuthForm />
          <Link
            href={`/${lang}`}
            className="text-accent mt-7 block text-sm underline underline-offset-4"
          >
            {auth.back}
          </Link>
        </div>
      </main>
    </>
  );
}
