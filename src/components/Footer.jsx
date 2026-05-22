import { useEffect, useRef } from 'react';
import { 
  

  
 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const Footer = () => {
  const footerRef = useRef(null);

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Citizenship Programs", href: "https://www.xiphiasimmigration.com/citizenship" },
    { name: "Investment Options", href: "https://www.xiphiasimmigration.com/citizenship" },
    { name: "Family Inclusion", href: "https://www.xiphiasimmigration.com/citizenship" },
    { name: "FAQ", href: "https://www.xiphiasimmigration.com/citizenship" }
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Compliance", href: "#" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hello@xiphiasimmigration.com", href: "mailto:hello@xiphiasimmigration.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+1 (888) 123-4567", href: "tel:+18881234567" },
    { icon: <MapPin className="w-4 h-4" />, text: "Dubai, UAE | London, UK", href: "#" }
  ];

  const socialLinks = [
    

    
  ];

  return (
    <footer ref={footerRef} className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-8 h-8 text-yellow-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Xiphias
              </span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              First-class advisory for second citizenship. Concierge guidance across donation and real-estate routes with transparent costs and rigorous compliance.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 hover:text-slate-900 group"
                  aria-label={social.name}
                >
                  <span className="text-gray-300 group-hover:text-slate-900 transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 rounded-full"></span>
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center gap-3 group"
                  >
                    <span className="text-yellow-400 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Badges Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 relative inline-block">
              Stay Updated
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-400 rounded-full"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-3">
              Get the latest citizenship insights delivered to your inbox.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mt-4">
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-300">Licensed</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-300">KYC/AML</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2">
                <Clock className="w-4 h-4 text-yellow-400" />
                <span className="text-xs text-gray-300">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Xiphias Immigration. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-xs"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          
          {/* Disclaimer */}
          <p className="text-gray-500 text-xs text-center mt-6">
            Disclaimer: This information is for general informational purposes only. 
            Citizenship programs are subject to change. Please consult with our licensed advisors for current requirements.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;