import { motion } from 'framer-motion';
import { Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61584555706740',
      label: 'Facebook',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/sfk_welds91',
      label: 'Instagram',
    },
    {
      icon: SiTiktok,
      href: 'https://www.tiktok.com/@sfkwelds',
      label: 'TikTok',
    },
  ];

  return (
    <footer className="bg-black px-6 pt-14 pb-6">
      <div className="max-w-6xl mx-auto">
        {/* Thin divider */}
        <div className="h-px w-full bg-gray-800 mb-10" />

        <div className="grid gap-10 md:grid-cols-2">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold tracking-wider text-white font-montserrat">
              SFKWELDS
            </h3>

            <p className="mt-3 text-sm text-gray-400 max-w-md font-inter leading-relaxed">
              Precision metalwork and fabrication services built on reliability,
              safety, and craftsmanship.
            </p>

            <p className="mt-4 text-xs tracking-widest text-gray-500">
              BOLD · SAFE · STRONG
            </p>
          </div>

          {/* Contact */}
          <address className="not-italic space-y-4 text-sm text-gray-400 font-inter">
            <div>
              <span className="text-gray-500">Hours</span>
              <div>Mon – Fri · 07:00 – 16:25</div>
            </div>

            <motion.a
              href="mailto:sfkwelds@gmail.com"
              whileHover={{ color: '#f97316' }}
              className="flex items-center gap-2 transition-colors"
            >
              <Mail className="w-4 h-4" />
              sfkwelds@gmail.com
            </motion.a>

            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5" />
              <span>
                20 Roger Dayson Rd, Groenkloof<br />
                Pretoria, South Africa
              </span>
            </div>

            {/* Social */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ color: '#f97316' }}
                  className="text-gray-500 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </address>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <span>© {currentYear} SFKWELDS. All rights reserved.</span>

          <span>
            Designed & Developed by{' '}
            <span className="text-gray-300 font-medium">
              ArtHitect012
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
