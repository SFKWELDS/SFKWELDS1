import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Award, Users } from 'lucide-react';

export default function Overview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const blocks = [
    {
      icon: Shield,
      title: 'Who We Are',
      description: 'SFKWELDS is a premium welding and fabrication company built on a foundation of excellence. Founded by master craftsman Erhauci Matalauta, we bring unparalleled precision to every project.',
    },
    {
      icon: Award,
      title: 'What We Build',
      description: 'From custom gates and staircases to complex commercial installations, we transform raw metal into architectural masterpieces. Every weld tells a story of dedication and skill.',
    },
    {
      icon: Users,
      title: 'Why Clients Trust Us',
      description: 'Three-time Employee of the Year. Decade of expertise. Countless satisfied clients. We don\'t just meet expectations—we exceed them with every spark, every cut, every finish.',
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-32 px-4 overflow-hidden"
    >
      <motion.div
        style={{ opacity, scale }}
        className="max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Forged in Excellence
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {blocks.map((block, index) => (
            <motion.div
              key={block.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-sm border border-gray-700 hover:border-orange-500 transition-all duration-500 h-full overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <block.icon className="w-12 h-12 text-orange-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {block.title}
                  </h3>

                  <p className="text-gray-300 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                    {block.description}
                  </p>
                </div>

                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-600 to-orange-400"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <motion.line
              x1="10%"
              y1="50%"
              x2="90%"
              y2="50%"
              stroke="url(#gradient)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="0" />
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                <stop offset="100%" stopColor="#FF6B35" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
