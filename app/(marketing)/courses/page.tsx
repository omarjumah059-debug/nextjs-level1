import { CourseFilter } from "@/components/course-filter";
import { courses } from "@/lib/catalog";

export default async function CoursesPage() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return (
    <section className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-[#245b3f]">Course catalog</p>
        <h1 className="text-4xl font-bold">Find your next topic</h1>
      </div>
      <CourseFilter courses={courses} />
    </section>
  );
}
