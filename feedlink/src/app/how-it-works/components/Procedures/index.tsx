import Image from 'next/image';

export default function Procedures() {
  return (
    <div className="bg-white">
      <header className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--primary-color)] mb-4">
          How <span className="text-[var(--secondary-color)]">FeedLink</span> Works
        </h1>
        <p className="text-xl text-black max-w-3xl mx-auto leading-relaxed">
          Our intelligent system creates seamless connections between food waste producers, recipients, and recyclers through a comprehensive 5-step process.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
            1
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Inventory Import</h2>
            <p className="text-black">
              Food generators upload inventory data (Excel/CSV) from POS/IMS systems. Auto-categorization into 'Available for sale' vs 'Waste for recycling' with smart discount rules.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Upload once daily/weekly</li>
              <li>Auto-parsing and categorization</li>
              <li>Accurate product information</li>
            </ul>
          </div>
          <div className="flex-shrink-0 ml-6">
            <Image
              src="/images/inventory.png"
              alt="Inventory Management Dashboard"
              width={300}
              height={180}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse gap-8 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
            2
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Waste Claim Portal</h2>
            <p className="text-black">
              Recyclers (composters, animal feed processors, biogas companies) claim unsold expired food, keeping waste out of landfills while creating value.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Mark expired/unsellable items</li>
              <li>Notify registered recyclers</li>
              <li>First-come first-served claiming</li>
              <li>Scheduled pickup slots</li>
            </ul>
          </div>
          <div className="flex-shrink-0 flex display-flex-col ml-10 md:flex-row gap-3">
            <Image
              src="/images/waste.png"
              alt="Waste Claim App"
              width={140}
              height={240}
            />
            <Image
              src="/images/wasteclaim.png"
              alt="Waste Claim App"
              width={140}
              height={240}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
            3
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Location-Based Matching</h2>
            <p className="text-black">
              Smart geographic filtering shows relevant items based on user location, reducing logistics costs and encouraging local consumption.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Recycler location registration</li>
              <li>Nearby discounted product discovery</li>
              <li>Local consumption priority</li>
            </ul>
          </div>
          <div className="flex-shrink-0 flex display-flex-col ml-10 md:flex-row gap-3">
            <Image
              src="/images/waste.png"
              alt="Location Matching App - Screen 1"
              width={140}
              height={240}
            />
            <Image
              src="/images/buyers.png"
              alt="Location Matching App - Screen 2"
              width={140}
              height={240}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row-reverse gap-8 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
            4
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Dashboards & Tracking</h2>
            <p className="text-black">
              Comprehensive analytics showing supplier sales, waste pickup volumes, savings, and revenue recovery with complete transparency.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Waste pickup volume monitoring</li>
              <li>Buyer purchase history</li>
              <li>Performance and trust metrics</li>
            </ul>
          </div>
          <div className="flex-shrink-0 ml-7">
            <Image
              src="/images/analytics.png"
              alt="Dashboards & Tracking"
              width={300}
              height={180}
            />
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--primary-color)] flex items-center justify-center text-white text-xl font-bold">
            5
          </div>
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold text-[var(--primary-color)]">Automated Alerts</h2>
            <p className="text-black">
              Smart notifications alert consumers about nearby discounts, recyclers about available waste, and producers about expiring inventory.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-black">
              <li>Recycler waste availability notifications</li>
              <li>Real-time inventory updates</li>
            </ul>
          </div>
          <div className="flex-shrink-0 flex display-flex-col ml-10 md:flex-row gap-3">
            <Image
              src="/images/notify.png"
              alt="Automated Alerts App"
              width={140}
              height={240}
            />
            <Image
              src="/images/notification.png"
              alt="Automated Alerts App"
              width={140}
              height={240}
            />
          </div>
        </section>
      </main>
    </div>
  );
}