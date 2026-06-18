import React from 'react';
import { motion } from 'framer-motion';
import { blog } from '../data/blog';

const Blog = () => {
  return (
    <section className="bg-light section-padding">
      <div className="container-custom">
        <div className="section-header dark">
          <h2 className="gold-underline">Latest Insights & Blog</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-gold text-primary-text font-semibold px-4 py-1 rounded-full text-xs shadow-lg">
                  {post.category}
                </span>
                {/* Icon */}
                <span className="absolute bottom-4 right-4 text-3xl text-white/60">
                  {post.icon}
                </span>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-primary-navy">{post.title}</h4>
                <p className="text-secondary-text text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <a
                  href="#"
                  className="text-gold font-semibold hover:text-[#c4a032] transition-colors inline-flex items-center gap-2"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;