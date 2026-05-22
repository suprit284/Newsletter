import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Shield, 
  Building2, 
  CheckCircle, 
  Users, 
  FileCheck, 
  Briefcase,
  Clock,
  Globe,
  Award,
  HeartHandshake
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyXiphias = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const features = [
    {
      icon: <Shield className="w-6 h-6 text-amber-500" />,
      title: "Dedicated Due-Diligence Desk",
      description: "Rigorous KYC/AML workflows and source-of-funds guidance"
    },
    {
      icon: <FileCheck className="w-6 h-6 text-amber-500" />,
      title: "Government-Approved Vetting",
      description: "Project vetting and compliance with official regulations"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-amber-500" />,
      title: "End-to-End Execution",
      description: "Strategy, documentation, submission, oath & passports"
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-amber-500" />,
      title: "Confidential Family Concierge",
      description: "White-glove service for families with discreet handling"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-500" />,
      title: "Fast-Track Processing",
      description: "Expedited routes and efficient timeline management"
    },
    {
      icon: <Globe className="w-6 h-6 text-amber-500" />,
      title: "Global Network",
      description: "Licensed local agents across multiple jurisdictions"
    }
  ];

  useEffect(() => {
    // Section title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 40 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Left column animation (fade in from left)
    gsap.fromTo(leftColumnRef.current,
      { opacity: 0, x: -40 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Right column animation (fade in from right)
    gsap.fromTo(rightColumnRef.current,
      { opacity: 0, x: 40 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.8,
        delay: 0.2,
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      
      {/* Section Header */}
      <div ref={titleRef} className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
          <Award className="w-4 h-4 text-amber-600" />
          <span className="text-amber-700 font-semibold text-sm">Why Choose Us</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Why Xiphias
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          A private-client approach to second citizenship: transparent costs, 
          rigorous compliance, and execution without friction.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Column - Features List */}
        <div ref={leftColumnRef} className="space-y-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 group"
            >
              {/* Icon container */}
              <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-lg flex items-center justify-center group-hover:bg-amber-100 transition-colors duration-300">
                {feature.icon}
              </div>
              
              {/* Text content */}
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Licensed Local Agents</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Transparent Fee Schedule</span>
            </div>
            <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">KYC/AML Workflows</span>
            </div>
          </div>
        </div>

        {/* Right Column - Professional Illustration */}
        <div ref={rightColumnRef} className="relative">
          {/* Main card */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-8 shadow-xl relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl"></div>
            
            {/* Illustration content */}
            <div className="relative z-10">
              {/* Icon row */}
              <div className="flex justify-center gap-6 mb-8">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Building2 className="w-8 h-8 text-yellow-400" />
                </div>
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-8 h-8 text-yellow-400" />
                </div>
              </div>
              
              {/* Quote or testimonial */}
              <div className="text-center mb-6">
                <p className="text-white/80 italic text-lg">
                  "Flawless execution from due diligence to passport delivery."
                </p>
                <p className="text-yellow-400 font-semibold mt-3">
                  — Family Office, Dubai
                </p>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center border-r border-white/10">
                  <p className="text-2xl font-bold text-white">50+</p>
                  <p className="text-white/60 text-sm">Countries Served</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-white/60 text-sm">Success Rate</p>
                </div>
              </div>
              
              {/* CTA within illustration */}
              <div className="mt-8 flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-semibold py-3 rounded-lg text-sm hover:shadow-lg transition-all duration-300">
                  Speak to an Advisor
                </button>
                <button className="flex-1 border border-white/30 text-white font-semibold py-3 rounded-lg text-sm hover:bg-white/10 transition-all duration-300">
                  Download Checklist
                </button>
              </div>
              <p className="text-white/40 text-xs text-center mt-3">
                No obligation · Response within 24 hours
              </p>
            </div>
          </div>
          
          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg px-4 py-2 hidden lg:flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-slate-700">Trusted Partner</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyXiphias;