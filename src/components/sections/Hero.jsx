import Container from '../common/Container';
import Button from '../common/Button';
import { motion } from 'framer-motion';

const metrics = [
  { value: '3x', label: 'faster lead qualification' },
  { value: '42%', label: 'avg. reply-rate uplift' },
  { value: '7 days', label: 'to launch first workflow' },
];

const revealUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_55%,#ffffff_100%)] pt-24 pb-18 sm:pt-28 sm:pb-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(99,102,241,0.08),transparent)]" />
        <div className="absolute -top-28 left-[6%] h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />
        <div className="absolute right-[4%] top-24 h-80 w-80 rounded-full bg-sky-200/60 blur-3xl" />
        <div className="absolute bottom-[-8rem] left-1/2 h-64 w-[34rem] -translate-x-1/2 rounded-full bg-emerald-100/70 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_35%),linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:auto,72px_72px,72px_72px]" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
          variants={staggerChildren}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="text-center lg:text-left" variants={staggerChildren}>
            <motion.div
              variants={revealUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-indigo-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur"
            >
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
              AI lead generation for service brands
            </motion.div>

            <motion.h1
              variants={revealUp}
              className="mx-auto max-w-3xl text-5xl font-bold leading-[1.02] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:mx-0 lg:max-w-2xl lg:text-7xl"
            >
              Turn cold traffic into
              <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
                booked strategy calls.
              </span>
            </motion.h1>

            <motion.p
              variants={revealUp}
              className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 lg:mx-0"
            >
              We design AI-powered lead funnels that find qualified prospects, personalize outreach, and move serious buyers straight into your calendar.
            </motion.p>

            <motion.div
              variants={revealUp}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button variant="primary" className="w-full sm:w-auto min-w-[230px]">
                Book Free Consultation
              </Button>
              <Button variant="outline" className="w-full sm:w-auto min-w-[190px]">
                See Our Lead System
              </Button>
            </motion.div>

            <motion.div
              variants={revealUp}
              className="mt-10 flex flex-col gap-6 rounded-[2rem] border border-white/80 bg-white/75 p-6 text-left shadow-[0_20px_60px_rgba(148,163,184,0.22)] backdrop-blur sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Built for growth-first teams
                </p>
                <p className="mt-2 text-base text-slate-600">
                  Ideal for agencies, SaaS, consultants, and B2B businesses that need more qualified conversations.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:min-w-[320px]">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-[0_10px_25px_rgba(15,23,42,0.06)]"
                  >
                    <p className="text-2xl font-bold text-slate-950">{metric.value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{metric.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={revealUp} className="relative mx-auto w-full max-w-2xl">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 p-4 shadow-[0_40px_100px_rgba(37,99,235,0.18)]"
            >
              <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-xs text-slate-200 backdrop-blur">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  Live campaign dashboard
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 font-medium text-emerald-300">
                  18 leads this week
                </span>
              </div>

              <div className="relative mt-14 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,#312e81_0%,#111827_45%,#020617_100%)] p-6 text-white">
                <div className="grid gap-4 sm:grid-cols-[1.15fr_0.85fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Pipeline Overview</p>
                    <div className="mt-6 space-y-4">
                      {[
                        ['Visitor intent scoring', '94%'],
                        ['Qualified prospects', '128'],
                        ['Booked calls', '32'],
                      ].map(([label, stat], index) => (
                        <div key={label}>
                          <div className="mb-2 flex items-center justify-between text-sm">
                            <span className="text-slate-300">{label}</span>
                            <span className="font-semibold text-white">{stat}</span>
                          </div>
                          <div className="h-2 rounded-full bg-white/10">
                            <motion.div
                              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-400"
                              initial={{ width: 0 }}
                              animate={{ width: `${78 + index * 8}%` }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.12 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 backdrop-blur">
                      <p className="text-sm text-slate-400">Best-performing channel</p>
                      <p className="mt-3 text-3xl font-bold">LinkedIn + Email</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300">
                        AI personalization matched messaging to each segment and improved conversion quality.
                      </p>
                    </div>
                    <div className="rounded-[1.5rem] border border-emerald-400/20 bg-emerald-400/10 p-5">
                      <p className="text-sm text-emerald-200">Consultation CTA</p>
                      <p className="mt-3 text-xl font-semibold">Ready to audit your current funnel?</p>
                      <p className="mt-2 text-sm leading-6 text-emerald-100/85">
                        We map your funnel gaps and show where AI can bring more qualified sales calls.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="absolute bottom-6 right-6 max-w-[240px] rounded-[1.5rem] border border-white/70 bg-white p-4 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.18)]"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">This month</p>
                <p className="mt-2 text-3xl font-bold">$84k</p>
                <p className="mt-1 text-sm text-slate-600">pipeline influenced by AI-qualified leads</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
