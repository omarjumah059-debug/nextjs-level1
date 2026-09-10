export async function SlowStats() {
  await new Promise((resolve) => setTimeout(resolve, 1200));
  return (
    <article className="rounded-2xl bg-[#245b3f] p-6 text-white">
      <p className="text-white/70">Weekly note</p>
      <p className="mt-2 text-xl font-semibold">
        You completed 4 lessons this week.
      </p>
    </article>
  );
}
