'use client'
import { data, domains } from "../constants";
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="py-6 max-w-5xl px-4 text-[#354358] dark:text-white space-y-12">
      
      
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-3xl font-bold mb-4">👋 About Me</h1>
        <p className="text-lg leading-7">{data}</p>
      </motion.section>

      
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold mb-6">🚀 What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {domains.map((item, index) => (
            <motion.div 
              key={item.title}
              className="flex items-start gap-4 p-4 border rounded-xl bg-gray-50 dark:bg-gray-800 hover:shadow transition"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * index }}
            >
              <div className="text-sky-600 dark:text-sky-400 text-3xl">
                <item.icon />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{item.data}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  )
}
