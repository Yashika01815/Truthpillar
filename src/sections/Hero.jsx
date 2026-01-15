import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-black">
      
      {/* Navbar */}
      <Navbar />

      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute"
          style={{
            width: "70%",
            height: "75%",
            right: "-15%",
            bottom: "-15%",
            background: "rgba(0,139,139,0.45)",
            filter: "blur(150px)",
            borderRadius: "50%",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "70%",
            height: "75%",
            right: "5%",
            bottom: "5%",
            background: "rgba(0,80,0,0.35)",
            filter: "blur(200px)",
            borderRadius: "50%",
          }}
        />

        <div
          className="absolute"
          style={{
            width: "40%",
            height: "55%",
            right: "0%",
            top: "10%",
            background: "rgba(0,70,200,0.45)",
            filter: "blur(140px)",
            borderRadius: "50%",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.4) 65%, transparent 100%)",
          }}
        />
      </div>

      {/* ===== CONTENT (FULL WIDTH, NOT CENTERED) ===== */}
      <div className="relative z-10 w-full min-h-[100svh] flex flex-col px-6 lg:px-12">

        {/* Main row */}
        <div className="flex flex-1 pt-[96px] pb-20">

          {/* LEFT — stays LEFT */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-3 h-3 bg-white"></span>
              <span className="uppercase tracking-[0.4em] text-xs font-bold text-white">
                BUILT ON SOLID GROUND
              </span>
            </div>

            <h1
              className="font-serif text-white leading-tight"
              style={{
                fontSize: "clamp(2.75rem, 5vw, 5.25rem)",
              }}
            >
              Building Leaders –
              <br />
              <span className="text-white/60">the</span> World Can Trust.
            </h1>
          </div>

          {/* RIGHT — stays RIGHT */}
          <div className="flex-1 flex items-end justify-end pb-16">
            <p
              className="font-serif text-white/90 text-right leading-relaxed max-w-xl"
              style={{
                fontSize: "clamp(1rem, 1.6vw, 1.45rem)",
              }}
            >
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pb-8">
          <span className="text-white text-xs tracking-wide">
            Scroll to Discover
          </span>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M12 19l-6-6M12 19l6-6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default Hero;
