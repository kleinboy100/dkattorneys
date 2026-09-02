import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Serving You Legally — Ditebogo Kotoane Attorneys Inc." },
      { name: "description", content: "Professional, reliable, and accessible legal solutions tailored for individuals and businesses in Klerksdorp and across South Africa." },
      { property: "og:title", content: "Serving You Legally — Ditebogo Kotoane Attorneys Inc." },
      { property: "og:description", content: "Professional, reliable, and accessible legal solutions tailored for individuals and businesses in Klerksdorp and across South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-20 text-center">
          <div className="pointer-events-none absolute left-1/2 top-4 -translate-x-1/2 select-none whitespace-nowrap font-display text-[24vw] font-extrabold leading-none text-ink/[0.04]">
            DK
          </div>
          <div className="relative">
            <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              Klerksdorp · Established 2020
            </p>
            <h1 className="animate-rise mt-6 text-balance font-display text-6xl font-extrabold tracking-tight text-ink md:text-7xl lg:text-8xl" style={{ animationDelay: "80ms" }}>
              Serving You
              <br className="hidden md:block" /> Legally
            </h1>
            <div className="animate-rule-in mx-auto mt-8 h-px w-24 bg-brand" />
            <p className="animate-rise-late mx-auto mt-8 max-w-[46ch] text-balance font-sans text-lg text-muted-foreground">
              Professional, reliable, and accessible legal solutions tailored for
              individuals and businesses in Klerksdorp and across South Africa.
            </p>
            <div className="animate-rise-late mt-10">
              <Link
                to="/contact"
                className="inline-block bg-brand px-8 py-4 font-sans text-sm font-semibold tracking-wide text-white transition-colors hover:bg-ink"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Statement */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <p className="animate-rise mx-auto max-w-[60ch] text-balance font-display text-2xl font-semibold italic leading-relaxed text-ink md:text-3xl">
            At Ditebogo Kotoane Attorneys Inc., we believe that legal representation
            should be precise, empathetic, and relentlessly focused on protecting
            your rights.
          </p>
          <div className="animate-rise-late mt-10">
            <Link
              to="/about"
              className="inline-block border border-line bg-paper px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors hover:bg-secondary"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
                Practice Areas
              </p>
              <h2 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                Four disciplines. One standard.
              </h2>
            </div>
            <p className="max-w-[34ch] text-balance font-sans text-sm text-muted-foreground">
              From the first claim to final judgment, every matter is handled with
              clarity and integrity.
            </p>
          </div>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            <PracticeAreaCard
              number="01"
              title="Personal Injury & Claims"
              description="Road Accident Fund (RAF) claims, medical negligence, and unlawful arrest claims."
            />
            <PracticeAreaCard
              number="02"
              title="Litigation & Dispute Resolution"
              description="Criminal litigation and civil litigation, represented with courtroom discipline."
            />
            <PracticeAreaCard
              number="03"
              title="Family & Personal Law"
              description="Divorce and maintenance, plus administration of deceased estates."
            />
            <PracticeAreaCard
              number="04"
              title="Commercial & Financial"
              description="Commercial law, drafting contracts, and credit matters for businesses and individuals."
            />
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-block bg-ink px-6 py-3 font-sans text-sm font-semibold text-paper transition-colors hover:bg-brand"
            >
              View All Practice Areas
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PracticeAreaCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <article className="group bg-paper p-8 transition-colors hover:bg-secondary">
      <span className="font-mono text-sm text-brand">{number}</span>
      <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
        {title}
      </h3>
      <p className="mt-3 max-w-[40ch] text-balance font-sans text-sm text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
