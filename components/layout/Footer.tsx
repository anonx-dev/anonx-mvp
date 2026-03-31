import Icon from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-navy-300 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4" id="footer-logo">
              <div className="w-9 h-9 bg-brand-orange rounded-xl flex items-center justify-center">
                <Icon name="lucide:graduation-cap" className="text-white text-xl" />
              </div>
              <span className="font-cabinet font-extrabold text-2xl tracking-tight text-white">Edvance.</span>
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6 font-medium">
              Empowering educators with world-class technology to sell courses, protect content, and grow online academies.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange transition-all" id="social-twitter">
                <Icon name="mdi:twitter" className="text-lg" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange transition-all" id="social-youtube">
                <Icon name="mdi:youtube" className="text-lg" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange transition-all" id="social-linkedin">
                <Icon name="mdi:linkedin" className="text-lg" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-4 tracking-widest uppercase text-[10px]">Product</h4>
            <ul className="space-y-3 font-bold text-sm">
              <li><a href="#features" className="hover:text-brand-orange transition-colors" id="footer-features">Features</a></li>
              <li><a href="#pricing" className="hover:text-brand-orange transition-colors" id="footer-pricing">Pricing</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-showcase">Showcase</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-4 tracking-widest uppercase text-[10px]">Company</h4>
            <ul className="space-y-3 font-bold text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-about">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors" id="footer-contact">Contact</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-blog">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-extrabold mb-4 tracking-widest uppercase text-[10px]">Legal</h4>
            <ul className="space-y-3 font-bold text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-terms">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-privacy">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors" id="footer-refund">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-medium text-navy-500 text-xs">© 2024 Edvance Technologies. All rights reserved.</p>
          <p className="font-medium text-navy-500 text-xs flex items-center gap-1.5">
            Made with <Icon name="lucide:zap" className="text-brand-orange" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
