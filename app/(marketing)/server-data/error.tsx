"use client";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="rounded-2xl bg-white p-7">
      <h1 className="text-2xl font-bold">Something went wrong.</h1>
      <p className="mt-2 text-[#526053]">
        The page could not be loaded. Try again.
      </p>
      <button
        className="mt-5 rounded-full bg-[#245b3f] px-5 py-3 font-semibold text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </section>
  );
}
