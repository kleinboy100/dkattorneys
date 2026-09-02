import { createFileRoute } from "@tanstack/react-router";
import founderPortrait from "../assets/founder-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ditebogo Kotoane Attorneys Inc." },
      { name: "description", content: "Learn about Ditebogo Kotoane Attorneys Inc., founded in 2020 in Klerksdorp, and our founder Diteboho Patrick Kotoane." },
      { property: "og:title", content: "About Us — Ditebogo Kotoane Attorneys Inc." },
      { property: "og:description", content: "Learn about Ditebogo Kotoane Attorneys Inc., founded in 2020 in Klerksdorp, and our founder Diteboho Patrick Kotoane." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <section className="bg-paper">
      {/* Page banner */}
      <div className="border-b-4 border-ink bg-ink px-6 py-14 text-paper">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
            (a) About the Firm
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Built on people,
            <br />
            <span className="text-brand">not paperwork.</span>
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="border-4 border-ink shadow-[12px_12px_0_0_var(--brand)]">
              <img
                src={founderPortrait}
                alt="Diteboho Patrick Kotoane, Director and Founder of Ditebogo Kotoane Attorneys Inc."
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-8 flex items-center justify-between border-y-4 border-ink py-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/60">
                Director & Founder
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                Est. 2020
              </span>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="space-y-5 font-sans text-base leading-relaxed text-ink/70">
              <p>
                Founded on September 1, 2020, Ditebogo Kotoane Attorneys Inc. is
                a dynamic law firm based in the heart of the Klerksdorp CBD. We
                have built a robust reputation by guiding our clients through
                complex legal landscapes with clarity and integrity.
              </p>
              <p>
                Our firm is committed to providing professional, reliable, and
                accessible legal solutions tailored for individuals and
                businesses in Klerksdorp and across South Africa.
              </p>
            </div>

            <div className="mt-10 border-4 border-ink bg-ink p-8 text-paper">
              <p className="font-serif text-2xl font-semibold italic leading-snug">
                "My clients don't pay for a firm. They pay for the person who
                will stand in a courtroom on their behalf — and I intend to be
                that person."
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="font-sans text-sm font-bold uppercase tracking-wide">
                  Diteboho Patrick Kotoane
                </span>
                <span className="h-1 w-8 bg-brand" />
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/60">
                  Director & Founder
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-5 font-sans text-base leading-relaxed text-ink/70">
              <p>
                Diteboho Patrick Kotoane serves as the Director and Founder. He
                obtained his LLB from the University of South Africa (UNISA) in
                2018 and completed his Law School Certificate at North-West
                University (NWU) in 2020. After refining his expertise at
                Mahlatsi Thabo Attorneys, he established this firm to provide
                top-tier advocacy to the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
