export default function Loading() {
  return (
    <div className="space-y-6" role="status" aria-live="polite">
      <p className="text-sm font-semibold text-[#245b3f]">Loading courses...</p>
      <div className="grid gap-5 md:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <div
            className="h-56 animate-pulse rounded-2xl bg-black/10"
            key={item}
          />
        ))}
      </div>
    </div>
  );
}
