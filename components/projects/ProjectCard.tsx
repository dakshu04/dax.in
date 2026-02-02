'use client'

import { Project } from "@/types/project";
import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import Image from "next/image";
import { Dialog, DialogTitle } from "../ui/dialog";
import { DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Website from "../svg/Website";
import Github from "../svg/Github";
import { ArrowRight } from "lucide-react";
import PlayCircle from "../svg/PlayCircle";

interface ProjectCardProps {
  project: Project;
}


export function ProjectCard({ project } : ProjectCardProps) {
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);

    return (
        <Card className="group h-full w-full overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800">
            <CardHeader className="p-0">
                <div className="group relative aspect-video overflow-hidden">
                    <Image
                    className="h-full w-full object-cover"
                    src={project.image}
                    alt={project.title}
                    width={1920}
                    height={1080}
                    />
                    {project.video && (
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger asChild>
                                <div className="absolute inset-0">
                                    <button>
                                        <PlayCircle />
                                    </button>
                                </div>
                            </DialogTrigger>
                            <DialogTitle className="w-full max-w-4xl border-0 p-0">
                                <div className="aspect-video w-full">
                                    <video className="h-full w-full rounded-lg object-cover"
                                    src={project.video}
                                    autoPlay
                                    loop
                                    controls/>
                                </div>
                            </DialogTitle>
                            <DialogContent />
                        </Dialog>
                    )}
                </div>
            </CardHeader>
             <CardContent className="px-6">
                <div className="space-y-4">
                {/* Project Header - Title and Icons */}
                <div className="flex items-center justify-between gap-4">
                    <Link href={project.projectDetailsPageSlug}>
                    <h3 className="group-hover:text-primary text-xl leading-tight font-semibold hover:cursor-pointer">
                        {project.title}
                    </h3>
                    </Link>
                    <div className="flex items-center gap-2">
                    <Tooltip>
                        <TooltipTrigger>
                        <Link
                            className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                            href={project.link}
                            target="_blank"
                        >
                            <Website />
                        </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>View Website</p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger>
                        {project.github && (
                            <Link
                            className="text-secondary hover:text-primary flex size-6 items-center justify-center transition-colors"
                            href={project.github}
                            target="_blank"
                            >
                            <Github />
                            </Link>
                        )}
                        </TooltipTrigger>
                        <TooltipContent>
                        <p>View GitHub</p>
                        </TooltipContent>
                    </Tooltip>
                    </div>
                </div>

                {/* Description */}
                <p className="text-secondary line-clamp-3">{project.description}</p>

                {/* Technologies */}
                <div>
                    <h4 className="text-secondary mb-2 text-sm font-medium">
                    Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                    {project.technologies.map((technology, index) => (
                        <Tooltip key={index}>
                        <TooltipTrigger>
                            <div className="size-6 transition-all duration-300 hover:scale-120 hover:cursor-pointer">
                            {technology.icon}
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>{technology.name}</p>
                        </TooltipContent>
                        </Tooltip>
                    ))}
                    </div>
                </div>
                </div>
            </CardContent>

            {project.details && (
                <CardFooter className="flex justify-between p-6 pt-0">
                <div
                    className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs ${
                    project.isWorking
                        ? 'border-green-300 bg-green-500/10'
                        : 'border-red-300 bg-red-500/10'
                    }`}
                >
                    {project.isWorking ? (
                    <>
                        <div className="size-2 animate-pulse rounded-full bg-green-500" />
                        All Systems Operational
                    </>
                    ) : (
                    <>
                        <div className="size-2 animate-pulse rounded-full bg-red-500" />
                        Building
                    </>
                    )}
                </div>
                <Link
                    href={project.projectDetailsPageSlug}
                    className="text-secondary hover:text-primary flex items-center gap-2 text-sm underline-offset-4 transition-colors hover:underline"
                >
                    View Details <ArrowRight className="size-4" />
                </Link>
                </CardFooter>
            )}
        </Card>
    )

}