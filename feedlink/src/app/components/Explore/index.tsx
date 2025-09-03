
'use client';
import Link from 'next/link';

import {
  CubeIcon,
  ShoppingCartIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

export default function BuiltSection() {
  return (
    <main className=" px-4 md:px-16">
      <header className="text-center mb-12 p-6 md:p-12">
        <h1 className="text-4xl font-extrabold text-[var(--primary-color)]    ">
          Built for <span className="text-[var(--secondary-color)]  ">Everyone</span>
        </h1>
        <p className="mt-3 text-lg text-center  text-gray-700">
          A platform connecting producers, consumers, and recyclers in a
          sustainable food network.
        </p>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 md:gap-6 mb-0">
        <div className=" text-black p-1 rounded shadow hover:bg-gray-100 transition text-center -mt-[30px]">
          <CubeIcon className="w-14 h-14 max-sm:mt-7 text-[var(--primary-color)]     mb-3 mx-auto" />
          <h2 className="text-3xl font-bold mb-2 text-[var(--secondary-color)]  ">Producers</h2>
          <p>
            Transform surplus inventory into revenue while reducing waste
            disposal costs and enhancing sustainability and credentials.
          </p>
        </div>

        <div className=" text-black p-1 rounded shadow hover:bg-gray-100 transition text-center -mt-[30px] max-sm:mt-10 ">
          <ShoppingCartIcon className="w-14 h-14 text-[var(--primary-color)]    mb-3 mx-auto" />
          <h2 className="text-3xl font-bold mb-2 text-[var(--secondary-color)]  ">Consumers</h2>
          <p>
            Access fresh, quality food at discounted prices while contributing
            to environmental sustainability and social impact.
          </p>
        </div>

        <div className="bg-white max-sm:mt-10 text-black p-1 rounded shadow hover:bg-gray-100 transition text-center -mt-[30px]">
          <ArrowPathIcon className="w-14 h-14 text-[var(--primary-color)]     mb-3 mx-auto" />
          <h2 className="text-3xl font-bold mb-2 text-[var(--secondary-color)]  ">Recyclers</h2>
          <p>
            Access consistent waste streams for conversion into valuable
            products like compost, animal feed, and renewable energy.
          </p>
        </div>
      </section>

      <section className="bg-[var(--primary-color)]     p-9 rounded shadow text-center mt-10 text-white">
        <h3 className="text-2xl font-bold mb-2 text-[var(--secondary-color)]   ">
          Ready to Join our Impact Network?
        </h3>
        <p className="mb-4">
          Whether you're producing, consuming, or recycling food, our platform
          has solutions tailored to your needs and goals.
        </p>
        <Link href="/join">
          <button className="bg-white text-[var(--primary-color)] px-18 py-2 font-bold rounded-xl hover:bg-[var(--secondary-color)] hover:text-white transition cursor-pointer text-2xl">
            Join Us
          </button>
        </Link>

      </section>
    </main>
  );
}