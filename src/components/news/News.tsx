const News = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 mb-16">
        <div>
          <div className="inline-block px-4 py-1.5 bg-mda-maroon/5 border border-mda-maroon/10 rounded-full mb-4">
            <span className="text-xs font-bold tracking-widest text-mda-maroon uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-display text-mda-maroon leading-none">
            NEWS & ARTICLES
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-mda-cream/30 rounded-[3rem] p-24 text-center border border-mda-maroon/5 shadow-sm">
          <h3 className="text-4xl font-display text-mda-maroon uppercase mb-4 italic">
            No news highlights at this time
          </h3>
          <p className="font-body text-mda-dark/40 tracking-widest uppercase text-xs font-bold">
            Please check back later for the latest updates from the Mepe
            Development Association.
          </p>
        </div>
      </div>
    </section>
  );
};

export default News;
