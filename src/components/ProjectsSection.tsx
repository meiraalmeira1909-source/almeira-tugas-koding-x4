import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const projects = [
  {
    title: 'Motivasi',
    description: 'Platform e-commerce modern dengan fitur lengkap termasuk payment gateway, inventory management, dan analytics dashboard.',
    tags: ['ILmu', 'Pengembangan diri', 'Tips'],
    image: '😊',
    color: 'from-purple-500/20 to-fuchsia-500/20',
    github: '#',
    youtube: '#',
  },
  {
    title: 'Management System',
    description: 'Platform pembelajaran online dengan video streaming, quiz interaktif, dan progress tracking.',
    tags: ['Mengatur', 'Tips&Tricks', 'Student'],
    image: '🛒',
    color: 'from-fuchsia-500/20 to-pink-500/20',
    github: '#',
    youtube: '#',
  },
  {
    title: 'Social Media User',
    description: 'Dashboard analytics untuk social media dengan real-time data visualization dan reporting.',
    tags: ['Social Media', 'Student', 'Digital'],
    image: '📊',
    color: 'from-purple-600/20 to-purple-400/20',
    github: '#',
    youtube: '#',
  },
  {
    title: 'AI/Machine',
    description: 'Tool untuk generate konten menggunakan AI dengan integrasi berbagai model language.',
    tags: ['AI', 'Digital', 'Student'],
    image: '🤖',
    color: 'from-fuchsia-600/20 to-purple-400/20',
    github: '#',
    demo: '#',
  },
  {
    title: 'Tips & Tricks Tutorial',
    description: 'Seri tutorial video editing dengan 100+ episode dan 10k+ subscribers.',
    tags: ['Tutorials', 'Tips', 'YouTube'],
    image: '🎬',
    color: 'from-pink-500/20 to-fuchsia-500/20',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Coding For Student',
    description: 'Konten tips programming dan best practices untuk developer Indonesia.',
    tags: ['Coding', 'Machine', 'Digital'],
    image: '💡',
    color: 'from-purple-400/20 to-fuchsia-300/20',
    isContent: true,
    youtube: '#',
  },
];

export default function ProjectsSection() {
  return (
    // BG diubah menyambung mulus dari bawah Skill (fuchsia-200 ke purple-100 turun ke purple-300) dengan teks gelap
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-fuchsia-200 via-purple-100 to-purple-300 text-purple-950 relative overflow-hidden">
      
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
          <span className="text-purple-700 font-bold mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-purple-950">
            Projects &amp; Karya
          </h2>
          <div className="w-20 h-1 bg-purple-600/40 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Glassmorphism card disesuaikan ke warna ungu/putih terang yang kontras */}
              <div className="h-full p-6 bg-white/40 backdrop-blur-md rounded-2xl border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between">
                <div>
                  <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color} border border-white/20`}>
                    <span className="text-6xl filter drop-shadow-md">{project.image}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {project.isContent && (
                        <span className="px-2 py-0.5 text-xs rounded-full bg-purple-600/20 text-purple-800 font-bold">
                          Content
                        </span>
                      )}
                      <h3 className="font-display text-lg font-bold group-hover:text-purple-700 transition-colors text-purple-950">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-sm text-purple-900/90 font-medium line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Style Badge Tags diubah menjadi ungu muda agar senada */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-semibold rounded-md bg-purple-500/10 text-purple-900 border border-purple-400/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* BUTTONS: Ditambahkan target="_blank" dan rel="noopener noreferrer" */}
                <div className="flex gap-2 pt-5">
                  {project.github && (
                    <Button variant="outline" size="sm" className="rounded-full border-purple-400 text-purple-900 hover:bg-purple-100/50 font-semibold" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button size="sm" className="rounded-full bg-purple-600 text-white hover:bg-purple-700 shadow-md" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  )}
                  {project.youtube && (
                    <Button size="sm" className="rounded-full bg-fuchsia-600 text-white hover:bg-fuchsia-700 shadow-md" asChild>
                      <a href={project.youtube} target="_blank" rel="noopener noreferrer">
                        <Play className="h-4 w-4 mr-1" />
                        Watch
                      </a>
                    </Button>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}