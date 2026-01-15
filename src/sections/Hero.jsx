import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    // Full-screen hero section that sets the first impression of the brand
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Top navigation bar */}
      <Navbar />

      {/* ---------- BACKGROUND LAYERS ---------- */}
      {/* Layered gradients are used to create a premium, cinematic visual depth */}
      <div className="absolute inset-0 z-0 bg-black">

        {/* Teal glow to add freshness and trust */}
        <div
          className="absolute"
          style={{
            width: "70%",
            height: "75%",
            right: "-15%",
            bottom: "-15%",
            background: "rgba(0, 139, 139, 0.5)",
            filter: "blur(150px)",
            borderRadius: "50%",
          }}
        />

        {/* Green glow to represent growth, responsibility, and sustainability */}
        <div
          className="absolute"
          style={{
            width: "70%",
            height: "76%",
            right: "5%",
            bottom: "5%",
            background: "rgba(0, 80, 0, 0.4)",
            filter: "blur(200px)",
            borderRadius: "50%",
          }}
        />

        {/* Strong blue highlight to emphasize leadership and clarity */}
        <div
          className="absolute"
          style={{
            width: "40%",
            height: "55%",
            right: "0%",
            top: "11%",
            background: "rgba(0, 70, 200, 0.55)",
            filter: "blur(140px)",
            borderRadius: "50%",
          }}
        />

        {/* Deep navy blue for balance and visual grounding */}
        <div
          className="absolute"
          style={{
            width: "60%",
            height: "60%",
            left: "-25%",
            bottom: "-20%",
            background: "rgba(0, 30, 120, 0.6)",
            filter: "blur(180px)",
            borderRadius: "50%",
          }}
        />

        {/* Subtle blue accent to enrich the overall gradient */}
        <div
          className="absolute"
          style={{
            width: "20%",
            height: "20%",
            left: "15%",
            top: "10%",
            background: "rgba(40, 120, 255, 0.35)",
            filter: "blur(160px)",
            borderRadius: "50%",
          }}
        />

        {/* Dark overlay to improve text readability and contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.75) 30%, rgba(0,0,0,0.4) 60%, transparent 100%)",
          }}
        />
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      {/* Foreground content that sits above the background visuals */}
      <div className="relative z-10 w-full h-full flex flex-col px-6 lg:px-12">
        <div className="flex-1 flex pt-20 pb-20">

          {/* Left side: Core brand message */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              {/* Visual marker for emphasis */}
              <span className="w-3 h-3 bg-white"></span>
              <span className="text-white text-sm tracking-[0.40em] font-bold uppercase">
                BUILT ON SOLID GROUND
              </span>
            </div>

            {/* Main headline communicating trust and leadership */}
            <h1 className="font-serif text-white text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight">
              Building Leaders –
              <br />
              <span className="text-white/60">the</span>{" "}
              World Can Trust.
            </h1>
          </div>

          {/* Right side: Supporting philosophy statement */}
          <div className="flex-1 flex justify-end items-end pb-24">
            <p className="text-white font-serif text-lg lg:text-xl xl:text-2xl text-right leading-relaxed max-w-xl">
              Where purpose meets people. Where organizations transform through
              trusted leadership, continuous learning, & human responsibility.
            </p>
          </div>
        </div>

        {/* ---------- FOOTER INDICATOR ---------- */}
        {/* Encourages users to scroll and explore further */}
        <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-8 flex items-center justify-between">
          <span className="text-white text-sm tracking-wide">
            Scroll to Discover
          </span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5v14M12 19l-6-6M12 19l6-6"
              stroke="currentColor"
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
