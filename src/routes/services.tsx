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
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              (b) Practice Areas
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Four disciplines. One standard.
            </h1>
          </div>
          <p className="max-w-[34ch] text-balance font-sans text-sm text-muted-foreground">
            From the first claim to final judgment, every matter is handled end to
            end by a senior attorney.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {practiceAreas.map((area) => (
            <article
              key={area.number}
              className="group bg-paper p-8 transition-colors hover:bg-secondary"
            >
              <span className="font-mono text-sm text-brand">{area.number}</span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-ink transition-colors group-hover:text-brand">
                {area.title}
              </h2>
              <ul className="mt-5 space-y-2">
                {area.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 font-sans text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
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
