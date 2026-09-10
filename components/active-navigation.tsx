"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/contact", label: "Contact" },
];

export function ActiveNavigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-wrap justify-end gap-1 text-sm font-medium">
      {links.map((link) => (
        <Link
          className={`rounded-full px-3 py-2 ${pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href)) ? "bg-[#245b3f] text-white" : "text-[#405043] hover:bg-black/5"}`}
          href={link.href}
          key={link.href}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
