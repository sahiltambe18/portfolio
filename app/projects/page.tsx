'use client'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '../../constants'
import { motion } from 'framer-motion'

const Page = () => {
  return (
    <div className='p-5 flex flex-col gap-8'>
      
      
      <motion.h1
        className="text-3xl font-bold text-[#354358] dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        🚀 Projects I Built
      </motion.h1>

      
      <motion.div 
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.name}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
      
    </div>
  )
}

export default Page
