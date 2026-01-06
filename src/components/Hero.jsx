import React from 'react';
import { ArrowRight } from 'lucide-react'; // Ensure you have lucide-react installed

const Hero = () => {
  return (
    <div className="p-4 md:p-8">
      {/* Container with background image */}
      <div className="relative min-h-[600px] w-full max-w-7xl mx-auto rounded-[2.5rem] overflow-hidden shadow-2xl flex items-center justify-center">
        
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=2000&auto=format&fit=crop" 
          alt="Tennis Player Serving"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-6 text-center text-white">
          
          <span className="mb-4 inline-block px-4 py-1.5 text-xs font-bold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/30">
            Welcome to Horizon
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Unleash Your Inner <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Champion Today
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl font-light leading-relaxed">
            Join the ultimate tennis experience — where passion meets performance and every swing brings you closer to your goal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-semibold py-3 px-8 rounded-full transition-all duration-300">
              View Memberships
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;