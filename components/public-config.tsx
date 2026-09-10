"use client";

export function PublicConfig() {
  return (
    <p className="text-[#526053]">
      Portal mode: {process.env.NEXT_PUBLIC_PORTAL_MODE ?? "student demo"}. This
      value is safe to expose; secrets never use the <code>NEXT_PUBLIC_</code>{" "}
      prefix.
    </p>
  );
}
