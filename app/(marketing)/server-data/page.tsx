export const dynamic = "force-dynamic";

async function getPosts() {
  const response = await fetch("https://dummyjson.com/products?limit=3", {
    cache: "no-store",
  });
  if (!response.ok) throw new Error("Could not load the public data.");
  return response.json() as Promise<{
    products: { id: number; title: string }[];
  }>;
}

export default async function ServerDataPage({
  searchParams,
}: {
  searchParams: Promise<{ fail?: string }>;
}) {
  const { fail } = await searchParams;
  if (fail === "1") throw new Error("Test error");
  let products: { id: number; title: string }[] | null = null;
  try {
    products = (await getPosts()).products;
  } catch {
    products = null;
  }
  if (!products)
    return (
      <section className="rounded-2xl bg-white p-7">
        <h1 className="text-2xl font-bold">Data is unavailable right now.</h1>
        <p className="mt-2 text-[#526053]">Please refresh and try again.</p>
      </section>
    );
  return (
    <section className="space-y-6">
      <h1 className="text-4xl font-bold">Server-fetched data</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        {products.map((item) => (
          <article className="rounded-2xl bg-white p-5" key={item.id}>
            {item.title}
          </article>
        ))}
      </div>
    </section>
  );
}
