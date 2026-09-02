import { createFileRoute } from "@tanstack/react-router";
import mapImage from "../assets/map-klerksdorp.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Ditebogo Kotoane Attorneys Inc." },
      { name: "description", content: "Contact Ditebogo Kotoane Attorneys Inc. at 36 Leask Street, Klerksdorp CBD, 2570. Schedule a consultation today." },
      { property: "og:title", content: "Contact Us — Ditebogo Kotoane Attorneys Inc." },
      { property: "og:description", content: "Contact Ditebogo Kotoane Attorneys Inc. at 36 Leask Street, Klerksdorp CBD, 2570. Schedule a consultation today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-ink text-paper">
      {/* Page banner */}
      <div className="border-b-4 border-brand px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-brand">
            (c) Contact
          </p>
          <h1 className="mt-4 font-display text-4xl uppercase leading-[0.95] tracking-tight md:text-6xl">
            Get in touch
            <br />
            with us.
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="space-y-0 border-4 border-paper">
              <div className="border-b-4 border-paper p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  Visit
                </p>
                <p className="mt-2 font-sans text-lg font-bold leading-snug">
                  36 Leask Street
                  <br />
                  Klerksdorp CBD, 2570
                  <br />
                  South Africa
                </p>
              </div>
              <div className="border-b-4 border-paper p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  Hours
                </p>
                <p className="mt-2 font-sans text-lg font-bold">Mon–Fri · 08:00–17:00</p>
              </div>
              <div className="p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
                  Connect
                </p>
                <a
                  href="https://www.facebook.com/p/Diteboho-Kotoane-Attorneys-Incorporated-100083405829211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-sans text-lg font-bold underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-brand"
                >
                  Facebook — Diteboho Kotoane Attorneys Incorporated
                </a>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="mailto:info@dkattorneys.co.za?subject=Consultation%20Request"
                className="inline-block bg-brand px-8 py-4 font-sans text-sm font-bold uppercase tracking-[0.14em] text-paper transition-colors hover:bg-paper hover:text-ink"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>

          <div className="md:col-span-7">
            <a
              href="https://www.google.com/maps/search/?api=1&query=36+Leask+Street,+Klerksdorp+CBD,+2570"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block border-4 border-paper"
            >
              <img
                src={mapImage}
                alt="Map showing the location of Ditebogo Kotoane Attorneys Inc. in Klerksdorp"
                width={1280}
                height={896}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/30 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="bg-brand px-5 py-3 font-sans text-sm font-bold uppercase tracking-wide text-paper">
                  View on Google Maps
                </span>
              </div>
            </a>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
              36 Leask Street, Klerksdorp CBD, 2570 · Click the map to open Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
