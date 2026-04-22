import { motion } from "framer-motion";

const PortfolioCard = ({ image, tag, result, business, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group bg-white rounded-[20px] overflow-hidden border border-gray-200
                 transition-shadow duration-350 hover:shadow-[0_28px_56px_rgba(37,99,235,0.12)] cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[600ms] ease-out
                     group-hover:scale-[1.07]"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />

        {/* Tag badge */}
        <span className="absolute top-3.5 left-3.5 text-[11px] font-bold px-3 py-1.5
                         rounded-full bg-white/90 text-blue-600 backdrop-blur-sm">
          {tag}
        </span>

        {/* Result badge */}
        <span className="absolute top-3.5 right-3.5 text-[12px] font-extrabold px-3 py-1.5
                         rounded-full bg-emerald-600 text-white shadow-lg">
          {result}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Business type */}
        <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-purple-600 mb-1.5">
          {business}
        </p>

        {/* Title */}
        <h3
          className="text-[20px] font-extrabold text-gray-900 mb-2 leading-snug
                     transition-colors duration-200 group-hover:text-blue-600"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13.5px] text-gray-500 leading-relaxed">{description}</p>

        {/* Link */}
        <div className="flex items-center gap-1.5 mt-4 text-[13px] font-bold text-blue-600
                        transition-all duration-200 group-hover:gap-3">
          <span>View Case Study</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;