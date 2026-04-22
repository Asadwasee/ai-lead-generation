import { motion } from "framer-motion";
import PortfolioCard from "../cards/PortfolioCard";
import { portfolio } from "../../data/portfolioData";

const PortfolioSection = () => {
  return (
    <section
      id="portfolio"
      className="py-24 px-[5%] bg-gray-50 border-y border-gray-200"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <div className="flex items-center gap-2.5 mb-3.5">
            <div className="h-px w-7 bg-blue-600" />
            <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-blue-600"
                  style={{ fontFamily: "'Poppins', sans-serif" }}>
              Case Studies
            </span>
          </div>
          <h2
            className="text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] text-gray-900"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Results That{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Speak Loudly
            </span>
          </h2>
          <p className="text-[15px] text-gray-600 leading-[1.7] mt-3 max-w-md">
            Real projects. Real growth. See what happens when strategy meets execution.
          </p>
        </motion.div>

        {/* Grid — .map() */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {portfolio.map((project, index) => (
            <PortfolioCard
              key={project.id}
              index={index}
              image={project.image}
              tag={project.tag}
              result={project.result}
              business={project.business}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;