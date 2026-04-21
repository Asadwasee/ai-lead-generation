import Container from '../common/Container';

const features = [
  {
    name: 'Fast Delivery',
    description: 'Get up and running in days, not months. Our intelligent onboarding ensures rapid platform deployment.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    name: 'Affordable Pricing',
    description: 'Scale effortlessly with transparent, outcome-based pricing that grows smoothly with your business.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Expert AI Team',
    description: 'Backed by elite data scientists and growth veterans fiercely dedicated to your conversion success.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    name: 'Reliable Support',
    description: '24/7 technical and strategic support to help you maximize your ROI around the clock.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <div className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-blue-100 opacity-50 blur-3xl mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-purple-100 opacity-50 blur-3xl mix-blend-multiply"></div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 animate-fade-in-up">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Why Choose Us</h2>
          <p className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl font-poppins mb-6">
            A Smarter Way to Scale
          </p>
          <p className="text-xl text-slate-600 mx-auto font-inter">
            We provide everything you need to supercharge your outreach and maximize conversion rates effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.name} 
              className="relative bg-white p-8 sm:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 group border border-slate-100 overflow-hidden"
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              {/* Card Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">{feature.name}</h3>
                  <p className="text-base text-slate-600 leading-relaxed font-inter">
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
