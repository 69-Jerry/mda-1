import { ArrowRight, Droplets, Laptop, BookOpen } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Water Resource & Agriculture",
      category: "Sustainability",
      image: "/455991774_18061206271720953_6194218305811081143_n.jpg",
      status: "Early Stage",
      progress: 1,
      Icon: Droplets,
    },
    {
      title: "Youth Skills & Entrepreneurship",
      category: "Empowerment",
      image: "/524445973_1341760967957245_7840297303174955587_n.jpg",
      status: "Planned",
      progress: 1,
      Icon: Laptop,
    },
    {
      title: "Education Development",
      category: "Education",
      image: "/456184220_18061206241720953_5588583274442341449_n.jpg",
      status: "Planned",
      progress: 1,
      Icon: BookOpen,
    },
  ];

  return (
    <section className="py-32 premium-gradient text-white relative overflow-hidden">
      {/* Mesh Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-mda-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-mda-pink/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-12 relative z-10">
        <div className="max-w-2xl space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-white/10 uppercase font-bold tracking-[0.3em] text-[10px] text-mda-pink">
            Visionary Growth
          </div>
          <h2 className="text-7xl lg:text-9xl font-display leading-[0.8] tracking-tighter uppercase whitespace-pre-line">
            FEATURED <br />
            <span className="text-mda-pink italic font-serif normal-case text-glow">
              Projects
            </span>
          </h2>
          <p className="font-body text-xl text-white/40 tracking-tight leading-relaxed max-w-lg">
            Strategically investing in sustainable development to secure the
            prosperity of the Mepe Traditional Area.
          </p>
        </div>

        <button className="glass-card text-white px-10 py-5 rounded-2xl font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-mda-maroon transition-all shrink-0 flex items-center gap-3 border-white/10 group active:scale-95">
          View Portfolio
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-2"
          />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12 relative z-10">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            {/* Project Card */}
            <div className="glass-card rounded-[3rem] p-4 h-full border-white/5 hover:border-white/20 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)]">
              <div className="aspect-[14/9] rounded-[2.2rem] overflow-hidden relative mb-8">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  alt={project.title}
                />

                {/* Status Tags */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  <span className="glass-card text-white px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase backdrop-blur-md border-white/20">
                    {project.category}
                  </span>
                  <div className="bg-mda-pink text-white px-4 py-1.5 rounded-full text-[9px] font-bold tracking-widest uppercase flex items-center gap-2 shadow-lg shadow-mda-pink/30">
                    <project.Icon size={12} />
                    {project.status}
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 space-y-6">
                <h3 className="text-4xl font-display leading-tight uppercase tracking-tight group-hover:text-mda-pink transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold tracking-[0.2em] uppercase text-white/40">
                    <span>Maturity</span>
                    <span className="text-white">{project.progress}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden p-[2px]">
                    <div
                      className="h-full bg-gradient-to-r from-mda-pink to-white rounded-full transition-all duration-[1.5s] relative"
                      style={{ width: `${project.progress}%` }}
                    >
                      <div className="absolute inset-x-0 inset-y-0 shadow-[0_0_15px_rgba(244,114,182,0.8)]" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
                    Alpha V.1
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 hover:text-mda-pink transition-colors cursor-pointer group-hover:border-white/10 border border-transparent">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
