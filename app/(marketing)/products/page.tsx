import Link from "next/link";
import { products } from "@/lib/catalog";

type Props = { searchParams: Promise<{ category?: string; q?: string }> };

export default async function ProductsPage({ searchParams }: Props) {
  const { category = "All", q = "" } = await searchParams;
  const filtered = products.filter(
    (product) =>
      (category === "All" ||
        product.category.toLowerCase() === category.toLowerCase()) &&
      product.name.toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <section className="space-y-7">
      <div>
        <h1 className="text-4xl font-bold">Products</h1>
        <p className="mt-2 text-[#526053]">
          Category: <strong>{category}</strong> · Search:{" "}
          <strong>{q || "None"}</strong>
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {filtered.map((product) => (
          <Link
            className="rounded-2xl bg-white p-5"
            href={`/products/${product.id}`}
            key={product.id}
          >
            <p className="text-sm text-[#245b3f]">{product.category}</p>
            <h2 className="mt-2 text-xl font-bold">{product.name}</h2>
            <p className="mt-3">${product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
