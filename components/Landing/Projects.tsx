'use client'
import Link from "next/link";
import Container from "../common/Container";
import { Button } from "../ui/button";
import SectionHeading from "../common/SectionHeading";
import { ProjectList } from "../projects/ProjectList";
import { projects } from "@/config/Project";
export default function Projects() {
    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Featured" heading="Projects"/>
            <ProjectList className="mt-8" projects={projects.slice(0, 4)}/>
            <div className="mt-8 flex justify-center">
                <Button variant="outline">
                    <Link href="/projects">Show all projects</Link>
                </Button>
            </div>
        </Container>
    )
}