import { motion } from "framer-motion";

const TestimonialCard = ({ text, name, role, avatar, avatarBg, rating, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
      className="group bg-white rounded-[18px] p-7 border border-gray-200
                 transition-all duration-300 hover:shadow-[0_16px_40px_rgba(37,99,235,0.1)]
                 hover:border-blue-200"
    >
      <div className="text-[44px] leading-none font-black text-blue-100 mb-1
                      group-hover:text-blue-200 transition-colors duration-300">
        "
      </div>
      <p className="text-[14px] text-gray-600 leading-[1.75] italic">{text}</p>
      <div className="border-t border-gray-100 mt-5 pt-5 flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center
                     text-white font-extrabold text-[17px] flex-shrink-0"
          style={{ background: avatarBg }}
        >
          {avatar}
        </div>
        <div>
          <div className="text-[14px] font-bold text-gray-900"
               style={{ fontFamily: "'Poppins', sans-serif" }}>
            {name}
          </div>
          <div className="text-[12px] text-gray-400 mt-0.5">{role}</div>
          <div className="text-[13px] text-amber-400 tracking-wide mt-1">
            {"★".repeat(rating)}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;