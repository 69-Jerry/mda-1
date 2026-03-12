import {
  CheckCircle2,
  Compass,
  ArrowRight,
  Droplets,
  Laptop,
  Store,
  Landmark,
  BookOpen,
  Trophy,
  Heart,
  ShieldCheck,
  Zap,
  Hammer,
} from "lucide-react";

const ProjectsPage = () => {
  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-mda-maroon overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Mesh Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-mda-pink/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-mda-pink/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-mda-pink animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                Strategic Impact
              </span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-display text-white leading-[0.85] mb-8 uppercase">
              Community <br />
              <span className="text-mda-pink italic font-serif lowercase">
                Vision
              </span>
            </h1>
            <p className="font-body text-xl text-white/60 max-w-2xl leading-relaxed">
              Building a stronger and more prosperous Mepe for future
              generations through education, economic development, and
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Water Resource & Agriculture Projects */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-maroon/5 rounded-full text-mda-maroon">
                  <Droplets size={14} className="text-mda-pink" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Category 01
                  </span>
                </div>
                <h2 className="text-6xl font-display text-mda-maroon leading-tight uppercase">
                  Water & <br /> Agriculture
                </h2>
              </div>
              <p className="font-body text-lg text-mda-dark/60 leading-relaxed max-w-xl">
                Leveraging the water bodies around Mepe to create sustainable
                opportunities for resident aquaculture and year-round farming.
              </p>

              <div className="grid sm:grid-cols-2 gap-10">
                <div className="space-y-4 group">
                  <h3 className="text-2xl font-display text-mda-maroon uppercase flex items-center gap-3">
                    <span className="w-8 h-px bg-mda-pink" />
                    Fish Farming
                  </h3>
                  <p className="text-sm font-body text-mda-dark/50 leading-relaxed">
                    Aquaculture projects training youth and creating employment
                    through production.
                  </p>
                </div>
                <div className="space-y-4 group">
                  <h3 className="text-2xl font-display text-mda-maroon uppercase flex items-center gap-3">
                    <span className="w-8 h-px bg-mda-pink" />
                    Irrigation
                  </h3>
                  <p className="text-sm font-body text-mda-dark/50 leading-relaxed">
                    Supporting year-round vegetable farming through modern
                    irrigation systems.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 aspect-square group relative">
              <div className="absolute -inset-4 bg-mda-maroon/5 rounded-[4rem] blur-2xl group-hover:bg-mda-pink/10 transition-colors duration-700" />
              <div className="relative h-full bg-mda-maroon rounded-[4rem] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1541448905645-31bc3387b9b1?q=80&w=2070&auto=format&fit=crop"
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 group-hover:opacity-100"
                  alt="Water Projects"
                />
                <div className="absolute inset-x-8 bottom-8 glass-card p-8 text-white">
                  <h4 className="text-xl font-display uppercase mb-1">
                    Training Farm
                  </h4>
                  <p className="text-xs font-body opacity-60">
                    A practical center for modern farming techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Youth & Entrepreneurship Development */}
      <section className="py-32 bg-mda-maroon overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 grid grid-cols-2 gap-6">
              {[
                { icon: Zap, label: "Soap Prod" },
                { icon: Hammer, label: "Business" },
                { icon: Droplets, label: "Fishing" },
                { icon: Trophy, label: "Sports" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="aspect-square glass-card flex flex-col items-center justify-center gap-4 group hover:bg-mda-pink transition-all duration-700 cursor-default"
                >
                  <item.icon
                    size={32}
                    className="text-mda-pink group-hover:text-mda-maroon transition-colors"
                  />
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white group-hover:text-mda-maroon text-center px-4">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-mda-pink">
                  <Laptop size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Category 02
                  </span>
                </div>
                <h2 className="text-6xl font-display text-white leading-[0.85] uppercase">
                  Youth & <br />
                  <span className="text-mda-pink italic font-serif">
                    Entrepreneurship
                  </span>
                </h2>
              </div>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                Reducing unemployment by training youth in practical skills
                including poultry, fish farming, and soap production.
              </p>
              <div className="p-8 glass-card border-white/5">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-mda-pink/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-mda-pink" />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-white uppercase italic">
                      Leadership & Service
                    </h4>
                    <p className="text-sm text-white/50 mt-2">
                      Mentorship programs for next-gen leaders and volunteers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Education Development Projects */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-maroon/5 rounded-full text-mda-maroon">
              <BookOpen size={14} className="text-mda-pink" />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Category 03
              </span>
            </div>
            <h2 className="text-6xl font-display text-mda-maroon uppercase">
              Education <br /> Development
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="p-16 glass-card bg-mda-cream/30 border-mda-maroon/5 space-y-10 group hover:bg-white transition-colors duration-700">
              <h3 className="text-4xl font-display text-mda-maroon uppercase leading-tight italic">
                Annual Speech & <br /> Prize Giving
              </h3>
              <p className="font-body text-mda-dark/60 leading-relaxed">
                Rewarding excellence to encourage academic growth and cultural
                pride across all Mepe schools.
              </p>
              <div className="flex flex-col gap-4">
                {["Academic Awards", "Leadership Awards", "Cultural Pride"].map(
                  (award) => (
                    <div
                      key={award}
                      className="flex items-center gap-4 text-mda-maroon font-bold text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform"
                    >
                      <Trophy size={16} className="text-mda-pink" /> {award}
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="p-16 bg-mda-maroon rounded-[4rem] space-y-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-mda-pink opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-4xl font-display text-white uppercase leading-tight">
                  Scholarship <br /> Fund
                </h3>
                <p className="font-body text-white/60 leading-relaxed max-w-sm mt-6">
                  Financial support for students pursuing SHS, University, and
                  Technical education.
                </p>
                <button className="mt-12 bg-white text-mda-maroon px-10 py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-mda-pink transition-all transform hover:-translate-y-1">
                  Apply for Fund
                </button>
              </div>
              <BookOpen
                size={300}
                className="absolute -right-20 -bottom-20 opacity-[0.03] text-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Trader & Business Development */}
      <section className="py-32 px-8 bg-mda-cream/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-pink/10 rounded-full text-mda-pink">
                <Store size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Category 04
                </span>
              </div>
              <h2 className="text-6xl font-display text-mda-maroon leading-tight uppercase">
                Trader & <br /> Business
              </h2>
            </div>
            <p className="font-body text-lg text-mda-dark/60 leading-relaxed max-w-xl">
              Improving profitability of local businesses through financial
              management training and cooperative networking.
            </p>
            <div className="grid gap-6">
              {[
                {
                  title: "Training",
                  text: "Profit calculation, record keeping, and service skills.",
                },
                {
                  title: "Networking",
                  text: "Bulk buying systems to reduce costs and grow scale.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-8 glass-card bg-white border-mda-maroon/5 group hover:border-mda-pink/30 transition-colors"
                >
                  <div className="w-1 h-full rounded-full bg-mda-pink/20 group-hover:bg-mda-pink transition-colors shrink-0" />
                  <div>
                    <h4 className="font-display text-xl text-mda-maroon uppercase">
                      {item.title}
                    </h4>
                    <p className="text-sm font-body text-mda-dark/40 mt-1">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/5] bg-mda-maroon rounded-[4rem] overflow-hidden group relative">
            <img
              src="/Makola-Market-Accra.jpg"
              className="w-full h-full object-cover transition-all duration-1000"
              alt="Market"
            />
            <div className="absolute inset-x-8 bottom-8 glass-card p-8">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                Economic Growth
              </span>
              <h4 className="text-xl font-display text-white uppercase mt-2">
                Local Enterprise Support
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* 5. & 6. Infrastructure & Tourism Hub */}
      <section className="py-32 bg-mda-maroon text-white relative">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1 aspect-square glass-card rounded-[4rem] p-12 flex flex-col items-center justify-center text-center space-y-8 group">
              <div className="w-24 h-24 rounded-full bg-mda-pink/10 flex items-center justify-center group-hover:bg-mda-pink/20 transition-colors">
                <Landmark size={48} className="text-mda-pink" />
              </div>
              <h4 className="text-4xl font-display uppercase italic text-mda-pink">
                MDA Office <br /> Complex
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {["ICT Hub", "Library", "Conf Hall", "Admin"].map((f) => (
                  <span
                    key={f}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-mda-pink">
                  <Compass size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">
                    Cat 05 & 06
                  </span>
                </div>
                <h2 className="text-6xl font-display leading-[0.85] uppercase">
                  Community <br />
                  <span className="text-mda-pink italic font-serif">
                    Infrastructure
                  </span>
                </h2>
              </div>
              <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
                Developing modern durbar grounds and the Mepe Community Museum
                to preserve our heritage and cultural artifacts.
              </p>
              <div className="p-10 glass-card bg-mda-pink text-mda-maroon border-none">
                <h3 className="text-2xl font-display uppercase mb-4 italic">
                  Heritage Park
                </h3>
                <p className="text-sm font-body opacity-80 leading-relaxed">
                  A multi-phase project combining the museum, cultural village,
                  and craft markets into a premier destination.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. & 8. Family & Peace Initiatives */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="glass-card p-16 border-mda-maroon/5 space-y-8 relative overflow-hidden group hover:border-mda-pink/30 transition-colors">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-pink/10 rounded-full text-mda-pink">
              <Heart size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Category 07
              </span>
            </div>
            <h2 className="text-5xl font-display text-mda-maroon uppercase leading-[0.9]">
              Family & <br /> Parenting
            </h2>
            <p className="font-body text-mda-dark/60 leading-relaxed max-w-xs">
              Education programs for parents covering child development to
              strengthen family structures.
            </p>
            <Heart
              size={200}
              className="absolute -right-10 -bottom-10 opacity-[0.03] text-mda-maroon group-hover:scale-110 transition-transform duration-1000"
            />
          </div>

          <div className="glass-card p-16 border-mda-maroon/5 bg-mda-cream/30 space-y-8 relative overflow-hidden group hover:border-mda-maroon/20 transition-colors">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-maroon/10 rounded-full text-mda-maroon">
              <ShieldCheck size={14} />
              <span className="text-[10px] font-bold uppercase tracking-widest">
                Category 08
              </span>
            </div>
            <h2 className="text-5xl font-display text-mda-maroon uppercase leading-[0.9]">
              Peace & <br /> Leadership
            </h2>
            <p className="font-body text-mda-dark/60 leading-relaxed max-w-xs">
              Ensuring unity among leaders and residents through effective
              mentorship and dialogue.
            </p>
            <ShieldCheck
              size={200}
              className="absolute -right-10 -bottom-10 opacity-[0.03] text-mda-maroon group-hover:rotate-12 transition-transform duration-1000"
            />
          </div>
        </div>
      </section>

      {/* Final Support CTA */}
      <section className="py-24 px-8 mb-24">
        <div className="max-w-7xl mx-auto rounded-[4rem] p-2 bg-mda-maroon overflow-hidden">
          <div className="bg-mda-maroon rounded-[3.8rem] p-16 lg:p-32 text-center text-white space-y-12 relative overflow-hidden">
            {/* Mesh background for CTA */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1540324155974-7523202daa3f?q=80&w=2030&auto=format&fit=crop')] bg-center bg-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-t from-mda-maroon via-transparent to-transparent" />

            <div className="relative z-10 space-y-10">
              <div className="space-y-6">
                <h2 className="text-6xl lg:text-8xl font-display uppercase leading-[0.85]">
                  Support Our <br />
                  <span className="text-mda-pink italic font-serif">
                    Mission
                  </span>
                </h2>
                <p className="max-w-2xl mx-auto font-body text-lg text-white/60 leading-relaxed">
                  The success of these projects depends on collaboration between
                  community members, diaspora supporters, and development
                  partners.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center pt-4">
                <button className="bg-mda-pink text-mda-maroon px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white transition-all transform hover:-translate-y-1 inline-flex items-center gap-4">
                  Donate Now <ArrowRight size={18} />
                </button>
                <button className="glass-card hover:bg-white/10 px-12 py-6 rounded-2xl font-bold uppercase tracking-widest text-[10px] transition-all border-white/20">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
