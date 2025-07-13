'use client'
import { groupedExperience, volunteeringExperience } from "@/constants"
import { motion } from "framer-motion"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css'; 

const ExperiencePage = () => {
  return (
    <div className="p-4 space-y-12 text-[#354358] dark:text-white">
      <SimpleBar style={{ maxHeight: '90vh' }}>

      
      <section className="" >
        <h1 className="text-2xl font-bold mb-6">💼 Professional Experience</h1>

        {groupedExperience.map((company, i) => (  
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-sky-100/60 to-blue-50 dark:from-gray-800 dark:to-slate-900 p-6 rounded-xl shadow-md mb-1"
          >
            <div className="flex items-center gap-4 mb-3">
              
                <h2 className="text-lg font-semibold">{company.org}</h2>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {company.totalDuration}
                </span>
             
            </div>

            
            <div className="relative"> 
              <div className="border-l border-gray-300 dark:border-gray-600 ml-5 pl-6 space-y-6"> {/* Adjusted ml and pl here */}
                {company.roles.map((role, j) => (
                  <div key={j} className="relative">
                    <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-sky-500 dark:bg-sky-400" /> {/* Adjusted left */}
                    <h3 className="font-medium">{role.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{role.type}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {role.period} · {role.duration}
                    </p>
                    {role.description && (
                      <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{role.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        {volunteeringExperience.length > 0 && (
        <section>
          <h1 className="text-2xl font-bold mt-6">🤝 Volunteering</h1>
          <div className="space-y-6">
            {volunteeringExperience.map((v, k) => (
              <div
                key={k}
                className="bg-gradient-to-br from-purple-100/40 to-indigo-50 dark:from-gray-800 dark:to-slate-900 p-6 rounded-xl shadow-md"
              >
                <h2 className="text-lg font-semibold">{v.role}</h2>
                <h3 className="text-md text-gray-700 dark:text-gray-300 mb-1">{v.org}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {v.period} · {v.duration}
                </p>
                <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">{v.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}
      </section>
      </SimpleBar>

      
    </div>
  )
}

export default ExperiencePage