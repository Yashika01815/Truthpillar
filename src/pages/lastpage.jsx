import React from "react";

function RightVerticalCard({ label, title, subtitle }) {
  return (
    <div className="col-span-1 md:col-span-1 lg:col-span-1 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-b from-[#071F33] to-[#020B14] rounded-2xl flex flex-col items-center overflow-hidden border border-white/5 w-full">
      <div className="bg-[#0A4F9E] w-full py-4 text-center">
        <p className="text-[10px] md:text-xs uppercase text-white tracking-widest font-bold px-2">
          {label}
        </p>
      </div>

      <div className="flex-1 flex items-center justify-center py-8 md:py-10 w-full">
        <div className="flex flex-col lg:block lg:[writing-mode:vertical-rl] lg:rotate-180 text-center px-4">
          <p className="tracking-widest text-lg md:text-xl font-semibold uppercase lg:whitespace-nowrap">
            {title}
          </p>
          <div className="h-[1px] w-12 lg:w-[1px] lg:h-12 bg-blue-500/30 mx-auto my-4 lg:my-6"></div>
          <p className="text-xs md:text-sm opacity-70 lg:whitespace-nowrap">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Last() {
  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-[#041C3A] via-[#062A52] to-[#0A4F4A] text-white flex items-center py-12 md:py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="text-center mb-12 md:mb-24">
          <div className="text-xs md:text-sm tracking-widest uppercase opacity-80 mb-4 md:mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-blue-500"></span> Built on solid ground
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl leading-tight mb-6 md:mb-8 px-2">
            One Vision.<br className="hidden md:block" /> Four Pathways to Impact.
          </h1>

          <p className="max-w-3xl mx-auto text-sm md:text-lg opacity-80 leading-relaxed">
            The Institute of Trusted Leadership operates through an integrated ecosystem of
            specialized divisions, each designed to address different aspects of leadership
            development and organizational transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 min-h-[450px] md:min-h-[550px] lg:min-h-[600px] bg-[#061A2E] border border-blue-500/40 rounded-2xl p-6 md:p-10 relative flex flex-col w-full">
            <span className="inline-block text-[10px] md:text-sm bg-blue-600 px-3 py-1 md:px-4 md:py-1.5 rounded mb-6 w-fit font-bold tracking-wider">
              OPEN TO ALL
            </span>

            <div className="bg-white rounded-xl p-4 md:p-6 mb-6 md:mb-8 flex-1 flex items-center justify-center overflow-hidden">
              <img
                src="/luca-white.png"
                alt="Luca Leadership"
                className="w-full h-full max-h-[120px] md:max-h-[200px] object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mb-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 uppercase">
                LUCA The Leader
              </h3>
              <p className="text-sm md:text-base opacity-80 italic">
                Where Leadership Awareness Begins
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 md:p-5 text-xs md:text-base text-gray-300 leading-relaxed mb-4">
              <p>
                Our flagship CSR initiative bringing trusted leadership awareness to 
                communities, organizations, and emerging leaders.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 text-xl md:text-2xl opacity-50 hover:opacity-100 transition-opacity">
              →
            </div>
          </div>

          <RightVerticalCard
            label="For Organizations"
            title="MARTINICH CONSULTING"
            subtitle="Strategic Leadership Partnerships"
          />

          <RightVerticalCard
            label="For Individuals & Teams"
            title="MARTINICH INSTITUTE"
            subtitle="Learning That Transforms"
          />

          <RightVerticalCard
            label="For Research & Innovation"
            title="MARTINICH R&D"
            subtitle="Innovation Meets Insight"
          />
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
}