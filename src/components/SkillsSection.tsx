import { motion } from 'framer-motion';

// Komponen Hujan Es Krim Jatuh Estetik
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

// Data nilai akademik Almeira (Semua sudah di atas 80)
const skills = {
  bahasa: [
    { name: 'Indonesia', level: 85 },
    { name: 'Inggris', level: 90 },
    { name: 'Arab', level: 82 },
    { name: 'Thailand', level: 95 },
  ],
  ipa: [
    { name: 'Fisika', level: 90 },
    { name: 'Kimia', level: 89 },
    { name: 'Biologi', level: 88 },
    { name: 'Matematika', level: 82 }
  ],
  ips: [
    { name: 'Sejarah', level: 95 },
    { name: 'Ekonomi', level: 86 },
    { name: 'Geografi', level: 84 },
    { name: 'Sosiologi', level: 93 },
  ],
};

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-purple-950">
        <span className="font-semibold">{name}</span>
        <span className="text-sm font-bold text-purple-700">{level}%</span>
      </div>
      <div className="h-2.5 bg-purple-950/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-500"
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-gradient-to-b from-purple-300 via-fuchsia-100 to-fuchsia-200 text-purple-950 relative overflow-hidden">
      
      {/* Efek Hujan Es Krim Jatuh */}
      <IceCreamRain />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-purple-700 font-bold mb-2 block">Keahlian</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-purple-950">
            Skills &amp; Akademik
          </h2>
          <div className="w-20 h-1 bg-purple-600/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card Bahasa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl hover:bg-white/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-2xl">🗣️</span>
                </div>
                <h3 className="font-display text-xl font-bold text-purple-950">Bahasa</h3>
              </div>
              <div className="space-y-4">
                {skills.bahasa.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card IPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl hover:bg-white/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-2xl">⚗️</span>
                </div>
                <h3 className="font-display text-xl font-bold text-purple-950">IPA</h3>
              </div>
              <div className="space-y-4">
                {skills.ipa.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card IPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl hover:bg-white/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-400/20">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-display text-xl font-bold text-purple-950">IPS</h3>
              </div>
              <div className="space-y-4">
                {skills.ips.map((skill, index) => (
                  <SkillBar key={skill.name} {...skill} delay={index * 0.1} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}