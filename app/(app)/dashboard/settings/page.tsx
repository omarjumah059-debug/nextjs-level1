import { PublicConfig } from "@/components/public-config";

export default function SettingsPage() {
  return (
    <section className="space-y-5 rounded-2xl bg-white p-7">
      <h1 className="text-3xl font-bold">Settings</h1>
      <PublicConfig />
    </section>
  );
}
