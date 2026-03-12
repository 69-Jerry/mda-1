import {
  Mail,
  Phone,
  MapPin,
  Send,
  Handshake,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-mda-cream min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-mda-maroon overflow-hidden min-h-[50vh] flex items-center">
        {/* Animated Mesh Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mda-pink/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow" />

        <div className="max-w-7xl mx-auto px-8 relative z-20 animate-reveal">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-3 px-5 py-2 glass-card rounded-full border-white/10 uppercase font-bold tracking-[0.3em] text-[10px] text-mda-pink">
              Transmission
            </div>
            <h1 className="text-7xl lg:text-[10rem] font-display leading-[0.8] mb-8 uppercase text-white tracking-tighter">
              CONTACT THE <br />{" "}
              <span className="text-mda-pink italic font-serif normal-case text-glow">
                MDA
              </span>
            </h1>
            <p className="font-body text-2xl text-white/50 leading-relaxed max-w-xl border-l border-mda-pink/30 pl-10">
              We welcome visionary partnerships and community inquiries. Let's
              build the future together.
            </p>
          </div>
        </div>
      </section>

      {/* Office & Contact Info Grid */}
      <section className="py-32 px-8 relative z-20 -mt-20 lg:-mt-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.6fr_1fr] gap-12">
          {/* Main Contact Area */}
          <div className="glass-card bg-white p-12 lg:p-24 rounded-[4rem] border-white shadow-[0_40px_100px_-20px_rgba(93,26,26,0.1)]">
            <div className="space-y-16">
              <div className="space-y-6">
                <h2 className="text-6xl font-display text-mda-maroon uppercase tracking-tighter leading-none">
                  SEND A <br />
                  <span className="text-mda-pink italic font-serif normal-case">
                    Message
                  </span>
                </h2>
                <div className="w-16 h-1 bg-mda-pink/30" />
              </div>

              <form className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                      Full Intelligence
                    </label>
                    <input
                      type="text"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Subject Matter
                  </label>
                  <select className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-2xl py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon appearance-none">
                    <option>General Protocol</option>
                    <option>Partnership Proposal</option>
                    <option>Volunteer Interest</option>
                    <option>Development Support</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/40 ml-1">
                    Transmission Content
                  </label>
                  <textarea
                    rows={6}
                    className="w-full bg-mda-cream/20 border border-mda-maroon/5 rounded-[2.5rem] py-6 px-8 focus:outline-none focus:border-mda-pink transition-all font-body text-mda-maroon placeholder:text-mda-maroon/20 resize-none"
                    placeholder="Describe your inquiry..."
                  />
                </div>

                <button className="premium-gradient text-white w-full lg:w-fit px-16 py-7 rounded-3xl font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-6 hover:shadow-[0_20px_40px_-10px_rgba(93,26,26,0.3)] hover:-translate-y-2 transition-all group">
                  Send Transmission
                  <Send
                    size={20}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar Area */}
          <div className="space-y-8 lg:pt-16">
            {/* Partnerships Card */}
            <div className="premium-gradient rounded-[4rem] p-16 text-white space-y-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-12 translate-x-12" />

              <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                <Handshake size={32} className="text-mda-pink" />
              </div>
              <div className="space-y-4">
                <h3 className="text-4xl font-display uppercase leading-tight tracking-tighter">
                  PARTNERSHIP <br />
                  <span className="text-mda-pink">PROTOCOLS</span>
                </h3>
                <p className="font-body text-white/50 text-base leading-relaxed">
                  We are open to strategic collaborations with NGOs, government
                  entities, and private investors.
                </p>
              </div>
              <ul className="space-y-4 font-display text-2xl uppercase italic text-mda-pink/80">
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-mda-pink" />
                  Agriculture
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-mda-pink" />
                  Edu-Tech
                </li>
                <li className="flex items-center gap-4 hover:translate-x-2 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-mda-pink" />
                  Sustainable Dev
                </li>
              </ul>
            </div>

            {/* Contact Details Card */}
            <div className="glass-card p-16 rounded-[4rem] border-mda-maroon/5 space-y-12 bg-white">
              <div className="space-y-10 font-body text-mda-dark">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-mda-cream rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-mda-pink" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/30 mb-2">
                      PHYSICAL LOCATION
                    </h4>
                    <p className="font-bold text-lg leading-snug">
                      Mepe Community Hub
                      <br />
                      North Tongu, VR, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-12 h-12 bg-mda-cream rounded-xl flex items-center justify-center shrink-0 group-hover:bg-mda-maroon transition-colors">
                    <Mail size={20} className="text-mda-pink" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/30 mb-1">
                      EMAIL TRANSCEIVER
                    </h5>
                    <p className="font-bold text-lg">info@mdagh.org</p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-12 h-12 bg-mda-cream rounded-xl flex items-center justify-center shrink-0 group-hover:bg-mda-maroon transition-colors">
                    <Phone size={20} className="text-mda-pink" />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.3em] text-mda-maroon/30 mb-1">
                      VOICE LINK
                    </h5>
                    <p className="font-bold text-lg">+233 24 457 9498</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-6 mt-12 border-t border-mda-maroon/5">
                {[
                  { Icon: Facebook, link: "#" },
                  { Icon: Twitter, link: "#" },
                  { Icon: Instagram, link: "#" },
                  { Icon: Linkedin, link: "#" },
                ].map(({ Icon, link }, index) => (
                  <a
                    key={index}
                    href={link}
                    className="w-12 h-12 rounded-2xl bg-mda-cream border border-mda-maroon/5 flex items-center justify-center hover:bg-mda-pink hover:text-mda-maroon transition-all group animate-float"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <Icon
                      size={20}
                      className="transition-transform group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
