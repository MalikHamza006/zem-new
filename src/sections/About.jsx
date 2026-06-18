import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaGavel, FaClipboardList, FaChartPie, FaCalculator, FaHandshake, FaUserTie, FaUserCheck } from 'react-icons/fa';

const expertiseAreas = [
  { icon: FaShieldAlt, title: 'AML Compliance' },
  { icon: FaGavel, title: 'Regulatory Licensing' },
  { icon: FaClipboardList, title: 'Internal Audit' },
  { icon: FaChartPie, title: 'Risk Management' },
  { icon: FaCalculator, title: 'Accounting Services' },
  { icon: FaHandshake, title: 'Business Advisory' },
  { icon: FaUserTie, title: 'Outsourced MLRO' },
  { icon: FaUserCheck, title: 'Compliance Officer' },
];

const About = () => {
  return (
    <section className="bg-light section-padding">
      <div className="container-custom">
        <div className="section-header dark">
          <h2 className="gold-underline">Core Expertise Areas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="card-white"
              >
                <Icon className="text-4xl text-gold mx-auto mb-4" />
                <h4 className="text-lg font-semibold">{area.title}</h4>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;