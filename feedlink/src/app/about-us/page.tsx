'use client';

import { FaRegHeart } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { RiEarthFill } from 'react-icons/ri';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 w-full">
      <header className="bg-green-50 py-16 px-6 md:px-24 lg:px-32">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--secondary-color)] mb-6 text-center">
          About FeedLink
        </h1>
        <p className="text-2xl text-center text-black max-w-4xl mx-auto leading-relaxed">
          We’re revolutionizing food waste reduction by creating intelligent connections between food producers, conscious consumers, and recycling facilities.
        </p>
      </header>
      <section className="py-20 px-6 md:px-24 lg:px-32 bg-white">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--secondary-color)] mb-8">Our Mission</h2>
          <p className="text-black text-lg leading-relaxed mb-12">
            Every year, billions of pounds of perfectly good food goes to waste while millions face food insecurity. 
            We believe technology can bridge this gap by creating a sustainable ecosystem where surplus food finds its way to those willing to buy at a lower price. 
            FeedLink transforms food waste into impact through intelligent matching and real-time inventory management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
            <div className="bg-green-50 p-6 rounded-lg shadow-sm ">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">Reduce Waste</h3>
              <p className="text-black">Cut food waste by 80% through intelligent distribution</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-sm ">
              <h3 className="text-xl font-bold text-[var(--secondary-color)] mb-2">Feed Communities</h3>
              <p className="text-black">Connect surplus food with those who need it most</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 md:px-24 lg:px-32 bg-gray-50">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-16">Our Values</h2>

          <div className="lg:grid grid-cols-1 md:grid-cols-3  gap-10">
            <div className="bg-white  p-8 rounded-xl shadow-md border border-gray-200 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <RiEarthFill size={64} className="text-[var(--primary-color)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-2">Sustainability</h3>
              <p className="text-black md:text-xl lg:text-[16px]">
                We're committed to creating a circular food economy that benefits both people and the planet through responsible resource management.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <FaRegHeart size={64} className="text-[var(--primary-color)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-2">Community</h3>
              <p className="text-black md:text-xl lg:text-[16px]">
                We believe in the power of connected communities working together to solve complex challenges through collaboration and shared purpose.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 text-center transition-transform hover:scale-105">
              <div className="flex justify-center mb-4">
                <FiUsers size={64} className="text-[var(--primary-color)]" />
              </div>
              <h3 className="text-2xl font-semibold text-[var(--secondary-color)] mb-2">Impact</h3>
              <p className="text-black md:text-xl lg:text-[16px]">
                Every connection made through our platform creates measurable positive impact for communities, businesses, and the environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-24 lg:px-32 bg-white">
        <div className="max-w-screen-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-12">
            The Story Behind <span className="text-[var(--secondary-color)]">FeedLink</span>
          </h2>
          <p className="text-black leading-relaxed text-xl max-w-5xl mx-auto">
         FeedLink is inspired by a straightforward yet profound observation where restaurants, grocery stores, and food producers are
          discarding perfectly good food. 
          Our team, with background in technology and social impact, recognized that this issue was not merely logistical but fundamentally about connection.
Today, FeedLink bridges the gap by connecting hundreds of food producers with thousands of community organizations. This innovative network has successfully
 diverted countless pounds of food from landfills, transforming potential waste into valuable resources for those in need.
          </p>
        </div>
      </section>
    </div>
  );
}