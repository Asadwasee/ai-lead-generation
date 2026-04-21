import Container from '../common/Container';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative bg-[#020617] overflow-hidden min-h-[90vh] flex items-center pt-20">
      {/* Dynamic Aura Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Content side */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-slate-300 text-xs font-bold tracking-widest uppercase">Next-Gen Intelligence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-emerald-400 animate-shimmer">
                Revenue with AI
              </span>
            </h1>

            <p className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-400 leading-relaxed font-inter">
              Stop guessing. Start growing. Our AI engine identifies, scores, and engages your perfect customers before your competitors even know they exist.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="primary" className="w-full sm:w-auto min-w-[200px]">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="w-full sm:w-auto min-w-[200px]">
                Watch Demo
              </Button>
            </div>

            <div className="pt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
               <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} className="w-10 h-10 rounded-full border-2 border-[#020617] object-cover" src={`https://i.pravatar.cc/100?img=${i+20}`} alt="User" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#020617] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">
                    +500
                  </div>
               </div>
               <div className="text-slate-500 text-sm font-medium">
                  <span className="text-slate-300 font-bold block sm:inline">Join 500+ teams</span> already crushing their quotas
               </div>
            </div>
          </div>

          {/* Visual side */}
          <div className="flex-1 relative w-full max-w-2xl group">
             {/* Decorative Background for Image */}
             <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-blue-600/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
             
             <div className="relative bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-3 shadow-2xl overflow-hidden animate-float">
                <div className="absolute top-0 left-0 right-0 h-12 bg-white/5 flex items-center px-6 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/50"></div>
                   </div>
                   <div className="flex-1 text-center">
                      <div className="bg-white/5 rounded-md px-4 py-1 text-[10px] text-slate-500 w-fit mx-auto font-mono">analytics.codecelix.ai</div>
                   </div>
                </div>
                
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full rounded-xl mt-12 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]" 
                  alt="Dashboard Preview"
                />

                {/* Floating Micro-Card */}
                <div className="absolute bottom-8 -left-8 md:-left-12 bg-white/10 backdrop-blur-2xl border border-white/20 p-5 rounded-2xl shadow-2xl animate-fade-in-up delay-1000">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                         <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      </div>
                      <div>
                         <p className="text-white font-bold">New Lead Won</p>
                         <p className="text-slate-400 text-xs">Estimated Value: $12k</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </Container>
    </div>
  );
}
