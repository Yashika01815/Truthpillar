const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="w-full px-6 lg:px-12">
        
        
        <div className="flex items-center justify-between h-[72px]">

          
          <div className="flex items-center gap-4">
            
            
            <span
              className="text-white font-serif font-bold leading-none tracking-tight"
              style={{ fontSize: "2rem" }}   // 🔒 LOCKED
            >
              I.T.L
            </span>

            
            <div className="flex flex-col leading-tight border-l border-white/20 pl-4">
              <span className="text-white/70 text-xs font-light">
                Institute for
              </span>
              <span className="text-white/70 text-xs font-light">
                Trusted Leadership
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#theinstitute" className="text-white font-semibold text-sm">
              The Institute
            </a>
            <a href="#ourapproach" className="text-white/60 hover:text-white text-sm">
              Our Approach
            </a>
            <a href="#ecosystem" className="text-white/60 hover:text-white text-sm">
              Ecosystem
            </a>
            <a href="#insights" className="text-white/60 hover:text-white text-sm">
              Insights
            </a>
            <a href="#contact" className="text-white/60 hover:text-white text-sm">
              Contact Us
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
