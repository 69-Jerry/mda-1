const History = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-mda-maroon/5 -skew-x-12 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-mda-pink/10 border border-mda-pink/20 rounded-full mb-6">
              <span className="text-xs font-bold tracking-widest text-mda-maroon uppercase font-body">
                Our Roots & Legacy
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-display text-mda-maroon leading-none mb-8">
              A JOURNEY THROUGH <br />
              <span className="text-mda-pink italic font-serif normal-case text-4xl lg:text-5xl">
                Our Shared History
              </span>
            </h2>

            <div className="space-y-6 text-mda-dark/80 text-lg leading-relaxed font-body">
              <p>
                The history of Mepe is a vibrant tapestry woven with resilience
                and traditional excellence. As one of the prominent traditional
                areas in the North Tongu District, our people have long served
                as guardians of the lower Volta, maintaining a culture that
                balances venerable tradition with a forward-looking spirit.
              </p>
              <p>
                From our ancestral migrations to the establishment of our seven
                clans, every milestone has been marked by unity. The legendary
                "Apetorku" deity remains a symbol of our spiritual strength,
                while our annual festival celebrates our victory over challenges
                and our commitment to progress.
              </p>
              <p className="font-semibold text-mda-maroon">
                Today, Mepe stands as a beacon of cultural pride, inviting the
                world to experience the depth of our heritage and the warmth of
                our hospitality.
              </p>
            </div>

            <button className="mt-10 group flex items-center gap-3 text-mda-maroon font-bold uppercase tracking-wider text-sm">
              Discover Full History
              <span className="w-10 h-[2px] bg-mda-maroon group-hover:w-16 transition-all duration-300" />
            </button>
          </div>

          <div className="order-1 lg:order-2 relative group">
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-mda-cream">
              <img
                src="/456251856_18061206280720953_4691208955845474968_n.jpg"
                alt="Mepe Historical Site"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-mda-maroon/20 mix-blend-multiply" />
            </div>
            {/* Floating decorative cards */}
            <div className="absolute -top-4 -right-4 bg-mda-yellow p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
              <span className="block text-4xl font-display text-mda-maroon tracking-tighter">
                100+
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-mda-maroon/60">
                Years of Heritage
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-mda-maroon p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <span className="block text-2xl font-display text-mda-pink leading-none">
                SEVEN CLANS
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">
                United as One
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
