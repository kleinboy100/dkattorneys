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
      {/* Hero — architectural frame with vertical brand spine */}
      <section className="border-b-4 border-ink bg-paper">
        <div className="grid md:grid-cols-12">
          {/* Vertical spine */}
          <div className="hidden border-r-4 border-ink bg-ink md:col-span-1 md:flex md:flex-col md:items-center md:justify-between md:py-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper [writing-mode:vertical-rl]">
              Klerksdorp · South Africa
            </span>
            <span className="h-10 w-10 bg-brand" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-paper [writing-mode:vertical-rl] md:rotate-180">
              Established 2020
            </span>
          </div>

          <div className="relative md:col-span-11">
            <div className="px-6 pb-16 pt-16 md:px-14 md:pb-24 md:pt-20">
              <p className="animate-rise font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
                Ditebogo Kotoane Attorneys Inc.
              </p>
              <h1
                className="animate-rise mt-6 font-display text-[13vw] uppercase leading-[0.88] tracking-tight text-ink md:text-[7.5rem] lg:text-[9rem]"
                style={{ animationDelay: "80ms" }}
              >
                Serving You
                <br />
                <span className="inline-block bg-ink px-4 text-paper">Legally</span>
              </h1>
              <div className="animate-rule-in mt-10 h-1 w-32 bg-brand" />
              <div className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
                <p className="animate-rise-late max-w-[44ch] font-sans text-base font-medium leading-relaxed text-ink/70 md:text-lg">
                  Professional, reliable, and accessible legal solutions tailored
                  for individuals and businesses in Klerksdorp and across South
                  Africa.
                </p>
                <div className="animate-rise-late flex flex-wrap gap-0">
                  <Link
                    to="/contact"
                    className="bg-brand px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-ink"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    to="/services"
                    className="border-2 border-ink bg-paper px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-ink transition-colors hover:bg-ink hover:text-paper"
                  >
                    Practice Areas
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Statement — inverted block */}
      <section className="border-b-4 border-ink bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
            Our Position
          </p>
          <p className="mt-6 max-w-[58ch] font-serif text-2xl font-semibold italic leading-relaxed md:text-4xl">
            "At Ditebogo Kotoane Attorneys Inc., we believe that legal
            representation should be precise, empathetic, and relentlessly
            focused on protecting your rights."
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="inline-block border-2 border-paper px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-brand hover:border-brand"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Practice Areas — heavy ruled ledger */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
                Practice Areas
              </p>
              <h2 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight text-ink md:text-6xl">
                Four disciplines.
                <br />
                One standard.
              </h2>
            </div>
            <p className="max-w-[34ch] font-sans text-sm font-medium text-ink/60">
              From the first claim to final judgment, every matter is handled
              with clarity and integrity.
            </p>
          </div>

          <div className="mt-12 grid gap-1 bg-ink p-1 md:grid-cols-2 lg:grid-cols-4">
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

          <div className="mt-10">
            <Link
              to="/services"
              className="inline-block bg-ink px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-brand"
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
    <article className="group relative bg-paper p-8 outline outline-2 -outline-offset-2 outline-ink transition-colors duration-300 hover:bg-brand">
      <span className="font-display text-5xl text-ink/10 transition-colors group-hover:text-paper/30">
        {number}
      </span>
      <h3 className="mt-8 font-display text-lg uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-paper">
        {title}
      </h3>
      <p className="mt-4 font-sans text-sm leading-relaxed text-ink/60 transition-colors group-hover:text-paper/85">
        {description}
      </p>
      <div className="mt-6 h-1 w-10 bg-ink transition-colors group-hover:bg-paper" />
    </article>
  );
}
