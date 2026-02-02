import NextJs from "@/components/technology/NextJs";
import NodeJs from "@/components/technology/Node";
import PostgreSQL from "@/components/technology/PostgreSql";
import Prisma from "@/components/technology/Prisma";
import ReactIcon from "@/components/technology/ReactIcon";
import TypeScript from "@/components/technology/Typescript";

export const about = {
    name: 'Daksh Purohit',
    description: "I'm a Full Stack web developer with automation expert, I love building products to solve real-world problems. I love to build MVP's."
}

export const mySkills = [
  <ReactIcon key="react" />,
  <TypeScript key="typescript" />,
  <NextJs key="nextjs" />,
  <NodeJs key="nodejs" />,
  <PostgreSQL key="postgresql" />,
  <Prisma key="prisma" />,
];