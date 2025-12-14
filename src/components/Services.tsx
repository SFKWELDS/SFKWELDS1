import { motion } from 'framer-motion';
import { useState } from 'react';
import { DoorOpen, Move, Wrench, Box, Building2, Sparkles } from 'lucide-react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: DoorOpen,
      title: 'Gates & Doors',
      description: 'Custom-designed gates and doors that combine security with stunning aesthetics. From residential to commercial applications.',
      features: ['Custom Designs', 'Security Features', 'Automated Systems', 'Premium Finishes'],
    },
    {
      icon: Move,
      title: 'Stairs & Balconies',
      description: 'Architectural metalwork that transforms spaces. Precision-engineered staircases and balconies built to last generations.',
      features: ['Modern Designs', 'Safety Certified', 'Custom Railings', 'Structural Integrity'],
    },
    {
      icon: Wrench,
      title: 'Aluminium Repairs',
      description: 'Expert restoration and repair services. We breathe new life into damaged aluminium structures with precision craftsmanship.',
      features: ['Quick Turnaround', 'Seamless Repairs', 'Color Matching', 'Structural Assessment'],
    },
    {
      icon: Box,
      title: 'Custom Fabrication',
      description: 'Turn your vision into reality. Bespoke metalwork tailored to your exact specifications and design requirements.',
      features: ['CAD Design', 'Prototyping', 'Material Selection', 'On-site Installation'],
    },
    {
      icon: Building2,
      title: 'Commercial Welding',
      description: 'Large-scale projects handled with precision. Industrial welding services for commercial buildings and infrastructure.',
      features: ['Project Management', 'Certified Welders', 'Timeline Guarantees', 'Safety Compliance'],
    },
    {
      icon: Sparkles,
      title: 'Specialty Projects',
      description: 'Unique challenges require unique solutions. Complex metalwork that pushes the boundaries of what\'s possible.',
      features: ['Consultation', 'Engineering Support', 'Quality Assurance', 'Lifetime Warranty'],
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4">
      <div className="max-w-7xl mx-auto">
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
            WHAT WE OFFER
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            From concept to completion, we deliver excellence in every weld
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group h-full"
            >
              <motion.div
                className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border border-gray-700 h-full overflow-hidden cursor-pointer"
                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: hoveredIndex === index ? 5 : 0,
                }}
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px',
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-orange-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl"
                  animate={{
                    scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                    opacity: hoveredIndex === index ? [0.5, 0.8, 0.5] : 0.5,
                  }}
                  transition={{ duration: 2, repeat: hoveredIndex === index ? Infinity : 0 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="mb-6 relative"
                    animate={{
                      rotate: hoveredIndex === index ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-sm flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                    </div>
                    <motion.div
                      className="absolute inset-0 border-2 border-orange-500 rounded-sm"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                        opacity: hoveredIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {service.description}
                  </p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: hoveredIndex === index ? 'auto' : 0,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="border-t border-gray-700 pt-4 space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.div
                          key={feature}
                          initial={{ x: -10, opacity: 0 }}
                          animate={{
                            x: hoveredIndex === index ? 0 : -10,
                            opacity: hoveredIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400"
                  initial={{ width: 0 }}
                  animate={{ width: hoveredIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.5 }}
                />

                <motion.div
                  className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-orange-600 to-orange-400"
                  initial={{ height: 0 }}
                  animate={{ height: hoveredIndex === index ? '100%' : '0%' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            onClick={() =>
              window.open(
                "https://wa.me/27765669233?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20quote%20for%20a%20welding%20project.",
                "_blank"
              )
            }
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="relative px-12 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-sm overflow-hidden group"
          >
            <span className="relative z-10">Request a Quote →</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
