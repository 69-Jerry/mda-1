import {
  MapPin,
  ArrowRight,
  Calendar,
  Music,
  BookOpen,
  Users,
  Trophy,
} from "lucide-react";

const EventsPage = () => {
  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 bg-mda-maroon overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Mesh Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] bg-mda-pink/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-mda-pink/5 rounded-full blur-[100px] animate-pulse delay-700" />
        </div>

        <div className="max-w-7xl mx-auto px-8 relative z-10 w-full">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-mda-pink animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-white/60 uppercase">
                Cultural Pulse
              </span>
            </div>
            <h1 className="text-7xl lg:text-9xl font-display text-white leading-[0.85] mb-8 uppercase">
              Community <br />
              <span className="text-mda-pink italic font-serif lowercase">
                Calendar
              </span>
            </h1>
            <p className="font-body text-xl text-white/60 max-w-2xl leading-relaxed">
              Celebrating unity, culture, and development through vibrant
              gatherings and shared experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-32 px-8 bg-white/50 backdrop-blur-sm border-b border-mda-maroon/5">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-5xl font-display text-mda-maroon uppercase italic">
            Celebrating Our <span className="text-mda-pink">Unity</span>
          </h2>
          <p className="font-body text-xl text-mda-dark/70 leading-relaxed">
            Events and festivals play a central role in bringing the community
            together. They celebrate our rich heritage, promote unity, and
            create opportunities for youth and community engagement.
          </p>
        </div>
      </section>

      {/* Cultural Festivals */}
      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-mda-pink/10 rounded-full text-mda-pink">
                <Music size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Heritage Celebrations
                </span>
              </div>
              <h2 className="text-6xl font-display text-mda-maroon leading-tight uppercase">
                Cultural <br /> Festivals
              </h2>
            </div>
            <p className="font-body text-lg text-mda-dark/60 leading-relaxed max-w-xl">
              Our annual festivals attract visitors and help promote Mepe’s
              cultural heritage through vibrant durbars and performances.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                "Traditional Durbars",
                "Dance Competitions",
                "Food Festivals",
                "Boat Regatta",
              ].map((fest, i) => (
                <div
                  key={i}
                  className="p-6 glass-card border-mda-maroon/5 font-display text-mda-maroon text-xl uppercase italic group hover:bg-white transition-all duration-500"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-mda-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                    {fest}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[4/3] bg-mda-maroon rounded-[4rem] overflow-hidden group relative">
            <img
              src="/456132438_18061206193720953_3368855995947669246_n.jpg"
              className="w-full h-full object-cover transition-all duration-1000"
              alt="Festival"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-mda-maroon/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Educational Events */}
      <section className="py-32 bg-mda-maroon relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 aspect-video glass-card rounded-[3rem] overflow-hidden relative group">
            <img
              src="/456184220_18061206241720953_5588583274442341449_n.jpg"
              className="w-full h-full object-cover transition-all duration-1000"
              alt="Education"
            />
            <div className="absolute inset-0 border border-white/10 rounded-[3rem] pointer-events-none" />
          </div>
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-mda-pink">
                <BookOpen size={14} />
                <span className="text-[10px] font-bold uppercase tracking-widest">
                  Academic Excellence
                </span>
              </div>
              <h2 className="text-6xl font-display text-white leading-tight uppercase">
                Educational <br />
                <span className="text-mda-pink italic font-serif">Events</span>
              </h2>
            </div>
            <p className="font-body text-lg text-white/60 leading-relaxed max-w-xl">
              We organize inter-school competitions, cultural quizzes, and
              excellence awards to inspire the next generation.
            </p>
            <button className="flex items-center gap-4 text-mda-pink font-bold uppercase tracking-widest text-[10px] border-b border-mda-pink/30 pb-3 hover:border-mda-pink transition-colors group">
              View School Programs
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Community Meetings & Youth Activities */}
      <section className="py-32 px-8 bg-mda-cream/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Meetings */}
          <div className="p-16 glass-card bg-white border-mda-maroon/5 space-y-10 group hover:border-mda-pink/30 transition-all">
            <div className="w-16 h-16 rounded-2xl bg-mda-maroon flex items-center justify-center text-white mb-8 group-hover:bg-mda-pink group-hover:text-mda-maroon transition-colors duration-500">
              <Users size={32} />
            </div>
            <h3 className="text-4xl font-display text-mda-maroon uppercase">
              Community <br /> Forums
            </h3>
            <p className="font-body text-mda-dark/60 leading-relaxed">
              Regular forums for residents and leaders to discuss development,
              promoting collaboration and transparency.
            </p>
            <div className="flex items-center gap-4 text-mda-maroon font-bold text-[10px] uppercase tracking-widest pt-4">
              <div className="w-8 h-px bg-mda-pink" />
              <Calendar size={14} />
              Next: Town Hall Q3
            </div>
          </div>
          {/* Youth Activities */}
          <div className="p-16 glass-card bg-mda-maroon text-white border-none space-y-10 relative overflow-hidden group">
            <div className="absolute inset-0 bg-mda-pink opacity-0 group-hover:opacity-5 transition-opacity" />
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center text-mda-pink mb-8 group-hover:bg-mda-pink group-hover:text-mda-maroon transition-colors duration-500">
              <Trophy size={32} />
            </div>
            <h3 className="text-4xl font-display uppercase italic">
              Youth <br /> Initiatives
            </h3>
            <p className="font-body text-white/60 leading-relaxed">
              Sports competitions and leadership workshops designed to prepare
              the next generation of Mepe leaders.
            </p>
            <div className="flex items-center gap-4 text-white font-bold text-[10px] uppercase tracking-widest pt-4 relative z-10">
              <div className="w-8 h-px bg-mda-pink" />
              <MapPin size={14} className="text-mda-pink" />
              Community Centre
            </div>
            <Trophy
              size={300}
              className="absolute -right-20 -bottom-20 opacity-[0.03] text-white pointer-events-none"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
