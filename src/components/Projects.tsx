// Project.tsx
// Option B implemented with ALL 4 carousel styles available for testing
// Toggle styles per section easily

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowLeft, ArrowRight } from 'lucide-react';

// ================= IMAGE IMPORTS =================
// Gates & Fencing
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image16 from '../assets/image16.jpeg';
import image19 from '../assets/image19.jpeg';
import image21 from '../assets/image21.jpeg';
import image22 from '../assets/image22.jpeg';
import image26 from '../assets/image26.jpeg';

// Window & Door Security (Burglar Bars)
import image7 from '../assets/image7.jpeg';
import image17 from '../assets/image17.jpeg';
import image34 from '../assets/image34.jpeg';
import image37 from '../assets/image37.jpeg';
import image38 from '../assets/image38.jpeg';
import image39 from '../assets/image39.jpeg';
import image63 from '../assets/image63.jpeg';

// Welding Expertise
import image61 from '../assets/image61.jpeg';
import image42 from '../assets/image42.jpeg';
import image23 from '../assets/image23.jpeg';
import image11 from '../assets/image11.jpeg';
import image35 from '../assets/image35.jpeg';
import image53 from '../assets/image53.jpeg';
import image27 from '../assets/image27.jpeg';
import image25 from '../assets/image25.jpeg';
import image18 from '../assets/image18.jpeg';
import image43 from '../assets/image43.jpeg';
import image56 from '../assets/image56.jpeg';

// Custom Metal Design
import image36 from '../assets/image36.jpeg';
import image30 from '../assets/image30.jpeg';
import image31 from '../assets/image31.jpeg';
import image33 from '../assets/image33.jpeg';
import image29 from '../assets/image29.jpeg';
import image24 from '../assets/image24.jpeg';
import image20 from '../assets/image20.jpeg';
import image14 from '../assets/image14.jpeg';
import image12 from '../assets/image12.jpeg';
import image10 from '../assets/image10.jpeg';
import image6 from '../assets/image6.jpeg';

// Craftsmanship in Action
import image2 from '../assets/image2.jpeg';
import image45 from '../assets/image45.jpeg';
import image44 from '../assets/image44.jpeg';
import image46 from '../assets/image46.jpeg';
import image47 from '../assets/image47.jpeg';
import image48 from '../assets/image48.jpeg';
import image49 from '../assets/image49.jpeg';
import image50 from '../assets/image50.jpeg';
import image51 from '../assets/image51.jpeg';
import image52 from '../assets/image52.jpeg';
import image54 from '../assets/image54.jpeg';
import image57 from '../assets/image57.jpeg';
import image58 from '../assets/image58.jpeg';
import image59 from '../assets/image59.jpeg';
import image64 from '../assets/image64.jpeg';
import image65 from '../assets/image65.jpeg';

// ================= TYPES =================
interface GallerySection {
  title: string;
  description: string;
  images: string[];
  style: 'filmstrip' | 'cards' | 'fullwidth' | 'masonry';
}

// ================= DATA =================
const SECTIONS: GallerySection[] = [
  {
    title: 'Gates & Fencing',
    description: 'Heavy-duty security gates and fencing solutions engineered for strength and longevity.',
    images: [image4, image5, image16, image19, image21, image22, image26],
    style: 'filmstrip',
  },
  {
    title: 'Window & Door Security',
    description: 'Precision-crafted burglar bars and protective metalwork for homes and businesses.',
    images: [image7, image17, image34, image37, image38, image39, image63],
    style: 'cards',
  },
  {
    title: 'Welding Expertise',
    description: 'Showcasing professional welding skills across structural and custom applications.',
    images: [image61, image42, image23, image11, image35, image53, image27, image25, image18, image43, image56],
    style: 'fullwidth',
  },
  {
    title: 'Custom Metal Design',
    description: 'Bespoke metal creations tailored to architectural and artistic requirements.',
    images: [image36, image30, image31, image33, image29, image24, image20, image14, image12, image10, image6],
    style: 'masonry',
  },
  {
    title: 'Craftsmanship in Action',
    description: 'Behind-the-scenes moments highlighting work ethic, precision, and dedication.',
    images: [image2, image45, image44, image46, image47, image48, image49, image50, image51, image52, image54, image57, image58, image59, image64, image65],
    style: 'filmstrip',
  },
];

// ================= LIGHTBOX =================
function Lightbox({ images, index, onClose }: { images: string[]; index: number; onClose: () => void }) {
  const [current, setCurrent] = useState(index);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrent((c) => (c + 1) % images.length);
      if (e.key === 'ArrowLeft') setCurrent((c) => (c - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [images.length, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <div className="relative max-w-6xl w-full px-6" onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose} className="absolute top-0 right-0 p-3">
            <X className="text-white" />
          </button>
          <button onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)} className="absolute left-0 top-1/2">
            <ArrowLeft className="text-white" />
          </button>
          <button onClick={() => setCurrent((c) => (c + 1) % images.length)} className="absolute right-0 top-1/2">
            <ArrowRight className="text-white" />
          </button>
          <img src={images[current]} className="mx-auto max-h-[80vh] object-contain" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// ================= CAROUSELS =================
function Filmstrip({ images, onOpen }: { images: string[]; onOpen: (i: number) => void }) {
  return (
    <div className="flex gap-4 overflow-x-auto scrollbar-hide">
      {images.map((img, i) => (
        <motion.img key={i} src={img} onClick={() => onOpen(i)} className="h-64 cursor-pointer" whileHover={{ scale: 1.05 }} />
      ))}
    </div>
  );
}

function Cards({ images, onOpen }: { images: string[]; onOpen: (i: number) => void }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, i) => (
        <motion.div key={i} whileHover={{ y: -6 }} onClick={() => onOpen(i)} className="cursor-pointer">
          <img src={img} className="rounded-md shadow-lg" />
        </motion.div>
      ))}
    </div>
  );
}

function FullWidth({ images, onOpen }: { images: string[]; onOpen: (i: number) => void }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <motion.img src={images[index]} onClick={() => onOpen(index)} className="w-full h-[420px] object-cover cursor-pointer" />
  );
}

function Masonry({ images, onOpen }: { images: string[]; onOpen: (i: number) => void }) {
  return (
    <div className="columns-2 md:columns-3 gap-4">
      {images.map((img, i) => (
        <motion.img key={i} src={img} onClick={() => onOpen(i)} className="mb-4 cursor-pointer" whileHover={{ scale: 1.03 }} />
      ))}
    </div>
  );
}

// ================= MAIN PAGE =================
export default function Project() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const renderCarousel = (section: GallerySection) => {
    const open = (i: number) => setLightbox({ images: section.images, index: i });
    if (section.style === 'filmstrip') return <Filmstrip images={section.images} onOpen={open} />;
    if (section.style === 'cards') return <Cards images={section.images} onOpen={open} />;
    if (section.style === 'fullwidth') return <FullWidth images={section.images} onOpen={open} />;
    return <Masonry images={section.images} onOpen={open} />;
  };

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-24">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="text-4xl font-bold mb-2">{section.title}</h2>
            <p className="text-gray-400 mb-8 max-w-2xl">{section.description}</p>
            {renderCarousel(section)}
          </div>
        ))}
      </div>

      {lightbox && (
        <Lightbox images={lightbox.images} index={lightbox.index} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
