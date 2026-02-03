import Container from "../components/common/Container";
import Hero from "@/components/Landing/Hero";
import Experience from "@/components/Landing/Experience";
import Projects from "@/components/Landing/Projects";
import About from "@/components/Landing/About";
import GithubHeatmap from "@/components/Landing/GithubHeatMap";


export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <GithubHeatmap />
      {/* <Blog /> */}
    </Container>
  );
}
