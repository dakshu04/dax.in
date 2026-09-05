import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { navbarConfig } from "@/config/Navbar";
import { ThemeToggle } from "./ThemeSwitch";


export default function Navbar() {
    return (
        <Container className="sticky top-5 z-20 rounded-md border border-white/10 bg-background/55 py-4 shadow-sm backdrop-blur-xl backdrop-saturate-150 dark:border-white/5">
            <div className="flex items-center justify-between px-6">
                <div className="flex items-baseline gap-4">
                    <Link href="/">
                        <Image
                            className="h-12 w-12 rounded-md border border-gray-200 border border-3  transition-all duration-300 ease-in-out hover:scale-90"
                            src={navbarConfig.logo.src}
                            alt={navbarConfig.logo.alt}
                            width={navbarConfig.logo.width}
                            height={navbarConfig.logo.height}
                        />
                    </Link>
                    <div className="flex items-center justify-center gap-4">
                        {navbarConfig.navItems.map((item) => (
                            <Link className="transition-all duration-300 ease-in-out hover:underline hover:decoration-2 hover:underline-offset-4"
                            key={item.label}
                            href={item.href}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center gap-4 cursor-pointer">
                    <ThemeToggle />
                </div>
            </div>
        </Container>
    )
}