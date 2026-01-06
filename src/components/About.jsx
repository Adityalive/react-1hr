import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-stone-50 text-stone-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12 flex flex-col md:flex-row gap-8 items-end justify-between">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-green-700 uppercase mb-3">
              About Horizon
            </h2>
            <h1 className="text-3xl md:text-4xl leading-tight font-light">
              At Horizon, we don't just <span className="font-bold text-green-800">play</span> tennis — we live it. 
              Since 2021, our club has been a home for players of all levels.
            </h1>
          </div>
          {/* Optional decorative line or secondary text */}
          <div className="hidden md:block w-32 h-1 bg-green-700 mb-2"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative h-80 w-full rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <img 
              src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=800&auto=format&fit=crop" 
              alt="Tennis Courts" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold">World Class Courts</h3>
              <p className="text-sm text-gray-200 mt-2">Clay and grass surfaces.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative h-80 w-full rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <img 
              src="https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?q=80&w=800&auto=format&fit=crop" 
              alt="Coaching" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold">Expert Coaching</h3>
              <p className="text-sm text-gray-200 mt-2">Learn from the pros.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative h-80 w-full rounded-2xl overflow-hidden shadow-lg transition-transform hover:-translate-y-1">
            <img 
              src="https://images.unsplash.com/photo-1530915536956-d0a8a6d6911c?q=80&w=800&auto=format&fit=crop" 
              alt="Community" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 p-6 text-white">
              <h3 className="text-xl font-bold">Vibrant Community</h3>
              <p className="text-sm text-gray-200 mt-2">Events, tournaments & more.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;