'use client';

import { useEffect, useState } from 'react';
import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

export default function Footer() {
    const [stats, setStats] = useState<RepoStats>({ stargazers_count: 0, forks_count: 0 });

    useEffect(() => {
        async function fetchStats() {
            try {
                const response = await fetch('https://api.github.com/repos/shiven0nly/portfolio-2.0');
                const data = (await response.json()) as RepoStats;
                setStats({ stargazers_count: data.stargazers_count, forks_count: data.forks_count });
            } catch (error) {
                console.error('Failed to fetch repo stats', error);
            }
        }
        fetchStats();
    }, []);

    const { stargazers_count, forks_count } = stats;

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/shiven0nly"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Shiven Sharma
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>

                    {/* Footer credit updated for Shiven Sharma */}
                </div>
            </div>
        </footer>
    );
}
