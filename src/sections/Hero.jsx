import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col overflow-hidden bg-black">
      <Navbar />

      {/* ===== BACKGROUND LAYERS (Optimized for Production) ===== */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute w-[70%] h-[75%] -right-[15%] -bottom-[15%] rounded-full opacity-40 blur-[120px]"
          style={{ background: "rgba(0,139,139,1)" }}
        />
        <div
          className="absolute w-[70%] h-[75%] right-[5%] bottom-[5%] rounded-full opacity-30 blur-[150px]"
          style={{ background: "rgba(0,80,0,1)" }}
        />
        <div
          className="absolute w-[40%] h-[55%] right-0 top-[10%] rounded-full opacity-40 blur-[100px]"
          style={{ background: "rgba(0,70,200,1)" }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent"
        />
      </div>

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="relative z-10 w-full flex-1 flex flex-col px-6 lg:px-12">
        
        {/* Main Content: Stacks on mobile, splits on desktop */}
        <div className="flex flex-col lg:flex-row flex-1 pt-32 lg:pt-40 pb-12 lg:pb-20 gap-12 lg:gap-8">

          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 lg:w-3 lg:h-3 bg-white"></span>
              <span className="uppercase tracking-[0.35em] text-[10px] lg:text-xs font-bold text-white">
                BUILT ON SOLID GROUND
              </span>
            </div>

            <h1
              className="font-serif text-white leading-[1.1] tracking-tight"
              style={{
                fontSize: "clamp(2.25rem, 7.5vw, 5.5rem)",
              }}
            >
              Building Leaders –
              <br />
              <span className="text-white/60">the</span> World Can Trust.
            </h1>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex items-start lg:items-end justify-start lg:justify-end pb-8 lg:pb-24">
            <p
              className="font-serif text-white/80 text-left lg:text-right leading-relaxed max-w-lg lg:max-w-xl"
              style={{
                fontSize: "clamp(0.95rem, 1.4vw, 1.35rem)",
              }}
            >
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>

        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between pb-8">
          <div className="flex items-center gap-4 group cursor-pointer">
            <span className="text-white/50 text-[10px] lg:text-xs tracking-widest uppercase group-hover:text-white transition-colors">
              Scroll to Discover
            </span>
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" 
              className="animate-bounce text-white/50 group-hover:text-white transition-colors"
            >
              <path
                d="M12 5v14M12 19l-6-6M12 19l6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          
          <div className="hidden lg:block h-px flex-1 bg-white/10 mx-10"></div>
          
          <div className="text-white/30 text-[9px] lg:text-xs tracking-tighter uppercase">
            EST. 2026 — ITL GLOBAL
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;