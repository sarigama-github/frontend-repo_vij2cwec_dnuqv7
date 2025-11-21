import { ShieldCheck, Droplets, Ruler, Leaf } from "lucide-react";

function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Reliably safe",
      desc: "Electronically tested and manufactured to the highest global standards.",
    },
    {
      icon: Ruler,
      title: "Ultra-thin comfort",
      desc: "Thoughtfully thin for heightened sensitivity without compromising safety.",
    },
    {
      icon: Droplets,
      title: "Smooth lubrication",
      desc: "Premium, body-safe lubricant for an effortless glide and less friction.",
    },
    {
      icon: Leaf,
      title: "Consciously made",
      desc: "Vegan latex, cruelty-free, and packaged with recyclable materials.",
    },
  ];

  return (
    <section id="learn" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center">Why Glide?</h2>
        <p className="mt-3 text-blue-200/80 text-center max-w-2xl mx-auto">
          Designed for peace of mind and pleasure, Glide brings you the best of both worlds: safety and sensation.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-300">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
