import { Suspense } from "react";
import { SlowStats } from "./_components/slow-stats";

const getProgress = async () => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  return 67;
};
const getCourses = async () => {
  await new Promise((resolve) => setTimeout(resolve, 350));
  return 3;
};

export default async function DashboardPage() {
  const [progress, courses] = await Promise.all([getProgress(), getCourses()]);
  return (
    <section className="space-y-7">
      <div>
        <p className="font-semibold text-[#245b3f]">Dashboard</p>
        <h1 className="text-4xl font-bold">Your overview</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <article className="rounded-2xl bg-white p-6">
          <p className="text-[#6c746c]">Learning progress</p>
          <p className="mt-2 text-4xl font-bold">{progress}%</p>
        </article>
        <article className="rounded-2xl bg-white p-6">
          <p className="text-[#6c746c]">Active courses</p>
          <p className="mt-2 text-4xl font-bold">{courses}</p>
        </article>
      </div>
      <Suspense
        fallback={
          <div className="h-28 animate-pulse rounded-2xl bg-black/10" />
        }
      >
        <SlowStats />
      </Suspense>
    </section>
  );
}
