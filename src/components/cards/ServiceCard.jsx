import { motion } from "framer-motion";

const ServiceCard = ({ icon, iconBg, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-[18px] p-7 border border-gray-200 cursor-default
                 transition-shadow duration-300 hover:shadow-[0_20px_48px_rgba(37,99,235,0.13)]
                 hover:border-blue-300 overflow-hidden"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-[18px] bg-gradient-to-br from-blue-50 to-purple-50
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-[52px] h-[52px] rounded-[14px] flex items-center justify-center text-2xl mb-5
                     transition-transform duration-300 group-hover:scale-110"
          style={{ background: iconBg }}
        >
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-[17px] font-bold text-gray-900 mb-2 leading-snug"
            style={{ fontFamily: "'Poppins', sans-serif" }}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13.5px] text-gray-500 leading-relaxed">
          {description}
        </p>

        {/* Learn more link */}
        <div className="flex items-center gap-1.5 mt-5 text-[13px] font-bold text-blue-600
                        transition-all duration-200 group-hover:gap-3">
          <span>Learn more</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;