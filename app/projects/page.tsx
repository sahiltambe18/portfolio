'use client'
import ProjectCard from '@/components/ProjectCard'
import {projects} from '../../constants'

const Page = () => {
  return (
    <div className='p-5 flex flex-col gap-3' >
      <h1>Projects I did</h1>
      <div className=' grid sm:grid-cols-3 gap-3'>
        {
          projects.map( project=>(
            <ProjectCard key={project.name} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Page
