import Link from "next/link";
import { courses } from "@/lib/catalog";

export default function CategoriesPage() {
  const categories = [...new Set(courses.map((course) => course.category))];
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Categories</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {categories.map((category) => (
          <Link
            className="rounded-2xl bg-white p-6 font-semibold hover:bg-[#e4eee5]"
            href={`/products?category=${encodeURIComponent(category)}`}
            key={category}
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}
