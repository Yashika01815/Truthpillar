const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 border-b border-white/20">
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between py-8 sm:py-10 lg:py-12">

          {/* Logo */}
          <div className="flex items-center gap-5">
            <span className="text-white font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-none">
              I.T.L
            </span>

            <div className="flex flex-col leading-tight">
              <span className="text-white/80 text-xs sm:text-sm lg:text-base font-light">
                Institute for
              </span>
              <span className="text-white/80 text-xs sm:text-sm lg:text-base font-light">
                Trusted Leadership
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            <a
              href="#institute"
              className="text-white font-semibold text-base lg:text-lg"
            >
              The Institute
            </a>
            <a
              href="#approach"
              className="text-white/70 hover:text-white text-base lg:text-lg"
            >
              Our Approach
            </a>
            <a
              href="#ecosystem"
              className="text-white/70 hover:text-white text-base lg:text-lg"
            >
              Ecosystem
            </a>
            <a
              href="#insights"
              className="text-white/70 hover:text-white text-base lg:text-lg"
            >
              Insights
            </a>
            <a
              href="#contact"
              className="text-white/70 hover:text-white text-base lg:text-lg"
            >
              Contact Us
            </a>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Navbar;
