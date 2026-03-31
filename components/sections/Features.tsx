import Icon from "@/components/ui/Icon";

export default function Features() {
  return (
    <section className="relative py-16" id="features">
      <div className="absolute inset-0 bg-navy-950 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-light opacity-5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="font-cabinet text-3xl md:text-4xl font-extrabold text-white mb-3 leading-tight">
            Everything required.<br />Nothing redundant.
          </h2>
          <p className="text-sm text-navy-400 font-medium max-w-xl mx-auto">
            A complete suite of tools to launch, manage, and scale your learning academy with zero technical overhead.
          </p>
        </div>

        {/* Row 1: 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 transition-transform hover:-translate-y-1.5 duration-300">
            <Icon name="lucide:smartphone" className="text-3xl text-brand-orange mb-4 block" />
            <h3 className="text-base font-cabinet font-bold text-white mb-2">White-label App</h3>
            <p className="text-navy-300 font-medium text-sm leading-relaxed">Your app on Play Store &amp; App Store. Your branding. We remain entirely invisible.</p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 transition-transform hover:-translate-y-1.5 duration-300">
            <Icon name="lucide:download-cloud" className="text-3xl text-brand-orange mb-4 block" />
            <h3 className="text-base font-cabinet font-bold text-white mb-2">Offline Access</h3>
            <p className="text-navy-300 font-medium text-sm leading-relaxed">Encrypted in-app downloads so students can learn without active internet connections.</p>
          </div>

          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 transition-transform hover:-translate-y-1.5 duration-300">
            <Icon name="lucide:file-question" className="text-3xl text-brand-orange mb-4 block" />
            <h3 className="text-base font-cabinet font-bold text-white mb-2">Smart Quizzes</h3>
            <p className="text-navy-300 font-medium text-sm leading-relaxed">Auto-grading MCQ tests and subjective assignment uploads within the app seamlessly.</p>
          </div>
        </div>

        {/* Row 2: 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="bg-brand-orange rounded-2xl p-8 shadow-float transition-transform hover:-translate-y-1.5 duration-300 overflow-hidden relative">
            <div className="absolute right-0 top-0 opacity-10">
              <Icon name="lucide:bar-chart-3" className="text-[140px] text-white" />
            </div>
            <div className="relative z-10">
              <Icon name="lucide:bar-chart-3" className="text-3xl text-white mb-4 block" />
              <h3 className="text-xl font-cabinet font-bold text-white mb-2">Deep Analytics</h3>
              <p className="text-orange-50 font-medium text-sm leading-relaxed">Track exact video completion rates. See where students drop off and who is watching what across devices.</p>
            </div>
          </div>

          <div className="bg-navy-800 border border-navy-700 rounded-2xl p-8 flex flex-col justify-center transition-transform hover:-translate-y-1.5 duration-300">
            <Icon name="lucide:bell-ring" className="text-3xl text-brand-orange mb-4 block" />
            <h3 className="text-xl font-cabinet font-bold text-white mb-2">Push Alerts</h3>
            <p className="text-navy-200 font-medium text-sm leading-relaxed">Bypass email spam folders. Send instant notifications directly to student phones.</p>
          </div>
        </div>

        {/* Row 3: Full-width bar */}
        <div className="w-full bg-navy-900 border border-navy-800 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 transition-transform hover:-translate-y-1.5 duration-300">
          <div className="w-16 h-16 shrink-0 bg-navy-950 rounded-xl flex items-center justify-center border-2 border-navy-800 shadow-inner">
            <Icon name="lucide:laptop" className="text-2xl text-brand-orange" />
          </div>
          <div>
            <h3 className="text-lg font-cabinet font-bold text-white mb-1.5">Desktop Web Portal Included</h3>
            <p className="text-navy-300 font-medium text-sm leading-relaxed">
              You don&apos;t just get mobile apps. Students who prefer bigger screens get a premium web-based video player synced perfectly with their mobile progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
