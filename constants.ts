import { IconType } from "react-icons/lib"
import { RiComputerLine   } from 'react-icons/ri';
import { FaServer , FaCode ,FaMountain ,FaBrain ,FaReact,FaNodeJs ,FaPython ,FaJava ,FaDatabase ,FaUbuntu} from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { GiBiceps } from 'react-icons/gi';
import { TbBrandCpp , TbBrandTailwind ,TbBrandNextjs } from 'react-icons/tb';


const links = [{path:'/',title:"About"},{path:'/resume',title:"Resume"},{path:'/projects',title:"Projects"}]

interface domain {
    title: string,
    data:string,
    icon:IconType
}

const domains :domain[] = [
    {
        title:"Front-end Development",
        data:"With my skills in React, Next.js, and Tailwind CSS, I can create stunning user interfaces.",
        icon:RiComputerLine 
    },
    {
        title:"Back-end Development",
        data:"Can handle database, server, api using Express & NodeJS",
        icon:FaServer
    },
    {
        title:"Api Development",
        data:"i can develop robust REST APIs",
        icon:AiFillApi
    },
    {
        title:"Problem Solving",
        data:"I solve coding problems with Cpp",
        icon:FaCode
    },
    {
        title:"Machine Learning",
        data:"I'm currently learning and understanding the concepts machine learning",
        icon:FaBrain
    },
    {
        title:"Gymming",
        data:"I have habit to keep me fit",
        icon:GiBiceps
    },
    {
        title:"Trekking",
        data:"Beyond coding, I have a passion for trekking, exploring remote trails, and experiencing the beauty of nature firsthand.",
        icon:FaMountain
    },
]


interface skill {
    name: string,
    level:string,
    icon:IconType
}

const skills : skill[] = [
    {
        name:"ReactJS",
        level:"90%",
        icon:FaReact
    },
    {
        name: "NodeJS",
        level:"70%",
        icon: FaNodeJs
    },
    {
        name: "Python",
        level:"70%",
        icon: FaPython
    },
    {
        name: "JAVA",
        level:"80%",
        icon: FaJava
    },
    {
        name: "C++",
        level:"90%",
        icon: TbBrandCpp
    },
    {
        name: "NEXTJS",
        level:"80%",
        icon: TbBrandNextjs
    },
    {
        name: "Tailwind CSS",
        level:"90%",
        icon: TbBrandTailwind
    },
    {
        name: "MongoDB",
        level:"70%",
        icon: FaDatabase
    },
    {
        name: "Ubuntu",
        level:"70%",
        icon: FaUbuntu
    },
]

const data = `I am an IT engineering student at International Institute of Information Technology, Pune with an insatiable curiosity for software and technology. 
My strengths lie in problem-solving and optimization, skills I've honed while delving into C++.
My journey has led me to the captivating realm of machine learning, where I'm actively acquiring skills and exploring its applications. Eager to contribute and grow in the tech world` 

export { links, domains, data, skills };
export type { skill };
