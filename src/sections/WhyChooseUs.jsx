import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaGlobe, FaLightbulb, FaHeadset } from 'react-icons/fa';

const reasons = [
  { icon: FaBuilding, title: 'Industry Expertise' },
  { icon: FaGlobe, title: 'Global Reach' },
  { icon: FaLightbulb, title: 'Practical Solutions' },
  { icon: FaHeadset, title: 'Dedicated Support' },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-primary-navy section-padding">
      <div className="container-custom">
        <div className="section-header light">
          <h2 className="gold-underline">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-white"
              >
                <Icon className="text-4xl text-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold">{reason.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;