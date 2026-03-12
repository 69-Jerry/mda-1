import { Trophy, Users, Shield, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-mda-maroon overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Mesh Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mda-pink/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-mda-maroon to-transparent" />

        <div className="max-w-7xl mx-auto px-8 relative z-10 animate-reveal">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-white/10 uppercase font-bold tracking-[0.3em] text-[10px] text-mda-pink">
              Our Identity
            </div>
            <h1 className="text-8xl lg:text-[10rem] font-display leading-[0.8] mb-8 uppercase text-white tracking-tighter">
              BEYOND <br />
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                Development
              </span>
            </h1>
            <p className="font-body text-2xl text-white/50 leading-relaxed max-w-2xl border-l border-mda-pink/30 pl-8">
              The Mepe Development Association (MDA) stands as the visionary
              secular wing of the Mepe Traditional Area, dedicated to
              sustainable growth and cultural preservation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 relative overflow-hidden text-center lg:text-left">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 relative z-10">
          <div className="space-y-10 group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-1 bg-mda-pink group-hover:w-24 transition-all duration-700" />
              <h2 className="text-5xl font-display text-mda-maroon uppercase tracking-tighter">
                OUR VISION
              </h2>
            </div>
            <p className="font-body text-xl text-mda-dark/60 leading-relaxed italic">
              "To transform Mepe into a model community in Ghana, where every
              citizen has access to world-class education, quality healthcare,
              and sustainable economic opportunities."
            </p>
          </div>
          <div className="space-y-10 group">
            <div className="flex items-center gap-6">
              <div className="w-16 h-1 bg-mda-pink group-hover:w-24 transition-all duration-700" />
              <h2 className="text-5xl font-display text-mda-maroon uppercase tracking-tighter">
                OUR MISSION
              </h2>
            </div>
            <p className="font-body text-xl text-mda-dark/60 leading-relaxed">
              We mobilize high-level resources and coordinate community-driven
              initiatives to improve the lives of our people through
              transparency, accountability, and inclusive development.
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Leadership Structure */}
      <section className="py-32 premium-gradient text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-mda-pink/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-white/10 uppercase font-bold tracking-[0.3em] text-[10px] text-mda-pink">
            Governance
          </div>
          <h2 className="text-7xl lg:text-9xl font-display uppercase leading-[0.8] tracking-tighter">
            TRADITIONAL <br />
            <span className="text-mda-pink italic font-serif normal-case text-glow">
              Leadership
            </span>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {[
            {
              role: "Manfiaga",
              title: "Queen Mother",
              desc: "The custodian of women's affairs and advisor to the Paramount Chief.",
            },
            {
              role: "Togbe Worgbedzi",
              title: "Paramount Chief",
              desc: "The highest traditional authority and custodian of Mepe's heritage.",
            },
            {
              role: "Clan Heads",
              title: "Togbe / Mama",
              desc: "Leaders of the seven clans responsible for local governance.",
            },
            {
              role: "The Council",
              title: "Elders",
              desc: "Wise representatives providing counsel on traditional matters.",
            },
          ].map((leader, i) => (
            <div
              key={i}
              className="glass-card p-10 rounded-[3rem] border-white/5 group hover:border-white/20 transition-all duration-700 hover:-translate-y-2"
            >
              <div className="text-[10px] font-bold tracking-[0.3em] text-mda-pink mb-10 uppercase transition-colors">
                {leader.role}
              </div>
              <h3 className="text-3xl font-display mb-6 leading-tight uppercase tracking-tight">
                {leader.title}
              </h3>
              <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/80 transition-all">
                {leader.desc}
              </p>
              <div className="mt-8 w-8 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-3 gap-16 text-center lg:text-left">
            {[
              {
                icon: Users,
                title: "Unity",
                text: "Bringing together all Mepe citizens, at home and abroad, under one agenda.",
              },
              {
                icon: Shield,
                title: "Heritage",
                text: "Protecting and promoting the sacred traditions and historical values.",
              },
              {
                icon: Trophy,
                title: "Excellence",
                text: "Striving for the highest standards in every project we undertake.",
              },
            ].map((pillar, i) => (
              <div key={i} className="space-y-8 group">
                <div
                  className="w-24 h-24 glass-card rounded-3xl flex items-center justify-center transition-all duration-700 group-hover:bg-mda-maroon animate-float"
                  style={{ animationDelay: `${i * 300}ms` }}
                >
                  <pillar.icon
                    size={40}
                    className="text-mda-maroon transition-colors group-hover:text-mda-pink"
                  />
                </div>
                <h3 className="text-4xl font-display text-mda-maroon uppercase tracking-tighter">
                  {pillar.title}
                </h3>
                <p className="font-body text-xl text-mda-dark/40 leading-relaxed">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40 bg-mda-maroon text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-mda-pink/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-32 items-center relative z-10">
          <div className="relative group transition-all duration-1000">
            <div className="aspect-[4/5] glass-card p-4 rounded-[4rem] group-hover:rotate-2 transition-transform duration-700">
              <div className="w-full h-full rounded-[3.5rem] overflow-hidden">
                <img
                  src="/455721395_18061206301720953_6554931698407349356_n.jpg"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  alt="Community Meeting"
                />
              </div>
            </div>
            {/* Decorative Float */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-mda-pink/10 rounded-full blur-2xl animate-pulse-glow" />
          </div>

          <div className="space-y-12">
            <h2 className="text-7xl lg:text-9xl font-display leading-[0.8] tracking-tighter uppercase whitespace-pre-line">
              HISTORY OF <br />
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                Service
              </span>
            </h2>
            <div className="space-y-8 font-body text-lg text-white/50 leading-relaxed border-l border-mda-pink/20 pl-10">
              <p>
                Founded decades ago, the Mepe Development Association (MDA) has
                evolved into a sophisticated organization that serves as the
                secular development wing of the Traditional Area.
              </p>
              <p>
                We work in close collaboration with the Mepe Traditional Council
                to ensure development efforts align with cultural values and
                respect our lineage.
              </p>
            </div>
            <button className="premium-gradient text-white px-12 py-6 rounded-2xl font-bold tracking-widest text-xs uppercase hover:shadow-2xl transition-all border border-white/10 group flex items-center gap-4">
              Explore Lineage
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
