import { heroConfig, skillComponents, socialLinks } from "@/config/Hero";
import Container from "../Container";
import Image from "next/image";
import { Button } from "../ui/button";
import CV from "../svg/CV";
import Chat from "../svg/Chat";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { parseTemplate } from "@/lib/Hero";
import Skill from "../common/Skill";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const buttonIcons = {
    CV: CV,
    Chat: Chat
}

export default function Hero() {
    const { name, title, avtar, description, skills, buttons} = heroConfig;

    const renderDescription = () => {
        const parts = parseTemplate(description.template, skills)

        return parts.map((part) => {
            if (part.type === 'skill' && 'skill' in part && part.skill) {
                const SkillComponent =
                skillComponents[part.skill.component as keyof typeof skillComponents];
                return (
                <Skill key={part.key} name={part.skill.name} href={part.skill.href}>
                    <SkillComponent />
                </Skill>
                );
            } else if (part.type === 'bold' && 'text' in part) {
                return (
                <b key={part.key} className="text-primary whitespace-pre-wrap">
                    {part.text}
                </b>
                );
            } else if (part.type === 'text' && 'text' in part) {
                return (
                <span key={part.key} className="whitespace-pre-wrap">
                    {part.text}
                </span>
                );
            }
            return null;
            });
    }

    return (
        <Container className="mx-auto max-w-5xl">
            <Image
                src={avtar}
                alt="hero"
                width={100}
                height={100}
                className="size-24 rounded-full bg-blue-300 dark:bg-yellow-300" 
            />

            {/* Text Area */}
            <div className="mt-8 flex flex-col gap-2">
                <h1 className="text-4xl font-bold">
                    Hi, I&apos;m  {name} - <span className="text-secondary">{title}</span>
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
                    {renderDescription()}
                </div>
            </div>

            <div className="mt-8 flex gap-4">
                {buttons.map((button, index) => {
                    const IconComponent = buttonIcons[button.icon as keyof typeof buttonIcons];
                    return (
                        <Button
                            key={index}
                            variant={button.variant as 'default' | 'outline'}
                            className={cn(
                                button.variant === 'default' && 'inset-shadow-indigo-500',
                                button.variant === 'outline' && 'inset-shadow-indigo-500'
                            )}
                            >
                            {IconComponent && <IconComponent />}
                            <Link href={button.href}>{button.text}</Link>
                        </Button>
                    );
                })}
            </div>
            
        <div className="mt-8 flex gap-2">
            {socialLinks.map((link) => (
                <Tooltip key={link.name} delayDuration={0}>
                <TooltipTrigger asChild>
                <Link
                    href={link.href}
                    key={link.name}
                    target="_blank"
                    className="text-secondary flex items-center gap-2"
                >
                    <span className="size-6">{link.icon}</span>
                </Link>
                </TooltipTrigger>
                <TooltipContent>
                <p>{link.name}</p>
                </TooltipContent>
            </Tooltip>
            ))}
        </div>
        </Container>
    )
}