import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MessageSquare, Pencil, Hammer, CheckCircle, Shield, Headphones } from 'lucide-react';

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      icon: MessageSquare,
      title: 'Consultation',
      description: 'We start by understanding your vision, requirements, and budget. Every great project begins with clear communication.',
      color: 'from-orange-600 to-orange-500',
    },
    {
      icon: Pencil,
      title: 'Design',
      description: 'Our team creates detailed designs and technical drawings. We refine every detail until it perfectly matches your expectations.',
      color: 'from-orange-500 to-orange-400',
    },
    {
      icon: Hammer,
      title: 'Fabrication',
      description: 'Skilled craftsmen bring designs to life with precision welding and metalwork. Quality control at every step ensures perfection.',
      color: 'from-orange-600 to-orange-500',
    },
    {
      icon: CheckCircle,
      title: 'Installation',
      description: 'Professional installation by certified technicians. We ensure everything fits perfectly and functions flawlessly.',
      color: 'from-orange-500 to-orange-400',
    },
    {
      icon: Shield,
      title: 'Quality Inspection',
      description: 'Rigorous testing and inspection of every joint, weld, and finish. We don\'t compromise on quality—ever.',
      color: 'from-orange-600 to-orange-500',
    },
    {
      icon: Headphones,
      title: 'After-Service Support',
      description: 'Our relationship doesn\'t end at installation. Lifetime support and maintenance for complete peace of mind.',
      color: 'from-orange-500 to-orange-400',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, transparent 49%, #FF6B35 50%, transparent 51%), linear-gradient(0deg, transparent 49%, #FF6B35 50%, transparent 51%)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.p
            className="text-orange-500 text-sm tracking-widest mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            HOW WE WORK
          </motion.p>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            A systematic approach to delivering excellence, every single time
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gray-800 transform md:-translate-x-1/2"
            style={{ height: '100%' }}
          >
            <motion.div
              className="w-full bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400"
              style={{ height: lineHeight }}
            />
          </motion.div>

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="flex-1 md:pr-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border border-gray-700 group hover:border-orange-500 transition-all duration-500 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm"
                    />

                    <div className="relative z-10">
                      <div className={`inline-flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                        <motion.div
                          className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <step.icon className="w-6 h-6 text-white" />
                        </motion.div>
                        <span className="text-6xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {step.title}
                      </h3>

                      <p className="text-gray-400 leading-relaxed text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {step.description}
                      </p>
                    </div>

                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-sm"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="relative z-20 flex-shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2, type: 'spring' }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full flex items-center justify-center border-8 border-black shadow-2xl relative">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={2} />

                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-orange-500"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-24"
        >
          <p className="text-gray-400 text-lg mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
            Ready to start your project?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255, 107, 53, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-lg font-semibold rounded-sm"
            onClick={() =>
              window.open(
                "https://wa.me/27765669233?text=Hi%2C%20I%27m%20interested%20in%20getting%20a%20quote%20for%20a%20welding%20project.",
                "_blank"
              )
            }
          >
            Begin Your Journey
          </motion.button>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-orange-500/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </section>
  );
}
