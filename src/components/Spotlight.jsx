import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Globe2, Plane, Users } from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Spotlight = () => {
  const spotlightRef = useRef(null);
  const badgeRef = useRef(null);
  const cardRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // Animation for badge - appears from bottom when scrolled to
    gsap.fromTo(badgeRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: "back.out(0.5)",
        scrollTrigger: {
          trigger: badgeRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for header text
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animation for card - slides up with fade
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 60 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={spotlightRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
      {/* Section header with standout animation */}
      <div ref={headerRef} className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div 
            ref={badgeRef}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full inline-flex items-center gap-1.5 sm:gap-2 shadow-lg opacity-0"
          >
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-bold text-xs sm:text-sm">⭐ SPOTLIGHT OF THE WEEK ⭐</span>
          </div>
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-2">
          Malta Citizenship by Exception
        </h2>
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
          Leading the way in 2026 for family inclusion and visa-free access
        </p>
      </div>

      {/* Main spotlight card */}
      <div ref={cardRef} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300 relative">
        
        {/* ✨ RESPONSIVE RIBBON - Left on Desktop (lg+), Right on Mobile/Tablet (md and below) ✨ */}
        
        {/* Desktop version (lg and above) - Left side */}
        <div className="absolute top-0 z-25 left-0 hidden lg:block">
          <div 
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-black shadow-lg flex items-center justify-center whitespace-nowrap"
            style={{
              position: 'absolute',
              top: 'clamp(8px, 2vw, 12px)',
              left: '0px',
              width: 'clamp(90px, 20vw, 120px)',
              paddingTop: 'clamp(6px, 1.8vw, 10px)',
              paddingBottom: 'clamp(6px, 1.8vw, 10px)',
              textAlign: 'center',
              borderRadius: '0 8px 8px 0',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255,255,255,0.2)'
            }}
          >
            <span style={{ fontSize: 'clamp(11px, 3vw, 14px)', fontWeight: 900 }}>🔥 NEW</span>
          </div>
        </div>

        {/* Mobile & Tablet version (md and below) - Right side */}
        <div className="absolute top-0 z-25 right-0 lg:hidden">
          <div 
  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-900 font-black shadow-lg flex items-center justify-center whitespace-nowrap"
  style={{
    position: 'absolute',
    top: 'clamp(8px, 2vw, 12px)',
    right: '0px',
    width: 'clamp(90px, 20vw, 120px)',
    paddingTop: 'clamp(6px, 1.8vw, 10px)',
    paddingBottom: 'clamp(6px, 1.8vw, 10px)',
    textAlign: 'center',
    borderRadius: '8px 0 0 8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.3)'
  }}
>
  <span style={{ fontSize: 'clamp(11px, 3vw, 14px)', fontWeight: 900 }}>🔥 NEW</span>
</div>
        </div>

        <div className="grid lg:grid-cols-2 gap-0">
          
          {/* Left side - responsive padding and text sizes */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 p-6 sm:p-8 md:p-10 flex flex-col justify-center min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]">
            <div className="text-white">
              <Globe2 className="w-10 h-10 sm:w-12 sm:h-12 text-yellow-400 mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Mediterranean Gateway</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                Full EU citizenship · Visa-free access to 180+ countries · Includes spouse, children, parents & grandparents
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
                <span className="bg-white/20 rounded-full px-2 sm:px-3 py-1">🇪🇺 EU Member</span>
                <span className="bg-white/20 rounded-full px-2 sm:px-3 py-1">🛂 Schengen Zone</span>
              </div>
            </div>
          </div>

          {/* Right side - responsive padding and text */}
          <div className="p-6 sm:p-8 md:p-10">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
              <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wide">Family Inclusion ✓</span>
            </div>
            
            <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Minimum Investment</p>
                <p className="text-xl sm:text-2xl font-bold text-slate-800">€600,000 <span className="text-xs sm:text-sm font-normal text-gray-500">donation</span></p>
                <p className="text-xs sm:text-sm text-gray-500">or €700,000 with faster processing</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Real Estate Option</p>
                <p className="text-base sm:text-lg font-semibold text-slate-800">€700,000 minimum property purchase</p>
              </div>
              
              <div>
                <p className="text-gray-500 text-xs sm:text-sm">Processing Time</p>
                <p className="text-base sm:text-lg font-semibold text-slate-800">12-18 months</p>
              </div>
            </div>

            {/* Family inclusion tags - responsive wrapping */}
            <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-5 sm:mb-6">
              <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">✓ Spouse included</span>
              <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">✓ Children under 30</span>
              <span className="bg-green-100 text-green-700 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full">✓ Parents & grandparents</span>
            </div>

            {/* CTA button - responsive */}
            <button className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm sm:text-base py-2.5 sm:py-3 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
              Download Malta Factsheet
              <Plane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;