import React from "react";

const Features = () => {
  return (
    <div>
      <div className="mt-20 px-7">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[var(--primary-color)] mb-4">
            Platform Features
          </h2>
          <p className="font-normal text-2xl max-w-3xl mx-auto leading-relaxed">
            Advanced technology meets social impact. Our comprehensive feature
            set ensures maximum efficiency, transparency, and value creation for
            all stakeholders.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-green-50 p-6 rounded-lg shadow-sm ">
            <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">
              Smart Inventory Management
            </h3>
            <ul className="space-y-2 text-[var(--primary-color)] text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Reduces manual data entry
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Prevents human errors
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Optimizes pricing strategies
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">
              Real-Time Waste Tracking
            </h3>
            <ul className="space-y-2 text-[var(--primary-color)] text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Zero landfill waste
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Maximizes resource recovery
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Creates circular economy
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">
              Multi-Stakeholder Platform
            </h3>
            <ul className="space-y-2 text-[var(--primary-color)] text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Seamless collaboration
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Shared value creation
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Community building
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">
              Impact Analytics
            </h3>
            <ul className="space-y-2 text-[var(--primary-color)] text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Transparency reporting
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                ROI measurement
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Sustainability credentials
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[var(--secondary-color)] mb-3">
              Automated Notifications
            </h3>
            <ul className="space-y-2 text-[var(--primary-color)] text-lg">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Prevents food spoilage
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Maximizes sales opportunities
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                Improves efficiency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
