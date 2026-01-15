import React from "react";

const Step = ({ number, title, description, lineExtendClass }) => {
  return (
    <div className="relative flex flex-col items-start px-6">
      {/* CONTENT BLOCK */}
      <div className="relative flex items-start gap-6 z-10">
        <span className="text-8xl md:text-9xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white/80 to-white/20 leading-none select-none">
          {number}
        </span>

        <div className="mt-6">
          <h3 className="text-white text-2xl md:text-3xl font-serif tracking-widest uppercase mb-4">
            {title}
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-[320px]">
            {description}
          </p>
        </div>

        
        <div className={`absolute left-[52%] top-full w-[2px] bg-white/80 hidden md:block ${lineExtendClass}`}></div>
      </div>
    </div>
  );
};

const LeadershipSection = () => {
  const steps = [
    {
      number: "1",
      title: "ITL APPROACH",
      description: "Evidence-based methodology combining research, training, and consulting to build trusted leaders.",
    
      lineExtendClass: "h-[167px]" 
    },
    {
      number: "2",
      title: "OUR ECOSYSTEM",
      description: "Four integrated divisions delivering comprehensive leadership solutions from awareness to transformation.",
      
      lineExtendClass: "h-[215px]" 
    },
    {
      number: "3",
      title: "GLOBAL IMPACT",
      description: "UN SDG-aligned programs ensuring every initiative creates measurable social value.",
      
      lineExtendClass: "h-[80px]" 
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#011a0d] flex flex-col items-center justify-center px-8 py-32 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(30,110,70,0.5)_0%,transparent_70%)] pointer-events-none"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center max-w-4xl mb-40">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-3 h-3 bg-white"></div>
          <span className="text-white text-sm tracking-[0.35em] uppercase font-medium">
            The Solution
          </span>
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-serif mb-10">
          <span className="italic text-gray-400">This is</span> Why We Exist
        </h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed px-6">
          Trust transforms everything engagement, innovation, performance, & culture.
          The Institute of Trusted Leadership scales this impact through research-backed
          methods.
        </p>
      </div>

      {/* STEPS WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl">
        
        {/* STEPS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={
                index === 1 ? "md:-mt-20" : index === 2 ? "md:mt-20" : ""
              }
            >
              <Step
                number={step.number}
                title={step.title}
                description={step.description}
                lineExtendClass={step.lineExtendClass}
              />
            </div>
          ))}
        </div>

        {/* HORIZONTAL DASHED LINE */}
        <div className="px-10 mt-20">
          <div className="w-full h-[2px] border-b-2 border-dashed border-white/30"></div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </div>
  );
};

export default LeadershipSection;