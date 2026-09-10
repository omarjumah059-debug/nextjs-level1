import Image from "next/image";
import Link from "next/link";
import { courses } from "@/lib/catalog";
import { CourseCard } from "@/components/course-card";
import { homeMetadata as metadata } from "./page.metadata";

export { metadata };

export default function HomePage() {
  return (
    <div className="space-y-16">
      <section className="grid gap-10 rounded-3xl bg-[#e4eee5] p-8 md:grid-cols-2 md:p-14">
        <div className="flex flex-col justify-center gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#245b3f]">
            Learn with direction
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Courses that make the next step clearer.
          </h1>
          <p className="max-w-xl text-lg leading-8 text-[#526053]">
            A small catalog for developers who want focused, practical learning.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="rounded-full bg-[#245b3f] px-5 py-3 font-semibold text-white"
              href="/courses"
            >
              Browse courses
            </Link>
            <Link
              className="rounded-full border border-[#245b3f] px-5 py-3 font-semibold text-[#245b3f]"
              href="/about"
            >
              How it works
            </Link>
          </div>
        </div>
        <Image
          className="h-full w-full rounded-2xl object-cover"
          src="/course-hero.svg"
          alt="Abstract green learning workspace illustration"
          width={800}
          height={560}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </section>
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-[#245b3f]">Featured</p>
            <h2 className="text-3xl font-bold">Start with a useful skill</h2>
          </div>
          <Link className="font-semibold text-[#245b3f]" href="/courses">
            All courses →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}
