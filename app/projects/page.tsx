import ProjectCard from '@/components/ProjectCard'
import {projects} from '../../constants'

const Page = () => {
  return (
    <div>
      <h1>Projects I did</h1>
      <div>
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
