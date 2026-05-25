import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react'; // Hanya meng-import ikon yang benar-benar dipakai
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

// Komponen Hujan Es Krim
const IceCreamRain = () => {
  const iceCreams = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 20 + Math.random() * 20,
    rotate: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {iceCreams.map((ice) => (
        <motion.div
          key={ice.id}
          initial={{ y: '-10%', x: 0, opacity: 0, rotate: ice.rotate }}
          animate={{ 
            y: '110vh', 
            x: [0, Math.random() * 40 - 20, 0], 
            opacity: [0, 0.7, 0.7, 0] 
          }}
          transition={{
            duration: ice.duration,
            repeat: Infinity,
            delay: ice.delay,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            left: ice.left,
            fontSize: `${ice.size}px`,
          }}
        >
          🍦
        </motion.div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // BG diubah ke Ungu Lilac Pastel Super Muda
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-300 via-fuchsia-200 to-purple-400 text-purple-950">
      
      <IceCreamRain />
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* BAGIAN KIRI: FOTO PROFIL */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl animate-pulse" />
              <div className="absolute inset-0 bg-white/40 backdrop-blur-md rounded-full transition-transform duration-500 hover:scale-105 border border-white/40" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/40 shadow-2xl">
                <img 
                  src="/profil.jpeg"
                  alt="Almeira" 
                  className="w-full h-full object-cover transform"
                />
              </div>
              
              {/* Teks diubah agar sesuai dengan instansi sekolah kamu */}
              <motion.div 
                className="absolute -bottom-2 -right-2 bg-purple-500/10 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold text-purple-900 shadow-lg border-l-4 border-purple-400 border border-white/30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                MAN 1 Model Banda Aceh
              </motion.div>
            </div>
          </motion.div>

          {/* BAGIAN KANAN: TEKS & KONTEN */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.span 
                className="inline-block px-4 py-2 rounded-full bg-white/40 backdrop-blur-md text-sm font-medium text-purple-900 mb-6 border-l-4 border-purple-400 border border-white/30"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                👋 Hayy Guyss!!
              </motion.span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-purple-950"
            >
              Almeira's 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-800 to-fuchsia-700">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-purple-900/80 mb-8 max-w-2xl font-medium"
            >
              Halo! Saya Almeira. Saya senang mengeksplorasi dunia web development untuk 
              solusi kreatif yang membantu banyak orang.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-purple-600 text-white hover:bg-purple-700 shadow-xl"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Liat Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 border-purple-400 text-purple-900 hover:bg-purple-100/50 backdrop-blur-sm font-semibold"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Hubungi Saya
              </Button>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex items-center justify-center md:justify-start gap-6"
            >
              {[
                { icon: Github, href: 'https://github.com/meiraalmeira1909-source', label: 'GitHub' },
                { icon: Instagram, href: 'https://www.instagram.com/almeirafitriya_/', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/40 backdrop-blur-md text-purple-900 hover:bg-purple-100 border border-white/30 transition-all duration-300 shadow-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full bg-white/40 backdrop-blur-md border border-white/30 animate-float cursor-pointer shadow-md"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-purple-800" />
      </motion.button>
    </section>
  );
}