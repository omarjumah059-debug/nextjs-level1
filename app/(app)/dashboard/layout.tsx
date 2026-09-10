import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#eff4ef]">
      <header className="border-b border-black/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link className="font-bold" href="/">
            CourseSpace
          </Link>
          <nav className="flex gap-4 text-sm font-semibold">
            <Link href="/dashboard">Overview</Link>
            <Link href="/dashboard/profile">Profile</Link>
            <Link href="/dashboard/settings">Settings</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-10">{children}</main>
    </div>
  );
}
