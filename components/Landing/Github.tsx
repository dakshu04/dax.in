/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { githubConfig } from '@/config/Github';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useEffect, useState, ComponentType } from 'react';

// UI Components
import { Button } from '../ui/button';
import { GithubIcon } from 'lucide-react';
import Container from '../common/Container';

// --- Types & Interfaces ---

type ContributionItem = {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
};

interface ActivityCalendarProps {
  data: ContributionItem[];
  blockSize?: number;
  blockMargin?: number;
  fontSize?: number;
  colorScheme?: 'light' | 'dark';
  maxLevel?: number;
  theme?: { light: string[]; dark: string[] };
  labels?: { months?: string[]; weekdays?: string[] };
}

type GitHubContributionResponse = {
  date: string;
  contributionCount: number;
  contributionLevel: 'NONE' | 'FIRST_QUARTILE' | 'SECOND_QUARTILE' | 'THIRD_QUARTILE' | 'FOURTH_QUARTILE';
};

/**
 * FIXED DYNAMIC IMPORT:
 * Using a direct casting approach to resolve the 'Property default does not exist' error.
 */
const ActivityCalendar = dynamic<ActivityCalendarProps>(
  () => import('react-activity-calendar').then((mod) => {
    // 1. Grab the component regardless of how it's exported
    const Component = (mod as any).default || mod;
    
    // 2. Ensure we aren't returning the module object itself
    if (Component && typeof Component === 'object' && Component.default) {
      return Component.default as ComponentType<ActivityCalendarProps>;
    }
    return Component as ComponentType<ActivityCalendarProps>;
  }),
  { 
    ssr: false,
    loading: () => <div className="h-[160px] w-full animate-pulse bg-muted/20 rounded-lg" />
  }
);

export default function GithubActivity() {
  const [mounted, setMounted] = useState(false);
  const [contributions, setContributions] = useState<ContributionItem[]>([]);
  const [totalContributions, setTotalContributions] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const { resolvedTheme } = useTheme();

  // Hydration Shield: Ensures component only renders on client to prevent theme/date mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    async function fetchData() {
      try {
        setIsLoading(true);
        const response = await fetch(`${githubConfig.apiUrl}/${githubConfig.username}.json`);
        if (!response.ok) throw new Error('Fetch failed');
        const data = await response.json();

        if (data?.contributions && Array.isArray(data.contributions)) {
          const flattened = data.contributions.flat();
          const levelMap: Record<string, number> = {
            NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4,
          };

          const validData: ContributionItem[] = flattened
            .filter((item: any) => item && item.date)
            .map((item: GitHubContributionResponse) => ({
              date: String(item.date),
              count: Number(item.contributionCount || 0),
              level: (levelMap[item.contributionLevel] || 0) as ContributionItem['level'],
            }));

          if (validData.length > 0) {
            // Typed reduce parameters to satisfy strict TypeScript requirements
            const total = validData.reduce((sum: number, item: ContributionItem) => sum + item.count, 0);
            setTotalContributions(total);

            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            setContributions(validData.filter(item => new Date(item.date) >= oneYearAgo));
          } else {
            setHasError(true);
          }
        }
      } catch (err) {
        console.error('GitHub API Error:', err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [mounted]);

  if (!mounted) return (
    <Container className="mt-20">
      <div className="h-[200px] w-full animate-pulse rounded-xl bg-muted/10" />
    </Container>
  );

  return (
    <Container className="mt-20">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-foreground text-2xl font-bold">{githubConfig.title}</h2>
            <p className="text-muted-foreground text-sm"><b>{githubConfig.username}</b>s {githubConfig.subtitle}</p>
            {!isLoading && !hasError && (
              <p className="text-primary mt-1 text-sm font-medium">
                Total: <span className="font-black">{totalContributions.toLocaleString()}</span> contributions
              </p>
            )}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="border-primary h-8 w-8 animate-spin rounded-full border-2 border-t-transparent" />
          </div>
        ) : hasError ? (
          <div className="border-border rounded-xl border-2 border-dashed p-8 text-center">
            <GithubIcon className="mx-auto mb-4 h-8 w-8 text-muted-foreground" />
            <p className="mb-2 font-medium">{githubConfig.errorState.title}</p>
            <Button variant="outline" asChild>
              <Link href={`https://github.com/${githubConfig.username}`}>
                {githubConfig.errorState.buttonText}
              </Link>
            </Button>
          </div>
        ) : (
          <div className="bg-background/50 relative rounded-lg border border-dashed border-black/20 p-6 backdrop-blur-sm dark:border-white/10">
            <div className="w-full overflow-x-auto">
              {/* Responsive container for mobile swiping */}
              
              <ActivityCalendar
                data={contributions}
                blockSize={githubConfig.blockSize}
                blockMargin={githubConfig.blockMargin}
                fontSize={githubConfig.fontSize}
                // ResolvedTheme provides accurate dark/light detection for system settings
                colorScheme={(resolvedTheme === 'dark' ? 'dark' : 'light') as 'light' | 'dark'}
                theme={githubConfig.theme}
                labels={{ months: githubConfig.months, weekdays: githubConfig.weekdays }}
              />
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}