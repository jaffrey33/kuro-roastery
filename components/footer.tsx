export function Footer() {
  return (
    <footer className="bg-[#0f0e0c] py-16 px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-xl text-[#f4f0e8] mb-4" style={{ fontFamily: 'var(--font-shippori)' }}>
            Kuro
          </h3>
          <p className="text-sm text-[#9b9488] leading-relaxed">
            Crafting exceptional coffee through tradition and innovation since 2009.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#c8a96e] mb-6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
            Shop
          </h4>
          <ul className="space-y-3 text-sm text-[#9b9488]">
            {['All Blends', 'Brewing Gear', 'Gift Sets', 'Subscriptions'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#c8a96e] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#c8a96e] mb-6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
            Company
          </h4>
          <ul className="space-y-3 text-sm text-[#9b9488]">
            {['About Us', 'Our Story', 'Sustainability', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#c8a96e] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-xs tracking-widest uppercase text-[#c8a96e] mb-6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
            Connect
          </h4>
          <ul className="space-y-3 text-sm text-[#9b9488]">
            {['Instagram', 'X', 'Facebook', 'Newsletter'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#c8a96e] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 pt-8 flex justify-center sm:justify-between items-center flex-wrap gap-4 max-w-7xl mx-auto">
        <p className="text-xs text-[#9b9488]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
          © {new Date().getFullYear()} Kuro Roastery. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Cookies'].map((item) => (
            <a key={item} href="#" className="text-xs text-[#9b9488] hover:text-[#c8a96e] transition-colors" style={{ fontFamily: 'var(--font-dm-mono)' }}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
