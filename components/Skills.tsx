'use client'

import React, { useState } from "react";
import { allSkills } from "@/constants";
import { motion, AnimatePresence } from "framer-motion";

const getProgressBarColor = (value: number) => {
  if (value >= 85) return "bg-gradient-to-r from-green-500 to-emerald-600";
  if (value >= 70) return "bg-gradient-to-r from-yellow-400 to-amber-500";
  return "bg-gradient-to-r from-red-500 to-rose-600";
};

const Skills = () => {
  const categories = Object.keys(allSkills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="pt-4 px-2 sm:px-4">
      {/* Tab Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center mb-6 sm:mb-8"
      >
        <div className="inline-flex flex-wrap justify-center gap-2 bg-gray-100 dark:bg-slate-800 px-3 py-2 rounded-full shadow-sm border border-gray-300 dark:border-gray-700">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition duration-300
                ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="bg-gradient-to-br from-sky-100/50 to-blue-50 dark:from-gray-800 dark:to-slate-900 rounded-xl shadow-md p-4 sm:p-6 border border-gray-200 dark:border-gray-700"
        >
          <h2 className="text-xl font-semibold text-[#354358] dark:text-white mb-5 border-b pb-2 border-gray-200 dark:border-gray-700">
            {activeCategory}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allSkills[activeCategory as keyof typeof allSkills].map((skill, skillIndex) => {
              const skillLevel = parseInt(skill.level);

              return (
                <motion.div
                  key={skillIndex}
                  className="flex flex-col p-4 rounded-lg bg-white dark:bg-slate-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition"
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center mb-3">
                    {skill.icon && (
                      <skill.icon className="text-2xl mr-3 text-blue-600 dark:text-blue-400" />
                    )}
                    <span className="text-base font-medium text-gray-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <motion.div
                      className={`h-2.5 rounded-full ${getProgressBarColor(skillLevel)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${skillLevel}%` }}
                      transition={{ duration: 1, delay: skillIndex * 0.05 + 0.2 }}
                    />
                  </div>
                  <span className="text-xs text-right mt-1 text-gray-600 dark:text-gray-400 font-medium">
                    {skill.level}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Skills;
