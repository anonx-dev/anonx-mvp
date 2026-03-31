import Icon from "@/components/ui/Icon";

const starterFeatures = [
  { text: "Android App on Play Store", highlight: false },
  { text: "Web viewing portal", highlight: true },
  { text: "Up to 1,000 active students", highlight: true },
  { text: "50GB Secure Video Storage", highlight: false },
  { text: "Razorpay integration", highlight: true },
];

const proFeatures = [
  { text: "Android + iOS App (Apple Store)", highlight: false },
  { text: "Advanced Web Portal", highlight: true },
  { text: "Unlimited active students", highlight: true },
  { text: "200GB Secure Video Storage", highlight: true },
  { text: "Multiple faculty logins", highlight: true },
];

export default function Pricing() {
  return (
    <section className="relative py-16 bg-white" id="pricing">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Top subtitle */}
        <p className="text-center text-sm font-semibold text-brand-orange mb-10">
          Pay once for setup. Keep 100% of your course revenue.
        </p>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">

          {/* Card 1 — Creator Starter */}
          <div className="w-full md:w-[48%] bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-navy-950 mb-1">Creator Starter</h3>
            <p className="text-sm text-brand-orange font-semibold mb-6">Perfect for solo teachers starting out.</p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-navy-950">₹19,999</span>
              <span className="text-xs font-semibold text-brand-orange">one-time setup</span>
            </div>

            {/* Maintenance */}
            <div className="bg-blue-50 border border-blue-100 rounded-xl px-4 py-2.5 mb-6">
              <p className="text-xs font-semibold text-blue-500 text-center">
                + ₹4,999/year server maintenance
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {starterFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-2.5">
                  <Icon name="lucide:check" className="text-brand-orange text-sm shrink-0" />
                  <span className={`text-sm font-medium ${f.highlight ? "text-brand-orange" : "text-navy-700"}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="w-full block text-center border-2 border-navy-900 text-navy-900 font-bold py-3 rounded-full hover:bg-navy-50 transition-colors text-sm" id="pricing-btn-1">
              Get Started
            </a>
          </div>

          {/* Card 2 — Institute Pro */}
          <div className="w-full md:w-[48%] bg-navy-950 rounded-2xl p-8 shadow-heavy relative overflow-visible">

            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-brand-orange text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                Most Popular
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-white mb-1 mt-2">Institute Pro</h3>
            <p className="text-sm text-navy-300 font-medium mb-6">For coaching centers and established creators.</p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-extrabold text-white">₹34,999</span>
              <span className="text-xs font-semibold text-brand-orange">one-time setup</span>
            </div>

            {/* Maintenance */}
            <div className="bg-navy-800 border border-navy-700 rounded-xl px-4 py-2.5 mb-6">
              <p className="text-xs font-semibold text-navy-200 text-center">
                + ₹9,999/year server maintenance
              </p>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-2.5">
                  <Icon name="lucide:check" className="text-brand-orange text-sm shrink-0" />
                  <span className={`text-sm font-medium ${f.highlight ? "text-brand-orange" : "text-white"}`}>
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>

            <a href="#contact" className="w-full block text-center bg-brand-orange text-white font-bold py-3 rounded-full hover:bg-orange-500 transition-colors text-sm shadow-md" id="pricing-btn-2">
              Book a Call
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
