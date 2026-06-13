import { IProject } from '@/types';

// Personal info imported/converted from provided `shiven.json`
export const GENERAL_INFO = {
    email: 'shiven676@gmail.com',
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Shiven, I am reaching out to you because...',
    oldPortfolio: '',
    upworkProfile: '',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/shiven0nly' },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/shiven-sharma-2b0819358/',
    },
];

export const MY_STACK = {
    Frontend: [
        { name: 'React.js', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'TailwindCSS', icon: '/logo/tailwind.png' },
        { name: 'Framer Motion', icon: '/logo/framer-motion.png' },
    ],
    Backend: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Express.js', icon: '/logo/express.png' },
        { name: 'MongoDB', icon: '/logo/mongodb.png' },
    ],
    'AI & Cloud': [
        { name: 'Amazon Bedrock', icon: '/logo/aws.png' },
        { name: 'Hugging Face', icon: '/logo/huggingfacelogo.png' },
    ],
    'Embedded & Hardware': [
        { name: 'ESP32', icon: '/logo/esp32.png' },
        { name: 'Embedded C++', icon: '/logo/cpplogo.png' },
    ],
    'DevOps & Tools': [
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'Git', icon: '/logo/git.png' },
    ],
};

export const PROJECTS: IProject[] = [
    {
        title: 'ShutterSync - Photographer SaaS Platform',
        slug: 'shuttersync',
        liveUrl: 'https://shuttersync-photography.vercel.app/',
        sourceCode: 'https://github.com/shiven0nly/shuttersync_final2',
        year: 2026,
        description:
            'Hardware-enabled SaaS platform for photographers with polished UI and scalable backend.',
        role: 'SaaS Product',
        techStack: ['Next.js', 'Clerk', 'Convex', 'TailwindCSS'],
        thumbnail: '/projects/thumbnail/shuttersync%20site.png',
        longThumbnail: '/projects/long/shuttersync%20site.png',
        images: ['/projects/images/shuttersync%20site.png'],
    },
    {
        title: 'ESP32 WiFi NTP Smart Clock',
        slug: 'esp32-wifi-ntp-smart-clock',
        liveUrl: 'https://github.com/shiven0nly/Esp32_Time_Clock',
        sourceCode: 'https://github.com/shiven0nly/college-predictor',
        year: 2026,
        description: `Developed a WiFi-synchronized digital clock using ESP32 with captive-portal provisioning, NTP timezone handling, and persistent credential storage.`,
        role: `Hardware + Embedded`,
        techStack: ['ESP32', 'TM1637', 'Embedded C++', 'WiFi', 'NTP'],
        thumbnail: '/projects/thumbnail/esp32%20time%20clocl.jpg',
        longThumbnail: '/projects/long/esp32%20time%20clocl.jpg',
        images: [
            '/projects/images/esp32%20time%20clocl.jpg',
            // Add more hardware photos/diagrams here when available
        ],
    },
    {
        title: 'Skill-Sync: AI-Powered Code Intelligence Platform',
        slug: 'skill-sync',
        liveUrl:
            'https://github.com/shiven0nly/Skill_Sync-Ai-for-Bharat-Hackathon',
        sourceCode:
            'https://github.com/shiven0nly/Skill_Sync-Ai-for-Bharat-Hackathon',
        year: 2026,
        description: `Adaptive AI system that explains code at different depths using RAG, embeddings, and multi-agent orchestration.`,
        role: 'AI + Full-Stack',
        techStack: ['Amazon Bedrock', 'RAG', 'TypeScript'],
        thumbnail: '/projects/thumbnail/skill-sync%20site.jpg',
        longThumbnail: '/projects/long/skill-sync%20site.jpg',
        images: [
            '/projects/images/skill-sync%20site.jpg',
            // Add more screenshots/demo images here when available
        ],
    },
    {
        title: 'Password Manager',
        slug: 'password-manager',
        liveUrl: 'https://github.com/shiven0nly/Password-Manager',
        sourceCode: 'https://github.com/shiven0nly/Password-Manager',
        year: 2025,
        description:
            'Full-stack CRUD application for secure password management with encryption and authentication.',
        role: 'Full-Stack',
        techStack: ['React', 'MongoDB', 'CSS', 'CRUD'],
        thumbnail: '/projects/thumbnail/password%20manager.png',
        longThumbnail: '/projects/long/password%20manager.png',
        images: ['/projects/images/password%20manager.png'],
    },
    {
        title: 'Task Management (Kanban App)',
        slug: 'task-management-app',
        liveUrl: 'https://flowboard-taskmanagement.vercel.app/',
        sourceCode:
            'https://github.com/shiven0nly/flowboard-calm_productivity/',
        year: 2026,
        description:
            'Full-stack CRUD application for task management with drag-and-drop interface.',
        role: 'Full-Stack',
        techStack: ['Next.js', 'TailwindCSS', 'MongoDB'],
        thumbnail: '/projects/thumbnail/flowboard.png',
        longThumbnail: '/projects/long/flowboard.png',
        images: ['/projects/images/flowboard.png'],
    },
    {
        title: 'IceCream Site',
        slug: 'icecream-site',
        liveUrl: 'https://icecream-site.netlify.app/',
        sourceCode: 'https://github.com/shiven0nly/IceCream-Site',
        year: 2024,
        description:
            'Visually appealing frontend showcase with smooth animations and responsive design.',
        role: 'Frontend',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/ice%20cream%20site.png',
        longThumbnail: '/projects/long/ice%20cream%20site.png',
        images: ['/projects/images/ice%20cream%20site.png'],
    },
    {
        title: 'Vivo Health',
        slug: 'vivo-health',
        liveUrl: 'https://vivo_health2.vercel.app/',
        sourceCode: 'https://github.com/shiven0nly/vivo_health2',
        year: 2025,
        description:
            'Healthcare platform with clean, accessible UI focused on user experience.',
        role: 'Frontend',
        techStack: ['React', 'TailwindCSS', 'Node.js'],
        thumbnail: '/projects/thumbnail/vivo%20health%20site.png',
        longThumbnail: '/projects/long/vivo%20health%20site.png',
        images: ['/projects/images/vivo%20health%20site.png'],
    },
    {
        title: 'College Predictor - IIT Admission Platform',
        slug: 'college-predictor',
        liveUrl: 'https://iit-discovery.vercel.app',
        sourceCode: 'https://github.com/shiven0nly/college-predictor',
        year: 2025,
        description: `<p>A comprehensive college discovery and admission prediction platform for 23+ IITs with advanced filtering and comparison features.</p>
        <ul>
        <li><strong>College Discovery:</strong> Browse 23+ IITs with detailed profiles, campus facilities, placement statistics, student reviews, and NIRF rankings</li>
        <li><strong>Admission Predictor:</strong> Predict admission chances based on JEE Advanced rank with category-wise filtering (GENERAL, OBC-NCL, SC, ST, EWS) and real-time JOSAA data</li>
        <li><strong>College Comparison:</strong> Compare up to 3 colleges side-by-side with fees, placements, rankings, and facilities metrics</li>
        <li><strong>Save & Bookmark:</strong> Personal dashboard for saved colleges with notes and quick access</li>
        <li><strong>User Authentication:</strong> Secure NextAuth.js authentication with protected routes and profile management</li>
        <li><strong>Reviews & Ratings:</strong> Authentic student reviews across academics, placements, infrastructure, faculty, and campus life</li>
        </ul>`,
        role: 'Full-Stack',
        techStack: [
            'Next.js 16',
            'TypeScript',
            'PostgreSQL',
            'Prisma',
            'NextAuth.js',
            'Tailwind CSS 4',
            'shadcn/ui',
        ],
        thumbnail: '/projects/images/college-predictor.png',
        longThumbnail: '/projects/images/college-predictor.png',
        images: ['/projects/images/college-predictor.png'],
        // Add more screenshots when available}
    },
    {
        title: 'Sree Dacca Jewellery',
        slug: 'sree-dacca-jewellery',
        liveUrl: 'https://sree-dacca-jewellers.netlify.app/',
        sourceCode: 'https://github.com/shiven0nly/sree_dacca_jewellery_site/',
        year: 2025,
        description:
            'Professional e-commerce site for jewelry with elegant product presentation.',
        role: 'Frontend',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/thumbnail/sree%20dacca%20jwellers%20site.png',
        longThumbnail: '/projects/long/sree%20dacca%20jwellers%20site.png',
        images: ['/projects/images/sree%20dacca%20jwellers%20site.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Cofounding Technology Officer & Lead Developer',
        company: 'ShutterSync',
        duration: 'Jan 2026 - May 2026',
    },
    {
        title: 'Open Source Contributor (AI Agents & Web Development)',
        company: 'GirlScript Summer of Code (GSSoC 2026)',
        duration: 'May 2026 - Present',
    },
];
