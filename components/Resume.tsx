'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { AcademicCapIcon, BriefcaseIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline'

const education = [
  {
    institution: 'University of Eldoret',
    degree: 'Bachelor of Science in Computer Science',
    period: '2021 - 2025',
    description: 'Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Web Development, Machine Learning, Object-Oriented Programming, Computer Networks',
    gpa: '3.8/4.0'
  },
  {
    institution: 'High School',
    degree: 'Kenya Certificate of Secondary Education (KCSE)',
    period: '2017 - 2020',
    description: 'Graduated with excellent performance. Active member of Computer Science Club and Mathematics team.',
    gpa: 'A- (Distinction)'
  }
]

const experience = [
  {
    company: 'Tech Startup Inc.',
    position: 'Frontend Developer Intern',
    period: 'Jun 2024 - Aug 2024',
    description: 'Developed responsive web applications using React and TypeScript. Collaborated with design team to implement user interfaces and improved website performance by 30%.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Git']
  },
  {
    company: 'University IT Department',
    position: 'Student Web Developer',
    period: 'Sep 2023 - May 2024',
    description: 'Maintained and updated university department websites. Created automated scripts for data processing and improved website accessibility compliance.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    company: 'Freelance',
    position: 'Web Developer',
    period: '2022 - Present',
    description: 'Built custom websites for local businesses and startups. Managed full project lifecycle from requirements gathering to deployment and maintenance.',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB']
  }
]

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const downloadResume = () => {
    // Replace with your actual resume link
    const resumeUrl = 'RESUME_LINK'
    window.open(resumeUrl, '_blank')
  }

  return (
    <section id="resume" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Resume
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            My educational background and professional experience in software development.
          </p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={downloadResume}
            className="btn-primary inline-flex items-center space-x-2"
          >
            <DocumentArrowDownIcon className="h-5 w-5" />
            <span>Download Resume</span>
          </motion.button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-8">
              <AcademicCapIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  <div className="ml-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {edu.description}
                    </p>
                    
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      GPA: {edu.gpa}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="flex items-center mb-8">
              <BriefcaseIcon className="h-8 w-8 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experience</h3>
            </div>
            
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card p-6 relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-3 top-6 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-800"></div>
                  
                  <div className="ml-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {exp.position}
                      </h4>
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                        {exp.period}
                      </span>
                    </div>
                    
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Additional Timeline Connector */}
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-300 dark:bg-gray-600 h-full -z-10"></div>
      </div>
    </section>
  )
}