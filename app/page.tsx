import Image from "next/image";
import Container from "../components/Container";
import Hero from "@/components/Landing/Hero";
import Experience from "@/components/Landing/Experience";
import Projects from "@/components/Landing/Projects";
import About from "@/components/Landing/About";
import GithubActivity from "@/components/Landing/Github";
import Blog from "@/components/Landing/Blog";


export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
      <Projects />
      <About />
      <GithubActivity />
      <Blog />
    </Container>
  );
}
