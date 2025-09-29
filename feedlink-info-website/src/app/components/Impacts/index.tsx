"use client";

import { useState } from "react";

const impactStats = [
  {
    number: "100,000",
    label: "Meals Rescued",
    desc: "From surplus food that would have been wasted",
  },
  {
    number: "1M",
    label: "Kg Diverted",
    desc: "Food waste kept out of landfills",
  },
  {
    number: "10,000 Kg",
    label: (
      <>
        Kg CO<sub>2</sub> Saved
      </>
    ),
    desc: "Food waste kept out of landfills",
  },
  {
    number: "50%",
    label: "Cost Reduction",
    desc: "Average waste management cost savings",
  },
  {
    number: "100+",
    label: "Active Partners",
    desc: "Supermarkets, restaurants, and recyclers",
  },
  {
    number: "10K",
    label: "Beneficiaries",
    desc: "People accessing affordable food daily",
  },
];

export default function ImpactSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="impacts" className="bg-white py-14 px-2 sm:px-4 md:px-10 lg:px-28">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-3 leading-tight">
          <span className="text-green-800">Our </span>
          <span className="text-orange-500">Impact</span>
        </h2>
        <p className="text-center text-lg text-gray-700 mb-10 max-w-4xl mx-auto">
          Real numbers, real impact. See how our platform is transforming food waste into social and environmental value across communities.
        </p>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-6">
          {impactStats.slice(0, 3).map((stat, i) => (
            <div
              key={i}
              tabIndex={0}
              className={`bg-[#F2F6ED] p-8 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-200 hover:scale-105 cursor-pointer outline-none ${
                activeIndex === i ? "shadow-2xl" : ""
              }`}
              onClick={() => setActiveIndex(i)}
              onBlur={() => setActiveIndex(null)}
            >
              <div className="text-orange-500 text-4xl font-bold mb-1 leading-none">
                {stat.number}
              </div>
              <div className="text-green-900 font-semibold mb-1 text-lg leading-none">
                {stat.label}
              </div>
              <div className="text-green-900 text-[16px] font-medium mt-1">{stat.desc}</div> {}
            </div>
          ))}
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mb-6">
          {impactStats.slice(3, 6).map((stat, i) => (
            <div
              key={i + 3}
              tabIndex={0}
              className={`bg-[#F2F6ED] p-8 rounded-xl shadow-md border border-gray-200 text-center transition-transform duration-200 hover:scale-105 cursor-pointer outline-none ${
                activeIndex === i + 3 ? "shadow-2xl" : ""
              }`}
              onClick={() => setActiveIndex(i + 3)}
              onBlur={() => setActiveIndex(null)}
            >
              <div className="text-orange-500 text-3xl font-bold mb-1 leading-none">
                {stat.number}
              </div>
              <div className="text-green-900 font-semibold mb-1 text-lg leading-none">
                {stat.label}
              </div>
              <div className="text-green-900 text-[16px] font-medium mt-1">{stat.desc}</div> {}
            </div>
          ))}
        </div>

        {}
        <div className="bg-[#F2F6ED] border border-[#E0E7D4] rounded-lg px-6 py-6 max-w-5xl mx-auto mt-8 shadow-md border border-gray-200 text-center transition-transform duration-200 hover:scale-105 cursor-pointer outline-none">
          <div className="text-green-900 text-2xl font-bold text-center mb-4">
            Creating Values
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-9">
            <div className="flex-1 text-center">
              <span className="text-orange-500 font-semibold">Environmental</span>
              <div className="text-green-900 text-[16px] font-medium mt-1">
                Reducing methane emissions from landfills and conserving resources
              </div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-orange-500 font-semibold">Social</span>
              <div className="text-green-900 text-[16px] font-medium mt-1">
                Providing affordable nutrition and addressing food insecurity
              </div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-orange-500 font-semibold">Economic</span>
              <div className="text-green-900 text-[16px] font-medium mt-1">
                Generating revenue from waste and reducing disposal costs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}