const Events = () => {
  return (
    <section className="py-16 md:py-24 bg-mda-cream/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-10 md:mb-16">
        <div className="inline-block px-4 py-1.5 bg-mda-maroon/5 border border-mda-maroon/10 rounded-full mb-4">
          <span className="text-[10px] md:text-xs font-bold tracking-widest text-mda-maroon uppercase">
            Community Highlights
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-mda-maroon mb-6">
          UPCOMING EVENTS
        </h2>
        <div className="w-16 md:w-24 h-1 bg-mda-pink mx-auto" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-12 md:p-24 text-center border border-mda-maroon/5 shadow-2xl">
          <h3 className="text-2xl md:text-4xl font-display text-mda-maroon uppercase mb-4 italic">
            There are no events scheduled at this time
          </h3>
          <p className="font-body text-mda-dark/40 tracking-widest uppercase text-[10px] md:text-xs font-bold">
            Please check back later for updates on community durbars and
            festivals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;
