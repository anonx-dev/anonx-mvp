import Icon from "@/components/ui/Icon";
import AnonxLogo from "@/components/ui/AnonxLogo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white/90 backdrop-blur-xl border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center hover:opacity-80 transition-opacity" id="nav-logo">
          <AnonxLogo size="md" color="dark" showText={true} hideTagline={false} />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest" id="nav-features">Features</a>
          <a href="#solution" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest" id="nav-solution">Platform</a>
          <a href="#pricing" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest" id="nav-pricing">Pricing</a>
          <a href="#customers" className="text-xs font-bold text-navy-600 hover:text-navy-950 transition-colors uppercase tracking-widest" id="nav-customers">Customers</a>
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#demo" className="text-xs font-bold text-navy-950 hover:text-brand-orange transition-colors uppercase tracking-widest" id="nav-demo">Watch Demo</a>
          <a href="#contact" className="bg-navy-950 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-brand-orange transition-colors shadow-md transform hover:-translate-y-0.5" id="nav-cta">
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-navy-900 p-2" aria-label="Menu">
          <Icon name="lucide:menu" className="text-xl" />
        </button>
      </div>
    </nav>
  );
}
