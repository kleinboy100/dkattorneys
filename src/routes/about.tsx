import { createFileRoute } from "@tanstack/react-router";
import founderAsset from "../assets/founder.jpg.asset.json";
import teamAsset from "../assets/team.jpg.asset.json";
import attorneyAsset from "../assets/attorney.jpg.asset.json";

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
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={founderPortrait}
              alt="Diteboho Patrick Kotoane, Director and Founder of Ditebogo Kotoane Attorneys Inc."
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              (a) About the Firm
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold italic tracking-tight text-ink md:text-5xl">
              A practice built on people, not paperwork.
            </h1>
            <div className="mt-6 space-y-5 text-balance font-sans text-base leading-relaxed text-muted-foreground">
              <p>
                Founded on September 1, 2020, Ditebogo Kotoane Attorneys Inc. is a
                dynamic law firm based in the heart of the Klerksdorp CBD. We have
                built a robust reputation by guiding our clients through complex
                legal landscapes with clarity and integrity.
              </p>
              <p>
                Our firm is committed to providing professional, reliable, and
                accessible legal solutions tailored for individuals and businesses
                in Klerksdorp and across South Africa.
              </p>
            </div>

            <div className="mt-10 border-l-2 border-brand pl-6">
              <p className="font-display text-2xl font-semibold italic leading-snug text-ink">
                "My clients don't pay for a firm. They pay for the person who will
                stand in a courtroom on their behalf — and I intend to be that person."
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="font-sans font-semibold text-ink">
                  Diteboho Patrick Kotoane
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  Director & Founder
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-5 text-balance font-sans text-base leading-relaxed text-muted-foreground">
              <p>
                Diteboho Patrick Kotoane serves as the Director and Founder. He
                obtained his LLB from the University of South Africa (UNISA) in 2018
                and completed his Law School Certificate at North-West University
                (NWU) in 2020. After refining his expertise at Mahlatsi Thabo
                Attorneys, he established this firm to provide top-tier advocacy to
                the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
