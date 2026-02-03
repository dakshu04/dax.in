'use client';

import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import { ExperienceCard } from '@/components/experience/ExperienceCard';
import { experiences } from '@/config/Experience';

export default function WorkExperiencePage() {
  return (
    <Container className="py-20">
      <SectionHeading subHeading="Career" heading="Work Experience" />
      <div className="mt-8 space-y-10">
        {experiences.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.startDate}`}
            experience={experience}
          />
        ))}
      </div>
    </Container>
  );
}
