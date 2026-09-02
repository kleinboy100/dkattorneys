import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoAsset from "../assets/logo.png.asset.json";
import { assetUrl } from "../lib/asset-url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-ink">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-ink">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-brand"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-ink">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-ink px-4 py-2 text-sm font-medium text-paper transition-colors hover:bg-brand"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-line bg-paper px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-secondary"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diteboho Kotoane Attorneys Inc." },
      { name: "description", content: "Professional legal services in Klerksdorp and across South Africa." },
      { name: "author", content: "Diteboho Kotoane Attorneys Inc." },
      { property: "og:title", content: "Diteboho Kotoane Attorneys Inc." },
      { property: "og:description", content: "Professional legal services in Klerksdorp and across South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;0,800;1,600;1,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-6">
        <Link to="/" className="flex shrink-0 items-center">
          <img
            src={assetUrl(logoAsset)}
            alt="Diteboho Kotoane Attorneys Inc."
            className="h-14 w-auto"
          />
        </Link>
        <nav className="flex min-w-0 items-center justify-end gap-3 font-sans text-sm font-medium text-ink">
          <Link
            to="/contact"
            className="shrink-0 bg-ink px-4 py-2 text-sm text-paper transition-colors hover:bg-brand"
          >
            <span className="sm:hidden">Schedule</span>
            <span className="hidden sm:inline">Schedule a Consultation</span>
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              className="inline-flex h-10 w-10 items-center justify-center border border-line bg-paper text-ink transition-colors hover:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                {menuOpen ? (
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-56 border border-line bg-paper shadow-lg">
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line px-5 py-3 text-sm text-ink transition-colors hover:bg-secondary hover:text-brand"
                  activeProps={{ className: "block border-b border-line px-5 py-3 text-sm text-brand hover:bg-secondary" }}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  onClick={() => setMenuOpen(false)}
                  className="block border-b border-line px-5 py-3 text-sm text-ink transition-colors hover:bg-secondary hover:text-brand"
                  activeProps={{ className: "block border-b border-line px-5 py-3 text-sm text-brand hover:bg-secondary" }}
                >
                  Practice Areas
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block px-5 py-3 text-sm text-ink transition-colors hover:bg-secondary hover:text-brand"
                  activeProps={{ className: "block px-5 py-3 text-sm text-brand hover:bg-secondary" }}
                >
                  Contact
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-lg font-extrabold tracking-tight">
            Diteboho Kotoane
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
            Attorneys Inc.
          </span>
        </div>
        <div className="flex flex-col gap-2 font-sans text-xs text-paper/50 md:items-end">
          <a
            href="mailto:info@dkattorney.co.za"
            className="text-paper/70 transition-colors hover:text-paper"
          >
            info@dkattorney.co.za
          </a>
          <p>
            © {new Date().getFullYear()} Diteboho Kotoane Attorneys Inc. · Klerksdorp, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-paper font-sans text-ink">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
