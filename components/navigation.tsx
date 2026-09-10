import Link from "next/link";
import Image from "next/image";
import { ActiveNavigation } from "./active-navigation";

export function Navigation() {
  return (
    <header className="border-b border-black/10 bg-[#f7f7f4]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-5 py-5 sm:px-8">
        <Link
          className="flex items-center gap-2 text-xl font-bold tracking-tight"
          href="/"
        >
          <Image
            src="/icon.svg"
            alt="CourseSpace icon"
            width={28}
            height={28}
          />
          CourseSpace
        </Link>
        <ActiveNavigation />
      </div>
    </header>
  );
}
