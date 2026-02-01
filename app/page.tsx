import Image from "next/image";
import Container from "../components/Container";
import Hero from "@/components/Landing/Hero";

export default function Home() {
  return (
    <Container className="min-h-screen py-16">
      <Hero />
    </Container>
  );
}
