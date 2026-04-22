import Container from '../common/Container';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Lead Quality Over Volume',
    description: 'We optimize for sales-ready conversations, not vanity metrics, so your team spends time with prospects who can actually buy.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5-1a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    name: 'Strategy + Execution',
    description: 'From positioning to automation logic, we build the full lead generation system instead of handing you a disconnected tool stack.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5h2m-1-1v2m6.364 1.636l-1.414 1.414M5.636 18.364l1.414-1.414M19 11v2M5 11v2m11.364 5.364l-1.414-1.414M7.05 7.05 8.464 8.464M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    name: 'Fast Launch, Clear Reporting',
    description: 'You get a clean rollout plan, measurable milestones, and dashboard-level visibility into what is generating meetings and revenue.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-6m3 6V7m3 10v-4m3 4V9M5 19h14" />
      </svg>
    ),
  },
  {
    name: 'Human-Led Personalization',
    description: 'Our systems automate the heavy lifting while keeping your message personal, relevant, and aligned with your brand voice.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v7a2 2 0 01-2 2h-4l-4 3v-3H5a2 2 0 01-2-2v-7a2 2 0 012-2h2m10 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0H7" />
      </svg>
    ),
  },
];

const stats = [
  { value: '98%', label: 'clients say lead quality improved' },
  { value: '<14 days', label: 'average time to first campaign launch' },
  { value: '1 system', label: 'strategy, automation, copy, and reporting' },
];

const sectionReveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-8rem] top-14 h-72 w-72 rounded-full bg-indigo-100 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600">
              Why Choose Us
            </p>
            <h2 className="text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              A cleaner, smarter route from attention to conversion.
            </h2>
          </div>
          <p className="max-w-3xl text-lg leading-8 text-slate-600">
            We blend AI systems with sharp positioning and conversion thinking, so your landing page and outreach do more than look modern. They generate qualified intent.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="grid gap-5 md:grid-cols-2"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={sectionReveal}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-violet-500 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#4f46e5_0%,#0ea5e9_100%)] text-white shadow-[0_16px_35px_rgba(79,70,229,0.22)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.03em] text-slate-950">
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] p-8 shadow-[0_24px_70px_rgba(59,130,246,0.1)] sm:p-10"
          >
            <div className="flex items-center justify-between rounded-2xl border border-white/80 bg-white/85 px-5 py-4 shadow-[0_10px_30px_rgba(15,23,42,0.05)]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Conversion System
                </p>
                <p className="mt-1 text-xl font-bold text-slate-950">Why clients stay with us</p>
              </div>
              <div className="rounded-full bg-emerald-500/12 px-4 py-2 text-sm font-semibold text-emerald-700">
                CTA-ready
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-3xl font-bold tracking-[-0.04em] text-slate-950">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] bg-slate-950 p-7 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)]">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
                What this means for you
              </p>
              <p className="mt-4 text-2xl font-bold tracking-[-0.03em]">
                More qualified leads, less follow-up waste.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Instead of chasing low-fit inquiries, your team gets a clearer path to consultations with buyers who understand your offer and are ready to talk.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
