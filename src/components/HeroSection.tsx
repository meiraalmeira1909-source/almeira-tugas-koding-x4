import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Layout Grid: 1 kolom di mobile, 2 kolom di md ke atas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* BAGIAN KIRI: FOTO PROFIL */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="relative flex justify-center md:justify-end"
>
  <div className="relative w-64 h-64 md:w-80 md:h-80">
    {/* 1. Efek Bingkai: Ubah rounded-3xl menjadi rounded-full */}
    <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
    
    {/* 2. Glass Background: Ubah rounded-3xl menjadi rounded-full. 
        Note: Saya hapus rotate-3 agar lingkarannya terlihat rapi, tapi bisa kamu pakai lagi jika mau. */}
    <div className="absolute inset-0 glass rounded-full transition-transform duration-500 hover:scale-105" />
    
    {/* 3. Wadah Foto: Ubah rounded-3xl menjadi rounded-full */}
    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
      <img 
        src="/profil.jpeg"
        alt="Almeira" 
        className="w-full h-full object-cover transform"
      />
    </div>
    
    {/* Badge Dekorasi tetap sama */}
    <motion.div 
      className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-lg text-xs font-bold text-primary shadow-glow"
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      Available for Work
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
                className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
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
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Almeira's 
              <br />
              <span className="text-gradient">Portfolio</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
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
                className="rounded-full px-8 shadow-glow"
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
                className="rounded-full px-8"
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
                // { icon: Linkedin, href: '#', label: 'LinkedIn' },
                // { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Instagram, href: 'https://www.instagram.com/almeirafitriya_/', label: 'Instagram' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nopener noreferrer"
                  className="p-3 rounded-full glass hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-float cursor-pointer"
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to About"
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}