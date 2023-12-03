import TittleCustom from "../shared/TittleCustom";

export default function WhatIs() {
  return (
    <section className="px-6  flex-col  py-6 space-y-6 md:space-y-0 md:flex-row md:px-[120px] md:py-[72px] flex justify-between items-center">
      <div className="md:w-[50%] space-y-6">
        <TittleCustom
          title="WHAT IS A ESCROW?"
          subTitle="Escrow is often used by transaction participants to add more comfort in their deals."
          className=""
        />
        <p className="text-neutral-700 text-sm md:text-base">
          They are assured that an independent contractual intermediary can help
          mitigate disputes that can potentially arise in a complex transaction,
          particularly with multiple settlement requirements and milestones.
        </p>
        <p className="text-neutral-700 text-sm md:text-base">
          ESCROW SG helps to reduce the risk of a transaction failing between
          parties.
        </p>
      </div>
      <div className="">
        <img src="/img/whatisImage.svg" alt="" />
      </div>
    </section>
  );
}
