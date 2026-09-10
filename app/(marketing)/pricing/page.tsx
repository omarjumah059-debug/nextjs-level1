import { PricingCard } from "@/components/pricing-card";

const plans = [
  { name: "Starter", price: "$0", text: "Explore the catalog" },
  { name: "Learner", price: "$12", text: "Follow one learning path" },
  { name: "Builder", price: "$24", text: "Unlock every course" },
];

export default function PricingPage() {
  return (
    <section className="space-y-8">
      <div>
        <p className="font-semibold text-[#245b3f]">Simple pricing</p>
        <h1 className="text-4xl font-bold">Pick a learning pace</h1>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {plans.map((plan) => (
          <PricingCard key={plan.name} {...plan} />
        ))}
      </div>
    </section>
  );
}
