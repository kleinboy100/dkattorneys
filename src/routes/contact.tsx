import { createFileRoute } from "@tanstack/react-router";
import { Smartphone, Phone } from "lucide-react";
import mapImage from "../assets/map-klerksdorp.jpg";
import teamAsset from "../assets/team.jpg.asset.json";
import { assetUrl } from "../lib/asset-url";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Diteboho Kotoane Attorneys Inc." },
      { name: "description", content: "Contact Diteboho Kotoane Attorneys Inc. at 36 Leask Street, Klerksdorp CBD, 2570. Schedule a consultation today." },
      { property: "og:title", content: "Contact Us — Diteboho Kotoane Attorneys Inc." },
      { property: "og:description", content: "Contact Diteboho Kotoane Attorneys Inc. at 36 Leask Street, Klerksdorp CBD, 2570. Schedule a consultation today." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand">
              (c) Contact
            </p>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold italic tracking-tight text-paper md:text-5xl">
              Get in touch with us.
            </h1>
            <div className="mt-10 space-y-6 font-sans text-sm">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Visit
                </p>
                <p className="mt-1 text-paper/90">
                  36 Leask Street
                  <br />
                  Klerksdorp CBD, 2570
                  <br />
                  South Africa
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Hours
                </p>
                <p className="mt-1 text-paper/90">Mon–Fri · 08:00–17:00</p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Phone
                </p>
                <a
                  href="tel:+27615182258"
                  className="mt-1 inline-flex items-center gap-2 text-paper/90 underline decoration-brand/40 underline-offset-4 transition-colors hover:text-paper"
                >
                  <Smartphone size={14} className="text-brand" />
                  061 518 2258
                </a>
                <br />
                <a
                  href="tel:+27864781283"
                  className="mt-1 inline-flex items-center gap-2 text-paper/90 underline decoration-brand/40 underline-offset-4 transition-colors hover:text-paper"
                >
                  <Phone size={14} className="text-brand" />
                  086 478 1283
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Email
                </p>
                <a
                  href="mailto:info@dkattorney.co.za?subject=Consultation%20Request"
                  className="mt-1 inline-block text-paper/90 underline decoration-brand/40 underline-offset-4 transition-colors hover:text-paper"
                >
                  info@dkattorney.co.za
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-paper/50">
                  Connect
                </p>
                <a
                  href="https://www.facebook.com/p/Diteboho-Kotoane-Attorneys-Incorporated-100083405829211/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-paper/90 underline decoration-brand/40 underline-offset-4 transition-colors hover:text-paper"
                >
                  Diteboho Kotoane Attorneys Incorporated on Facebook
                </a>
              </div>
            </div>
            <div className="mt-10">
              <a
                href="mailto:info@dkattorney.co.za?subject=Consultation%20Request"
                className="inline-block bg-brand px-7 py-3.5 font-sans text-sm font-semibold tracking-wide text-white transition-colors hover:bg-paper hover:text-ink"
              >
                Schedule a Consultation
              </a>
            </div>
            <div className="mt-10">
              <img
                src={assetUrl(teamAsset)}
                alt="The team of Diteboho Kotoane Attorneys Inc. at their Klerksdorp offices"
                width={1200}
                height={800}
                loading="lazy"
                className="aspect-[3/2] w-full rounded-lg object-cover outline outline-1 -outline-offset-1 outline-white/10"
              />
              <p className="mt-3 font-sans text-xs text-paper/45">
                The Diteboho Kotoane Attorneys Inc. team in Klerksdorp.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <a
              href="https://www.google.com/maps/search/?api=1&query=36+Leask+Street,+Klerksdorp+CBD,+2570"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-lg outline outline-1 -outline-offset-1 outline-white/10"
            >
              <img
                src={mapImage}
                alt="Map showing the location of Diteboho Kotoane Attorneys Inc. in Klerksdorp"
                width={1280}
                height={896}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/20 opacity-0 transition-opacity group-hover:opacity-100">
                <span className="bg-paper px-4 py-2 font-sans text-sm font-medium text-ink">
                  View on Google Maps
                </span>
              </div>
            </a>
            <p className="mt-3 font-sans text-xs text-paper/45">
              36 Leask Street, Klerksdorp CBD, 2570 · Click the map to open Google Maps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
