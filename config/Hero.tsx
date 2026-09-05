import Github from "@/components/svg/Github"
import LinkedIn from "@/components/svg/LinkedIn"
import Mail from "@/components/svg/Mail"
import X from "@/components/svg/X"
import NextJs from "@/components/technology/NextJs"
import PostgreSQL from "@/components/technology/PostgreSql"
import Prisma from "@/components/technology/Prisma"
import React from "@/components/technology/React"
import TailwindCss from "@/components/technology/TailwindCss"
import Python from "@/components/technology/Python"
import FastAPI from "@/components/technology/FastAPI"
import LLM from "@/components/technology/LLM"

import TypeScript from "@/components/technology/Typescript"

export const skillComponents = {
    'FastAPI': FastAPI,
    'LLM': LLM,
    'Python' : Python,
    'Next.js': NextJs,
    'TypeScript': TypeScript,
    'React': React,
    'Tailwind CSS': TailwindCss,
    'PostgreSQL': PostgreSQL,
    'Prisma': Prisma,
}



export const heroConfig = {
    name: 'Daksh',
    title: 'I Build AI-Powered Products.',
    avtar: '/assets/logo.jpg',

    skills : [
        {
            name: 'Python',
            href: 'https://www.python.org/',
            component: 'Python'
        },
        {
            name: 'FastAPI',
            href: 'https://fastapi.tiangolo.com/',
            component: 'FastAPI'
        },
        {
            name: 'LLM',
            href: 'https://en.wikipedia.org/wiki/Large_language_model',
            component: 'LLM'
        },
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
        `I am Daksh, an AI Product Engineer who turns ambitious ideas into production-ready web applications with polished interfaces, intelligent AI workflows, and scalable full-stack architecture. Using {skills:0}, {skills:1}, {skills:2}, {skills:3}, {skills:4}, {skills:5}, {skills:6}, {skills:7} and {skills:8}. I build products that are thoughtful to use, reliable in production, and designed to create measurable value for businesses. I bring together product thinking, strong engineering fundamentals, and an eye for detail to help teams move from concept to launch with confidence.`
    },

    buttons: [
        {
            variant: 'default',
            text: 'Resume / CV',
            href: '/resume',
            icon: 'CV'
        }, 
        
    ]
}

export const socialLinks = [
    {
        name: 'X',
        href: 'https://x.com/dkshbuilds',
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