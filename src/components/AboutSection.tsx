import { motion } from 'framer-motion';
import { Rocket, BookCheck, MedalIcon, PenLineIcon } from 'lucide-react';

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

export default function AboutSection() {
  const stats = [
    { icon: BookCheck, value: '50+', label: 'Tugas Selesai' },
    { icon: MedalIcon, value: '15+', label: 'Peringkat Kelas' },
    { icon: PenLineIcon, value: '62+', label: 'Tinta Pulpen' },
    { icon: Rocket, value: '5+', label: 'Pengalaman Belajar' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-purple-400 via-fuchsia-100 to-purple-300 text-purple-950 relative overflow-hidden">
      
      {/* Efek Hujan Es Krim */}
      <IceCreamRain />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-700 font-bold mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-purple-950">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-purple-600/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* Box tempat Es Krim Loncat */}
              <div className="aspect-square rounded-2xl overflow-hidden bg-white/40 backdrop-blur-md shadow-2xl border border-white/40 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent flex items-center justify-center">
                  
                  {/* Animasi Es Krim Loncat-Loncat Pakai Framer Motion */}
                  <motion.span 
                    className="text-8xl select-none filter drop-shadow-xl"
                    animate={{ y: [0, -35, 0] }} 
                    transition={{
                      duration: 1.2, 
                      repeat: Infinity, 
                      ease: "easeInOut"
                    }}
                  >
                    🍦
                  </motion.span>

                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-4 bg-white/50 backdrop-blur-md rounded-xl shadow-2xl border border-white/40">
                <p className="font-display font-bold text-2xl text-purple-800">
                  5+ Tahun
                </p>
                <p className="text-sm text-purple-900 font-medium">Pengalaman belajar</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-purple-950">
              Profil Singkat
            </h3>
            <p className="text-purple-900/90 leading-relaxed font-medium">
              Saya Almeira Fitriya saya lahir di Banda Aceh tanggal 19 september 2009 saya berdomisili
              di panteriek, lueng bata, kota Banda Aceh. Saya menempuh jenjang pendidikan di MAN 1 Model 
              Banda Aceh.
            </p>
            <p className="text-purple-900/90 leading-relaxed font-medium">
              saya menghargai waktu untuk selalu berkomitmen untuk menyelesaikan setiap tanggung jawab 
              yang diberikan dengan hasil yang maksimal dan menciptakan pengalaman penggunaan yang modern 
              dan inspiratif.
            </p>

            {/* QUOTE GLASSMORPHISM PASTEL TERANG */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 bg-white/60 backdrop-blur-md text-purple-950 rounded-2xl rounded-tl-none shadow-md border-l-8 border-purple-400 my-6 border border-white/40"
            >
              <p className="italic font-semibold text-base text-purple-900 leading-relaxed">
                "Tetap semangat belajar untuk meraih mimpi yang tinggi."
              </p>
            </motion.div>

            {/* Kotak-kotak statistik */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white/40 backdrop-blur-md rounded-xl text-center border border-white/30 shadow-sm hover:bg-white/60 transition-all"
                >
                  <stat.icon className="h-6 w-6 text-purple-700 mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-purple-950">{stat.value}</p>
                  <p className="text-sm text-purple-900 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}