import Icon from "@/components/ui/Icon";

export default function Problems() {
  return (
    <section className="relative py-20 bg-white" id="problems">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* Centered Header */}
        <div className="text-center mb-14">
          <h2 className="font-cabinet text-3xl md:text-4xl font-extrabold text-navy-950 mb-4">
            Problems Selling Courses Today
          </h2>
          <p className="text-base text-navy-500 font-medium max-w-lg mx-auto leading-relaxed">
            Current solutions are expensive, complicated, or steal your margins. <span className="text-brand-orange font-semibold">Anonx is different</span>—affordable, professional, and built for course creators who want full control.
          </p>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">

          {/* Card 1 — WhatsApp Chaos */}
          <div className="bg-white rounded-2xl border border-gray-150 p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-red-300 bg-red-50 flex items-center justify-center mb-5">
              <Icon name="lucide:message-square-dashed" className="text-xl text-red-400" />
            </div>
            <h3 className="text-base font-extrabold text-navy-950 mb-3">WhatsApp Chaos</h3>
            <p className="text-sm text-navy-500 leading-relaxed font-medium">
              Managing hundreds of students in{" "}
              <span className="text-brand-orange font-semibold">WhatsApp groups</span>{" "}
              is messy. Important announcements{" "}
              <span className="text-brand-orange font-semibold">get lost</span>, and support becomes a{" "}
              <span className="text-brand-orange font-semibold">nightmare</span>.
            </p>
          </div>

          {/* Card 2 — Content Piracy */}
          <div className="bg-white rounded-2xl border border-gray-150 p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-orange-300 bg-orange-50 flex items-center justify-center mb-5">
              <Icon name="lucide:unlock" className="text-xl text-brand-orange" />
            </div>
            <h3 className="text-base font-extrabold text-navy-950 mb-3">Content Piracy</h3>
            <p className="text-sm text-navy-500 leading-relaxed font-medium">
              Sharing{" "}
              <span className="text-brand-orange font-semibold">Google Drive</span> or{" "}
              <span className="text-brand-orange font-semibold">YouTube unlisted links</span>{" "}
              means anyone can forward your hard work for free. You{" "}
              <span className="text-brand-orange font-semibold">lose massive revenue</span>.
            </p>
          </div>

          {/* Card 3 — Manual Payments */}
          <div className="bg-white rounded-2xl border border-gray-150 p-7 shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-10 h-10 rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 flex items-center justify-center mb-5">
              <Icon name="lucide:receipt" className="text-xl text-blue-500" />
            </div>
            <h3 className="text-base font-extrabold text-navy-950 mb-3">Manual Payments</h3>
            <p className="text-sm text-navy-500 leading-relaxed font-medium">
              Asking for{" "}
              <span className="text-brand-orange font-semibold">UPI screenshots</span>, verifying{" "}
              <span className="text-brand-orange font-semibold">payments manually</span>, and manually adding students to groups takes{" "}
              <span className="text-brand-orange font-semibold">hours</span> of your time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
