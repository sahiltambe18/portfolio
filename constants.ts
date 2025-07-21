import { IconType } from "react-icons/lib"
import { RiComputerLine } from 'react-icons/ri';
import { FaServer, FaCode, FaMountain, FaBrain, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase, FaUbuntu, FaChrome, FaGithub, FaDocker } from 'react-icons/fa';
import { AiFillApi } from 'react-icons/ai';
import { GrDeploy, GrGraphQl, GrServices } from "react-icons/gr";
import { GiBiceps, GiOctopus } from 'react-icons/gi';
import { TbBrandCpp, TbBrandTailwind, TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from "react-icons/io";
import { SiAmazonapigateway, SiExpress , SiJest, SiJsonwebtokens, SiLangchain, SiMui, SiNginx, SiNumpy, SiPandas, SiPostman, SiPrisma, SiRabbitmq, SiRedis, SiScikitlearn , SiTrpc, SiTypescript } from "react-icons/si";
import {  BiLogoPostgresql } from "react-icons/bi";
import { IoIdCardOutline, IoInfinite } from "react-icons/io5";
import { MdOutlineSecurity } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";



const links = [{ path: '/', title: "About" },{ path: "/experience", title: "Experience" }, { path: '/resume', title: "Resume" }, { path: '/projects', title: "Projects" }
]

interface domain {
    title: string,
    data: string,
    icon: IconType
}

const domains: domain[] = [
    {
        title: "Front-end Development",
        data: "With my skills in React, Next.js, and Tailwind CSS, I can create stunning user interfaces.",
        icon: RiComputerLine
    },
    {
        title: "Back-end Development",
        data: "Can handle database, server, api using Express & NodeJS",
        icon: FaServer
    },
    {
        title: "DevOps",
        data: "I can handle DevOps and microservice architecture",
        icon: IoInfinite
    },
    {
        title: "Api Development",
        data: "i can develop robust REST APIs",
        icon: AiFillApi
    },
    {
        title: "Problem Solving",
        data: "I solve coding problems with Cpp",
        icon: FaCode
    },
    {
        title: "Machine Learning",
        data: "I'm currently learning and understanding the concepts machine learning",
        icon: FaBrain
    },
    {
        title: "Gymming",
        data: "I have habit to keep me fit",
        icon: GiBiceps
    },
    {
        title: "Trekking",
        data: "Beyond coding, I have a passion for trekking, exploring remote trails, and experiencing the beauty of nature firsthand.",
        icon: FaMountain
    },
]

const data = `I am a Software Engineer with a Bachelor's in Information Technology from International Institute of Information Technology, Pune, graduated with a CGPA of 8.39.
Alongside my engineering projects, I’ve explored AI/ML fundamentals and continue to deepen my understanding in this space. 
Beyond coding, I enjoy problem-solving with C++, participating in hackathons, gym workouts, and trekking to reconnect with nature. Always eager to build impactful solutions and grow in the tech ecosystem.`;

interface Project {
    name: string;
    description: string;
    image_path: string;
    deployed_url: string;
    github_url: string;
    key_techs: string[];
}


const projects : Project[] =[
    {
        name:'PDF-Chat Saas',
        description:"Interactive Discussion with Pdf using Gen-AI , *Under Development",
        deployed_url:"NA",
        github_url:"https://github.com/sahiltambe18/pdf-buddy",
        key_techs:['NextJS',"Google GenAI",'tRPC','Postgresql'],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1717393579/vdkfgsrvihow3b14bd1j.png"
    },
    {
        name:'video-chat-app',
        description:"one to one video calling website",
        deployed_url:"https://video-chat-sahil.onrender.com/",
        github_url:"https://github.com/sahiltambe18/video-chat-app",
        key_techs:['ReactJS',"Socket.io",'Peerjs'],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184199/video-chat_t90kla.png"
    },
    {
        name:'google-search-clone',
        description:"google search , images , videos clone",
        deployed_url:"https://google-clone-sahil.onrender.com/",
        github_url:"https://github.com/sahiltambe18/google-home-page/",
        key_techs:['ReactJS',"Google APIs"],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/google-clone_xlotn8.png"
    },
    {
        name:'E-commerce-Website',
        description:"fully SSR E-commerce website",
        deployed_url:"https://sahil-ecommerce-website.onrender.com/",
        github_url:"https://github.com/sahiltambe18/Ecommers-website",
        key_techs:['ExpressJs','mongoDB','stripe'],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696263017/ecommerce_xobyjw.png"
    },
    {
        name:'React-dashboard',
        description:"react product analysis dashboard ",
        deployed_url:"https://dashboard-ui-sahil.onrender.com/",
        github_url:"https://github.com/sahiltambe18/dashboard",
        key_techs:['ReactJS',"Tailwind CSS"],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/dashboard_jipiya.png"
    },
    {
        name:'food-ordering website UI',
        description:"food-ordering website UI",
        deployed_url:"https://food-app-ui.onrender.com/",
        github_url:"https://github.com/sahiltambe18/food-ordering-app/",
        key_techs:['ReactJS',"CSS modules"],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184199/food-ui_nayd0a.png"
    },
    {
        name:'Tab-saver-extension',
        description:"chrome extension for saving tabs and urls",
        deployed_url:"NA",
        github_url:"https://github.com/sahiltambe18/tab-saver",
        key_techs:["javascript"],
        image_path:"https://res.cloudinary.com/dx8brgan4/image/upload/v1696184198/chrome-extn_lnfedd.png"
    },
]

const resumeDoc = 'https://sahil-static.netlify.app/Images/sahil_tambe.pdf'



export const allSkills = {
  "Frontend": [
    { name: "ReactJS", level: "90%", icon: FaReact },
    { name: "Next.js", level: "85%", icon: TbBrandNextjs },
    { name: "JavaScript", level: "90%", icon: IoLogoJavascript },
    { name: "TypeScript", level: "90%", icon: SiTypescript },
    { name: "Tailwind CSS", level: "90%", icon: TbBrandTailwind },
    { name: "Material UI (MUI)", level: "85%", icon: SiMui },
  ],
  "Backend": [
    { name: "Node.js", level: "85%", icon: FaNodeJs },
    { name: "Express.js", level: "85%", icon: SiExpress },
    { name: "PostgreSQL", level: "85%", icon: BiLogoPostgresql },
    { name: "MongoDB", level: "80%", icon: FaDatabase },
    { name: "GraphQL", level: "90%", icon: GrGraphQl },
    { name: "REST APIs", level: "90%", icon: RiComputerLine },
    { name: "tRPC", level: "80%", icon: SiTrpc },
    { name: "ORM", level: "90%", icon: SiPrisma },
    

  ],
  "AI / ML": [
    { name: "Python", level: "80%", icon: FaPython },
    { name: "Scikit-learn", level: "70%", icon: SiScikitlearn },
    { name: "Google GenAI", level: "60%", icon: FaBrain },
    { name: "LangChain", level: "60%", icon: SiLangchain },
    { name: "Numpy", level: "75%", icon: SiNumpy },
    { name: "Pandas", level: "75%", icon: SiPandas}
  ],
  "Languages": [
    { name: "C++", level: "90%", icon: TbBrandCpp },
    { name: "Java", level: "85%", icon: FaJava },
    { name: "Python", level: "80%", icon: FaPython },
    { name: "Go", level: "80%", icon: FaGolang },
    { name: "JavaScript", level: "90%", icon: IoLogoJavascript },
    { name: "TypeScript", level: "90%", icon: SiTypescript },
  ],
  "DevOps & Tools": [
    { name: "Docker", level: "85%", icon: FaDocker },
    { name: "Ubuntu/Linux", level: "85%", icon: FaUbuntu },
    { name: "Git / GitHub", level: "90%", icon: FaGithub },
    
    { name: "Postman", level: "85%", icon: SiPostman },
    { name: "Chrome DevTools", level: "85%", icon: FaChrome },
  ],
  "Auth & Security": [
    { name: "Ory Kratos", level: "85%", icon: MdOutlineSecurity },
    { name: "OAuth2 / OIDC", level: "80%", icon: IoIdCardOutline },
    { name: "JWT", level: "85%", icon: SiJsonwebtokens },
    // { name: "Passkeys / WebAuthn", level: "65%", icon: undefined }
  ],
  "Infra / Architecture": [
    { name: "Microservices", level: "90%", icon: GrServices },
    { name: "API Gateway (Kong)", level: "80%", icon: SiAmazonapigateway },
    { name: "CI/CD (GitHub Actions)", level: "80%", icon: GrDeploy },
    { name: "Nginx", level: "80%", icon: SiNginx },
    { name: "Caching", level: "80%", icon: SiRedis },
    { name: "RabbitMQ", level: "80%", icon: SiRabbitmq },
  ],
  "Testing / Quality": [
    { name: "Jest", level: "90%", icon: SiJest },
    { name: "React Testing Library", level: "85%", icon: GiOctopus }
  ],
//   "Softwares / Misc": [
//     { name: "Figma", level: "70%", icon: undefined },
//     // { name: "Notion", level: "90%", icon: undefined },
//     { name: "VS Code", level: "95%", icon: undefined },
//     { name: "Slack", level: "90%", icon: undefined }
//   ]
};



export const groupedExperience = [
  {
    org: "Integral Development Corp.",
    
    totalDuration: "Apr 2025 – Present · ongoing",
    roles: [
      {
        title: "Software Engineer",
        type: "Full-time",
        period: "Jul 2025 – Present",
        duration: "Ongoing"
      },
      {
        title: "Full-Stack Developer Intern",
        type: "Internship",
        period: "Apr 2025 – Jul 2025",
        duration: "4 mos",
        description: "Integrating secure features like auth, passkey login, GraphQL APIs, UI screens, and system monitoring scripts with Alertmanager and Cronicle."
      }
    ]
  },
  {
    org: "Sociante",
    totalDuration: "Oct 2024 – Mar 2025 · 6 mos",
    roles: [
      {
        title: "Project Intern",
        type: "Internship",
        period: "Oct 2024 – Mar 2025",
        duration: "6 mos",
        description: "Led team and developed modules in user management, transactions, and parking system with Node.js and RabbitMQ."
      }
    ]
  },
  {
    org: "Marketifyall",
    totalDuration: "Nov 2023 – Dec 2023 · 1 mo",
    roles: [
      {
        title: "Frontend Intern",
        type: "Internship",
        period: "Nov 2023 – Dec 2023",
        duration: "1 mo",
        description: "Worked on React UI components and dashboards using Tailwind CSS."
      }
    ]
  }
]

export const volunteeringExperience = [
  {
    role: "Web Dev Lead",
    org: "GDSC I2IT",
    period: "Jul 2023 – May 2024",
    duration: "11 mos",
    description: "Led GDSC I2IT's web team, conducted MERN bootcamps, and mentored students."
  }
]



export { links, domains, data ,projects , resumeDoc};
export type {  Project};
