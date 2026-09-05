import Container from '@/components/common/Container';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  ...getMetadata('/resume'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="space-y-8">
        <div className=" text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Resume
          </h1>
        </div>
        <Separator />
        <div className="mx-auto max-w-md">
          <div className="flex flex-col items-center">
            <div className="group relative w-full overflow-hidden rounded-2xl border border-border/70 bg-card p-2 shadow-xl shadow-black/5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/10 dark:shadow-black/20">
              <Button
                asChild
                size="sm"
                className="absolute right-5 top-5 z-10 cursor-pointer rounded-full px-4 shadow-lg shadow-primary/25 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
              >
                <a href="/resume/resume_pdf.pdf" download="Daksh_Resume.pdf">
                  Download Resume
                </a>
              </Button>
              <Image
                src="/resume/resume.jpg"
                width={800}
                height={100}
                alt="Daksh resume preview"
                className="h-auto w-full cursor-zoom-in rounded-xl object-contain"
                priority
              />
            </div>
          </div>
        </div>
        </div>
    </Container>
  );
}