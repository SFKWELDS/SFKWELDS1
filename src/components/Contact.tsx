import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Format WhatsApp message
  const formatWhatsAppMessage = () => {
    return (
      `*New Quote Request*\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Service: ${formData.service}\n` +
      `Project Details:\n${formData.message}`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '27765669233';
    const message = encodeURIComponent(formatWhatsAppMessage());
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+27 76 566 9233',
      link: 'tel:+27765669233',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'sfkwelds@gmail.com',
      link: 'mailto:sfkwelds@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '20 Roger Dayson Rd, Groenkloof 358-Jr, Pretoria, 0027, South Africa',
      link: 'https://maps.google.com/?q=20+Roger+Dayson+Rd,+Groenkloof+358-Jr,+Pretoria,+0027,+South+Africa',
    },
  ];

  return (
    <section className="relative min-h-screen bg-black py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, transparent 48%, #FF6B35 50%, transparent 52%)',
          backgroundSize: '30px 30px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            className="text-orange-500 text-sm tracking-widest mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            GET IN TOUCH
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to bring your vision to life? Get in touch and let's discuss your project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-600 to-orange-400 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {info.title}
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {info.details}
                  </p>
                </div>
              </motion.a>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="pt-8"
            >
              <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-400" style={{ fontFamily: 'Inter, sans-serif' }}>
                <p>Monday - Friday: 07:00 - 16:25</p>
                <p>Saturday: Closed</p>
                <p>Sunday: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Full Name *
                  </label>
                  <motion.input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    animate={{
                      borderColor: focusedField === 'name' ? '#FF6B35' : '#374151',
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Email Address *
                  </label>
                  <motion.input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    animate={{
                      borderColor: focusedField === 'email' ? '#FF6B35' : '#374151',
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    animate={{
                      borderColor: focusedField === 'phone' ? '#FF6B35' : '#374151',
                    }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <label className="block text-sm font-semibold text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Service Needed *
                  </label>
                  <motion.select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('service')}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors duration-300"
                    animate={{
                      borderColor: focusedField === 'service' ? '#FF6B35' : '#374151',
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="Gates & Doors">Gates & Doors</option>
                    <option value="Stairs & Balconies">Stairs & Balconies</option>
                    <option value="Aluminium Repairs">Aluminium Repairs</option>
                    <option value="Custom Fabrication">Custom Fabrication</option>
                    <option value="Commercial Welding">Commercial Welding</option>
                    <option value="Specialty Projects">Specialty Projects</option>
                  </motion.select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative"
              >
                <label className="block text-sm font-semibold text-gray-400 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Project Details *
                </label>
                <motion.textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-sm text-white focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                  animate={{
                    borderColor: focusedField === 'message' ? '#FF6B35' : '#374151',
                  }}
                />
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-sm flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="https://wa.me/27765669233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-full flex items-center justify-center shadow-2xl"
        whileHover={{ scale: 1.1, rotate: 360 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          boxShadow: [
            '0 0 20px rgba(34, 197, 94, 0.4)',
            '0 0 40px rgba(34, 197, 94, 0.6)',
            '0 0 20px rgba(34, 197, 94, 0.4)',
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
          },
        }}
      >
        <MessageSquare className="w-8 h-8 text-white" />
      </motion.a>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        ))}
      </div>
    </section>
  );
}
