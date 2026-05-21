import { products, steps } from "@/lib/data";

export default function Home() {
  const items = ['SINGLE-ORIGIN', 'HAND-ROASTED', 'PREMIUM QUALITY', 'JAPANESE HERITAGE'];

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="min-h-screen relative overflow-hidden w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
          {/* LEFT BACKGROUND */}
          <div className="bg-[#0f0e0c]" />

          {/* RIGHT BACKGROUND */}
          <div className="bg-[#ede8dc]" />
        </div>

        <div className="absolute -top-12 -left-8 text-[12rem] md:text-[28rem] font-normal text-white/3 pointer-events-none select-none leading-none">
          黒
        </div>

        <div className="absolute inset-0">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Dark */}
            <div className="flex flex-col justify-center md:justify-end px-8 md:px-16 py-10 md:py-20 relative overflow-hidden ">
              <div className="relative z-49">
                {/* Eyebrow */}
                <p className="text-xs tracking-[0.3em] uppercase text-[#c8a96e] mb-6 md:mb-8 opacity-0" style={{ animation: 'fadeUp 1s 0.3s ease forwards', fontFamily: 'var(--font-dm-mono)' }}>
                  Single - Origin - Japanese - Coffee
                </p>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-normal text-[#f4f0e8] leading-tight opacity-0" style={{ animation: 'fadeUp 1s 0.5s ease forwards', fontFamily: 'var(--font-shippori)' }}>
                  Where ritual
                  meets the <em style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#c8a96e' }}>extraordinary</em>
                </h1>

                {/* Description */}
                <p className="text-base md:text-lg font-light leading-relaxed text-white/55 mt-6 md:mt-8 max-w-xs md:max-w-96 opacity-0" style={{ animation: 'fadeUp 1s 0.7s ease forwards' }}>
                  Carefully sourced and masterfully roasted to perfection. Experience the art of Japanese coffee craftsmanship.
                </p>

                {/* CTA */}
                <div className="flex items-center gap-6 md:gap-8 mt-8 md:mt-12 opacity-0" style={{ animation: 'fadeUp 1s 0.9s ease forwards' }}>
                  <button className="px-8 md:px-10 py-3 bg-[#c8a96e] text-[#0f0e0c] text-xs tracking-widest uppercase transition-all duration-300 hover:bg-[#f4f0e8] hover:-translate-y-0.5" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                    Shop Now
                  </button>
                  <a href="#origins" className="text-xs tracking-widest uppercase text-white/50 border-b border-white/20 pb-0.5 hover:text-white hover:border-white/50 transition-all duration-300" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Cream */}
            <div className="relative overflow-hidden flex items-center justify-center min-h-[45vh] md:min-h-0">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-linear-to-br from-[#7a5c3a]/10 via-transparent to-transparent" />
              <div className="absolute inset-0 opacity-20" />

              {/* Coffee Visual */}
              <div className="relative z-10 text-center opacity-0" style={{ animation: 'scaleIn 1.2s 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
                <div className="w-56 h-56 md:w-80 md:h-80 rounded-full border border-[#7a5c3a]/20 relative flex items-center justify-center mx-auto">
                  {/* Outer ring */}
                  <div className="absolute inset-5 rounded-full border border-[#7a5c3a]/12" />

                  {/* Coffee bean visual */}
                  <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full bg-linear-to-br from-[#5c3d22] to-[#0f0e0c] flex items-center justify-center border border-[#7a5c3a]/20">
                    <span className="text-4xl md:text-5xl text-[#c8a96e]/60">
                      豆
                    </span>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-0" style={{ animation: 'fadeUp 1s 1.5s ease forwards' }}>
                <div className="w-0.5 h-12 bg-linear-to-b from-transparent to-[#7a5c3a]" style={{ animation: 'scrollPulse 2s ease-in-out infinite' }} />
                <span className="text-xs tracking-widest uppercase text-[#9b9488] rotate-0" style={{ fontFamily: 'var(--font-dm-mono)', writingMode: 'vertical-lr' }}>
                  Scroll
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* origin */}
      <section id="origins" className="py-28 px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 max-w-7xl mx-auto">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-xs tracking-widest uppercase text-[#c8a96e]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
              Our Origins
            </span>
          </div>

          <h2 className="text-5xl font-normal text-[#0f0e0c] leading-tight mb-8" style={{ fontFamily: 'var(--font-shippori)' }}>
            Where <em style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#7a5c3a' }}>Excellence</em> Begins
          </h2>

          <p className="text-lg font-light leading-relaxed text-[#9b9488] mb-12">
            From the misty highlands of Japan to your cup, each bean tells a story of tradition, dedication, and uncompromising quality. We work directly with farmers who share our passion for perfection.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '8', label: 'Sourcing Regions' },
              { number: '100%', label: 'Sustainable' },
              { number: '3000+', label: 'Happy Customers' }
            ].map((stat, idx) => (
              <div key={idx} className="border-t border-[#7a5c3a]/20 pt-5">
                <div className="text-4xl font-normal text-[#0f0e0c]" style={{ fontFamily: 'var(--font-shippori)' }}>
                  {stat.number}
                </div>
                <div className="text-xs tracking-widest uppercase text-[#9b9488] mt-1" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Map */}
        <div className="bg-[#0f0e0c] max-lg:hidden relative overflow-hidden flex items-center justify-center rounded-lg">
          <div className="absolute inset-0 opacity-60 flex items-center justify-center">
            <div className="text-center">
              <div className="text-9xl mb-4" >🗾</div>
            </div>
          </div>

          {/* Pin locations */}
          <div className="absolute inset-0">
            {[
              { name: 'Kyoto', top: '53%', left: '46%', styletop:'-100%', styleleft:'-520%' },
              { name: 'Tokyo', top: '52%', left: '52%', styletop:'-60%', styleleft:'120%' },
              { name: 'Nara', top: '54%', left: '48%', styletop:'80%', styleleft:'10%'}
            ].map((pin, idx) => (
              <div key={idx} className="absolute" style={{ top: pin.top, left: pin.left }}>
                <div className="w-2 h-2 rounded-full bg-[#c8a96e] animate-pin-pulse" />
                <div
                    style={{ top: pin.styletop, left: pin.styleleft }} 
                 className={`absolute text-xs tracking-widest uppercase text-[#c8a96e] whitespace-nowrap`} >
                  {pin.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* shop */}
      <section id="shop" className="bg-[#0f0e0c] py-28 px-12">
        {/* Header */}
        <div className="flex justify-between items-end gap-8 mb-16 max-w-7xl mx-auto pb-16 border-b border-white/7">
          <h2 className="text-5xl font-normal text-[#f4f0e8]" style={{ fontFamily: 'var(--font-shippori)' }}>
            Our Blends
          </h2>
          <a href="#" className="text-xs tracking-widest uppercase text-[#c8a96e] border-b border-[#c8a96e]/30 pb-0.5 hover:border-[#c8a96e] transition-colors whitespace-nowrap" style={{ fontFamily: 'var(--font-dm-mono)' }}>
            View All →
          </a>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-px max-w-7xl mx-auto bg-white/5">
          {products.map((product) => (
            <div key={product.id} className="bg-[#0f0e0c] p-8 cursor-pointer hover:bg-[#161410] transition-colors duration-300 relative overflow-hidden group">
              {/* Accent line */}
              <div className="absolute top-0 left-0 h-px w-0 bg-[#c8a96e] group-hover:w-full transition-all duration-500" />

              {/* Origin */}
              <p className="text-xs tracking-widest uppercase text-[#c8a96e] opacity-70 mb-4" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                {product.origin}
              </p>

              {/* Visual */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-gradient-to-br from-[#4a2e18] to-[#0f0e0c] border border-[#7a5c3a]/20 group-hover:scale-110 group-hover:rotate-5 transition-transform duration-300">
                <span className="text-3xl text-[#c8a96e]">{product.emoji}</span>
              </div>

              {/* Name */}
              <h3 className="text-2xl font-normal text-[#f4f0e8] mb-2" style={{ fontFamily: 'var(--font-shippori)' }}>
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-sm italic text-[#9b9488] mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {product.desc}
              </p>

              {/* Notes */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product?.notes.map((note, idx) => (
                  <span key={idx} className="text-xs tracking-widest uppercase text-[#7a5c3a] border border-[#7a5c3a]/30 px-2 py-1" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                    {note}
                  </span>
                ))}
              </div>

              {/* Price */}
              <div className="text-2xl text-[#f4f0e8] flex items-baseline gap-2" style={{ fontFamily: 'var(--font-shippori)' }}>
                ¥{product.price.toLocaleString()}
                <span className="text-xs text-[#9b9488]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                  / 100g
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className="py-32 px-12 max-w-3xl mx-auto text-center">
        <blockquote className="text-4xl font-light italic leading-relaxed text-[#0f0e0c] relative py-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
          <span className="absolute -top-4 -left-4 text-8xl text-[#7a5c3a]/10" style={{ fontFamily: 'var(--font-shippori)' }}>
            "
          </span>
          Coffee is not just a beverage; it&apos;s a moment of mindfulness, a ritual of connection, and an expression of craft.
        </blockquote>

        <div className="text-xs tracking-widest uppercase text-[#9b9488] mt-8" style={{ fontFamily: 'var(--font-dm-mono)' }}>
          — Kuro Roastery Founder
        </div>

        {/* Divider */}
        <div className="text-3xl text-[#7a5c3a]/15 my-12 letter-spacing-4" style={{ fontFamily: 'var(--font-shippori)' }}>
          ☕ ☕ ☕
        </div>
      </section>

      {/* steps */}
      <section id="process" className="bg-[#2a2825] py-28 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#c8a96e]" />
            <span className="text-xs tracking-widest uppercase text-[#c8a96e]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
              From Farm to Cup
            </span>
          </div>
          <h2 className="text-5xl font-normal text-[#f4f0e8] mb-16" style={{ fontFamily: 'var(--font-shippori)' }}>
            The Kuro Method
          </h2>
          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/8">
            {steps.map((step, idx) => (
              <div key={idx} className="p-8 border-r border-white/8 last:border-r-0">
                <div className="text-xs tracking-widest uppercase text-[#c8a96e] opacity-60 mb-6" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                  {step.number}
                </div>

                <div className="mb-4 text-[#c8a96e]  ">{step.icon}</div>

                <h3 className="text-xl font-normal text-[#f4f0e8] mb-3" style={{ fontFamily: 'var(--font-shippori)' }}>
                  {step.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/40" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe */}
      <section id="subscribe" className="py-28 px-12 grid md:grid-cols-2 gap-12 md:gap-24 max-w-7xl mx-auto">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-normal text-[#0f0e0c] leading-tight mb-6" style={{ fontFamily: 'var(--font-shippori)' }}>
            Never miss a <em style={{ fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', color: '#7a5c3a' }}>roast</em>
          </h2>

          <p className="text-lg font-light leading-relaxed text-[#9b9488] mb-8">
            Subscribe to receive our latest blends delivered fresh to your door each month. Enjoy exclusive access to limited editions and member-only roasts.
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-10">
            {[
              'Fresh beans delivered monthly',
              'Exclusive member blends',
              '10% discount on all purchases',
              'Early access to new roasts'
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-center gap-3 text-sm" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                <span className="w-1 h-1 rounded-full bg-[#c8a96e]" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Form */}
          <form className="flex gap-0">
            <input
              type="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-3 bg-transparent border border-[#7a5c3a]/30 border-r-0 text-[#0f0e0c] text-xs tracking-wider outline-none focus:border-[#c8a96e] transition-colors placeholder:text-[#9b9488]"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            />
            <button
              type="submit"
              className="px-7 py-3 bg-[#0f0e0c] text-[#f4f0e8] text-xs tracking-widest uppercase border border-[#0f0e0c] hover:bg-[#7a5c3a] hover:border-[#7a5c3a] transition-all duration-300"
              style={{ fontFamily: 'var(--font-dm-mono)' }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Right - Visual Card */}
        <div className="relative h-96 flex items-center justify-center">
          <div className="absolute inset-0 -z-10 opacity-20 rounded-lg bg-linear-to-br from-[#7a5c3a] to-transparent" />

          <div className="bg-[#0f0e0c] p-10 max-w-xs z-10 relative">
            <div className="text-xs tracking-widest uppercase text-[#c8a96e] mb-4" style={{ fontFamily: 'var(--font-dm-mono)' }}>
              Premium Subscription
            </div>

            <h3 className="text-3xl font-normal text-[#f4f0e8] mb-2" style={{ fontFamily: 'var(--font-shippori)' }}>
              Connoisseur
            </h3>

            <p className="text-sm italic text-[#9b9488] mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
              For the serious coffee enthusiast
            </p>

            <div className="border-t border-white/7 pt-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase text-[#9b9488]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                  Monthly Bags
                </span>
                <span className="text-2xl text-[#f4f0e8]" style={{ fontFamily: 'var(--font-shippori)' }}>
                  2
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs tracking-widest uppercase text-[#9b9488]" style={{ fontFamily: 'var(--font-dm-mono)' }}>
                  Price
                </span>
                <span className="text-2xl text-[#f4f0e8]" style={{ fontFamily: 'var(--font-shippori)' }}>
                  $49
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
