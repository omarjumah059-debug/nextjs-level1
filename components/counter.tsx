"use client";

import { useState } from "react";

export function Counter({ initialValue }: { initialValue: number }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4">
      <button
        className="rounded-lg border px-3 py-1"
        onClick={() => setCount((value) => value - 1)}
      >
        −
      </button>
      <span className="font-bold">{count}</span>
      <button
        className="rounded-lg border px-3 py-1"
        onClick={() => setCount((value) => value + 1)}
      >
        +
      </button>
    </div>
  );
}
