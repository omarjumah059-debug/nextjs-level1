import Link from "next/link";
import type { Course } from "@/lib/catalog";
import styles from "./course-card.module.css";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className={styles.card}>
      <p className="text-sm font-semibold text-[#245b3f]">{course.category}</p>
      <h3 className="mt-3 text-xl font-bold">{course.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#6c746c]">
        {course.description}
      </p>
      <div className="mt-5 flex items-center justify-between text-sm">
        <span>{course.duration}</span>
        <Link
          className="font-semibold text-[#245b3f]"
          href={`/courses/${course.slug}`}
        >
          Details →
        </Link>
      </div>
    </article>
  );
}
