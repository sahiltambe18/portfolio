
import { skill } from '../constants'

const Bar = ({skill}:{skill:skill}) => {
  return (
    <div className='bg-slate-500 rounded-full sm:w-2/3 hover:animate-pulse'>
      <div style={{width:skill.level}} className={`flex gap-3 px-4 py-1 items-center   bg-gradient-to-r light-bar dark-bar rounded-full `} >
        {<skill.icon className='text-xl'/>}
        <h2>{skill.name}</h2>
      </div>
    </div>
  )
}

export default Bar
