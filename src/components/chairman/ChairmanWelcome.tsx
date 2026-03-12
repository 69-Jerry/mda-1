const ChairmanWelcome = () => {
  return (
    <section className="py-32 bg-mda-cream relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mda-maroon/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-mda-pink/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Chairman Image Layer */}
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden glass-card p-4 relative z-10 scale-95 group-hover:scale-100 transition-all duration-700">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden">
                <img
                  src="/chairman.jpeg"
                  alt="Chairman of MDA"
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                />
              </div>
            </div>

            {/* Animated Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-full h-full border-[12px] border-mda-maroon/5 rounded-[4rem] -z-0 animate-float" />
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-mda-pink/10 rounded-full blur-3xl animate-pulse-glow" />

            {/* Signature Floating Widget */}
            <div className="absolute -bottom-4 right-10 glass-card p-6 px-8 rounded-2xl z-20 shadow-2xl animate-float delay-1000">
              <div className="text-[10px] font-bold tracking-[0.3em] text-mda-maroon uppercase mb-1">
                Official Welcome
              </div>
              <div className="w-12 h-0.5 bg-mda-pink" />
            </div>
          </div>

          {/* Message Content */}
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-mda-maroon/10">
                <span className="w-2 h-2 bg-mda-pink rounded-full animate-pulse" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-mda-maroon uppercase">
                  Message from the Chairman
                </span>
              </div>

              <h2 className="text-6xl lg:text-8xl font-display text-mda-maroon leading-[0.8] uppercase tracking-tighter">
                LEADERSHIP & <br />
                <span className="text-mda-pink italic font-serif normal-case text-glow">
                  Visionary Growth
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-mda-dark/70 text-lg leading-relaxed font-body border-l-2 border-mda-pink/20 pl-10 py-2">
              <p className="font-semibold text-mda-maroon text-2xl italic tracking-tight">
                "It is with great honor and pride that I welcome you to our
                active community."
              </p>
              <p>
                As Chairman of the Mepe Development Association, my vision is to
                foster a community driven by innovation, tradition, and
                collective growth. Mepe is not just a geographical location; it
                is a living testament to resilience.
              </p>
              <p>
                We invite you to explore our progress, engage with our rich
                heritage, and join us in this journey towards a prosperous
                future for every citizen.
              </p>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-mda-pink shadow-lg">
                <img
                  src="/chairman.jpeg"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl text-mda-maroon tracking-tight">
                  Mr. Bismark Fiifi Tetteh
                </span>
                <span className="text-mda-pink font-bold tracking-[0.2em] uppercase text-[10px]">
                  Chairman, Mepe Development Association
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanWelcome;
