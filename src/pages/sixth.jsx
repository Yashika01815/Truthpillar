export default function HowWeTransform() {
    return (
      <section className="relative w-full overflow-hidden bg-[#020617] text-white">
        
        
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0B1E46_0%,#020617_65%)]" />
  
        <div className="relative max-w-[1400px] mx-auto px-12 py-[200px]">
  
          {/* Label */}
          <div className="flex items-center gap-3 mb-10">
            <span className="w-1.5 h-1.5 bg-white rounded-full" />
            <span className="text-[11px] tracking-[0.28em] uppercase text-gray-400">
              Our Methodology
            </span>
          </div>
  
          {/* Heading row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
            <h2 className="text-[56px] leading-[64px] font-medium max-w-[520px]">
              How We Transform
              <br />
              Leadership
            </h2>
  
            <p className="text-[18px] leading-[30px] text-gray-300 max-w-[520px] pt-6">
              Trusted leadership isn’t built on theory alone. Our integrated
              approach combines rigorous research, practical training to create
              lasting organizational change.
            </p>
          </div>
  
          {/* Bars + Text */}
          <div className="relative mt-[180px] flex gap-[80px]">
  
            {/* COLUMN 1 */}
            <div className="flex items-start gap-10">
              <div className="h-[480px] w-[120px] bg-[#050B14]" />
              <div className="max-w-[260px] pt-2">
                <h3 className="text-[22px] mb-4">
                  Research & Insights
                </h3>
                <ul className="space-y-3 text-[16px] leading-[26px] text-gray-400">
                  <li>• Evidence-based leadership models</li>
                  <li>• Continuous innovation</li>
                  <li>• Data-driven understanding</li>
                </ul>
              </div>
            </div>
  
            {/* COLUMN 2 */}
            <div className="flex items-start gap-10 mt-[140px]">
              <div className="h-[340px] w-[120px] bg-[#050B14]" />
              <div className="max-w-[260px] pt-2">
                <h3 className="text-[22px] mb-4">
                  Training & Development
                </h3>
                <ul className="space-y-3 text-[16px] leading-[26px] text-gray-400">
                  <li>• Practical skill-building</li>
                  <li>• Certification programs</li>
                  <li>• Organizational transformation</li>
                </ul>
              </div>
            </div>
  
            {/* COLUMN 3 */}
            <div className="flex items-start gap-10 mt-[280px]">
              <div className="h-[220px] w-[120px] bg-[#050B14]" />
              <div className="max-w-[260px] pt-2">
                <h3 className="text-[22px] mb-4">
                  Consulting & Implementation
                </h3>
                <ul className="space-y-3 text-[16px] leading-[26px] text-gray-400">
                  <li>• Strategic partnership</li>
                  <li>• Custom solutions</li>
                  <li>• Measurable impact</li>
                </ul>
              </div>
            </div>
  
          </div>
        </div>
      </section>
    );
  }
  