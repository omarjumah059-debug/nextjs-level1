export function PricingCard({
  name,
  price,
  text,
}: {
  name: string;
  price: string;
  text: string;
}) {
  return (
    <article className="rounded-2xl bg-white p-7">
      <p className="text-sm font-semibold text-[#245b3f]">{name}</p>
      <h2 className="mt-4 text-4xl font-bold">
        {price}
        <span className="text-base font-normal text-[#6c746c]"> / month</span>
      </h2>
      <p className="my-5 text-[#526053]">{text}</p>
      <button className="w-full rounded-xl border border-[#245b3f] py-3 font-semibold text-[#245b3f]">
        Choose plan
      </button>
    </article>
  );
}
