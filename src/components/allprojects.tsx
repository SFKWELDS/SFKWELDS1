// src/components/AllProjects.tsx
import { useEffect, useMemo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

/**
 * AllProjects.tsx
 *
 * - Professional portfolio masonry grid
 * - Filter toolbar (All + categories)
 * - Each category maps to 5-10 images (sample images reused here)
 * - Clicking an image opens a full-screen lightbox with navigation + keyboard support
 *
 * Notes:
 * - Replace / add imports for additional images under GALLERY_IMAGES
 * - Uses CSS columns for a responsive masonry effect (no external libs)
 * - Accessible keyboard interactions implemented
 */

/* ---------------------------
   Image imports (replace/add as needed)
   --------------------------- */
import img1 from '../assets/image6.jpeg';
import img2 from '../assets/image15.jpeg';
import img3 from '../assets/image30.jpeg';
import img4 from '../assets/image20.jpeg';
import img5 from '../assets/image37.jpeg';
import img6 from '../assets/image41.jpeg';

// If you add more images, import them above and add to the lists below.

/* ---------------------------
   Types
   --------------------------- */
type GalleryImage = {
  id: string;
  src: string;
  title?: string;
  category: string;
  alt?: string;
};

/* ---------------------------
   Gallery data: map categories to images.
   - For demonstration I reuse your imported images to populate each category.
   - Replace with distinct images as you add them.
   --------------------------- */
const GALLERY_IMAGES: GalleryImage[] = [
  // Gates & Doors
  { id: 'g1', src: img1, title: 'Modern Security Gate — Project A', category: 'Gates & Doors', alt: 'Security gate closeup' },
  { id: 'g2', src: img2, title: 'Gate Automation — Project B', category: 'Gates & Doors', alt: 'Gate automation detail' },
  { id: 'g3', src: img3, title: 'Gate Finish — Project C', category: 'Gates & Doors', alt: 'Gate powder-coat finish' },
  { id: 'g4', src: img4, title: 'Gate Installation — Project D', category: 'Gates & Doors', alt: 'Installed gate exterior' },
  { id: 'g5', src: img5, title: 'Gate Custom Panel — Project E', category: 'Gates & Doors', alt: 'Decorative gate panel' },

  // Stairs & Balconies
  { id: 's1', src: img2, title: 'Industrial Staircase — A', category: 'Stairs & Balconies', alt: 'Steel staircase' },
  { id: 's2', src: img3, title: 'Balcony Railing — B', category: 'Stairs & Balconies', alt: 'Balcony railing detail' },
  { id: 's3', src: img4, title: 'Staircase Finish — C', category: 'Stairs & Balconies', alt: 'Staircase finish closeup' },
  { id: 's4', src: img5, title: 'Custom Balustrade — D', category: 'Stairs & Balconies', alt: 'Balustrade design' },
  { id: 's5', src: img6, title: 'Structural Welding — E', category: 'Stairs & Balconies', alt: 'Structural welds' },

  // Commercial Welding
  { id: 'c1', src: img3, title: 'Commercial Entrance — A', category: 'Commercial Welding', alt: 'Commercial entrance metalwork' },
  { id: 'c2', src: img4, title: 'Storefront Metalwork — B', category: 'Commercial Welding', alt: 'Storefront frame' },
  { id: 'c3', src: img5, title: 'Large Fabrication — C', category: 'Commercial Welding', alt: 'Large fabrication' },
  { id: 'c4', src: img6, title: 'Sliding Door Frame — D', category: 'Commercial Welding', alt: 'Sliding door frame' },
  { id: 'c5', src: img1, title: 'Commercial Detail — E', category: 'Commercial Welding', alt: 'Commercial detail' },

  // Custom Fabrication
  { id: 'f1', src: img5, title: 'Feature Wall — A', category: 'Custom Fabrication', alt: 'Decorative feature wall' },
  { id: 'f2', src: img1, title: 'Artistic Metalwork — B', category: 'Custom Fabrication', alt: 'Artistic metal panel' },
  { id: 'f3', src: img6, title: 'Custom Panel — C', category: 'Custom Fabrication', alt: 'Custom metal panel' },
  { id: 'f4', src: img2, title: 'Bespoke Furniture — D', category: 'Custom Fabrication', alt: 'Metal furniture detail' },
  { id: 'f5', src: img3, title: 'Decorative Trim — E', category: 'Custom Fabrication', alt: 'Decorative metal trim' },

  // Aluminium Repairs
  { id: 'a1', src: img6, title: 'Window Frame — A', category: 'Aluminium Repairs', alt: 'Aluminium window frame' },
  { id: 'a2', src: img4, title: 'Frame Restoration — B', category: 'Aluminium Repairs', alt: 'Restored frame' },
  { id: 'a3', src: img1, title: 'Color Match — C', category: 'Aluminium Repairs', alt: 'Color matched frame' },
  { id: 'a4', src: img5, title: 'Reinforcement — D', category: 'Aluminium Repairs', alt: 'Frame reinforcement' },
  { id: 'a5', src: img2, title: 'Seal & Finish — E', category: 'Aluminium Repairs', alt: 'Seal and finish detail' },
];

/* ---------------------------
   Component
   --------------------------- */
export default function AllProjects(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // derive the category list from images (keeps in sync if you change GALLERY_IMAGES)
  const categories = useMemo(() => {
    const set = new Set<string>();
    GALLERY_IMAGES.forEach((g) => set.add(g.category));
    return ['All', ...Array.from(set)];
  }, []);

  // filtered images to display based on activeFilter
  const filtered = useMemo(() => {
    if (activeFilter === 'All') return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((g) => g.category === activeFilter);
  }, [activeFilter]);

  // Lightbox helpers
  const openLightboxAt = useCallback((index: number) => {
    setLightboxIndex(index);
    // prevent body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      const next = (current - 1 + filtered.length) % filtered.length;
      return next;
    });
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      const next = (current + 1) % filtered.length;
      return next;
    });
  }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        showPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        showNext();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightboxIndex, showNext, showPrev, closeLightbox]);

  // If the activeFilter changes while lightbox is open, close it to avoid index mismatch
  useEffect(() => {
    if (lightboxIndex !== null && filtered.length === 0) {
      closeLightbox();
    }
    // also clamp index if needed
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter, filtered.length]);

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-orange-500 text-sm tracking-widest mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            PORTFOLIO
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Professional Welding Portfolio
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: 'Inter, sans-serif' }}>
            Browse by category. Click any image to view full-screen, navigate with keyboard or arrows.
          </p>
        </motion.div>

        {/* Filter toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="flex flex-wrap gap-3 justify-center mb-8"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveFilter(cat);
                // close any open lightbox when filter changes
                if (lightboxIndex !== null) closeLightbox();
              }}
              className={`px-4 py-2 rounded-sm text-sm font-semibold transition-colors duration-200 ${
                activeFilter === cat
                  ? 'bg-orange-500 text-black'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid using CSS columns for responsive masonry */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {filtered.length === 0 ? (
            <p className="text-center text-gray-400 py-20">No images found for this category.</p>
          ) : (
            <div
              /* columns create masonry; adjust column-count with responsive utilities */
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
              style={{ columnGap: '1rem' }}
            >
              {filtered.map((img, index) => (
                <motion.figure
                  key={img.id}
                  layout
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid relative rounded-sm overflow-hidden mb-4 cursor-pointer border border-gray-800"
                  onClick={() => openLightboxAt(index)}
                >
                  <img
                    src={img.src}
                    alt={img.alt ?? img.title ?? 'project image'}
                    className="w-full h-auto object-cover block"
                    loading="lazy"
                  />
                  <figcaption className="absolute left-0 right-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white text-sm">
                    <div className="font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {img.title}
                    </div>
                    <div className="text-gray-300 text-xs">{img.category}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Lightbox (portal-like fixed overlay) */}
      <AnimatePresence>
        {lightboxIndex !== null && filtered[lightboxIndex] && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
          >
            {/* Content wrapper to stop propagation when clicking inside */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative max-w-6xl w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-800 flex items-center justify-center"
                aria-label="Close"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Prev / Next controls */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-800 flex items-center justify-center"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-5 h-5 text-white" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-gray-800/60 hover:bg-gray-800 flex items-center justify-center"
                aria-label="Next image"
              >
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              {/* Image */}
              <div className="w-full h-[70vh] flex items-center justify-center">
                <img
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt ?? filtered[lightboxIndex].title}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Caption bar */}
              <div className="mt-4 bg-transparent text-center">
                <div className="text-white text-lg font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {filtered[lightboxIndex].title}
                </div>
                <div className="text-gray-300 text-sm">{filtered[lightboxIndex].category}</div>
                <div className="text-gray-400 text-xs mt-2">
                  {lightboxIndex + 1} of {filtered.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
