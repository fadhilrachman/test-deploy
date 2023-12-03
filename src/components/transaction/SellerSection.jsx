"use client";

import SellerList from "./SellerList";

export default function SellerSection() {
  const data = [
    { label: "approved", value: "8" },
    { label: "rejected", value: "8" },
    { label: "pending", value: "8" },
  ];
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-3 gap-x-6">
        {data.map((res, i) => (
          <div
            className="h-44 p-4 rounded-xl border border-zinc-200 relative flex justify-center items-center"
            key={i}
          >
            <p className="absolute top-0 left-0 p-4 text-neutral-400 text-base font-bold uppercase">
              {res.label}
            </p>
            <p className="text-4xl font-bold text-main font-seccondary">
              {res.value}
            </p>
          </div>
        ))}
      </div>
      <SellerList />
    </section>
  );
}
