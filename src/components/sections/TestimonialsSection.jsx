import { motion } from "framer-motion";
import TestimonialCard from "../cards/TestimonialCard";
import { testimonials } from "../../data/testimonialsData";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-[5%] bg-white">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2.5 mb-3.5">
            <div className="h-px w-7 bg-purple-600" />
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-purple-600"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
              Client Reviews
            </span>
            <div className="h-px w-7 bg-purple-600" />
          </div>
          <h2 className="text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}>
            Don't Take{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Word
            </span>{" "}
            For It
          </h2>
          <p className="text-[15px] text-gray-600 mt-3">
            Our clients say it better than we ever could.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, index) => (
            <TestimonialCard key={t.id} index={index} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;