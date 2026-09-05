import NextJs from "@/components/technology/NextJs";
import NodeJs from "@/components/technology/Node";
import PostgreSQL from "@/components/technology/PostgreSql";
import Prisma from "@/components/technology/Prisma";
import Python from "@/components/technology/Python";
import FastAPI from "@/components/technology/FastAPI";
import LLM from "@/components/technology/LLM";
import ReactIcon from "@/components/technology/ReactIcon";
import TypeScript from "@/components/technology/Typescript";

export const about = {
    name: 'Daksh Purohit',
  description: "I'm an AI Product Engineer and developer who turns ambitious ideas into production-ready web applications. I build thoughtful products with polished interfaces, intelligent AI workflows, and scalable architecture that solve real-world problems."
}

export const mySkills = [
  <Python key="python" />,
  <FastAPI key="fastapi" />,
  <LLM key="llm" />,
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
];