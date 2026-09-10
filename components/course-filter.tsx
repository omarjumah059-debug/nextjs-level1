"use client";

import { useMemo, useState } from "react";
import type { Course } from "@/lib/catalog";
import { CourseCard } from "./course-card";

export function CourseFilter({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const filteredCourses = useMemo(
    () =>
      courses.filter((course) =>
        `${course.title} ${course.category} ${course.level}`
          .toLowerCase()
          .includes(query.trim().toLowerCase()),
      ),
    [courses, query],
  );
  return (
    <div className="space-y-5">
      <label className="block rounded-2xl bg-white p-5 text-sm font-medium">
        Search courses
        <input
          className="mt-2 w-full rounded-xl border border-black/15 px-4 py-3 outline-none focus:border-[#245b3f]"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try Next.js"
        />{" "}
        <span className="mt-2 block text-[#6c746c]">
          {filteredCourses.length} matching course
          {filteredCourses.length === 1 ? "" : "s"}
        </span>
      </label>
      <div className="grid gap-5 md:grid-cols-3">
        {filteredCourses.length ? (
          filteredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))
        ) : (
          <p className="rounded-2xl bg-white p-5 text-[#6c746c] md:col-span-3">
            No courses match that search.
          </p>
        )}
      </div>
    </div>
  );
}
