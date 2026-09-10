import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { findCourse } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) return { title: "Course not found" };
  return { title: course.title, description: course.description };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const course = findCourse(slug);
  if (!course) notFound();
  return (
    <article className="mx-auto max-w-3xl space-y-6 rounded-3xl bg-white p-8 sm:p-12">
      <p className="font-semibold text-[#245b3f]">
        {course.category} · {course.level}
      </p>
      <h1 className="text-4xl font-bold">{course.title}</h1>
      <p className="text-lg leading-8 text-[#526053]">{course.description}</p>
      <div className="grid gap-4 border-y border-black/10 py-5 sm:grid-cols-2">
        <p>
          <strong>Duration:</strong> {course.duration}
        </p>
        <p>
          <strong>Lessons:</strong> {course.lessons}
        </p>
      </div>
      <Link className="font-semibold text-[#245b3f]" href="/courses">
        ← Back to courses
      </Link>
    </article>
  );
}
