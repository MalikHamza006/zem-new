import React from 'react';
import { motion } from 'framer-motion';
import { team } from '../data/team';
import { FaLinkedin } from 'react-icons/fa';

const Team = () => {
  return (
    <section className="bg-light section-padding">
      <div className="container-custom">
        <div className="section-header dark">
          <h2 className="gold-underline">Our Leadership Team</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="card-white text-center"
            >
              <div className="w-32 h-32 rounded-full bg-primary-navy/10 mx-auto mb-4 flex items-center justify-center text-5xl text-primary-navy/30">
                {member.avatar}
              </div>
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gold text-sm font-medium">{member.role}</p>
              <p className="text-secondary-text text-sm mt-2">{member.bio}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-gold hover:text-[#c4a032] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;