import { createFileRoute } from "@tanstack/react-router";
import founderDeskAsset from "../assets/team-member-1.jpg.asset.json";
import teamAsset from "../assets/team.jpg.asset.json";
import { assetUrl } from "../lib/asset-url";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Diteboho Kotoane Attorneys Inc." },
      { name: "description", content: "Learn about Diteboho Kotoane Attorneys Inc., a 100% Black-owned law firm established in 2021 in Klerksdorp, its vision, mission, and founder Diteboho Patrick Kotoane." },
      { property: "og:title", content: "About Us — Diteboho Kotoane Attorneys Inc." },
      { property: "og:description", content: "Learn about Diteboho Kotoane Attorneys Inc., a 100% Black-owned law firm established in 2021 in Klerksdorp, its vision, mission, and founder Diteboho Patrick Kotoane." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid items-start gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img
              src={assetUrl(founderBrandAsset)}
              alt="Diteboho Patrick Kotoane, Director and Founder of Diteboho Kotoane Attorneys Inc."
              width={1080}
              height={1080}
              className="aspect-[4/5] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5"
            />
            <p className="mt-3 font-sans font-semibold text-ink">
              Diteboho Patrick Kotoane
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Director &amp; Founder
            </p>
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
                Established in 2021 by Mr Diteboho Kotoane, Diteboho Kotoane
                Attorneys Inc. is a 100% Black-owned law firm based in the heart of
                the Klerksdorp CBD, committed to providing professional, ethical,
                and effective legal services tailored to the needs of our clients.
              </p>
              <p>
                Our mission is to protect our clients' rights, pursue justice, and
                provide dedicated legal representation across a wide range of legal
                matters — from litigation and family matters to deceased estates,
                domestic violence, and labour disputes.
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
    <VisionMissionSection />
    <TeamSection />
    </>
  );
}

function VisionMissionSection() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
          (b) Vision &amp; Mission
        </p>
        <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-2">
          <div className="bg-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              ⚖ Vision
            </p>
            <p className="mt-5 text-balance font-display text-xl font-semibold italic leading-relaxed text-ink md:text-2xl">
              To be a trusted and respected law firm that delivers accessible,
              professional, and client-focused legal services, while upholding
              justice, integrity, and excellence.
            </p>
            <p className="mt-6 text-balance font-sans text-base leading-relaxed text-muted-foreground">
              Diteboho Kotoane Attorneys strives to empower individuals, families,
              and businesses through reliable legal representation and to make a
              meaningful contribution to the communities we serve.
            </p>
          </div>
          <div className="bg-paper p-8 md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              ⚖ Mission
            </p>
            <p className="mt-5 text-balance font-sans text-base leading-relaxed text-muted-foreground">
              We protect our clients' rights, pursue justice, and provide dedicated
              legal representation across a wide range of legal matters,
              including:
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {[
                "Civil Litigation",
                "Criminal Matters",
                "Family Matters",
                "Maintenance Matters",
                "Deceased Estates",
                "Domestic Violence Matters",
                "Labour Disputes",
                "Divorce Matters",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 font-sans text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-sans text-sm text-muted-foreground">
              And other law-related matters.
            </p>
            <p className="mt-6 text-balance font-sans text-base leading-relaxed text-muted-foreground">
              We are committed to delivering legal solutions with integrity,
              confidentiality, accountability, and professionalism, ensuring that
              every client receives the attention, guidance, and representation
              they deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="border-b border-line bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
          (c) Our Team
        </p>
        <h2 className="mt-5 max-w-2xl text-balance font-display text-3xl font-bold italic tracking-tight text-ink md:text-4xl">
          The people behind the practice.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-5">
          <img
            src={assetUrl(teamAsset)}
            alt="The team of Diteboho Kotoane Attorneys Inc. at their Klerksdorp offices"
            loading="lazy"
            className="aspect-[3/2] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-black/5"
          />
        </div>
        <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-muted-foreground">
          Our Klerksdorp team works side by side on every matter — from first
          consultation to final resolution — so clients always know who is
          standing behind their case.
        </p>
      </div>
    </section>
  );
}
