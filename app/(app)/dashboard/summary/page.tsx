import { Counter } from "@/components/counter";
import { courses } from "@/lib/catalog";
import { getCatalogOwner } from "@/server/private-config";

export default function SummaryPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Product summary</h1>
      <p>
        {courses.length} courses are prepared on the server for{" "}
        {getCatalogOwner()}.
      </p>
      <Counter initialValue={courses.length} />
    </section>
  );
}
