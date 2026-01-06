import React from 'react';
import { ArrowUpRight, ArrowLeft, ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center items-start space-y-6">
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-full">
              Services
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
              Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we've got the right program for you.
            </h2>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[#1A202C] hover:bg-gray-800 transition-colors"
            >
              Explore More
              <ArrowUpRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
          </div>

          {/* Middle Column: Large Card */}
          <div className="relative rounded-[2rem] overflow-hidden h-[400px] lg:h-auto group">
            <img
              src="https://images.unsplash.com/photo-1560155015-406c8363353d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Training Programs"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-between h-full">
              <div className="self-start">
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-white/20 backdrop-blur-md rounded-full">
                  Training Programs
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white">Programs designed for all ages and abilities.</h3>
                </div>
                <div className="bg-[#1A202C] p-3 rounded-full text-white">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Small Card & Navigation */}
          <div className="flex flex-col space-y-6">
            {/* Small Card */}
            <div className="relative rounded-[2rem] overflow-hidden h-[250px] group">
              <img
                src="https://images.unsplash.com/photo-1626247341584-b60677648070?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Court Access"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute top-0 left-0 p-6">
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-white bg-white/20 backdrop-blur-md rounded-full">
                  Court Access
                </span>
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white">Hourly Court Rental</h3>
              </div>
            </div>
            
            {/* Description and Navigation */}
            <div className="flex flex-col space-y-6">
              <p className="text-gray-600 text-base">
                Step into a space built for players — to grow, compete, and thrive.
              </p>
              <div className="flex space-x-4">
                <button className="p-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button className="p-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition-colors">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;