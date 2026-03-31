import Icon from "@/components/ui/Icon";
import AnonxLogo from "@/components/ui/AnonxLogo";

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-navy-300 py-16 lg:py-20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        
        {/* Grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,102,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section - Enhanced */}
          <div className="col-span-1 lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group" id="footer-logo">
              <div className="relative">
                <AnonxLogo size="lg" color="light" showText={false} />
              </div>
              <div className="flex flex-col">
                <span className="font-cabinet font-extrabold text-2xl tracking-tight text-white block">Anonx</span>
                <span className="text-xs font-bold bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent">Apps for Educators</span>
              </div>
            </a>
            
            <p className="text-sm leading-relaxed text-navy-300 mb-8 max-w-sm font-medium">
              White-label course creation platform for entrepreneurs, instructors, and academy owners. Sell your courses, keep full control, and scale your online business affordably.
            </p>

            {/* Newsletter Subscription */}
            <div className="mb-8">
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-3">Stay Updated</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 text-sm bg-navy-900 border border-navy-800 rounded-lg px-4 py-2.5 text-white placeholder-navy-500 focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange/30 transition-all"
                />
                <button className="bg-brand-orange hover:bg-orange-500 text-white font-bold px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
                  <Icon name="lucide:send" className="text-base" />
                </button>
              </div>
            </div>

            {/* Social Links - Enhanced */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group" id="social-twitter">
                <Icon name="mdi:twitter" className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group" id="social-youtube">
                <Icon name="mdi:youtube" className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group" id="social-linkedin">
                <Icon name="mdi:linkedin" className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-navy-900 border border-navy-800 flex items-center justify-center text-navy-400 hover:text-white hover:bg-brand-orange hover:border-brand-orange transition-all duration-300 group" id="social-instagram">
                <Icon name="mdi:instagram" className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-features">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-showcase">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-updates">
                  What's New
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-contact">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-blog">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-careers">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-extrabold mb-6 tracking-widest uppercase text-xs">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-terms">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-refund">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors duration-300 text-sm font-semibold" id="footer-cookies">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <p className="font-semibold text-navy-400 text-xs">© 2024 Anonx. All rights reserved.</p>
            <div className="hidden sm:block w-px h-4 bg-navy-800"></div>
            <p className="font-semibold text-navy-400 text-xs">Made with <span className="text-brand-orange inline-flex items-center">❤️</span> for educators</p>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-xs text-navy-500 font-medium">Available on</span>
            <div className="flex gap-3">
              <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors" title="Apple App Store">
                <Icon name="mdi:apple" className="text-lg" />
              </a>
              <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors" title="Google Play Store">
                <Icon name="mdi:google-play" className="text-lg" />
              </a>
              <a href="#" className="text-navy-400 hover:text-brand-orange transition-colors" title="Web App">
                <Icon name="mdi:web" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
