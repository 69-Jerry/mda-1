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
      <div className="bg-mda-cream min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl w-full glass-card bg-white p-20 rounded-[4rem] text-center shadow-[0_40px_100px_-20px_rgba(93,26,26,0.15)] border-white space-y-12 animate-in fade-in zoom-in duration-1000">
          <div className="w-28 h-28 bg-mda-maroon rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-float">
            <Send className="text-mda-pink" size={48} />
          </div>
          <div className="space-y-6">
            <h2 className="text-6xl font-display text-mda-maroon uppercase tracking-tighter leading-none">
              TRANSMISSION <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case">
                Complete
              </span>
            </h2>
            <p className="font-body text-mda-dark/40 text-xl leading-relaxed">
              Inquiry received. Our strategic committee will evaluate your
              credentials and respond via authenticated email within 14
              protocols.
            </p>
          </div>
          <Link
            to="/youth"
            className="inline-flex glass-card bg-mda-maroon text-white px-16 py-7 rounded-3xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-mda-pink transition-all shadow-xl"
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
      <section className="relative py-40 bg-mda-maroon overflow-hidden min-h-[50vh] flex items-center">
        {/* Animated Mesh Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mda-pink/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-8 relative z-20 animate-reveal">
          <Link
            to="/youth"
            className="inline-flex items-center gap-3 text-white/40 hover:text-mda-pink transition-all mb-16 font-bold uppercase tracking-[0.4em] text-[10px] group"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-2 transition-transform"
            />
            Abort to Youth Hub
          </Link>

          <div className="max-w-4xl space-y-10">
            <h1 className="text-8xl lg:text-[11rem] font-display leading-[0.8] mb-8 uppercase text-white tracking-tighter">
              GRANT <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                Protocol
              </span>
            </h1>
            <p className="font-body text-2xl text-white/50 leading-relaxed max-w-2xl border-l border-mda-pink/30 pl-10">
              Direct allocation for academic excellence and local enterprise
              scaling. Authenticity of data is mandatory.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-32 px-8 relative z-20 -mt-20 lg:-mt-32">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-16">
            {/* Personal Information */}
            <div className="glass-card bg-white p-16 lg:p-24 rounded-[4rem] border-white shadow-[0_40px_100px_-20px_rgba(93,26,26,0.1)] space-y-16">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-mda-maroon rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <User size={28} className="text-mda-pink" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-display text-mda-maroon uppercase tracking-tighter leading-none">
                    PERSONAL <br />
                    <span className="text-mda-pink italic font-serif normal-case">
                      Intelligence
                    </span>
                  </h3>
                  <div className="w-12 h-1 bg-mda-pink/30" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Identity Name
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20"
                    placeholder="Full Legal Name"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Birth Protocol
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="date"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon"
                    />
                    <Calendar
                      className="absolute right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={20}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Transmission Link
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20"
                      placeholder="email@example.com"
                    />
                    <Mail
                      className="absolute right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={20}
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Voice Interface
                  </label>
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20"
                      placeholder="+233 XX XXX XXXX"
                    />
                    <Phone
                      className="absolute right-8 top-1/2 -translate-y-1/2 text-mda-pink/40"
                      size={20}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Grant Details */}
            <div className="glass-card bg-white p-16 lg:p-24 rounded-[4rem] border-white shadow-[0_40px_100px_-20px_rgba(93,26,26,0.1)] space-y-16">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-mda-maroon rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Sparkles size={28} className="text-mda-pink" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-4xl font-display text-mda-maroon uppercase tracking-tighter leading-none">
                    FUNDING <br />
                    <span className="text-mda-pink italic font-serif normal-case">
                      Blueprint
                    </span>
                  </h3>
                  <div className="w-12 h-1 bg-mda-pink/30" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
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
                    <div className="p-10 glass-card bg-mda-cream/20 border-mda-maroon/5 rounded-[3rem] text-center space-y-6 peer-checked:bg-mda-maroon peer-checked:text-white transition-all duration-500 group-hover:bg-mda-cream active:scale-95">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-sm group-hover:scale-110 transition-transform">
                        <type.icon size={32} className="text-mda-pink" />
                      </div>
                      <span className="block font-bold uppercase tracking-[0.3em] text-[10px]">
                        {type.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                  Blueprint Narrative
                </label>
                <textarea
                  required
                  rows={8}
                  className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-[3rem] py-8 px-10 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 resize-none"
                  placeholder="Articulate your vision, impact metrics, and objective rationale..."
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                  Authenticated Data (ID, Credentials)
                </label>
                <div className="border-4 border-dotted border-mda-maroon/5 rounded-[4rem] p-20 text-center space-y-8 hover:border-mda-pink/20 transition-all cursor-pointer group bg-mda-cream/5">
                  <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform shadow-xl">
                    <Upload className="text-mda-pink" size={32} />
                  </div>
                  <div className="space-y-2">
                    <p className="font-display text-2xl text-mda-maroon uppercase italic tracking-tighter">
                      Drag Protocol Files
                    </p>
                    <p className="font-body text-mda-dark/30 text-sm">
                      Max file size:{" "}
                      <span className="text-mda-maroon">50MB</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full premium-gradient text-white py-10 rounded-[3rem] font-display text-4xl uppercase tracking-[0.3em] shadow-[0_40px_80px_-20px_rgba(93,26,26,0.25)] hover:-translate-y-2 active:scale-[0.98] transition-all flex items-center justify-center gap-6 group"
            >
              Finalize Submission
              <Send
                size={36}
                className="group-hover:translate-x-3 transition-transform"
              />
            </button>
          </form>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-40 bg-mda-cream border-t border-mda-maroon/5">
        <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
          <h4 className="text-mda-maroon font-display text-5xl uppercase italic tracking-tighter">
            Protocol Support
          </h4>
          <p className="font-body text-mda-dark/40 text-xl leading-relaxed">
            For systematic inquiries regarding eligibility or technical
            transmission issues, contact the Hub Directorate.
          </p>
          <a
            href="mailto:youth@mdagh.org"
            className="inline-block glass-card bg-mda-maroon text-mda-pink px-12 py-5 rounded-2xl font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-mda-pink hover:text-white transition-all"
          >
            youth@mdagh.org
          </a>
        </div>
      </section>
    </div>
  );
};

export default ApplyGrantPage;
