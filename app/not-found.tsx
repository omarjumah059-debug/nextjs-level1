import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto grid min-h-screen max-w-2xl place-items-center px-5 text-center">
      <section>
        <p className="text-sm font-semibold text-[#245b3f]">404</p>
        <h1 className="mt-2 text-5xl font-bold">That page is not here.</h1>
        <p className="mt-4 text-[#526053]">
          Try returning to the course catalog.
        </p>
        <Link
          className="mt-7 inline-block rounded-full bg-[#245b3f] px-5 py-3 font-semibold text-white"
          href="/courses"
        >
          Browse courses
        </Link>
      </section>
    </main>
  );
}
