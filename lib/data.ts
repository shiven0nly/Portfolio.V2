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
        liveUrl: '',
        year: 2026,
        description:
            'Hardware-enabled SaaS platform for photographers with polished UI and scalable backend.',
        role: 'SaaS Product',
        techStack: ['React', 'Firebase', 'Supabase', 'TailwindCSS'],
        thumbnail: '/projects/images/shuttersync site.png',
        longThumbnail: '/projects/images/shuttersync site.png',
        images: ['/projects/images/shuttersync site.png'],
    },
    {
        title: 'ESP32 WiFi NTP Smart Clock',
        slug: 'esp32-wifi-ntp-smart-clock',
        liveUrl: 'https://github.com/shiven0nly/Esp32_Time_Clock',
        year: 2026,
        description: `Developed a WiFi-synchronized digital clock using ESP32 with captive-portal provisioning, NTP timezone handling, and persistent credential storage.`,
        role: `Hardware + Embedded`,
        techStack: ['ESP32', 'TM1637', 'Embedded C++', 'WiFi', 'NTP'],
        thumbnail: '/projects/images/esp32 time clocl.jpg',
        longThumbnail: '/projects/images/esp32 time clocl.jpg',
        images: ['/projects/images/esp32 time clocl.jpg'],
    },
    {
        title: 'Skill-Sync: AI-Powered Code Intelligence Platform',
        slug: 'skill-sync',
        liveUrl:
            'https://github.com/shiven0nly/Skill_Sync-Ai-for-Bharat-Hackathon',
        year: 2026,
        description: `Adaptive AI system that explains code at different depths using RAG, embeddings, and multi-agent orchestration.`,
        role: 'AI + Full-Stack',
        techStack: ['Amazon Bedrock', 'RAG', 'TypeScript'],
        thumbnail: '/projects/images/skill-sync site.jpg',
        longThumbnail: '/projects/images/skill-sync site.jpg',
        images: ['/projects/images/skill-sync site.jpg'],
    },
    {
        title: 'Password Manager',
        slug: 'password-manager',
        liveUrl: 'https://github.com/shiven0nly/Password-Manager',
        year: 2025,
        description:
            'Full-stack CRUD application for secure password management with encryption and authentication.',
        role: 'Full-Stack',
        techStack: ['React', 'MongoDB', 'CSS', 'CRUD'],
        thumbnail: '/projects/images/password manager.png',
        longThumbnail: '/projects/images/password manager.png',
        images: ['/projects/images/password manager.png'],
    },
    {
        title: 'Mini Quiz Site',
        slug: 'mini-quiz-site',
        liveUrl: 'https://github.com/shiven0nly/Mini-Quiz-site',
        year: 2024,
        description:
            'Interactive quiz platform with dynamic questions, scoring, and instant feedback.',
        role: 'Frontend',
        techStack: ['JavaScript', 'HTML', 'CSS'],
        thumbnail: '/projects/images/mini quiz site.png',
        longThumbnail: '/projects/images/mini quiz site.png',
        images: ['/projects/images/mini quiz site.png'],
    },
    {
        title: 'IceCream Site',
        slug: 'icecream-site',
        liveUrl: 'https://github.com/shiven0nly/IceCream-Site',
        year: 2024,
        description:
            'Visually appealing frontend showcase with smooth animations and responsive design.',
        role: 'Frontend',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/images/ice cream site.png',
        longThumbnail: '/projects/images/ice cream site.png',
        images: ['/projects/images/ice cream site.png'],
    },
    {
        title: 'Vivo Health',
        slug: 'vivo-health',
        liveUrl: 'https://github.com/shiven0nly/vivo_health2',
        year: 2025,
        description:
            'Healthcare platform with clean, accessible UI focused on user experience.',
        role: 'Frontend',
        techStack: ['React', 'CSS', 'JavaScript'],
        thumbnail: '/projects/images/vivo health site.png',
        longThumbnail: '/projects/images/vivo health site.png',
        images: ['/projects/images/vivo health site.png'],
    },
    {
        title: 'Sree Dacca Jewellery',
        slug: 'sree-dacca-jewellery',
        liveUrl: 'https://github.com/shiven0nly/sree_dacca_jewellery_site',
        year: 2025,
        description:
            'Professional e-commerce site for jewelry with elegant product presentation.',
        role: 'Frontend',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        thumbnail: '/projects/images/sree dacca jwellers site.png',
        longThumbnail: '/projects/images/sree dacca jwellers site.png',
        images: ['/projects/images/sree dacca jwellers site.png'],
    },
    {
        title: 'Chill Thrive',
        slug: 'chill-thrive',
        liveUrl: 'https://github.com/shiven0nly/Chill-Thrive',
        year: 2025,
        description:
            'Competition website with interactive elements and strong engagement focus.',
        role: 'Frontend',
        techStack: ['React', 'CSS', 'JavaScript'],
        thumbnail: '/projects/images/chillthrive site.png',
        longThumbnail: '/projects/images/chillthrive site.png',
        images: ['/projects/images/chillthrive site.png'],
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Chief Technology Officer & Lead Developer',
        company: 'ShutterSync',
        duration: 'Feb 2026 - Present',
    },
    {
        title: 'Open Source Contributor (AI Agents & Web Development)',
        company: 'GirlScript Summer of Code (GSSoC 2026)',
        duration: 'May 2026 - Present',
    },
];
