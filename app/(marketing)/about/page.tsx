import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how CourseSpace keeps learning focused.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl space-y-6">
      <p className="text-sm font-semibold text-[#245b3f]">About CourseSpace</p>
      <h1 className="text-4xl font-bold">
        A calm place to keep learning moving.
      </h1>
      <p className="text-lg leading-8 text-[#526053]">
        This catalog keeps the choices small, the descriptions useful, and the
        route from curiosity to practice simple.
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          "Clear course paths",
          "Practical lessons",
          "Small client-side interactions",
        ].map((item) => (
          <div className="rounded-2xl bg-white p-5 font-semibold" key={item}>
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
