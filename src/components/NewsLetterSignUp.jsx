import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const NewsLetterSignUp = () => {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success', 'error', null
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Section animation
    gsap.fromTo(sectionRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email.trim()) {
      setStatus('error');
      setMessage('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address (e.g., name@example.com)');
      return;
    }
    
    // Success - simulate API call
    setStatus('success');
    setMessage('Thanks for subscribing! Check your inbox for confirmation.');
    setEmail('');
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus(null);
      setMessage('');
    }, 5000);
  };

  return (
    <div ref={sectionRef} className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full mb-6">
          <Mail className="w-8 h-8 text-yellow-400" />
        </div>
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Get Your Weekly Analysis
        </h2>
        
        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          Subscribe to receive exclusive insights on citizenship-by-investment programs, 
          visa-free updates, and family inclusion opportunities.
        </p>
        
        {/* Features list */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Weekly updates</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Exclusive insights</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle className="w-4 h-4 text-green-400" />
            <span>Unsubscribe anytime</span>
          </div>
        </div>
        
        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={`w-full px-5 py-3 rounded-full border-2 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all duration-300 ${
                  status === 'error' 
                    ? 'border-red-500 focus:ring-red-500' 
                    : 'border-white/30 focus:ring-yellow-400 focus:border-transparent'
                }`}
              />
              {status === 'error' && (
                <div className="absolute -bottom-6 left-0 flex items-center gap-1 text-red-400 text-xs">
                  <AlertCircle className="w-3 h-3" />
                  <span>{message}</span>
                </div>
              )}
            </div>
            
            <button
              type="submit"
              className="group bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-slate-900 font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Subscribe
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          
          {/* Success Message */}
          {status === 'success' && (
            <div className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-300 text-sm">{message}</span>
            </div>
          )}
        </form>
        
        {/* Trust text */}
        <p className="text-gray-400 text-xs mt-6">
          No spam · Only valuable insights · Privacy guaranteed
        </p>
      </div>
    </div>
  );
};

export default NewsLetterSignUp;