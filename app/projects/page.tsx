// app/projects/page.tsx

// 1. Your imports
import Container from "@/components/common/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/config/Project";

// 2. The DEFAULT export (Must be default)
export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-3xl font-bold mb-10">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}