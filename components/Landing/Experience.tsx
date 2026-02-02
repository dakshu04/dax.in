import type { Experience } from "@/config/Experience";
import { experiences } from "@/config/Experience";

import SectionHeading from "../common/SectionHeading";
import Container from "../common/Container";
import Link from "next/link";
import { Button } from "../ui/button";
import { ExperienceCard } from "../experience/ExperienceCard";

export default function Experience() {
    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Featured" heading="Experience" />
                <div>
                    {
                        experiences.slice(0, 2).map((experience: Experience) => (
                            <ExperienceCard key={experience.company} experience={experience}/>
                        ))
                    }
                </div>
                <div>
                    <Button className="mt-8 flex justify-center">
                        <Link href="/work-experience">Show all work experience</Link>
                    </Button>
                </div>
        </Container>
    )
}