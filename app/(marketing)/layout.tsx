import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-5 py-10 sm:px-8">
        {children}
      </main>
      <Footer />
    </>
  );
}
