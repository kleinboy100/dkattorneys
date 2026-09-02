import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

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
      { title: "Ditebogo Kotoane Attorneys Inc." },
      { name: "description", content: "Professional legal services in Klerksdorp and across South Africa." },
      { name: "author", content: "Ditebogo Kotoane Attorneys Inc." },
      { property: "og:title", content: "Ditebogo Kotoane Attorneys Inc." },
      { property: "og:description", content: "Professional legal services in Klerksdorp and across South Africa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Playfair+Display:ital,wght@0,700;1,600;1,700&family=Inter:wght@400;500;700;900&family=JetBrains+Mono:wght@400;500&display=swap",
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
  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper">
      <div className="flex items-stretch justify-between">
        <Link to="/" className="flex items-center gap-3 px-6 py-4">
          <span className="flex h-9 w-9 items-center justify-center bg-brand font-display text-sm text-paper">
            DK
          </span>
          <span className="font-display text-sm uppercase leading-none tracking-tight text-ink">
            Ditebogo Kotoane
            <span className="mt-1 block font-mono text-[9px] font-normal uppercase tracking-[0.22em] text-brand">
              Attorneys Inc.
            </span>
          </span>
        </Link>
        <nav className="hidden items-stretch font-sans text-xs font-bold uppercase tracking-[0.14em] text-ink md:flex">
          <Link
            to="/about"
            className="flex items-center border-l-2 border-ink px-6 transition-colors hover:bg-ink hover:text-paper"
            activeProps={{ className: "bg-ink text-paper" }}
          >
            About
          </Link>
          <Link
            to="/services"
            className="flex items-center border-l-2 border-ink px-6 transition-colors hover:bg-ink hover:text-paper"
            activeProps={{ className: "bg-ink text-paper" }}
          >
            Practice Areas
          </Link>
          <Link
            to="/contact"
            className="flex items-center border-l-2 border-ink px-6 transition-colors hover:bg-ink hover:text-paper"
            activeProps={{ className: "bg-ink text-paper" }}
          >
            Contact
          </Link>
          <Link
            to="/contact"
            className="flex items-center border-l-2 border-ink bg-brand px-6 text-paper transition-colors hover:bg-ink"
          >
            Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t-4 border-brand bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-end">
        <div>
          <p className="font-display text-2xl uppercase leading-none tracking-tight">
            Ditebogo Kotoane
          </p>
          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.22em] text-brand">
            Attorneys Inc. · Est. 2020
          </p>
        </div>
        <p className="font-sans text-xs uppercase tracking-wide text-paper/50">
          © {new Date().getFullYear()} Ditebogo Kotoane Attorneys Inc. · Klerksdorp, South Africa
        </p>
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
