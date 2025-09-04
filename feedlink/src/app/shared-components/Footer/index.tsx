'use client'
import React from "react";
import Image from "next/image";
const Footer = () => {
return (
<footer className="bg-[var(--primary-color)]   px-4 sm:px-6 lg:px-8 py-10 text-white">
<div className="max-w-full mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10 md:gap-12">

<div className="md:w-1/3 flex-shrink-0">
<div className="flex items-center mb-4 space-x-2 ml-">
<Image src="/images/Logo.svg" alt="Logo"  width={0}
          height={0
          }
 className="h-8 w-auto md:h-10" />
<span className="text-[var(--secondary-color)]   font-semibold text-2xl md:text-3xl lg:text-4xl">
FEEDLINK
</span>
</div>
<p className="mb-4 leading-relaxed text-sm md:text-base lg:text-lg max-w-sm">
Transforming food waste into impact through intelligent connections
between producers, consumers, and recyclers.
</p>
<p className="text-xs md:text-sm lg:text-base leading-snug max-w-sm">
Building a sustainable food ecosystem for everyone.
</p>
</div>


<div className="flex flex-col md:flex-row justify-between md:w-2/3 text-sm md:text-base lg:text-lg font-medium gap-8 md:gap-12">
<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
Platform
</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]  ">How it works</p>
</div>

<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3">
For Users
</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Food Producers</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Consumers</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Recyclers</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Explore</p>
</div>

<div>
<p className="font-bold text-lg md:text-xl lg:text-2xl mb-3 mr-5">
Company
</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">About Us</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Impacts</p>
<p className="cursor-pointer hover:text-[var(--secondary-color)]">Contacts</p>
</div>
</div>
</div>


<hr className="border-[var(--secondary-color)] my-8 mx-2 md:mx-6" />
<p className="text-center text-xs md:text-sm lg:text-lg px-2 md:px-6">&copy; 2025 FeedLink. All rights reserved.
</p>
</footer>
);
};

export default Footer;
	


	