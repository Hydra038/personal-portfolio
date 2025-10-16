'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skills = {
  'Programming Languages': [
    'JavaScript',
    'TypeScript',
    'Python',
    'Java',
    'C++',
    'HTML5',
    'CSS3',
    'SQL'
  ],
  'Cybersecurity & Penetration Testing': [
    'Penetration Testing',
    'Vulnerability Assessment',
    'Network Security',
    'Metasploit',
    'Burp Suite',
    'Nmap',
    'Wireshark',
    'OWASP'
  ],
  'Operating Systems': [
    'Windows OS',
    'Linux',
    'Parrot OS',
    'Kali Linux',
    'Ubuntu',
    'Windows Server',
    'Command Line',
    'PowerShell'
  ],
  'Frontend Technologies': [
    'React',
    'Next.js',
    'Vue.js',
    'Tailwind CSS',
    'Bootstrap',
    'SASS/SCSS',
    'Framer Motion',
    'Redux'
  ],
  'Backend Technologies': [
    'Node.js',
    'Express.js',
    'Django',
    'Flask',
    'Spring Boot',
    'REST APIs',
    'GraphQL',
    'JWT'
  ],
  'Databases & Tools': [
    'MongoDB',
    'PostgreSQL',
    'MySQL',
    'Firebase',
    'Git',
    'Docker',
    'AWS',
    'Vercel'
  ]
}

const skillColors = [
  'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300',
  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300'
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with to build amazing solutions.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {Object.entries(skills).map(([category, skillList], categoryIndex) => (
            <motion.div
              key={category}
              variants={categoryVariants}
              className="card p-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, skillIndex) => {
                  const colorIndex = (categoryIndex * skillList.length + skillIndex) % skillColors.length
                  return (
                    <motion.span
                      key={skill}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium cursor-default transition-all duration-200 hover:shadow-md ${skillColors[colorIndex]}`}
                    >
                      {skill}
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">3+</div>
            <div className="text-gray-600 dark:text-gray-300">Years Learning</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">20+</div>
            <div className="text-gray-600 dark:text-gray-300">Technologies</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">15+</div>
            <div className="text-gray-600 dark:text-gray-300">Projects Built</div>
          </div>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">100%</div>
            <div className="text-gray-600 dark:text-gray-300">Passion</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}