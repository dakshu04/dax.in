import Shadcn from "@/components/svg/Shadcn";
import NextJs from "@/components/technology/NextJs";
import ReactIcon from "@/components/technology/ReactIcon";
import TailwindCss from "@/components/technology/TailwindCss";
import TypeScript from "@/components/technology/Typescript";
import Vercel from "@/components/technology/Vercel";
import { Project } from "@/types/project";


export const projects: Project[] = [
  {
    title: "SnapMod",
    description: "A sleek, high-performance web utility for instant modifications and snapshot management, optimized for developer productivity. ",
    image: "/projects/snapmod.png",
    video: "https://ik.imagekit.io/fjn46sk6v/snapmod.mp4?updatedAt=1770015457420",
    link: "https:/snapmod.xyz",
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    ],
    github: "https://github.com/dakshu04/",
    live: "https://snapmod.xyz",
    details: true,
    projectDetailsPageSlug: '/projects/snapmod',
    isWorking: true
  },
  {
    title: "OpsOs",
    description: "An interactive Operating System simulator visualizing core concepts like process scheduling, memory management, and file systems.",
    video: "https://ik.imagekit.io/fjn46sk6v/Ops%20Os.mp4",
    image: "/projects/opsos.png", // Ensure this path matches your public folder
    link: "https://ops-os.vercel.app",
    technologies: [
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: "https://github.com/dakshu04/ops-os", // Updated to your GitHub profile
    live: "https://ops-os.vercel.app",
    details: true,
    projectDetailsPageSlug: '/projects/ops-os',
    isWorking: true
  },
];