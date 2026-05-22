import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Building2, 
  Globe, 
  Users, 
  Baby, 
  Heart, 
  TrendingUp,
  MapPin,
  DollarSign,
  Shield
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CountryCards = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const countries = [
    {
      name: "St. Kitts & Nevis",
      flag: "🇰🇳",
      investmentType: "Donation",
      investmentAmount: "$250,000",
      familyInclusion: ["Spouse", "Children under 30", "Parents"],
      visaFree: "157",
      processingTime: "3-6 months",
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      gradient: "from-emerald-600 to-teal-700"
    },
    {
      name: "Portugal",
      flag: "🇵🇹",
      investmentType: "Real Estate / Fund",
      investmentAmount: "€500,000",
      familyInclusion: ["Spouse", "Children under 18", "Parents"],
      visaFree: "189",
      processingTime: "12-18 months",
      icon: <Building2 className="w-8 h-8 text-yellow-400" />,
      gradient: "from-red-600 to-red-800"
    },
    {
      name: "Vanuatu",
      flag: "🇻🇺",
      investmentType: "Donation",
      investmentAmount: "$130,000",
      familyInclusion: ["Spouse", "Children under 25", "Parents"],
      visaFree: "100",
      processingTime: "1-2 months",
      icon: <Globe className="w-8 h-8 text-yellow-400" />,
      gradient: "from-green-600 to-emerald-700"
    },
    {
      name: "Malta",
      flag: "🇲🇹",
      investmentType: "Donation + Real Estate",
      investmentAmount: "€600,000",
      familyInclusion: ["Spouse", "Children under 30", "Parents", "Grandparents"],
      visaFree: "186",
      processingTime: "12-18 months",
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      gradient: "from-blue-600 to-indigo-700"
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

    // Card animations - each card fades in with stagger
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(card,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-gradient-to-b from-amber-50/40 to-gray-50">
      
      {/* Section Header */}
      <div ref={titleRef} className="text-center mb-12 md:mb-16">
        <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
          <TrendingUp className="w-4 h-4 text-amber-600" />
          <span className="text-amber-700 font-semibold text-sm">Investment Programs</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
          Snapshot of Top Programs
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Compare citizenship-by-investment programs across leading destinations
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {countries.map((country, index) => (
          <div
            key={country.name}
            ref={el => cardsRef.current[index] = el}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
          >
            {/* Card Header with Gradient Background */}
            <div className={`bg-gradient-to-br ${country.gradient} p-6 relative overflow-hidden`}>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
              <div className="flex justify-between items-start">
                <div className="text-5xl">{country.flag}</div>
                {country.icon}
              </div>
              <h3 className="text-xl font-bold text-white mt-4 mb-1">{country.name}</h3>
              <p className="text-white/80 text-sm">{country.processingTime}</p>
            </div>

            {/* Card Body */}
            <div className="p-5">
              {/* Investment Type */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wide mb-2">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Investment</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-800">{country.investmentAmount}</span>
                  <span className="text-xs text-gray-500">{country.investmentType}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-4"></div>

              {/* Family Inclusion */}
              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-500 text-xs uppercase tracking-wide mb-2">
                  <Users className="w-3.5 h-3.5" />
                  <span>Family Inclusion</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {country.familyInclusion.map((member, i) => (
                    <span key={i} className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Heart className="w-2.5 h-2.5" />
                      {member}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-100 my-4"></div>

              {/* Visa-Free Score */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-500 text-sm">Visa-Free Access</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-amber-600">{country.visaFree}</span>
                  <span className="text-gray-400 text-sm">countries</span>
                </div>
              </div>
            </div>

            {/* Card Footer Hover Effect */}
            <div className="border-t border-gray-100 p-4 bg-gray-50 group-hover:bg-amber-50 transition-colors duration-300">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Learn more</span>
                <span className="text-amber-600 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryCards;