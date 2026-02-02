import Container from "@/components/common/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/config/Project";

export default function ProjectsPage() {
  return (
    <Container className="py-20">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Container>
  );
}