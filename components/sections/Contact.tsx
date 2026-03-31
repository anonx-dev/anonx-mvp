import Icon from "@/components/ui/Icon";

export default function Contact() {
  const whatsappNumber = "916202784603";
  const whatsappMessage = encodeURIComponent(
    "Hi Anonx, I want to know more about your course platform. Please share details."
  );

  return (
    <section className="relative py-16 bg-white" id="contact">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-16">

        {/* CTA Card */}
        <div className="bg-orange-50 rounded-3xl px-10 py-14 text-center border border-orange-100">

          <h2 className="font-cabinet text-3xl md:text-4xl font-extrabold text-navy-950 mb-4 leading-tight">
            Ready to launch your academy?
          </h2>

          <p className="text-sm text-navy-500 font-medium leading-relaxed mb-8 max-w-md mx-auto">
            Stop losing revenue to{" "}
            <span className="text-red-500 font-semibold">piracy</span> and save{" "}
            <span className="text-blue-500 font-semibold">hours of manual work</span>. Get a demo of how your{" "}
            <span className="text-brand-orange font-semibold">branded app</span> will look today.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#1ebe5d] transition-colors shadow-sm mb-4"
            id="cta-whatsapp"
          >
            <Icon name="mdi:whatsapp" className="text-xl" />
            Chat on WhatsApp
          </a>

          <p className="text-[11px] text-navy-400 font-medium">
            Average response time: 10 minutes
          </p>

        </div>
      </div>
    </section>
  );
}
