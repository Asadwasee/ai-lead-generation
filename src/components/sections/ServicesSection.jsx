import { motion } from "framer-motion";
import ServiceCard from "../cards/ServiceCard";
import { services } from "../../data/servicesData";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-24 px-[5%] bg-gray-50 border-y border-gray-200"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-2.5 mb-3.5">
              <div className="h-px w-7 bg-blue-600" />
              <span className="text-[12px] font-bold tracking-[0.14em] uppercase text-blue-600"
                    style={{ fontFamily: "'Poppins', sans-serif" }}>
                What We Offer
              </span>
            </div>
            <h2
              className="text-[42px] font-extrabold leading-[1.12] tracking-[-0.02em] text-gray-900"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Services Built to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Convert
              </span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] text-gray-600 leading-[1.7] max-w-xs lg:text-right"
          >
            Every service is engineered around one goal — turning browsers into buyers.
          </motion.p>
        </div>

        {/* Grid — .map() */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              index={index}
              icon={service.icon}
              iconBg={service.iconBg}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;