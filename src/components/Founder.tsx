import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Trophy, Flame } from 'lucide-react';

import sparkImg from '../assets/image52.jpeg';
import flameImg from '../assets/image48.jpeg';
import trophyImg from '../assets/image58.jpeg';
import founderImg from '../assets/Founder.jpeg';
import bornImg from '../assets/image59.jpeg';
import lastImg from '../assets/image47.jpeg';

export default function Founder() {
  const containerRef = useRef<HTMLDivElement>(null);
  useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const timeline = [
    {
      year: '2014',
      title: 'First Spark',
      description:
        'First exposure to welding. A single spark ignited a lifelong passion for metalwork and craftsmanship.',
      icon: Sparkles,
      bg: sparkImg,
    },
    {
      year: '2016',
      title: 'Passion Becomes Craft',
      description:
        'Dedicated thousands of hours to mastering welding. Every project became a lesson in precision and discipline.',
      icon: Flame,
      bg: flameImg,
    },
    {
      year: '2019',
      title: 'Triple Crown',
      description:
        'Awarded Employee of the Year three consecutive times. A recognition of unwavering excellence and dedication.',
      icon: Trophy,
      bg: trophyImg,
    },
    {
      year: '2021',
      title: 'SFKWELDS Founded',
      description:
        'SFKWELDS officially launched, offering welding, fabrication, gates, burglar doors, stairs, and balcony steelwork throughout South Africa.',
      icon: Sparkles,
      bg: bornImg,
    },
    {
      year: '2024',
      title: 'Growth & Expansion',
      description:
        'SFKWELDS expanded operations, strengthened its market presence, and continued providing high-quality, affordable fabrication services to residential, commercial, and industrial clients.',
      icon: Trophy,
      bg: lastImg,
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black py-32 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #FF6B35 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
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
            THE VISIONARY
          </motion.p>
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            The Man Behind The Sparks
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            E.S Matalauta
          </p>
        </motion.div>

        {/* MAIN PORTRAIT */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full aspect-square rounded-sm overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10" />

              <img
                src={founderImg}
                className="absolute inset-0 w-full h-full object-cover object-top scale-90"
                alt="Founder Portrait"
              />

              <motion.div
                className="absolute inset-0 border-2 border-orange-500"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
              />
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 bg-orange-500 text-black p-6 rounded-sm"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-4xl font-bold">5+</p>
              <p className="text-sm font-semibold">Years Experience</p>
            </motion.div>
          </motion.div>

          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              From the first spark in 2014 to founding SFKWELDS in 2021, E.S.
              Matalauta’s journey has been driven by passion and craftsmanship.
              What began as curiosity became a refined skill built through years
              of dedication to welding, fabrication, and metalwork.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-300 text-lg leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              With over 5 years of industry experience, he built SFKWELDS on
              principles of quality, reliability, and precision. His mission is
              to deliver work that matches each client’s vision—exactly and on
              time—while building relationships as strong as the steel he
              fabricates.
            </motion.p>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-500 to-transparent transform -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-32">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <motion.img
                  src={item.bg}
                  className="absolute inset-0 w-full h-full object-cover opacity-10 blur-sm rounded-xl pointer-events-none"
                  initial={{ opacity: 0, scale: 1.1 }}
                  whileInView={{ opacity: 0.12, scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />

                <div className="flex-1 text-center md:text-right relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <h3
                      className="text-6xl font-bold text-orange-500 mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.year}
                    </h3>
                    <h4
                      className="text-2xl font-semibold text-white mb-3"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-gray-400 leading-relaxed max-w-md mx-auto md:mx-0"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="relative z-20"
                  whileHover={{ scale: 1.2, rotate: 180 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-400 rounded-full flex items-center justify-center border-4 border-black">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
