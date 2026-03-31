import Icon from "@/components/ui/Icon";

export default function Solution() {
  return (
    <section className="relative py-12 bg-gray-50/50" id="solution">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">

          {/* Left: Text Content */}
          <div>
            {/* Big Heading */}
            <h2 className="font-cabinet text-3xl md:text-[36px] font-extrabold text-navy-950 mb-8 leading-tight">
              Everything you need in one powerful platform.
            </h2>

            {/* Feature 1 — Video */}
            <div className="mb-8">
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-orange-300 bg-orange-50 flex items-center justify-center mb-3">
                <Icon name="lucide:video" className="text-xl text-brand-orange" />
              </div>
              <h3 className="text-base font-extrabold text-navy-900 mb-2">Secure Video Hosting</h3>
              <p className="text-sm text-navy-500 font-medium leading-relaxed mb-4">
                Upload your videos once and <span className="text-navy-800 font-semibold">we handle the rest</span>. Our custom video player prevents downloading, screen recording, and unauthorized sharing completely.
              </p>
              <ul className="space-y-2">
                {[
                  "DRM-protected streaming",
                  "Dynamic watermarking with student details",
                  "Variable playback speed & quality control",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy-600">
                    <Icon name="lucide:check-circle" className="text-base text-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Feature 2 — Payments */}
            <div>
              <div className="w-10 h-10 rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center mb-3">
                <Icon name="lucide:indian-rupee" className="text-xl text-blue-500" />
              </div>
              <h3 className="text-base font-extrabold text-navy-900 mb-2">Automated Payments</h3>
              <p className="text-sm text-navy-500 font-medium leading-relaxed mb-4">
                Connect Razorpay once. Students pay, access is granted <span className="text-navy-800 font-semibold">instantly</span> — no screenshots, no manual verification needed.
              </p>
              <ul className="space-y-2">
                {[
                  "UPI, Cards, Net Banking & EMI support",
                  "Automatic access on payment confirmation",
                  "Weekly payouts directly to your bank",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy-600">
                    <Icon name="lucide:check-circle" className="text-base text-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Browser Mockup */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-card overflow-hidden">

              {/* Browser Chrome */}
              <div className="h-9 bg-gray-50 border-b border-gray-200 flex items-center px-4 gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded h-5 max-w-[160px] flex items-center justify-center mx-auto">
                  <span className="text-[9px] text-gray-500 font-semibold flex items-center gap-1">
                    <Icon name="lucide:lock" className="text-[9px]" />
                    admin.youracademy.in
                  </span>
                </div>
              </div>

              {/* App Layout */}
              <div className="flex h-[320px]">

                {/* Sidebar */}
                <div className="w-32 bg-white border-r border-gray-100 pt-4 px-3">
                  <div className="h-5 bg-gray-100 rounded mb-4 w-16"></div>
                  <nav className="space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-orange-50 text-brand-orange font-bold text-[11px]">
                      <Icon name="lucide:book-open" className="text-xs" />
                      Courses
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-navy-400 font-semibold text-[11px]">
                      <Icon name="lucide:users" className="text-xs" />
                      Students
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-navy-400 font-semibold text-[11px]">
                      <Icon name="lucide:settings" className="text-xs" />
                      Settings
                    </div>
                  </nav>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-5 bg-white overflow-hidden">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-sm font-extrabold text-navy-950">Course Content</h4>
                      <p className="text-[10px] text-brand-orange font-semibold mt-0.5">Python Masterclass</p>
                    </div>
                    <button className="bg-navy-950 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-1">
                      <Icon name="lucide:plus" className="text-xs" />
                      Add Video
                    </button>
                  </div>

                  {/* Upload dropzone */}
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center mb-3 text-center bg-gray-50/50">
                    <Icon name="lucide:upload-cloud" className="text-2xl text-brand-orange mb-1.5" />
                    <p className="text-[11px] font-bold text-brand-orange">Drag &amp; drop video files</p>
                    <p className="text-[9px] text-gray-400 font-medium mt-0.5">Up to 5GB per file</p>
                  </div>

                  {/* File listed */}
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2 border border-gray-100">
                    <div className="flex items-center gap-2">
                      <Icon name="lucide:film" className="text-xs text-navy-400" />
                      <span className="text-[10px] font-semibold text-navy-700">01 - Introduction to Python.mp4</span>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Encrypted
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
