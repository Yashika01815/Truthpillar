const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between py-6 lg:py-8">

          {/* Logo Section */}
          <div className="flex items-center gap-4 lg:gap-6">
            <span 
              className="text-white font-serif font-bold leading-none tracking-tighter"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3.25rem)" }}
            >
              I.T.L
            </span>

            <div className="flex flex-col leading-[1.2] border-l border-white/20 pl-4">
              <span className="text-white/70 font-light" style={{ fontSize: "clamp(0.65rem, 1vw, 0.85rem)" }}>
                Institute for
              </span>
              <span className="text-white/70 font-light" style={{ fontSize: "clamp(0.65rem, 1vw, 0.85rem)" }}>
                Trusted Leadership
              </span>
            </div>
          </div>

          {/* Navigation - Hidden on mobile, fluid on desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {["The Institute", "Our Approach", "Ecosystem", "Insights", "Contact Us"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-white/60 hover:text-white transition-colors text-sm lg:text-[1.05rem] font-medium"
              >
                {item}
              </a>
            ))}
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;