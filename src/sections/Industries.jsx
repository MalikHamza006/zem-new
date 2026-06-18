import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../data/industries';

const Industries = () => {
  return (
    <section className="bg-primary-navy section-padding">
      <div className="container-custom">
        <div className="section-header light">
          <h2 className="gold-underline">Industries We Serve</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-white"
              >
                <Icon className="text-4xl text-gold mx-auto mb-4" />
                <h4 className="text-xl font-semibold">{industry.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;