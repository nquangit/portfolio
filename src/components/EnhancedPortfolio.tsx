import { useState, useEffect } from 'react'
import { ArrowUpRight, Github, Linkedin, Terminal, Instagram, Moon, Sun, ChevronDown, Mail, Phone, MapPin, Clock, FileText } from 'lucide-react'
import { motion } from 'framer-motion'

export default function EnhancedPortfolio() {
  const [activeWindow, setActiveWindow] = useState('about')
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'career', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveWindow(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setTimeout(() => setIsLoading(false),500)
  }, [])

  const Window = ({ 
    title, 
    children, 
    isActive = false 
  }: { 
    title: string
    children: React.ReactNode
    isActive?: boolean 
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-black/80 backdrop-blur-sm rounded-lg border border-zinc-800 overflow-hidden ${isActive ? 'ring-1 ring-green-500/20' : ''}`}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="text-sm text-zinc-400 font-mono">{title}</span>
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-600" />
          <div className="w-3 h-3 rounded-full bg-zinc-600" />
          <div className="w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>
      <div className="p-4">{children}</div>
    </motion.div>
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gradient-to-br from-black via-black/90 to-green-950/30' : 'bg-gradient-to-br from-white via-gray-100 to-green-100'}`}>
      {isLoading ? (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          onAnimationComplete={() => setIsLoading(false)}
        >
          <Terminal className="text-green-500 w-12 h-12 animate-pulse" />
        </motion.div>
      ) : (
        <>
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
            <nav className="container mx-auto px-6 py-4">
              <div className="flex justify-between items-center">
                <Terminal className="text-green-500 w-8 h-8" />
                <button
                  className="md:hidden text-zinc-400 hover:text-green-500 transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <ChevronDown className={`w-6 h-6 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                <ul className={`md:flex items-center gap-4 text-zinc-400 ${isMenuOpen ? 'block' : 'hidden'}`}>
                  {['home', 'about', 'projects', 'career', 'contact'].map((item) => (
                    <li key={item}>
                      <a
                        href={`#${item}`}
                        className={`text-sm uppercase tracking-wider hover:text-green-500 transition-colors ${
                          activeWindow === item ? 'text-green-500' : ''
                        }`}
                      >
                        {item === 'career' ? 'Career Journey' : item}
                      </a>
                    </li>
                  ))}
                  <li className="md:ml-4">
                    <motion.a
                      href="https://drive.google.com/file/d/1wzmmR0z68oF1bbAdFbrzcoAl6c1ZVeTh/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-black font-semibold rounded-full 
                        hover:bg-green-400 transition-colors duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      Resume
                    </motion.a>
                  </li>
                  <li>
                    <button
                      onClick={() => setIsDarkMode(!isDarkMode)}
                      className="text-zinc-400 hover:text-green-500 transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                  </li>
                </ul>
              </div>
            </nav>
          </header>

          <main className="container mx-auto px-4 py-20">
            <section id="home" className="min-h-screen flex items-center justify-center py-20 relative">
              {/* Optional: Animated Background Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-purple-500/5" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center z-10 px-4"
              >
                {/* Greeting with Typing Effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-4"
                >
                  <span className={`text-lg ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                    👋 Welcome to my portfolio
                  </span>
                </motion.div>

                {/* Main Heading */}
                <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Hi, <span className="text-green-500">I'm</span>{' '}
                  <span className="relative">
                    Sandeep Makwana
                    <motion.span
                      className="absolute -bottom-2 left-0 w-full h-1 bg-green-500/20"
                      initial={{ width: 0 }}
                      animate={{ width: '100%' }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    />
                  </span>
                </h1>

                {/* Dynamic Role Display */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-8"
                >
                  <span className={`text-xl ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                    Software Engineer II at ConsultAdd
                  </span>
                </motion.div>
                
                {/* Brief Introduction */}
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={`text-xl max-w-2xl mx-auto mb-8 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}
                >
                  I'm a Software Engineer specializing in{' '}
                  <span className="text-green-500 font-semibold">full-stack development</span> and{' '}
                  <span className="text-green-500 font-semibold">cloud architecture</span>,
                  passionate about building elegant solutions to complex problems.
                </motion.p>

                {/* Quick Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-center gap-8 mb-12"
                >
                  {[
                    { label: 'Years Experience', value: '2+' },
                    { label: 'Projects Completed', value: '15+' },
                    { label: 'Technologies', value: '10+' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-green-500' : 'text-green-600'}`}>
                        {stat.value}
                      </div>
                      <div className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap items-center justify-center gap-4"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-green-500 text-black font-bold py-3 px-6 rounded-full 
                      hover:bg-green-400 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Get in touch
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1wzmmR0z68oF1bbAdFbrzcoAl6c1ZVeTh/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-full border-2 border-green-500 
                      text-green-500 font-bold hover:bg-green-500/10 transition-colors duration-300"
                  >
                    <FileText className="w-5 h-5" />
                    Download Resume
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-12 flex justify-center gap-6"
                >
                  {[
                    { icon: Github, href: 'https://github.com/isandeepMakwana', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/sandeepmakwana', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:sandeepmakwana.work@gmail.com', label: 'Email' }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`text-zinc-400 hover:text-green-500 transition-colors duration-300`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6" />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                  >
                    <span className={`text-sm ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>Scroll to explore</span>
                    <ChevronDown className="w-5 h-5 text-green-500" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </section>

            <section id="about" className="py-20">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>About Me</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Window title="about-me.txt" isActive>
                  <div className="font-mono space-y-4 text-zinc-300">
                    <div className="typing-effect">
                      <div className="flex gap-4 items-center hover:bg-zinc-800/50 p-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none">01</span>
                        <span>
                          Hi! I'm <span className="text-green-500 font-semibold">Sandeep Makwana</span>, 
                          a <span className="text-blue-400 font-semibold">Software Engineer II</span> at ConsultAdd.
                        </span>
                      </div>
                      <div className="flex gap-4 items-center hover:bg-zinc-800/50 p-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none">02</span>
                        <span>
                          With <span className="text-yellow-500">2+ years</span> of experience in building
                          <span className="text-purple-400"> scalable applications</span>
                        </span>
                      </div>
                      <div className="flex gap-4 items-center hover:bg-zinc-800/50 p-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none">03</span>
                        <span>
                          Specializing in <span className="text-pink-400">full-stack development</span> and
                          <span className="text-orange-400"> cloud architecture</span>
                        </span>
                      </div>
                      <div className="flex gap-4 items-center hover:bg-zinc-800/50 p-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none">04</span>
                        <span>
                          Passionate about <span className="text-green-400">clean code</span> and
                          <span className="text-blue-400"> optimal solutions</span>
                        </span>
                      </div>
                      <div className="flex gap-4 items-center hover:bg-zinc-800/50 p-2 rounded transition-colors">
                        <span className="text-zinc-600 select-none">05</span>
                        <span>
                          Recognized as <span className="text-yellow-500">Employee of the Month 7 times</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Window>
                
                <div className="space-y-6">
                  <Window title="skills.json">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-green-500 mb-4 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Languages & Tools
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {['Python', 'JavaScript', 'TypeScript', 'C', 'C++', 'SQL', 'Bash', 'Java'].map(skill => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-blue-400 mb-4 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                          Frameworks & Libraries
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {['Django', 'Flask', 'FastAPI', 'React', 'Tailwind', 'Pytest', 'Pandas', 'NumPy'].map(skill => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-yellow-500 mb-4 font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                          Cloud & DevOps
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {['AWS', 'Docker', 'Jenkins', 'Git', 'CI/CD'].map(skill => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1.5 bg-zinc-800/70 rounded-lg text-sm text-zinc-300 hover:bg-zinc-700/70 transition-colors cursor-default"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Window>

                  <Window title="achievements.md">
                    <div className="space-y-4">
                      {[
                        { icon: '🏆', color: 'text-green-500', text: 'AWS Certified Solutions Architect - Associate' },
                        { icon: '👥', color: 'text-yellow-500', text: 'Led team of 28 developers with 30% faster delivery' },
                        { icon: '🎯', color: 'text-blue-400', text: '7x Employee of the Month' }
                      ].map((achievement, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 p-2 hover:bg-zinc-800/50 rounded-lg transition-colors"
                        >
                          <span className="text-xl">{achievement.icon}</span>
                          <span className={`${achievement.color} font-medium`}>{achievement.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </Window>
                </div>
              </div>
            </section>

            <section id="projects" className="py-20">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Projects</h2>
              <Window title="projects.json" isActive>
                <div className="space-y-8">
                  {[
                    {
                      id: '01',
                      title: 'E-commerce Platform',
                      year: '2024',
                      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Stripe'],
                      description: 'A fully responsive e-commerce platform with secure payments and real-time inventory management.'
                    },
                    {
                      id: '02',
                      title: 'AI-Powered Analytics Dashboard',
                      year: '2023',
                      tech: ['React', 'Python', 'TensorFlow', 'D3.js'],
                      description: 'An advanced analytics dashboard leveraging AI for predictive insights and data visualization.'
                    },
                    {
                      id: '03',
                      title: 'Blockchain Voting System',
                      year: '2023',
                      tech: ['Solidity', 'Ethereum', 'Web3.js', 'React'],
                      description: 'A secure and transparent voting system built on blockchain technology for organizational decision-making.'
                    }
                  ].map((project) => (
                    <motion.div
                      key={project.id}
                      className="group"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-4">
                          <span className="text-zinc-600 font-mono">{project.id}</span>
                          <h3 className={`text-2xl font-bold group-hover:text-green-500 transition-colors ${isDarkMode ? 'text-white' : 'text-black'}`}>
                            {project.title}
                          </h3>
                        </div>
                        <span className="text-zinc-600">{project.year}</span>
                      </div>
                      <p className={`mb-4 ${isDarkMode ? 'text-zinc-400' : 'text-gray-600'}`}>{project.description}</p>
                      <div className="flex gap-2 flex-wrap">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded-full bg-zinc-800/50 text-xs text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Window>
            </section>

            <section id="career" className="py-20">
              <div className="flex items-center justify-between mb-8">
                <h2 className={`text-3xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
                  Career Journey
                </h2>
                <motion.a
                  href="https://drive.google.com/file/d/1wzmmR0z68oF1bbAdFbrzcoAl6c1ZVeTh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg text-green-500 
                    hover:bg-zinc-700 transition-colors duration-300 border border-green-500/20"
                >
                  <FileText className="w-4 h-4" />
                  <span className="font-mono text-sm">Sandeep_makwana_resume.pdf</span>
                </motion.a>
              </div>
              <Window title="career.json" isActive={activeWindow === 'career'}>
                <div className="space-y-12">
                  {/* ConsultAdd Full-time Role */}
                  <motion.div
                    className="relative pl-8 border-l-2 border-green-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="absolute -left-[9px] top-0">
                      <div className="w-4 h-4 rounded-full bg-green-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          Software Engineer II
                        </h3>
                        <span className="text-green-500 font-mono text-sm">Jul 2022 - Present</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>ConsultAdd</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-zinc-500">Pune</span>
                      </div>
                      <ul className="space-y-3 text-zinc-400">
                        <li className="flex gap-2">
                          <span className="text-green-500">→</span>
                          <span>Designed and deployed AWS data lake solution using S3, Glue, and Athena, enhancing data accessibility</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">→</span>
                          <span>Created dynamic React.js components for clinical trials system, improving efficiency by 40%</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">→</span>
                          <span>Developed and optimized RESTful APIs using Django and DRF, boosting response times by 25%</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">→</span>
                          <span>Managed data migration from AWS S3 to Snowflake, reducing processing time by 50%</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-green-500">→</span>
                          <span>Built real-time data pipeline using AWS Kinesis, Lambda, and DynamoDB</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['AWS', 'React', 'Django', 'Python', 'Snowflake', 'Docker', 'CI/CD'].map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* ConsultAdd Internship */}
                  <motion.div
                    className="relative pl-8 border-l-2 border-blue-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="absolute -left-[9px] top-0">
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          Software Engineer Intern
                        </h3>
                        <span className="text-blue-500 font-mono text-sm">Jan 2022 - Jun 2022</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>ConsultAdd</span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-zinc-500">Remote</span>
                      </div>
                      <ul className="space-y-3 text-zinc-400">
                        <li className="flex gap-2">
                          <span className="text-blue-500">→</span>
                          <span>Restructured legacy codebase to align with industry best practices</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">→</span>
                          <span>Engineered AWS Step Functions for Glue job orchestration</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-blue-500">→</span>
                          <span>Increased unit test coverage from 60% to 80%</span>
                        </li>
                      </ul>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['AWS', 'Python', 'Step Functions', 'Glue', 'Unit Testing'].map((tech) => (
                          <span key={tech} className="px-2 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Education */}
                  <motion.div
                    className="relative pl-8 border-l-2 border-purple-500/20"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="absolute -left-[9px] top-0">
                      <div className="w-4 h-4 rounded-full bg-purple-500" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                          Bachelor of Technology in Computer Science
                        </h3>
                        <span className="text-purple-500 font-mono text-sm">Graduated Jun 2022</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`font-semibold ${isDarkMode ? 'text-zinc-300' : 'text-gray-700'}`}>
                          Rajiv Gandhi Proudyogiki Vishwavidyalaya
                        </span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-zinc-500">Bhopal, MP</span>
                      </div>
                      <div className="text-zinc-400">
                        <span className="text-purple-500 font-semibold">CGPA:</span> 8.6/10.0
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2">
                        {['Data Structures', 'Algorithms', 'Computer Networks', 'Operating Systems'].map((subject) => (
                          <span key={subject} className="px-2 py-1 bg-zinc-800/50 rounded-full text-xs text-zinc-400">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Window>
            </section>

            <section id="contact" className="py-20">
              <h2 className={`text-3xl font-bold mb-8 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Contact</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Window title="contact-form.jsx" isActive>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-zinc-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-1">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-zinc-600"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-1">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Your message here..."
                        className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-zinc-600"
                        required
                      ></textarea>
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-green-500 text-black font-bold py-3 px-4 rounded-md hover:bg-green-400 transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Send Message
                    </motion.button>
                  </form>
                  {/* Quick Response Promise */}
                  <div className="pt-4 border-t border-zinc-800 mt-4">
                    <div className="flex items-center gap-2 text-sm text-zinc-400">
                      <Clock className="w-4 h-4" />
                      <span>Usually responds within 24 hours</span>
                    </div>
                  </div>
                </Window>

                <Window title="me-online.sh">
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      {[
                        { icon: Mail, label: 'sandeepmakwana.work@gmail.com', href: 'mailto:sandeepmakwana.work@gmail.com' },
                        { icon: Phone, label: '+91 6263216081', href: 'tel:+916263216081' },
                        { icon: MapPin, label: 'Pune, Maharashtra, India', href: null },
                      ].map((contact, index) => (
                        <motion.div
                          key={index}
                          whileHover={contact.href ? { x: 4 } : {}}
                          className={`group flex items-center gap-4 p-2 rounded-md ${contact.href ? 'hover:bg-zinc-800/50' : ''} transition-colors`}
                        >
                          <contact.icon className={`text-zinc-400 ${contact.href ? 'group-hover:text-green-500' : ''} transition-colors`} />
                          {contact.href ? (
                            <a href={contact.href} className="text-zinc-300 group-hover:text-green-500 transition-colors">{contact.label}</a>
                          ) : (
                            <span className="text-zinc-300">{contact.label}</span>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-4 border-t border-zinc-800">
                      <div className="space-y-4">
                        {[
                          { icon: Github, label: 'github.com/isandeepmakwana', href: 'https://github.com/isandeepMakwana' },
                          { icon: Linkedin, label: 'linkedin.com/in/sandeepmakwana', href: 'https://www.linkedin.com/in/sandeepmakwana' },
                          { icon: Instagram, label: '@sandeep.makwana', href: '#' },
                        ].map((social, index) => (
                          <motion.div
                            key={index}
                            whileHover={{ x: 4 }}
                            className="group flex items-center gap-4 p-2 rounded-md hover:bg-zinc-800/50 transition-colors"
                          >
                            <social.icon className="text-zinc-400 group-hover:text-green-500 transition-colors" />
                            <a href={social.href} className="text-zinc-300 group-hover:text-green-500 transition-colors">{social.label}</a>
                            <ArrowUpRight className="text-zinc-600 w-4 h-4 group-hover:text-green-500 transition-colors ml-auto" />
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Availability Status */}
                    <div className="pt-4 border-t border-zinc-800">
                      <motion.div 
                        className="flex items-center gap-3 p-2"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="relative">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping"></div>
                        </div>
                        <span className="text-zinc-300">Available for new opportunities</span>
                      </motion.div>
                    </div>
                  </div>
                </Window>
              </div>
            </section>
          </main>

          <footer className="bg-black/80 backdrop-blur-sm py-8">
            <div className="container mx-auto px-6 text-center">
              <p className="text-zinc-400">&copy; 2024 Sandeep Makwana. All rights reserved.</p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}