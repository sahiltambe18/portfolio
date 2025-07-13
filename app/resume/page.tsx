'use client'
import Skills from "@/components/Skills";

const Page = () => {
  return (
    <div className="p-4 space-y-10 text-[#354358] dark:text-white">
      {/* 🎓 Education Section */}
      <section>
        <h1 className="text-2xl font-bold mb-4">🎓 Education</h1>
        <div className="bg-gradient-to-br from-sky-100/60 to-blue-50 dark:from-gray-800 dark:to-slate-900 p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold">B.E. Information Technology</h2>
          <h3 className="text-md">
            International Institute of Information Technology, Pune
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            (2021 – 2025)
          </span>
          <p className="mt-2 text-sm">
             I have completed my Bachelor's in Information Technology from iSquareIT with a CGPA of <strong>8.39</strong>. 
      My academic focus was on software engineering, full-stack development, and AI/ML, supplemented by hands-on project work and internships.
          </p>

        </div>
      </section>

      {/* 💻 Skills Section */}
      <section>
        <Skills />
      </section>
    </div>
  );
};

export default Page;
