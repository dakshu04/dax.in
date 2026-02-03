import Link from 'next/link';
import React from 'react';

interface SkillProps {
  name: string;
  href: string;
  children: React.ReactNode;
}

export default function Skill({ name, href, children }: SkillProps) {
  return (
    <Link
      href={href ?? ''}
      target="_blank"
      className="skill-inner-shadow inline-flex items-center align-baseline rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black dark:border-white/30 dark:bg-white/15 dark:text-white"
    >
      <span className="flex size-5 shrink-0">{children}</span>
      <span className="ml-1 text-sm font-bold leading-none">{name}</span>
    </Link>
  );
}