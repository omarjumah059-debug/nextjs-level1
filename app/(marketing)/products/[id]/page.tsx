import { notFound } from "next/navigation";
import { FavoriteButton } from "@/components/favorite-button";
import { findProduct } from "@/lib/catalog";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const numericId = Number(id);
  if (!Number.isInteger(numericId) || numericId < 1) notFound();
  const product = findProduct(numericId);
  if (!product) notFound();
  return (
    <article className="mx-auto max-w-2xl space-y-5 rounded-3xl bg-white p-8">
      <p className="font-semibold text-[#245b3f]">{product.category}</p>
      <h1 className="text-4xl font-bold">{product.name}</h1>
      <p className="text-2xl">${product.price}</p>
      <p className="text-[#526053]">{product.stock} currently in stock</p>
      <FavoriteButton productName={product.name} />
    </article>
  );
}
