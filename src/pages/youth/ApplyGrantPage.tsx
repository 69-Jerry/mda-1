import {
  ArrowLeft,
  Send,
  Sparkles,
  GraduationCap,
  Briefcase,
  User,
  Mail,
  Phone,
  Calendar,
  Upload,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ApplyGrantPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="bg-mda-cream min-h-screen flex items-center justify-center px-4 py-8 md:p-8">
        <div className="max-w-2xl w-full glass-card bg-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-[0_40px_100px_-20px_rgba(93,26,26,0.15)] border-white space-y-8 md:space-y-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-20 md:w-28 h-20 md:h-28 bg-mda-maroon rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-float">
            <Send className="w-10 md:w-12 h-10 md:h-12 text-mda-pink" />
          </div>
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-4xl md:text-6xl font-display text-mda-maroon uppercase tracking-tighter leading-tight md:leading-none">
              TRANSMISSION <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case">
                Complete
              </span>
            </h2>
            <p className="font-body text-mda-dark/40 text-lg md:text-xl leading-relaxed">
              Inquiry received. Our strategic committee will evaluate your
              credentials and respond via authenticated email within 14
              protocols.
            </p>
          </div>
          <Link
            to="/youth"
            className="inline-flex glass-card bg-mda-maroon text-white px-10 md:px-16 py-5 md:py-7 rounded-2xl md:rounded-3xl font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px] hover:bg-mda-pink transition-all shadow-xl"
          >
            Return to Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Header */}
      <section className="relative py-20 md:py-40 bg-mda-maroon overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center">
        {/* Animated Mesh Glows */}
        <div className="absolute top-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-mda-pink/10 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-20 animate-reveal">
          <Link
            to="/youth"
            className="inline-flex items-center gap-3 text-white/40 hover:text-mda-pink transition-all mb-12 md:mb-16 font-bold uppercase tracking-[0.4em] text-[8px] md:text-[10px] group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-2 transition-transform"
            />
            Abort to Youth Hub
          </Link>

          <div className="max-w-4xl space-y-8 md:space-y-10 text-center md:text-left">
            <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-display leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 uppercase text-white tracking-tighter">
              GRANT <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                Protocol
              </span>
            </h1>
            <p className="font-body text-lg md:text-2xl text-white/50 leading-relaxed max-w-2xl border-l md:border-l border-mda-pink/30 pl-6 md:pl-10 mx-auto md:mx-0">
              Direct allocation for academic excellence and local enterprise
              scaling. Authenticity of data is mandatory.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-32 px-4 md:px-8 relative z-20 -mt-16 md:-mt-20 lg:-mt-32">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
            {/* Personal Information */}
            <div className="glass-card bg-white p-8 md:p-16 lg:p-24 rounded-[2.5rem] md:rounded-[4rem] border-white shadow-[0_40px_100px_-20px_rgba(93,26,26,0.1)] space-y-10 md:space-y-16">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-mda-maroon rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <User size={24} className="text-mda-pink" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-display text-mda-maroon uppercase tracking-tighter leading-tight md:leading-none">
                    PERSONAL <br />
                    <span className="text-mda-pink italic font-serif normal-case">
                      Intelligence
                    </span>
                  </h3>
                  <div className="w-8 md:w-12 h-1 bg-mda-pink/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Identity Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-xl md:rounded-2xl py-4 md:py-6 px-6 md:px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 text-sm md:text-base"
                    placeholder="Full Legal Name"
                  />
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Birth Protocol
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="date"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-xl md:rounded-2xl py-4 md:py-6 px-6 md:px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon text-sm md:text-base"
                    />
                    <Calendar
                      className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Transmission Link
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-xl md:rounded-2xl py-4 md:py-6 px-6 md:px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 text-sm md:text-base"
                      placeholder="email@example.com"
                    />
                    <Mail
                      className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={18}
                    />
                  </div>
                </div>
                <div className="space-y-3 md:space-y-4">
                  <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Voice Interface
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-xl md:rounded-2xl py-4 md:py-6 px-6 md:px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 text-sm md:text-base"
                      placeholder="+233 XX XXX XXXX"
                    />
                    <Phone
                      className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={18}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grant Details */}
            <div className="glass-card bg-white p-8 md:p-16 lg:p-24 rounded-[2.5rem] md:rounded-[4rem] border-white shadow-[0_40px_100px_-20px_rgba(93,26,26,0.1)] space-y-10 md:space-y-16">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-mda-maroon rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Sparkles size={24} className="text-mda-pink" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-4xl font-display text-mda-maroon uppercase tracking-tighter leading-tight md:leading-none">
                    FUNDING <br />
                    <span className="text-mda-pink italic font-serif normal-case">
                      Blueprint
                    </span>
                  </h3>
                  <div className="w-8 md:w-12 h-1 bg-mda-pink/30" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-8">
                {[
                  { id: "academic", icon: GraduationCap, label: "Academic" },
                  { id: "business", icon: Briefcase, label: "Enterprise" },
                  { id: "skills", icon: Sparkles, label: "Visual Art" },
                ].map((type) => (
                  <label
                    key={type.id}
                    className="relative cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="grant_type"
                      className="peer sr-only"
                      required
                    />
                    <div className="p-6 md:p-10 glass-card bg-mda-cream/20 border-mda-maroon/5 rounded-[2rem] md:rounded-[3rem] text-center space-y-4 md:space-y-6 peer-checked:bg-mda-maroon peer-checked:text-white transition-all duration-500 group-hover:bg-mda-cream active:scale-95">
                      <div className="w-12 md:w-16 h-12 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                        <type.icon className="w-7 md:w-8 h-7 md:h-8 text-mda-pink" />
                      </div>
                      <span className="block font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px]">
                        {type.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="space-y-3 md:space-y-4">
                <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                  Blueprint Narrative
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-[2rem] md:rounded-[3rem] py-6 md:py-8 px-6 md:px-10 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 resize-none text-sm md:text-base"
                  placeholder="Articulate your vision, impact metrics, and objective rationale..."
                />
              </div>

              <div className="space-y-3 md:space-y-4">
                <label className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                  Authenticated Data (ID, Credentials)
                </label>
                <div className="border-4 border-dotted border-mda-maroon/5 rounded-[2rem] md:rounded-[4rem] p-8 md:p-20 text-center space-y-6 md:space-y-8 hover:border-mda-pink/20 transition-all cursor-pointer group bg-mda-cream/5">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-white rounded-2xl md:rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                    <Upload className="text-mda-pink" size={28} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-display text-xl md:text-2xl text-mda-maroon uppercase italic tracking-tighter">
                      Drag Protocol Files
                    </p>
                    <p className="font-body text-mda-dark/30 text-xs md:text-sm">
                      Max file size:{" "}
                      <span className="text-mda-maroon">50MB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full premium-gradient text-white py-6 md:py-10 rounded-[2rem] md:rounded-[3rem] font-display text-2xl md:text-4xl uppercase tracking-[0.3em] shadow-[0_40px_80px_-20px_rgba(93,26,26,0.25)] hover:-translate-y-2 active:scale-[0.98] transition-all flex items-center justify-center gap-4 md:gap-6 group"
            >
              Finalize Submission
              <Send className="w-8 md:w-9 h-8 md:h-9 group-hover:translate-x-3 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-20 md:py-40 bg-mda-cream border-t border-mda-maroon/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center space-y-8 md:space-y-12">
          <h4 className="text-3xl md:text-5xl text-mda-maroon font-display uppercase italic tracking-tighter">
            Protocol Support
          </h4>
          <p className="font-body text-mda-dark/40 text-lg md:text-xl leading-relaxed">
            For systematic inquiries regarding eligibility or technical
            transmission issues, contact the Hub Directorate.
          </p>
          <a
            href="mailto:youth@mdagh.org"
            className="inline-block glass-card bg-mda-maroon text-mda-pink px-10 md:px-12 py-4 md:py-5 rounded-xl md:rounded-2xl font-bold uppercase tracking-[0.3em] text-[8px] md:text-[10px] hover:bg-mda-pink hover:text-white transition-all"
          >
            youth@mdagh.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplyGrantPage;
