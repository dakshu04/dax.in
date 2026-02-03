'use client'

import { githubConfig } from "@/config/Github";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import { ActivityCalendar } from "react-activity-calendar";

export default function GithubHeatmap() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <Container className="mt-20">
            <SectionHeading subHeading="Featured" heading="GitHub Activity" />
            <div className="mt-5 flex items-center justify-center text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 inset-shadow-sm dark:inset-shadow-zinc-800">

            <GitHubCalendar   
                        username={githubConfig.username}
                        // Correctly apply the theme array based on resolvedTheme
                        theme={githubConfig.theme}
                        colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'}
                        blockSize={githubConfig.blockSize}
                        blockMargin={githubConfig.blockMargin}
                        fontSize={githubConfig.fontSize}
                        maxLevel={githubConfig.maxLevel}
                        // FIX: Move totalCountLabel into the labels object
                        labels={{ 
                            months: githubConfig.months, 
                            weekdays: githubConfig.weekdays,
                            totalCount: githubConfig.totalCountLabel 
                        }}
                        />
                        </div>
        </Container>
    )
}