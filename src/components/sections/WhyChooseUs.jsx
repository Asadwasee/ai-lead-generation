import Container from '../common/Container';

const features = [
  {
    name: 'Instant Deployment',
    description: 'Get your AI engine running in hours. Our zero-config onboarding ensures you start generating leads from day one.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Precision Pricing',
    description: 'Stop overpaying for seat licenses. Pay only for the leads that actually convert with our outcome-based model.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Neural Intelligence',
    description: 'Our team of PhD-level data scientists continuously tunes your models for maximum conversion accuracy.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Priority Support',
    description: 'Dedicated growth engineers available via Slack 24/7 to help you optimize your outreach strategy and ROI.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-[#020617] py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-[0.2em] text-indigo-400 uppercase mb-4">The Advantage</h2>
          <p className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">
            Why Teams Choose AI
          </p>
          <p className="text-xl text-slate-400 leading-relaxed font-inter">
            Powerful, scalable, and built for modern revenue teams who demand excellence over excuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] p-10 rounded-[2.5rem] hover:bg-white/[0.06] hover:border-white/[0.15] transition-all duration-500 group overflow-hidden"
            >
              {/* Feature Radiant Gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500/10 blur-3xl group-hover:bg-indigo-500/20 transition-all duration-500"></div>
              
              <div className="relative z-10 flex flex-col gap-8">
                <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-xl shadow-indigo-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{feature.name}</h3>
                  <p className="text-lg text-slate-400 leading-relaxed font-inter">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
