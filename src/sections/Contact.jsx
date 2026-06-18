import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapPin, FaWhatsapp, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting, isValid }, reset } = useForm({
    mode: 'onChange',
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const onSubmit = async (data) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      reset();
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 3000);
    }
  };

  return (
    <section className="bg-primary-navy section-padding" id="contact">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-header light text-center mb-12"
        >
          <h2 className="gold-underline">Contact Us</h2>
          <p className="text-white/70 max-w-3xl mx-auto mt-4 text-lg">
            Get in touch with our team for expert compliance and financial solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h4 className="text-2xl font-bold mb-6 text-primary-navy">Send a Message</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium mb-1 text-gray-700">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Company Name</label>
                <input
                  type="text"
                  {...register('company')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Email Address</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="john@acme.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="+44 7415 031245"
                />
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Service</label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                >
                  <option value="">Select a service...</option>
                  <option value="AML Compliance">AML Compliance</option>
                  <option value="Licensing">Licensing</option>
                  <option value="MLRO">MLRO</option>
                  <option value="Internal Audit">Internal Audit</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Business Advisory">Business Advisory</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1 text-gray-700">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
                  placeholder="Your message..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !isValid}
                className="btn-gold w-full text-center"
              >
                {isSubmitting ? 'Sending...' : 'Submit Request'}
              </button>

              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-semibold">✓ Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-semibold">✗ Failed to send. Please try again.</p>
              )}
            </form>

            <button className="btn-gold w-full text-center mt-4 bg-[#25D366] hover:bg-[#1ebe5a] text-white">
              <FaWhatsapp className="inline mr-2" />
              WhatsApp Us
            </button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h4 className="text-2xl font-bold mb-6 text-primary-navy">Get In Touch</h4>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <FaEnvelope className="text-gold text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a href="mailto:info@zemglobal.co.uk" className="text-gray-600 hover:text-gold transition-colors">
                    info@zemglobal.co.uk
                  </a>
                </div>
              </div>

              {/* Website - NEW */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <FaGlobe className="text-gold text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Website</p>
                  <a href="https://www.zemglobal.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gold transition-colors">
                    www.zemglobal.co.uk
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <FaWhatsapp className="text-gold text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">WhatsApp</p>
                  <a href="tel:+447415031245" className="text-gray-600 hover:text-gold transition-colors">
                    +44 7415 031245
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-gold/10 rounded-lg group-hover:bg-gold/20 transition-colors">
                  <FaMapPin className="text-gold text-xl" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Address</p>
                  <p className="text-gray-600">200 Liberty St, New York, NY 10006</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 p-6 bg-gray-50 rounded-xl flex items-center justify-center text-gray-500 border-2 border-dashed border-gray-200">
              <FaMapPin className="mr-2 text-gold" />
              <span>Interactive map (placeholder)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;