import { Camera, Layers, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = [
    {
      src: "/456251856_18061206280720953_4691208955845474968_n.jpg",
      title: "Mepe Tradition",
    },
    {
      src: "/455800117_18061206196720953_4456184814691688723_n.jpg",
      title: "Festival Spirit",
    },
    {
      src: "/Kente-Cloth-Ghanas-Cultural-Gold-Mine_010925-1-scaled.jpg",
      title: "Cultural Artistry",
    },
    { src: "/images_Banku_And_Okro_Soup_277506581.jpg", title: "Local Tastes" },
    { src: "/Makola-Market-Accra.jpg", title: "Market Life" },
    {
      src: "/455991774_18061206271720953_6194218305811081143_n.jpg",
      title: "River Volta",
    },
    {
      src: "/456130250_18061206187720953_8453159004960842026_n.jpg",
      title: "Rhythm of Mepe",
    },
    {
      src: "/456328911_18061206232720953_4587617597907394016_n.jpg",
      title: "Mepe Landscape",
    },
    {
      src: "/456132438_18061206193720953_3368855995947669246_n.jpg",
      title: "Development Site",
    },
    {
      src: "/456184220_18061206241720953_5588583274442341449_n.jpg",
      title: "Future Leaders",
    },
    {
      src: "/524445973_1341760967957245_7840297303174955587_n.jpg",
      title: "Skills Training",
    },
    {
      src: "/455721395_18061206301720953_6554931698407349356_n.jpg",
      title: "Community Unity",
    },
    {
      src: "/456217266_18061206190720953_9190619641682968041_n.jpg",
      title: "Heritage",
    },
    {
      src: "/456314736_18061206244720953_3574851341763144433_n.jpg",
      title: "Project Progress",
    },
    {
      src: "/505730882_1301467045319971_4163705806737903282_n.jpg",
      title: "Youth Mentorship",
    },
    { src: "/51030396.jpg", title: "Community Life" },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (1).jpeg",
      title: "Community Moment",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (2).jpeg",
      title: "Local Interaction",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (3).jpeg",
      title: "Project Site",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (4).jpeg",
      title: "Village Scene",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (5).jpeg",
      title: "Traditional Event",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (6).jpeg",
      title: "Market Scene",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (7).jpeg",
      title: "Nature & Life",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (8).jpeg",
      title: "Landscape View",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (9).jpeg",
      title: "Community Members",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (10).jpeg",
      title: "Education Project",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (11).jpeg",
      title: "Skills Hub",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (12).jpeg",
      title: "Future Prospects",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (13).jpeg",
      title: "Local Heritage",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (14).jpeg",
      title: "Tradition Alive",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (15).jpeg",
      title: "Community Growth",
    },
    {
      src: "/WhatsApp Image 2026-03-12 at 06.48.02 (16).jpeg",
      title: "Mepe Forward",
    },
  ];

  const nextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setSelectedIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Header */}
      <section className="relative py-40 bg-mda-maroon overflow-hidden min-h-[60vh] flex items-center">
        {/* Animated Mesh Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mda-pink/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-mda-pink/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-20 animate-reveal">
          <div className="max-w-4xl space-y-12">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-white/10 uppercase font-bold tracking-[0.3em] text-[10px] text-mda-pink">
              <Camera size={16} className="text-mda-pink" />
              Visual Protocol
            </div>
            <h1 className="text-8xl lg:text-[11rem] font-display leading-[0.8] mb-8 uppercase text-white tracking-tighter">
              MEPE <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                Gallery
              </span>
            </h1>
            <p className="font-body text-2xl text-white/50 leading-relaxed max-w-2xl border-l border-mda-pink/30 pl-10">
              A comprehensive intelligence archive of moments, culture, and
              strategic progress within the Mepe community.
            </p>
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24 px-8 relative bg-white">
        {/* Bespoke Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#5D1A1A 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-12 space-y-12 relative z-10">
          {images.map((image, i) => (
            <div
              key={i}
              onClick={() => setSelectedIndex(i)}
              className="break-inside-avoid group relative rounded-[3rem] overflow-hidden bg-white shadow-xl hover:shadow-[0_40px_80px_-20px_rgba(93,26,26,0.15)] transition-all duration-700 cursor-pointer border border-mda-maroon/5 p-3"
            >
              <div className="aspect-auto rounded-[2.5rem] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
              </div>

              {/* Minimalist Overlay */}
              <div className="absolute inset-x-8 bottom-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest bg-mda-maroon/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-mda-dark/98 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-500"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Lightbox Mesh */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mda-pink/10 rounded-full blur-[150px] pointer-events-none" />

          <button
            className="absolute top-12 right-12 text-white/40 hover:text-mda-pink transition-all hover:rotate-90 z-[110]"
            onClick={() => setSelectedIndex(null)}
          >
            <X size={48} />
          </button>

          <div className="absolute left-12 flex flex-col gap-4 z-[110]">
            <button
              className="text-white/30 hover:text-mda-pink transition-all hover:-translate-x-2 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-xl"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={48} />
            </button>
          </div>

          <div className="absolute right-12 flex flex-col gap-4 z-[110]">
            <button
              className="text-white/30 hover:text-mda-pink transition-all hover:translate-x-2 bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-xl"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={48} />
            </button>
          </div>

          <div
            className="relative max-w-6xl w-full max-h-[85vh] flex flex-col items-center gap-12"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full relative rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.5)] border border-white/5 bg-black/50 p-4 animate-in zoom-in-95 duration-700">
              <img
                src={images[selectedIndex].src}
                alt={images[selectedIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-[3rem]"
              />
            </div>

            <div className="text-center space-y-6 animate-in slide-in-from-bottom-12 duration-1000">
              <h3 className="text-6xl lg:text-8xl font-display text-white uppercase italic tracking-tighter">
                {images[selectedIndex].title}
              </h3>
              <div className="h-0.5 w-32 bg-mda-pink mx-auto" />
              <p className="text-mda-pink font-bold text-xs tracking-[0.4em] uppercase">
                Protocol Entry {selectedIndex + 1} // {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-40 bg-mda-cream relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center space-y-12">
          <div className="w-20 h-20 bg-mda-maroon rounded-3xl flex items-center justify-center mx-auto mb-12 shadow-2xl">
            <Layers className="text-mda-pink" size={40} />
          </div>
          <h2 className="text-7xl lg:text-9xl font-display text-mda-maroon uppercase leading-none tracking-tighter">
            CITIZEN <br />
            <span className="text-mda-pink italic font-serif normal-case text-glow">
              Archives
            </span>
          </h2>
          <p className="font-body text-mda-dark/40 text-2xl max-w-2xl mx-auto leading-relaxed border-t border-mda-maroon/5 pt-12">
            Do you possess archival footage or high-intelligence documentation
            of Mepe's evolution? Contribute to the collective memory.
          </p>
          <button className="premium-gradient text-white px-16 py-7 rounded-3xl font-bold uppercase tracking-[0.3em] hover:shadow-[0_40px_80px_-20px_rgba(93,26,26,0.3)] hover:-translate-y-2 transition-all">
            Initiate Submission
          </button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
