import Image from "next/image";
import Container from "../components/Container";
import Hero from "@/components/Landing/Hero";
import Experience from "@/components/Landing/Experience";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
      <Experience />
    </Container>
  );
}
