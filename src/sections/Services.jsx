import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';

const Services = () => {
  return (
    <section className="bg-primary-navy section-padding">
      <div className="container-custom">
        <div className="section-header light">
          <h2 className="gold-underline">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-white text-left"
              >
                <Icon className="text-4xl text-gold mb-4" />
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-secondary-text text-sm">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;