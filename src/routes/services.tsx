import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Practice Areas — Ditebogo Kotoane Attorneys Inc." },
      { name: "description", content: "Explore the legal services offered by Ditebogo Kotoane Attorneys Inc.: personal injury, litigation, family law, and commercial law." },
      { property: "og:title", content: "Practice Areas — Ditebogo Kotoane Attorneys Inc." },
      { property: "og:description", content: "Explore the legal services offered by Ditebogo Kotoane Attorneys Inc.: personal injury, litigation, family law, and commercial law." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const practiceAreas = [
  {
    number: "01",
    title: "Personal Injury & Claims",
    services: ["Road Accident Fund (RAF) Claims", "Medical Negligence", "Unlawful Arrest Claims"],
  },
  {
    number: "02",
    title: "Litigation & Dispute Resolution",
    services: ["Criminal Litigation", "Civil Litigation"],
  },
  {
    number: "03",
    title: "Family & Personal Law",
    services: ["Divorce & Maintenance", "Administration of Deceased Estates"],
  },
  {
    number: "04",
    title: "Commercial & Financial",
    services: ["Commercial Law", "Drafting Contracts", "Credit Matters"],
  },
];

function ServicesPage() {
  return (
    <section className="bg-paper">
      {/* Page banner */}
      <div className="border-b-4 border-ink bg-brand px-6 py-14 text-paper">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/80">
            (b) Practice Areas
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Four disciplines.
            <br />
            One standard.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="max-w-[52ch] font-sans text-base font-medium leading-relaxed text-ink/70">
          From the first claim to final judgment, every matter is handled end to
          end by a senior attorney.
        </p>

        <div className="mt-12 grid gap-1 bg-ink p-1 md:grid-cols-2">
          {practiceAreas.map((area) => (
            <article
              key={area.number}
              className="group bg-paper p-8 transition-colors duration-300 hover:bg-ink"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-5xl text-ink/10 transition-colors group-hover:text-brand">
                  {area.number}
                </span>
                <span className="h-8 w-8 bg-brand" />
              </div>
              <h2 className="mt-6 font-display text-xl uppercase leading-tight tracking-tight text-ink transition-colors group-hover:text-paper">
                {area.title}
              </h2>
              <ul className="mt-6 space-y-3 border-t-2 border-ink pt-6 transition-colors group-hover:border-paper/20">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 font-sans text-sm font-medium text-ink/70 transition-colors group-hover:text-paper/85"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-brand" />
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
