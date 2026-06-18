import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapPin, FaWhatsapp } from 'react-icons/fa';

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
    <section className="bg-primary-navy section-padding">
      <div className="container-custom">
        <div className="section-header light">
          <h2 className="gold-underline">Contact Us</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded p-8 shadow-card"
          >
            <h4 className="text-2xl font-bold mb-6">Send a Message</h4>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Company Name</label>
                <input
                  type="text"
                  {...register('company')}
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="john@acme.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  {...register('phone')}
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                  placeholder="+1 234 567 890"
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Service</label>
                <select
                  {...register('service')}
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition"
                >
                  <option value="AML Compliance">AML Compliance</option>
                  <option value="Licensing">Licensing</option>
                  <option value="MLRO">MLRO</option>
                  <option value="Internal Audit">Internal Audit</option>
                  <option value="Accounting">Accounting</option>
                  <option value="Business Advisory">Business Advisory</option>
                </select>
              </div>

              <div>
                <label className="block font-medium mb-1">Message</label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows="4"
                  className="w-full px-4 py-3 border border-light rounded bg-light focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent transition resize-y"
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
            className="bg-white rounded p-8 shadow-card"
          >
            <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaEnvelope className="text-gold text-2xl mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hello@apexcomply.com" className="text-secondary-text hover:text-gold transition-colors">
                    hello@apexcomply.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaPhone className="text-gold text-2xl mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <a href="tel:+18005550199" className="text-secondary-text hover:text-gold transition-colors">
                    +1 (800) 555-0199
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <FaMapPin className="text-gold text-2xl mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-secondary-text">200 Liberty St, New York, NY 10006</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-light rounded flex items-center justify-center text-secondary-text">
              <FaMapPin className="mr-2" />
              Interactive map (placeholder)
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;