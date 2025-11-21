function CTA() {
  return (
    <section id="buy" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-cyan-500 to-blue-600">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.25),transparent_35%)]" />
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Ready when you are</h3>
              <p className="mt-3 text-slate-900/80 text-lg">
                Stock up with discreet shipping and subscribe to never run out. Your future self will thank you.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <button className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">
                Add 12-pack — $12.99
              </button>
              <button className="px-6 py-3 rounded-xl bg-slate-900/20 text-white border border-white/40 hover:bg-slate-900/30 transition-colors">
                Subscribe & save 15%
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-blue-200/70 text-sm">
          Always read the label. Use as directed. Store in a cool, dry place. Latex may cause allergic reactions.
        </p>
      </div>
    </section>
  );
}

export default CTA;
