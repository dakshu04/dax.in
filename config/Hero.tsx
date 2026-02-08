import Github from "@/components/svg/Github"
import LinkedIn from "@/components/svg/LinkedIn"
import Mail from "@/components/svg/Mail"
import X from "@/components/svg/X"
import NextJs from "@/components/technology/NextJs"
import PostgreSQL from "@/components/technology/PostgreSql"
import Prisma from "@/components/technology/Prisma"
import React from "@/components/technology/React"
import TailwindCss from "@/components/technology/TailwindCss"


import TypeScript from "@/components/technology/Typescript"

export const skillComponents = {
    'Next.js': NextJs,
    'TypeScript': TypeScript,
    'React': React,
    'Tailwind CSS': TailwindCss,
    'PostgreSQL': PostgreSQL,
    'Prisma': Prisma,
}



export const heroConfig = {
    name: 'Daksh',
    title: 'A Full Stack Developer',
    avtar: '/assets/logo.jpg',

    skills : [
        {
            name: 'Next.js',
            href: 'https://nextjs.org/',
            component: 'Next.js'    
        },
        {
            name: 'React',
            href: 'https://reactjs.org/',
            component: 'React'
        },
        {
            name: 'TypeScript',
            href: 'https://www.typescriptlang.org/',
            component: 'TypeScript'
        },
        {
            name: 'Tailwind CSS',
            href: 'https://tailwindcss.com/',
            component: 'Tailwind CSS'
        },
        {
            name: 'PostgreSQL',
            href: 'https://www.postgresql.org/',
            component: 'PostgreSQL'
        }, 
        {
            name: 'Prisma',
            href: 'https://www.prisma.io/',
            component: 'Prisma'
        }
    ], 

    description: {
        template:
        `I am Daksh, a passionate Full Stack Developer specializing in building dynamic and responsive web applications using modern technologies like {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4} and {skills:5}. With a strong foundation in both front-end and back-end development, I create seamless user experiences and robust server-side solutions. Let us connect and build something amazing together!`
    },

    buttons: [
        {
            variant: 'default',
            text: 'Resume / CV',
            href: '/resume',
            icon: 'CV'
        }, 
        // {
        //     variant: 'default',
        //     text: 'Get in touch',
        //     href: '/contact',
        //     icon: 'Chat'
        // }
    ]
}

export const socialLinks = [
    {
        name: 'X',
        href: 'https://x.com/dkshuxcodes',
        icon: <X />
    }, 
    {
        name: 'GitHub',
        href: 'https://github.com/dakshu04',
        icon: <Github />
    }, 
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/purohitdaksh/',
        icon: <LinkedIn />
    }, 
    {
        name: 'EMail',
        href: 'mailto:purohitdaksh2003@gmail.com',
        icon: <Mail />
    }
]