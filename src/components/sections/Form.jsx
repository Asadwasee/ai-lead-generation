import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Trust signals shown on the left panel ───────────────────────────────────
const trustPoints = [
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5-1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    text: 'No commitment required'
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    text: 'Results within 7–14 days'
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5M12 12a4 4 0 100-8 4 4 0 000 8z"
        />
      </svg>
    ),
    text: '98% client satisfaction rate'
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    text: 'Your data is 100% secure'
  }
]

const BUSINESS_TYPES = [
  'E-Commerce',
  'Real Estate',
  'Healthcare',
  'SaaS',
  'Agency',
  'Consulting',
  'Other'
]

// ─── Animation variants ───────────────────────────────────────────────────────
const sectionReveal = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

const itemReveal = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
}

// ─── Email regex ──────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// ─── InputField sub-component ─────────────────────────────────────────────────
const InputField = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  error,
  placeholder
}) => (
  <div className="flex flex-col gap-1.5">
    <label
      htmlFor={id}
      className="text-[13px] font-semibold text-slate-700 tracking-wide"
    >
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-xl border px-4 py-3 text-[14px] text-slate-800 placeholder-slate-400
        outline-none transition-all duration-200 bg-white
        focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400
        ${error ? 'border-red-400 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}
    />
    <AnimatePresence>
      {error && (
        <motion.p
          key="err"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          className="text-[12px] text-red-500 font-medium"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  </div>
)

// ─── Main Form Component ──────────────────────────────────────────────────────
export default function LeadCaptureForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    businessType: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // ── Update a single field ──
  const handleChange = (field) => (e) => {
    setFields((prev) => ({ ...prev, [field]: e.target.value }))
    // Clear error on type
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  // ── Validate all fields ──
  const validate = () => {
    const newErrors = {}

    if (!fields.name.trim()) {
      newErrors.name = 'Full name is required.'
    } else if (fields.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.'
    }

    if (!fields.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!EMAIL_REGEX.test(fields.email.trim())) {
      newErrors.email = 'Please enter a valid email (e.g. name@example.com).'
    }

    if (!fields.businessType) {
      newErrors.businessType = 'Please select your business type.'
    }

    if (!fields.message.trim()) {
      newErrors.message = 'Please tell us about your goal.'
    } else if (fields.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters.'
    }

    return newErrors
  }

  // ── Submit handler ──
  const handleSubmit = async () => {
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setLoading(true)
    // Simulate async API call (replace with real endpoint later)
    await new Promise((res) => setTimeout(res, 1400))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28
        bg-[linear-gradient(180deg,#ffffff_0%,#eef4ff_50%,#f8fbff_100%)]"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[-6rem] bottom-10 h-72 w-72 rounded-full bg-indigo-100/80 blur-3xl" />
        <div className="absolute right-[-4rem] top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-[30rem] rounded-full bg-emerald-100/50 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section label */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionReveal}
          className="mb-14 text-center"
        >
          <div className="inline-flex items-center gap-2.5 mb-4">
            <div className="h-px w-7 bg-indigo-600" />
            <span
              className="text-[12px] font-bold tracking-[0.14em] uppercase text-indigo-600"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Free Strategy Call
            </span>
            <div className="h-px w-7 bg-indigo-600" />
          </div>
          <h2
            className="text-[38px] sm:text-[46px] font-extrabold leading-[1.1] tracking-[-0.03em] text-slate-950"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Ready to{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-sky-500 bg-clip-text text-transparent">
              grow your business?
            </span>
          </h2>
          <p className="mt-3 text-[15px] text-slate-600 max-w-xl mx-auto leading-[1.7]">
            Fill in your details and we'll schedule a personalized strategy call
            to map out your AI lead generation plan.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-start">
          {/* ── Left Panel: Trust signals ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            <motion.div variants={itemReveal}>
              <p
                className="text-[28px] sm:text-[34px] font-extrabold leading-[1.2] tracking-[-0.03em] text-slate-950"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Turn your traffic into{' '}
                <span className="text-indigo-600">qualified leads</span> —
                starting today.
              </p>
              <p className="mt-4 text-[15px] text-slate-600 leading-[1.7]">
                Our AI-powered funnels are built to bring you sales-ready
                conversations, not just clicks. Book your free call and let's
                audit your current funnel together.
              </p>
            </motion.div>

            {/* Trust points */}
            <div className="flex flex-col gap-4">
              {trustPoints.map((point) => (
                <motion.div
                  key={point.text}
                  variants={itemReveal}
                  className="flex items-center gap-3.5 rounded-2xl border border-slate-200 bg-white px-5 py-4
                    shadow-[0_10px_25px_rgba(15,23,42,0.05)]"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                    bg-[linear-gradient(135deg,#4f46e5_0%,#0ea5e9_100%)] text-white
                    shadow-[0_10px_22px_rgba(79,70,229,0.2)]"
                  >
                    {point.icon}
                  </div>
                  <p className="text-[14px] font-semibold text-slate-800">
                    {point.text}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats row */}
            <motion.div
              variants={itemReveal}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { val: '200+', sub: 'clients helped' },
                { val: '3x', sub: 'avg. lead growth' },
                { val: '7 days', sub: 'to first results' }
              ].map((s) => (
                <div
                  key={s.sub}
                  className="rounded-[1.5rem] border border-slate-200 bg-white p-4 text-center
                    shadow-[0_10px_28px_rgba(15,23,42,0.06)]"
                >
                  <p
                    className="text-2xl font-extrabold text-slate-950"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {s.val}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-5">
                    {s.sub}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right Panel: Form Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1
            }}
          >
            <div
              className="rounded-[2rem] border border-slate-200 bg-white p-8 sm:p-10
              shadow-[0_24px_70px_rgba(59,130,246,0.10)]"
            >
              <AnimatePresence mode="wait">
                {/* ── Success State ── */}
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center text-center py-10 gap-6"
                  >
                    {/* Animated checkmark */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 14,
                        delay: 0.1
                      }}
                      className="flex h-20 w-20 items-center justify-center rounded-full
                        bg-emerald-100 shadow-[0_0_0_12px_rgba(16,185,129,0.1)]"
                    >
                      <svg
                        className="h-9 w-9 text-emerald-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </motion.div>

                    <div>
                      <h3
                        className="text-[26px] font-extrabold text-slate-950 tracking-tight"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        You're all set, {fields.name.split(' ')[0]}! 🎉
                      </h3>
                      <p className="mt-2 text-[14px] text-slate-600 leading-[1.7] max-w-sm mx-auto">
                        We've received your request and will reach out within{' '}
                        <strong>24 hours</strong> to schedule your free strategy
                        call.
                      </p>
                    </div>

                    <div className="w-full rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-4 text-left">
                      <p className="text-[13px] font-semibold text-emerald-800">
                        What happens next?
                      </p>
                      <ul className="mt-2 space-y-1.5 text-[13px] text-emerald-700">
                        <li>✅ Check your inbox for a confirmation email</li>
                        <li>📞 Our strategist will call you within 24 hrs</li>
                        <li>
                          🗺️ We'll audit your funnel & share a growth plan
                        </li>
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setSubmitted(false)
                        setFields({
                          name: '',
                          email: '',
                          businessType: '',
                          message: ''
                        })
                        setErrors({})
                      }}
                      className="text-[13px] font-semibold text-indigo-600 hover:underline transition-colors"
                    >
                      Submit another request →
                    </button>
                  </motion.div>
                ) : (
                  /* ── Form State ── */
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-5"
                  >
                    {/* Form header */}
                    <div className="mb-2">
                      <div
                        className="flex items-center justify-between rounded-2xl border border-slate-100
                        bg-slate-50 px-5 py-3.5 shadow-[0_6px_18px_rgba(15,23,42,0.04)]"
                      >
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
                            Free Consultation
                          </p>
                          <p className="text-[15px] font-bold text-slate-900 mt-0.5">
                            Get Your Strategy Call
                          </p>
                        </div>
                        <span className="rounded-full bg-emerald-500/12 px-3 py-1.5 text-[11px] font-bold text-emerald-700">
                          100% Free
                        </span>
                      </div>
                    </div>

                    {/* Full Name */}
                    <InputField
                      label="Full Name"
                      id="name"
                      value={fields.name}
                      onChange={handleChange('name')}
                      error={errors.name}
                      placeholder="e.g. Ahmad Raza"
                    />

                    {/* Email */}
                    <InputField
                      label="Email Address"
                      id="email"
                      type="email"
                      value={fields.email}
                      onChange={handleChange('email')}
                      error={errors.email}
                      placeholder="e.g. ahmad@company.com"
                    />

                    {/* Business Type – Dropdown */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="businessType"
                        className="text-[13px] font-semibold text-slate-700 tracking-wide"
                      >
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="businessType"
                        value={fields.businessType}
                        onChange={handleChange('businessType')}
                        className={`w-full rounded-xl border px-4 py-3 text-[14px] text-slate-800 bg-white
                          outline-none transition-all duration-200 cursor-pointer
                          focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400
                          ${errors.businessType ? 'border-red-400 bg-red-50' : 'border-slate-200 hover:border-slate-300'}
                          ${!fields.businessType ? 'text-slate-400' : 'text-slate-800'}`}
                      >
                        <option value="" disabled>
                          Select your business type
                        </option>
                        {BUSINESS_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <AnimatePresence>
                        {errors.businessType && (
                          <motion.p
                            key="bterr"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-[12px] text-red-500 font-medium"
                          >
                            {errors.businessType}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-1.5">
                      <label
                        htmlFor="message"
                        className="text-[13px] font-semibold text-slate-700 tracking-wide"
                      >
                        Your Goal / Message{' '}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={fields.message}
                        onChange={handleChange('message')}
                        placeholder="e.g. I want to generate more qualified leads for my SaaS product..."
                        className={`w-full rounded-xl border px-4 py-3 text-[14px] text-slate-800 placeholder-slate-400
                          outline-none transition-all duration-200 bg-white resize-none
                          focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400
                          ${errors.message ? 'border-red-400 bg-red-50' : 'border-slate-200 hover:border-slate-300'}`}
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p
                            key="msgerr"
                            initial={{ opacity: 0, y: -4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.2 }}
                            className="text-[12px] text-red-500 font-medium"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleSubmit}
                      disabled={loading}
                      className="w-full mt-2 flex items-center justify-center gap-2.5 rounded-2xl
                        bg-emerald-500 hover:bg-emerald-600 text-white
                        px-8 py-4 text-[15px] font-bold
                        shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40
                        transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <svg
                            className="h-4 w-4 animate-spin"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get Free Strategy Call
                          <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </>
                      )}
                    </motion.button>

                    <p className="text-center text-[11.5px] text-slate-400">
                      🔒 We respect your privacy. No spam, ever.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
