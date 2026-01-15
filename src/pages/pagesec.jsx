"use client";

import React from "react";

export default function NorthStarPage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans">
      
      <div className="absolute inset-0 z-0 bg-black">
        <div 
          className="absolute inset-0 opacity-80"
          style={{
            background: `radial-gradient(circle at 40% 40%, #063a30 0%, #021a15 80%)`
          }}
        />
        
        <div 
          className="absolute top-[-10%] left-[10%] w-[80%] h-[80%] rounded-full blur-[120px] opacity-40"
          style={{ background: "radial-gradient(circle, #0d5a4a 0%, transparent 70%)" }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,rgba(0,0,0,1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_100%,rgba(0,0,0,0.8)_0%,transparent_40%)]" />
      </div>

      <div className="relative z-10 min-h-screen max-w-7xl mx-auto px-6 sm:px-12 py-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 lg:gap-16">

        <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex-shrink-0">
          
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]" viewBox="0 0 100 100" fill="currentColor">
               <path d="M50 20 L58 45 L85 55 L58 65 L50 90 L42 65 L15 55 L42 45 Z" />
            </svg>
          </div>

          <div className="absolute -top-6 sm:top-[-40px] left-1/2 -translate-x-1/2">
            <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-[#1a73e8] flex items-center justify-center shadow-[0_0_40px_rgba(26,115,232,0.4)]">
              <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-xl">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 opacity-60" fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" fill="white" />
              </svg>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 shadow-xl">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 opacity-60" fill="none" stroke="white" strokeWidth={1.5} viewBox="0 0 24 24">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                <path d="M18 20H6M12 20v-5" />
                <path d="M8 15c0-1.5 1-3 4-3s4 1.5 4 3M6 9v2a6 6 0 0 0 12 0V9H6z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full lg:pl-10 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 sm:mb-10">
            <span className="w-2.5 h-2.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></span>
            <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] font-bold text-white/90 uppercase">
              What Drives Us
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium mb-8 sm:mb-12 lg:whitespace-nowrap tracking-tight">
            Our North Star
          </h1>

          <div className="mb-8">
            <h2 className="text-3xl sm:text-4xl italic font-serif font-light text-white/95 mb-4 sm:mb-6">
              Vision
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/50 leading-relaxed font-light mx-auto lg:mx-0 max-w-md sm:max-w-lg">
              A world in which organizations are led by trust and committed to the continuous development of people and purpose.
            </p>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 mt-10 sm:mt-16">
            <span className="text-base sm:text-lg font-light text-white/40">1/3</span>
            <div className="w-24 sm:w-28 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#1a73e8] shadow-[0_0_15px_rgba(26,115,232,0.8)]" />
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}