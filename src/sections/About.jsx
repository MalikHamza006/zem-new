import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaShieldAlt, 
  FaGavel, 
  FaClipboardList, 
  FaChartPie, 
  FaCalculator, 
  FaHandshake, 
  FaUserTie, 
  FaUserCheck 
} from 'react-icons/fa';

const expertiseAreas = [
  { 
    icon: FaShieldAlt, 
    title: 'FCA Compliance Specialist',
    description: ' Prepared and submitted new SPI and API applications, alongside direct regulatory correspondence with the FCA on behalf of clients.'
  },
  { 
    icon: FaGavel, 
    title: 'MSB Compliance Consultant',
    description: 'Delivered end-to-end compliance programmes for multiple Money Service Businesses in the UK, including AML/CFT frameworks and transaction monitoring.'
  },
  { 
    icon: FaClipboardList, 
    title: 'HMRC Advisory ',
    description: 'Extensive experience handling HMRC correspondence for client verification matters, tax queries, and compliance reviews.'
  },
  { 
    icon: FaChartPie, 
    title: 'Restaurant Bookkeeping ',
    description: 'Ongoing bookkeeping and accounts management for restaurant and hospitality clients, delivering accurate financial records consistently.'
  },
  
];

const About = () => {
  return (
    <section className="bg-light section-padding" id="about">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header dark text-center mb-12"
        >
          <h2 className="gold-underline">About Us</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            We provide comprehensive compliance and financial solutions across multiple expertise areas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="card-white group"
              >
                <div className="relative">
                  {/* Icon with background glow */}
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-full bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                      <Icon className="text-4xl text-gold" />
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-primary-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {area.title}
                  </h4>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {area.description}
                  </p>

                  {/* Optional: Learn more link */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-gold text-sm font-semibold inline-flex items-center gap-1">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;