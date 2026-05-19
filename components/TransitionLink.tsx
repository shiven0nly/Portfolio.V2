'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
    href: string;
    children?: React.ReactNode;
    back?: boolean;
    className?: string;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: (_e: React.MouseEvent<HTMLAnchorElement>) => void;
    [key: string]: any;
}

gsap.registerPlugin(useGSAP);

const TransitionLink = ({
    href,
    onClick,
    children,
    back = false,
    ...rest
}: Props) => {
    const router = useRouter();
    const { contextSafe } = useGSAP(() => {});

    const handleLinkClick = contextSafe(
        async (e: React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            gsap.set('.page-transition', { yPercent: 100 });
            gsap.set('.page-transition--inner', { yPercent: 100 });
            const tl = gsap.timeline();
            tl.to('.page-transition', {
                yPercent: 0,
                duration: 0.3,
            });
            tl.then(() => {
                if (back) {
                    router.back();
                } else if (href) {
                    router.push(href.toString());
                } else if (onClick) {
                    onClick(e);
                }
            });
        },
    );

    return (
        <Link 
            href={href} 
            onClick={handleLinkClick} 
            {...rest}
        >
            {children}
        </Link>
    );
};

export default TransitionLink;