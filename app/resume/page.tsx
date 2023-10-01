import Bar from "@/components/Bar"
import { skills } from '../../constants'
const Page = () => {
  return (
    <div className="p-4 dark:text-white text-[#354358]">
      <div className="text-xl bg-gradient-to-r light-card dark-card rounded-xl p-3 sm:w-2/3" >
        <h1 className=" font-semibold" >Education</h1>
        <div className="">
          <h2>B.E. Information Technology</h2>
          <h4>International Institute of Information Technology, Pune</h4>
          <span className="text-sm" >(2021-2025)</span>
          <p className="text-sm">I'm currently pursuing B.E. Information Technology at isquareIT</p>
        </div>
      </div>
      <div>
        <h1 className="my-4 px-2 text-lg font-semibold">Skills</h1>
        <div className="flex flex-col gap-3">
          {skills.map( item => (
            <Bar skill={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
