import NextJs from "@/components/technology/NextJs";
import ReactIcon from "@/components/technology/ReactIcon";
import TailwindCss from "@/components/technology/TailwindCss";
import TypeScript from "@/components/technology/Typescript";
import Vercel from "@/components/technology/Vercel";



export interface Technology {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  position: string;
  location: string;
  image: string;
  description: string[];
  startDate: string;
  endDate: string;
  website: string;
  x?: string;
  linkedin?: string;
  github?: string;
  technologies: Technology[];
  isCurrent: boolean;
  isBlur?: boolean;
}

export const experiences: Experience[] = [
    {
        isCurrent: true,
        isBlur: false,
        company: 'Accenture',
        position: 'Software Engineer',
        location: 'Gurugram, India',
        image: '/assets/Accenture.jpg',
        description: [
            'Built and maintained frontend applications using Next.js, React, and TypeScript, focusing on scalable and high-performance user interfaces.',
            'Integrated and worked with backend APIs to fetch, manage, and display data efficiently across the platform.',
            'Developed reusable components and frontend features, improving usability, performance, and overall development workflow.',
        ],
        startDate: 'Febraury 2025',
        endDate: 'Present',
        technologies: [
            {
                name: 'Next.js',
                href: 'https://nextjs.org/',
                icon: <NextJs />,
            },
            {
                name: 'Tailwind CSS',
                href: 'https://tailwindcss.com/',
                icon: <TailwindCss />,
            },
            {
                name: 'TypeScript',
                href: 'https://typescriptlang.org/',
                icon: <TypeScript />,
            },
            {
                name: 'React',
                href: 'https://react.dev/',
                icon: <ReactIcon />,
            },
            {
                name: 'Vercel',
                href: 'https://vercel.com/',
                icon: <Vercel />,
            },
        ],
        website: '#',
        github: '#',
        x: '#',
    }
]