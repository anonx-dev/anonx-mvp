import Icon from "@/components/ui/Icon";

export default function Hero() {
  return (
    <section className="relative pt-8 pb-14">
      {/* ── Cool Hero Background ── */}
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-orange-50/40 z-0"></div>

      {/* Visible grid overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      ></div>

      {/* Central radial orange glow */}
      <div
        className="absolute z-0 pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 45%, transparent 70%)",
          borderRadius: "50%",
        }}
      ></div>

      {/* Top-right accent blob */}
      <div className="absolute top-[-5%] right-[-5%] w-[28vw] h-[28vw] bg-brand-orange/8 rounded-full blur-[80px] z-0 pointer-events-none"></div>

      {/* Bottom-left accent blob */}
      <div className="absolute bottom-[-5%] left-[-5%] w-[22vw] h-[22vw] bg-navy-400/6 rounded-full blur-[60px] z-0 pointer-events-none"></div>

      {/* Decorative corner dots — top left */}
      <div className="absolute top-8 left-8 grid grid-cols-4 gap-2.5 z-0 pointer-events-none opacity-20">
        {Array.from({length: 16}).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-navy-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative corner dots — bottom right */}
      <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2.5 z-0 pointer-events-none opacity-20">
        {Array.from({length: 16}).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-brand-orange rounded-full"></div>
        ))}
      </div>

      {/* Horizontal accent line */}
      <div className="absolute left-0 right-0 z-0 pointer-events-none" style={{top: "50%"}}>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-orange/20 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: Content */}
          <div className="flex flex-col items-start text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold mb-6">
              <span className="inline-flex rounded-full h-1.5 w-1.5 bg-brand-orange"></span>
              Sell Courses, Keep Control
            </div>

            {/* Headline matching from screenshot */}
            <h1 className="font-cabinet text-4xl sm:text-5xl lg:text-[56px] leading-[1.08] font-extrabold text-navy-950 tracking-tight mb-5">
              Get Your Own<br />
              <span className="text-brand-orange">Course Platform</span><br />
              at Unbeatable Prices.
            </h1>

            {/* Sub-text matching screenshot */}
            <p className="text-base text-navy-600 mb-8 max-w-sm font-medium leading-relaxed">
              Launch your own course platform without coding. Manage students, deliver secure content, process payments—all in one place at prices competitors can't match.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mb-8">
              <a href="#pricing" className="group w-full sm:w-auto bg-brand-orange text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-navy-950 transition-all shadow-float flex items-center justify-center gap-2" id="hero-cta-primary">
                Start Free Trial
                <Icon name="lucide:arrow-right" className="text-base" />
              </a>
              <a href="#demo" className="group w-full sm:w-auto bg-white border border-gray-200 text-navy-900 text-sm font-bold px-7 py-3.5 rounded-full hover:bg-gray-50 transition-all shadow-sm flex items-center justify-center gap-2" id="hero-cta-secondary">
                <Icon name="lucide:play-circle" className="text-base text-navy-400" />
                Watch Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-navy-200 border-2 border-white flex items-center justify-center text-navy-700 text-xs font-bold">R</div>
                <div className="w-8 h-8 rounded-full bg-orange-200 border-2 border-white flex items-center justify-center text-orange-700 text-xs font-bold">P</div>
                <div className="w-8 h-8 rounded-full bg-indigo-200 border-2 border-white flex items-center justify-center text-indigo-700 text-xs font-bold">A</div>
              </div>
              <p className="text-xs text-navy-500 font-semibold">
                Joined by <span className="text-navy-800 font-bold">2,000+</span> top educators
              </p>
            </div>
          </div>

          {/* Right: Mobile Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative bg-white rounded-[36px] shadow-heavy border-[8px] border-navy-950 overflow-hidden w-full max-w-[280px] transition-transform hover:-translate-y-2 duration-500 ease-out">
              {/* Dynamic Island */}
              <div className="absolute top-0 inset-x-0 h-5 flex justify-center z-20">
                <div className="w-20 h-5 bg-navy-950 rounded-b-[12px] relative">
                  <div className="absolute top-1.5 right-3 w-1 h-1 bg-emerald-500 rounded-full"></div>
                </div>
              </div>

              {/* App Header */}
              <div className="bg-navy-900 pt-9 pb-5 px-5 relative overflow-hidden">
                <div className="absolute top-[-20px] right-[-20px] w-24 h-24 bg-brand-orange/30 rounded-full blur-2xl"></div>
                <div className="flex justify-between items-center mb-4 relative z-10">
                  <div>
                    <p className="text-white/50 text-[9px] font-bold uppercase tracking-widest mb-0.5">Welcome back,</p>
                    <p className="text-white font-cabinet font-bold text-lg leading-tight">Rahul Academy</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                    <Icon name="lucide:bell" className="text-base" />
                  </div>
                </div>

                {/* Revenue Stats Card */}
                <div className="bg-white rounded-xl p-4 shadow-lg relative z-10">
                  <p className="text-gray-400 text-[9px] font-bold tracking-wider uppercase mb-0.5">Total Revenue (This Month)</p>
                  <h3 className="text-2xl font-cabinet font-extrabold text-navy-950">₹1,45,000</h3>
                  <div className="flex items-center gap-1 mt-1 text-[9px] font-bold text-emerald-600">
                    <Icon name="lucide:trending-up" />
                    <span>+12.5% from last month</span>
                  </div>
                </div>
              </div>

              {/* App Body */}
              <div className="p-4 bg-gray-50 h-[290px]">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-navy-900 text-sm">Active Courses</h4>
                  <span className="text-[10px] text-brand-orange font-bold">View All</span>
                </div>

                {/* Course 1 */}
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-2.5 flex gap-3 items-center">
                  <div className="w-11 h-11 rounded-lg bg-navy-50 flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:code-2" className="text-base text-navy-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-navy-900 leading-tight mb-1">Advanced Python Masterclass</h5>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-navy-400">244 Students</span>
                      <span className="text-[10px] font-bold text-brand-orange">₹2,999</span>
                    </div>
                    <div className="w-full bg-orange-100 rounded-full h-0.5 mt-1.5">
                      <div className="bg-brand-orange h-0.5 rounded-full" style={{width:"72%"}}></div>
                    </div>
                  </div>
                </div>

                {/* Course 2 */}
                <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 mb-2.5 flex gap-3 items-center">
                  <div className="w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <Icon name="lucide:calculator" className="text-base text-indigo-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-xs font-bold text-navy-900 leading-tight mb-1">UPSC Math Optional</h5>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-semibold text-navy-400">1,120 Students</span>
                      <span className="text-[10px] font-bold text-brand-orange">₹5,499</span>
                    </div>
                    <div className="w-full bg-indigo-100 rounded-full h-0.5 mt-1.5">
                      <div className="bg-indigo-500 h-0.5 rounded-full" style={{width:"90%"}}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 inset-x-0 h-14 bg-white border-t border-gray-100 flex justify-around items-center px-5 pb-2 z-20">
                <div className="flex flex-col items-center gap-0.5 text-brand-orange">
                  <Icon name="lucide:layout-dashboard" className="text-lg" />
                  <span className="text-[8px] font-bold">Home</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-gray-300">
                  <Icon name="lucide:book-open" className="text-lg" />
                  <span className="text-[8px] font-bold text-gray-300">Courses</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-gray-300">
                  <Icon name="lucide:users" className="text-lg" />
                  <span className="text-[8px] font-bold text-gray-300">Students</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 text-gray-300">
                  <Icon name="lucide:settings" className="text-lg" />
                  <span className="text-[8px] font-bold text-gray-300">Settings</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
