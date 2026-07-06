import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-container flex min-h-screen flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-base leading-7 text-muted">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Back to home
      </Link>
    </main>
  );
}
