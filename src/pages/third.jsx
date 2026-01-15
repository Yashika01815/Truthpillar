"use client";

import React from "react";

export default function LeslieMartinichPage() {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
      
      {/* ---------------- TOP LEFT ---------------- */}
      <div className="flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[#020b09]">
        <div className="flex flex-col items-start space-y-10">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-white"></div>
            <span className="text-sm md:text-base font-bold tracking-widest text-white">
              MEET OUR FOUNDER
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Leslie Martinich
          </h1>
        </div>
      </div>

      {/* ---------------- TOP RIGHT ---------------- */}
      <div className="overflow-hidden bg-black">
        <img
          src="/leslie.jpg"
          alt="Leslie Martinich"
          className="w-full h-full object-cover"
        />
      </div>

      {/* ---------------- BOTTOM LEFT ---------------- */}
      <div className="relative flex flex-col items-center justify-center p-8 md:p-12 lg:p-16 text-center overflow-hidden bg-[#041a14]">
        {/* Decorative background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(60,180,140,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.5),transparent_70%)]" />

        <div className="relative max-w-2xl space-y-8 z-10">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed">
            Leslie Martinich is a leadership expert with 20+ years of experience who founded the Institute of Trusted
            Leadership to address the global crisis of trust in organizations.
          </p>

          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed">
            Through evidence-based, practical approaches, her work develops leaders, transforms cultures, and scales
            trusted leadership worldwide.
          </p>
        </div>
      </div>

      {/* ---------------- BOTTOM RIGHT ---------------- */}
      <div className="relative flex flex-col items-start justify-center p-8 md:p-12 lg:p-16 overflow-hidden bg-[#031410]">
        {/* Decorative background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_right,rgba(80,200,160,0.2),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(0,0,0,0.6),transparent_70%)]" />

        <h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-tight cursor-pointer hover:opacity-80 transition-opacity">
          Meet Leslie <span className="text-xl md:text-2xl align-top inline-block ml-2">↗</span>
        </h2>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}