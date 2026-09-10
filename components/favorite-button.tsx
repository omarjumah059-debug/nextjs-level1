"use client";

import { useState } from "react";

export function FavoriteButton({ productName }: { productName: string }) {
  const [saved, setSaved] = useState(false);
  return (
    <button
      className="rounded-full bg-[#245b3f] px-5 py-3 font-semibold text-white"
      onClick={() => setSaved((value) => !value)}
    >
      {saved ? `${productName} saved` : "Save favorite"}
    </button>
  );
}
