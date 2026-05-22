import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRight, Download, Globe } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animations
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );
    
    gsap.fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
    );
    
    gsap.fromTo(buttonsRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, delay: 0.4, ease: 'back.out(0.3)' }
    );
  }, []);

  return (
    <div ref={heroRef} className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background decorative elements - hidden on mobile, visible on tablet+ */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="text-center">
          {/* Small badge above title - responsive padding and text */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm text-white/90">Private Client Service</span>
          </div>
          
          {/* Main Title - fully responsive font sizes */}
          <h1 
            ref={titleRef}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2"
          >
            Your Weekly Passport
            <br className="hidden xs:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 inline-block mt-1 sm:mt-2">
              to Global Freedom
            </span>
          </h1>
          
          {/* Subtitle - responsive text and padding */}
          <p 
            ref={subtitleRef}
            className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6"
          >
            Concierge guidance across donation and real-estate routes. 
            Transparent costs, rigorous compliance, and end-to-end execution 
            for you and your family.
          </p>
          
          {/* CTA Buttons - fully responsive stacking and sizing */}
         <div 
  ref={buttonsRef}
  className="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
>
  <button className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
    Book a Free Consultation
    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
  </button>
  
  <button className="border-2 border-white/30 hover:border-white/60 text-white font-semibold text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm w-full sm:w-auto justify-center">
    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
    Download Guide
  </button>
</div>
          
          {/* Small trust text - responsive */}
          <p className="text-gray-400 text-xs sm:text-sm mt-6 sm:mt-8">
            No obligation · Response within 24 hours
          </p>
        </div>
      </div>
      
      {/* Bottom wave decoration - hidden on very small screens */}
      <div className="absolute bottom-0 left-0 right-0 hidden xs:block">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative h-8 sm:h-10 md:h-12 w-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="white"></path>
          <path d="M0,0V15.81C13,21.25,27.93,25.67,44.24,28.45c69.76,13.44,140,8.74,210,1.41,69.45-7.28,138.5-22.57,207.34-26.17,69-3.6,136.4,3.5,203.9,17.3,65.73,13.4,128,35.67,191.7,47.14C887.41,68.42,959.6,69.14,1032,63.46c72.33-5.69,140.34-25.2,207.52-41.06L1200,0Z" opacity=".5" fill="white"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c119-21.48,234.48-57.78,350.54-64.92C928.24-26.83,1102.69,3.52,1200,21.42V0Z" fill="white"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;