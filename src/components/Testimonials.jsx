import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const autoPlayRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "F.O.",
      title: "Family Office, Dubai",
      content: "Flawless execution from due diligence to passport delivery. Their team's attention to detail and discretion is unmatched.",
      rating: 5,
      image: "👔",
      location: "Dubai, UAE"
    },
    {
      id: 2,
      name: "Dr. Sarah Chen",
      title: "Tech Entrepreneur",
      content: "The team at Xiphias made the entire citizenship process seamless. From document preparation to the final oath, everything was handled professionally.",
      rating: 5,
      image: "👩‍💼",
      location: "Singapore"
    },
    {
      id: 3,
      name: "Michael Rodriguez",
      title: "Real Estate Investor",
      content: "Exceptional service! They found the perfect investment route for my family. The concierge support was invaluable throughout the journey.",
      rating: 5,
      image: "🏢",
      location: "Miami, USA"
    },
    {
      id: 4,
      name: "Elena Volkov",
      title: "International Lawyer",
      content: "I've worked with several citizenship advisory firms, and Xiphias stands out for their transparency and rigorous compliance standards.",
      rating: 5,
      image: "⚖️",
      location: "London, UK"
    }
  ];

  // Stop auto-play
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // Start auto-play
  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (!isAnimating) {
        nextSlide();
      }
    }, 5000);
  };

  // Next slide
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const nextIndex = (activeIndex + 1) % testimonials.length;
    
    // GSAP animation for slide out/in
    gsap.to(carouselRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(nextIndex);
        gsap.fromTo(carouselRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", onComplete: () => setIsAnimating(false) }
        );
      }
    });
  };

  // Previous slide
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    const prevIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
    
    gsap.to(carouselRef.current, {
      opacity: 0,
      x: 30,
      duration: 0.4,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(prevIndex);
        gsap.fromTo(carouselRef.current,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out", onComplete: () => setIsAnimating(false) }
        );
      }
    });
  };

  // Go to specific slide
  const goToSlide = (index) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    
    const direction = index > activeIndex ? -30 : 30;
    
    gsap.to(carouselRef.current, {
      opacity: 0,
      x: direction,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActiveIndex(index);
        gsap.fromTo(carouselRef.current,
          { opacity: 0, x: -direction },
          { opacity: 1, x: 0, duration: 0.3, ease: "power2.out", onComplete: () => setIsAnimating(false) }
        );
      }
    });
  };

  // Auto-play on mount, stop on unmount
  useEffect(() => {
    startAutoPlay();
    
    // Pause auto-play on hover
    const carouselElement = document.getElementById('testimonial-carousel');
    if (carouselElement) {
      carouselElement.addEventListener('mouseenter', stopAutoPlay);
      carouselElement.addEventListener('mouseleave', startAutoPlay);
    }
    
    return () => {
      stopAutoPlay();
      if (carouselElement) {
        carouselElement.removeEventListener('mouseenter', stopAutoPlay);
        carouselElement.removeEventListener('mouseleave', startAutoPlay);
      }
    };
  }, [activeIndex, isAnimating]);

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
  }, []);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div ref={sectionRef} className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 rounded-full px-4 py-1.5 mb-4">
            <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span className="text-amber-700 font-semibold text-sm">Client Stories</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Trusted by families and investors worldwide
          </p>
        </div>

        {/* Carousel Container */}
        <div id="testimonial-carousel" className="relative max-w-4xl mx-auto">
          
          {/* Main Testimonial Card */}
          <div 
            ref={carouselRef}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote className="w-16 h-16 text-slate-800" />
            </div>
            
            {/* Rating Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            {/* Testimonial Content */}
            <p className="text-slate-700 text-lg md:text-xl leading-relaxed mb-8 relative z-10">
              "{currentTestimonial.content}"
            </p>
            
            {/* Client Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center text-2xl">
                  {currentTestimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {currentTestimonial.location}
                  </p>
                </div>
              </div>
              
              {/* Quote mark */}
              <div className="text-amber-500 opacity-50">
                <Quote className="w-8 h-8" />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-amber-300 group"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-amber-300 group"
          >
            <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-amber-500 transition-colors" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-8 h-2 bg-amber-500'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-400">
              Auto-playing • Hover to pause
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;