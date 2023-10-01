import Bar from "@/components/Bar"
import { skills } from '../../constants'
const Page = () => {
  return (
    <div className="p-4 text-[#354358]">
      <div className="text-xl bg-slate-300 rounded-xl p-3 sm:w-2/3" >
        <h1 className=" font-semibold" >Education</h1>
        <div className="">
          <h2>B.E. Information Technology</h2>
          <h4>International Institute of Information Technology, Pune</h4>
          <span className="text-sm" >(2021-2025)</span>
          <p className="text-sm">I'm currently pursuing B.E. Information Technology at isquareIT</p>
        </div>
      </div>
      <div>
        <h1>Skills</h1>
        <div className="flex flex-col gap-2">
          {skills.map( item => (
            <Bar skill={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Page
