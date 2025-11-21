import { Shield, Heart } from "lucide-react";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[40rem] h-[40rem] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-[36rem] h-[36rem] bg-cyan-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 bg-cyan-300/10 px-3 py-1 rounded-full border border-cyan-300/20">
            <Shield className="w-4 h-4" />
            Protection you can feel good about
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold tracking-tight text-white">
            Glide by Flames
          </h1>
          <p className="mt-5 text-lg text-blue-200/90 leading-relaxed">
            Ultra-thin, vegan latex condoms engineered for comfort, reliability, and real connection. Stay protected without losing the moment.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#buy" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-cyan-500 text-slate-900 font-semibold hover:bg-cyan-400 transition-colors">
              Shop now
            </a>
            <a href="#learn" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-colors">
              <Heart className="w-5 h-5 text-pink-300" />
              Learn more
            </a>
          </div>
          <div className="mt-6 flex items-center gap-6 text-blue-200/80">
            <div className="flex -space-x-3">
              <img alt="" src="https://i.pravatar.cc/40?img=1" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img alt="" src="https://i.pravatar.cc/40?img=8" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
              <img alt="" src="https://i.pravatar.cc/40?img=12" className="w-8 h-8 rounded-full ring-2 ring-slate-900" />
            </div>
            <p className="text-sm">Trusted by thousands for worry-free nights and brighter mornings.</p>
          </div>
        </div>

        <div className="relative">
          <div className="relative mx-auto w-80 h-80 sm:w-96 sm:h-96">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-blue-600 opacity-80 blur-2xl" />
            <div className="relative z-10 h-full rounded-[2rem] p-1 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20">
              <div className="h-full rounded-2xl bg-slate-900/80 p-8 flex flex-col items-center justify-center text-center">
                <img src="/public/condom-pouch.png" onError={(e)=>{e.currentTarget.style.display='none'}} alt="Glide condom pouch" className="w-40 h-40 object-contain" />
                <h3 className="mt-4 text-2xl font-bold text-white">Glide Ultra-Thin</h3>
                <p className="mt-2 text-blue-200/80 text-sm">Natural feel • Lubricated • Electronically tested</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
