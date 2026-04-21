import Container from '../common/Container';
import Button from '../common/Button';

export default function Hero() {
  return (
    <div className="relative bg-[#0F172A] overflow-hidden min-h-screen flex items-center pt-20 pb-16 lg:pt-32 lg:pb-24">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-900/90 to-slate-900 opacity-90 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-80 blur-3xl animate-pulse delay-1000" />
      </div>
      
      <Container className="relative z-10 w-full mt-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-ping"></span>
              AI-Powered Platform V2.0
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-poppins mb-4">
              <span className="block xl:inline">Supercharge Your</span>{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 pb-2">
                Lead Generation
              </span>
            </h1>
            <p className="mt-3 text-base text-slate-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl font-inter leading-relaxed">
              Automate prospecting, predict conversions, and close deals faster with our advanced AI tools. Turn cold traffic into qualified sales automatically.
            </p>
            <div className="mt-10 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 bg-[#10B981] hover:bg-[#059669]">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-4 bg-transparent border-slate-600 text-white hover:bg-slate-800 hover:border-slate-500">
                View Documentation
              </Button>
            </div>
            
            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 opacity-80">
               <div className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    ))}
                  </div>
                  <span>Trusted by 500+ teams</span>
               </div>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 relative z-10 flex justify-center perspective-1000">
            {/* 3D Float Effect Container */}
            <div className="relative w-full max-w-lg lg:max-w-none transform-style-3d transition-transform duration-700 ease-out hover:rotate-y-12 hover:rotate-x-12 animate-float">
               {/* Decorative Glow */}
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2rem] blur opacity-30 mix-blend-screen group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
               
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm p-2">
                  <img
                    className="w-full h-auto rounded-xl object-cover"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                    alt="AI Dashboard Interface"
                  />
                  {/* Floating Notification */}
                  <div className="absolute top-6 -left-6 lg:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl shadow-xl flex items-center gap-4 animate-fade-in-up delay-700">
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">New High-Value Lead</p>
                      <p className="text-slate-300 text-xs mt-0.5">Scored 98/100 by AI</p>
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
