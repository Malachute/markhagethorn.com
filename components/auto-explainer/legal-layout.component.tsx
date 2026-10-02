import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

export const APP_NAME = "Auto Explainer";
export const CONTACT_EMAIL = "mark@hagethorn.eu";
export const EFFECTIVE_DATE = "30 September 2026";

type Props = {
  title: string;
  children: ReactNode;
};

export default function LegalLayout({ title, children }: Props) {
  return (
    <div className="home">
      <Head>
        <title>
          {title === APP_NAME
            ? `${APP_NAME} · Mark Hagethorn`
            : `${title} · ${APP_NAME} · Mark Hagethorn`}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="container mx-auto max-w-3xl px-2">
        <p className="mt-6 mb-2 text-sm">
          <InternalLink href="/" className="text-blue-500 no-underline hover:underline">
            Mark Hagethorn
          </InternalLink>
          {" / "}
          <InternalLink href="/auto-explainer" className="text-blue-500 no-underline hover:underline">
            {APP_NAME}
          </InternalLink>
        </p>
        <h1 className="text-3xl font-bold underline mb-4">{title}</h1>
      </header>

      <main className="container mx-auto max-w-3xl px-2 leading-relaxed">
        {children}
      </main>

      <footer className="container mx-auto max-w-3xl px-2 mt-10 mb-12 text-sm text-gray-500">
        <nav className="flex gap-4 mb-2">
          <InternalLink href="/auto-explainer" className="text-blue-500 hover:underline">
            About
          </InternalLink>
          <InternalLink href="/auto-explainer/privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </InternalLink>
          <InternalLink href="/auto-explainer/terms" className="text-blue-500 hover:underline">
            Terms of Service
          </InternalLink>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-blue-500 hover:underline"
          >
            Contact
          </a>
        </nav>
        <p>
          {APP_NAME} uses YouTube API Services. Developed with YouTube.
          YouTube is a trademark of Google LLC.
        </p>
      </footer>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {children}
    </section>
  );
}

export function ExtLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="text-blue-500 underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export function InternalLink({
  href,
  className = "text-blue-500 underline",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
}
