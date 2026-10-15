import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Diteboho Kotoane Attorneys Inc." },
      { name: "description", content: "How Diteboho Kotoane Attorneys Inc. collects, uses and protects your information, including cookies and Google advertising." },
      { property: "og:title", content: "Privacy Policy — Diteboho Kotoane Attorneys Inc." },
      { property: "og:description", content: "How we collect, use and protect your information, including cookies and advertising." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-6 py-20 font-sans text-sm leading-relaxed text-muted-foreground">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-6">Diteboho Kotoane Attorneys Inc. respects your privacy and processes personal information in line with the Protection of Personal Information Act (POPIA).</p>
        <h2 className="mt-10 font-display text-xl font-bold text-ink">Information we collect</h2>
        <p className="mt-3">We only collect information you choose to give us, such as when you email or call us. We use it solely to respond to your enquiry and provide legal services, and keep it confidential.</p>
        <h2 className="mt-10 font-display text-xl font-bold text-ink">Cookies and advertising</h2>
        <p className="mt-3">This website uses Google AdSense to show advertisements. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to this site and/or other sites on the Internet.</p>
        <p className="mt-3">You may opt out of personalised advertising by visiting <a className="text-brand underline" href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or <a className="text-brand underline" href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>. Learn more at <a className="text-brand underline" href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">How Google uses information from sites that use its services</a>.</p>
        <h2 className="mt-10 font-display text-xl font-bold text-ink">Contact</h2>
        <p className="mt-3">Questions about this policy: <a className="text-brand underline" href="mailto:info@dkattorney.co.za">info@dkattorney.co.za</a>, 36 Leask Street, Klerksdorp CBD, 2570.</p>
      </div>
    </section>
  );
}
