export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'Engineering & Software' | 'Intelligence & AI' | 'Digital Growth' | 'Creative Media';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  capabilities: string[];
  businessBenefits: string[];
  technologies: string[];
  faq: { question: string; answer: string }[];
}

export interface ProblemSolution {
  id: string;
  problem: string;
  impact: string;
  solution: string;
}

export interface Industry {
  id: string;
  name: string;
  challenge: string;
  qvantixCapability: string;
  keySolutions: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const COMPANY_INFO = {
  name: 'Qvantix',
  fullName: 'Qvantix Digital & Software Solutions',
  tagline: 'Digital & Software Solutions in Tamil Nadu',
  location: 'Tamil Nadu, India',
  heroHeadline: 'Looking for a reliable software development and digital solutions company in Tamil Nadu?',
  heroSubheadline: 'We create business-focused digital solutions spanning website and mobile app development, custom software, software testing, AI & ML, SEO, Google Ads, digital marketing, graphic design, and logo design — combining technology and creativity to help brands build a stronger digital presence and achieve sustainable growth.',
  eyebrow: 'BUILD YOUR DIGITAL PRESENCE WITH QVANTIX',
  primaryCTA: "Let's Talk",
  secondaryCTA: 'Explore Solutions',
  manifesto: 'Understand the Need. Create with Purpose. Deliver with Impact.',
  vision: 'To become a trusted digital and software solutions partner for businesses by combining technology, creativity, and strategic thinking to build solutions that create long-term value and meaningful growth. We aim to help businesses build a stronger digital presence, improve the way they work, and confidently adapt to the changing digital world.',
  mission: "At Qvantix Digital & Software Solutions, our mission is to understand each client's business, goals, and challenges before creating the right solution. We focus on delivering software development, digital marketing, graphic design, branding, motion graphics, and creative digital solutions that are practical, effective, and aligned with each client's needs.",
  commitments: [
    'Delivering projects with quality and attention to detail',
    'Completing work within the agreed timeline',
    'Creating solutions based on each client\'s unique requirements',
    'Combining creativity with practical technology',
    'Building long-term and trustworthy client relationships',
    'Continuously improving our skills, ideas, and digital solutions',
  ],
  quotes: {
    whoWeAre: 'Your Vision. Our Technology. Built to Grow.',
    whatWeDo: 'Build Digital. Grow Smarter. Move Forward.',
    aboutQvantix: 'Think Digital. Build Better. Grow with Qvantix.',
    ourServices: 'One Team. Multiple Digital Capabilities. Built Around Your Goals.',
  },
  contactPlaceholder: {
    email: 'contact@qvantix.com',
    phone: '+91 6380648132',
    telPhone: '+916380648132',
    whatsappPhone: '916380648132',
    location: 'Tamil Nadu, India',
    note: 'Tell us what you\'re trying to solve. We\'ll help define the right digital solution.',
  },
};

export const SERVICES: Service[] = [
  {
    id: 'custom-software',
    slug: 'custom-software',
    title: 'Custom Software Development',
    category: 'Engineering & Software',
    tagline: 'Bespoke software and business solutions built to automate operations and drive efficiency.',
    shortDescription: 'Practical, reliable custom software tailored to the exact way your business operates in Tamil Nadu.',
    fullDescription: 'At Qvantix Digital & Software Solutions in Tamil Nadu, we turn business ideas into practical digital solutions built for real-world needs. We build custom software platforms, internal enterprise tools, ERPs, CRMs, and management portals that streamline day-to-day operations and prepare your company for scalable growth.',
    image: '/assets/solutions/Custom Software Development.png',
    capabilities: [
      'Bespoke Business Management Systems & ERPs',
      'Custom CRM & Internal Portal Development',
      'Enterprise Software Architecture',
      'Workflow Automation & Process Optimization',
      'API Architecture & Third-Party Integrations',
      'Legacy System Modernization & Refactoring',
    ],
    businessBenefits: [
      'Eliminate manual data entry and repetitive admin tasks',
      'Scale software features seamlessly as your business expands',
      'Full ownership of custom code and IP assets',
      'Higher operational efficiency tailored to your business goals',
    ],
    technologies: ['Node.js', 'Python', 'TypeScript', 'PostgreSQL', 'Docker', 'REST/GraphQL APIs'],
    faq: [
      {
        question: 'Why choose custom software development over standard off-the-shelf software?',
        answer: 'Off-the-shelf software often includes features you don\'t need while lacking critical workflows unique to your business. Qvantix custom software is engineered precisely around your operational goals, ensuring maximum efficiency and complete technology ownership.',
      },
      {
        question: 'How does Qvantix ensure custom software security and reliability?',
        answer: 'We follow robust software engineering practices including automated testing, secure API authentication, encrypted data storage, and scalable cloud architecture.',
      },
    ],
  },
  {
    id: 'website-development',
    slug: 'website-development',
    title: 'Website Development',
    category: 'Engineering & Software',
    tagline: 'Custom-built, responsive websites designed to enhance online presence and support business growth.',
    shortDescription: 'Modern business websites engineered for speed, clean UX, SEO, and customer conversion.',
    fullDescription: 'Your website is the digital front door to your company. Qvantix builds custom, lightning-fast, visually compelling, and SEO-optimized business websites in Tamil Nadu that communicate your positioning with clarity and turn visitors into qualified business leads.',
    image: '/assets/solutions/website development.png',
    capabilities: [
      'Business Website Development',
      'Corporate Website Development',
      'E-Commerce Website Development',
      'Custom Web Application Development',
      'Real Estate Website Development',
      'Educational Website Development',
      'Booking & Appointment Website Development',
      'Restaurant & Food Website Development',
      'News & Blog Website Development',
      'Job Portal Development',
    ],
    businessBenefits: [
      'Faster page load times driving higher conversion rates',
      'Search engine friendly structure built-in from day one',
      'Seamless mobile navigation across all screen sizes',
      'Easy content updates with modern CMS integration',
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Node.js', 'Vercel'],
    faq: [
      {
        question: 'Will my Qvantix website be fully mobile responsive and optimized for SEO?',
        answer: 'Yes, every website engineered by Qvantix is built mobile-first with clean semantic HTML, dynamic metadata, fast load speeds, and structured schema markup to rank effectively on search engines.',
      },
    ],
  },
  {
    id: 'mobile-app-development',
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Engineering & Software',
    tagline: 'Innovative Android and iOS applications crafted for seamless user experiences and powerful functionality.',
    shortDescription: 'Cross-platform native-feel mobile applications that engage users and streamline business operations.',
    fullDescription: 'Deliver a powerful brand experience directly to your customers\' smartphones. Qvantix designs and builds high-performing mobile applications for iOS and Android, focusing on intuitive interfaces, fast response times, and robust offline-online synchronization.',
    image: '/assets/solutions/Mobile App.png',
    capabilities: [
      'Android App Development',
      'iOS App Development',
      'E-Commerce Apps',
      'Enterprise Applications',
      'Education & E-Learning Apps',
      'Healthcare Apps',
      'Media & Entertainment Apps',
    ],
    businessBenefits: [
      'Direct customer engagement through targeted push notifications',
      'Single codebase delivery reducing development cost and launch timeline',
      'Robust security and data protection standards',
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'REST APIs'],
    faq: [
      {
        question: 'Can Qvantix build mobile apps that work on both Android and iOS?',
        answer: 'Yes, we utilize industry-standard cross-platform frameworks to build applications that perform natively on both Android and iOS while optimizing cost and timeline.',
      },
    ],
  },
  {
    id: 'software-testing-qa',
    slug: 'software-testing-qa',
    title: 'Quality Assurance & Software Testing',
    category: 'Engineering & Software',
    tagline: 'Comprehensive testing services focused on performance, reliability, security, and user satisfaction.',
    shortDescription: 'Comprehensive manual and automated testing to ensure your software performs flawlessly.',
    fullDescription: 'Software flaws hurt client trust and cost money. Qvantix provides rigorous Quality Assurance & Software Testing services in Tamil Nadu to validate your software architecture across functional testing, performance benchmarks, security compliance, and user interface responsiveness before release.',
    image: '/assets/solutions/Software Testing.png',
    capabilities: [
      'Manual Testing',
      'Automation Testing',
      'Functional Testing',
      'Performance Testing',
      'Security Testing',
      'Mobile App Testing',
      'Web Application Testing',
      'Regression Testing',
    ],
    businessBenefits: [
      'Prevent costly production bugs before your customers encounter them',
      'Ensure high application availability during peak user traffic',
      'Maintain software reputation through rigorous quality benchmarks',
    ],
    technologies: ['Selenium', 'Playwright', 'Postman', 'JMeter', 'Jest', 'GitLab CI'],
    faq: [
      {
        question: 'Does Qvantix provide independent testing for existing software projects?',
        answer: 'Yes, we perform independent QA audits, regression testing, and performance testing for third-party or existing internal software builds.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing Services',
    category: 'Digital Growth',
    tagline: 'Data-driven marketing strategies including search optimization, social media, online advertising, and brand promotion.',
    shortDescription: 'Strategic digital marketing uniting SEO, PPC, content, email, and social media campaigns.',
    fullDescription: 'Build a commanding digital presence across online touchpoints. Qvantix creates holistic digital marketing strategies combining channel distribution, social presence management, targeted ad campaigns, content marketing, and brand messaging to help your company engage audiences and accelerate digital growth in Tamil Nadu and beyond.',
    image: '/assets/solutions/Digital Marketing.png',
    capabilities: [
      'Search Engine Optimization (SEO)',
      'PPC Advertising & Google Ads',
      'Social Media Marketing',
      'Content Marketing',
      'Email Marketing',
      'Video Marketing',
      'Influencer Marketing',
      'Branding & Reputation Management',
      'Local SEO',
      'E-Commerce Marketing',
    ],
    businessBenefits: [
      'Consistent brand presence across all customer touchpoints',
      'Higher customer trust and digital brand retention',
      'Unified strategy connecting creative marketing directly to sales outcomes',
    ],
    technologies: ['Google Ads', 'Google Analytics 4', 'Meta Business Suite', 'Mailchimp', 'HubSpot', 'Ahrefs'],
    faq: [
      {
        question: 'What makes Qvantix digital marketing different from traditional advertising agencies?',
        answer: 'We unite software engineering, data analytics, and creative strategy under one roof. Our marketing decisions are grounded in real metrics, conversion design, and tech-driven optimization.',
      },
    ],
  },
  {
    id: 'ai-ml-solutions',
    slug: 'ai-ml-solutions',
    title: 'AI & Machine Learning Solutions',
    category: 'Intelligence & AI',
    tagline: 'Smart technology solutions that automate processes, uncover insights, and improve business efficiency.',
    shortDescription: 'Smart automation, predictive data analysis, document AI, and intelligent assistant workflows.',
    fullDescription: 'Integrate artificial intelligence into your operational core. Qvantix delivers pragmatic AI & Machine Learning solutions in Tamil Nadu—including AI chatbots, document processing, natural language assistants, predictive analytics, and process automation—to help your business run smarter.',
    image: '/assets/solutions/AI & ML.png',
    capabilities: [
      'AI Chatbots',
      'Machine Learning Models',
      'Data Analytics',
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Recommendation Engines',
      'Process Automation',
      'OCR & Document AI',
      'Voice AI Solutions',
      'AI for E-Commerce',
      'Custom AI Development',
    ],
    businessBenefits: [
      'Automate routine customer inquiries with smart digital assistants',
      'Extract valuable insights from unstructured business data',
      'Improve decision-making precision with predictive analytics',
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'LangChain', 'Scikit-Learn', 'FastAPI'],
    faq: [
      {
        question: 'How can small and growing businesses benefit from AI & Machine Learning?',
        answer: 'AI is no longer just for massive tech enterprises. Growing businesses use Qvantix AI solutions for customer service chatbots, lead scoring, document extraction, and predictive forecasting to save hours of manual labor.',
      },
    ],
  },
  {
    id: 'graphic-logo-design',
    slug: 'graphic-logo-design',
    title: 'Graphic Design & Brand Identity',
    category: 'Creative Media',
    tagline: 'Visually compelling designs and cohesive logos that strengthen brand communication and create lasting impressions.',
    shortDescription: 'Memorable brand identity, distinctive logo designs, and visual marketing collateral.',
    fullDescription: 'Your visual identity shapes how clients perceive your technical credibility. Qvantix crafts distinctive logo designs, visual guidelines, typography systems, social media templates, and corporate marketing materials in Tamil Nadu that build authority and leave a lasting visual impression.',
    image: '/assets/solutions/Graphic Design.png',
    capabilities: [
      'Logo Design',
      'Brand Identity Design',
      'Social Media Creatives',
      'Advertising Design',
      'Flyer & Brochure Design',
      'Poster & Banner Design',
      'Packaging Design',
      'Corporate Branding Materials',
      'Motion Graphics',
      'Website Graphics',
      'Catalog Design',
      'YouTube Thumbnails',
    ],
    businessBenefits: [
      'Instant brand recognition and professional credibility',
      'Consistent visual language across print and digital media',
      'Scalable vector design files ready for high-resolution print and web',
    ],
    technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Adobe InDesign'],
    faq: [
      {
        question: 'What deliverables do I receive with a Qvantix logo & brand identity project?',
        answer: 'You receive full ownership of master vector files (AI, EPS, SVG), web formats (PNG, JPG, WebP), a brand guidelines document, color codes (HEX, RGB, CMYK), and typography usage rules.',
      },
    ],
  },
  {
    id: 'motion-graphics',
    slug: 'motion-graphics',
    title: 'Motion Graphics & 2D Animation',
    category: 'Creative Media',
    tagline: 'Dynamic visual storytelling through animations and motion content designed to increase audience engagement.',
    shortDescription: 'Engaging visual storytelling videos that explain complex technology products with clarity.',
    fullDescription: 'Complex software and digital solutions are best explained with dynamic visuals. Qvantix produces professional motion graphics, 2D character animations, product explainer videos, kinetic typography, and logo animations in Tamil Nadu that simplify abstract technical concepts and capture audience attention.',
    image: '/assets/solutions/Motion Graphic & 2d animation.png',
    capabilities: [
      'Motion Graphics',
      '2D Character Animation',
      'Animated Advertisements',
      'Explainer Videos',
      'Social Media Animations',
      'Kinetic Typography',
      'Logo Animation',
      'Infographic Animation',
      'Story-Based Animation',
      'Educational Animation',
      'Music & Lyric Animation',
      'UI/UX Animation',
    ],
    businessBenefits: [
      'Higher video engagement on landing pages and social channels',
      'Simplified explanation of complex software features',
      'Increased conversion rates on ad campaigns featuring video assets',
    ],
    technologies: ['Adobe After Effects', 'Adobe Premiere Pro', 'Figma', 'Lottie Animation'],
    faq: [
      {
        question: 'How can motion graphics help my software or business website convert better?',
        answer: 'Motion graphics turn abstract workflows into clear visual stories. Visitors retain video content faster than long text paragraphs, leading to higher engagement and quicker decision-making.',
      },
    ],
  },
  {
    id: 'ai-video',
    slug: 'ai-video',
    title: 'AI Video Creation',
    category: 'Intelligence & AI',
    tagline: 'AI-powered video creation, avatar generation, text-to-video, and dynamic automated video production.',
    shortDescription: 'Cutting-edge AI video creation, text-to-video, AI avatars, voiceovers, and automated video production.',
    fullDescription: 'Transform how your business produces visual content. Qvantix delivers AI Video creation solutions in Tamil Nadu—including text-to-video, AI avatar creation, automated voiceovers, multilingual videos, and AI reels—to help brands produce high-converting corporate, promotional, and educational videos at scale.',
    image: '/assets/solutions/AI Video.png',
    capabilities: [
      'AI Video Creation',
      'Text-to-Video',
      'Image-to-Video',
      'AI Avatar Videos',
      'AI Voiceover',
      'Multilingual Videos',
      'AI Ad Videos',
      'AI Reels & Shorts',
      'AI Corporate Videos',
      'AI Product Videos',
      'AI Cinematic Videos',
      'AI Explainer Videos',
      'AI Video Enhancement',
    ],
    businessBenefits: [
      'Produce high-quality video content rapidly without expensive physical shoots',
      'Scale ad video production effortlessly across platforms and languages',
      'Engage prospective customers with life-like AI avatars and voiceovers',
    ],
    technologies: ['Runway AI', 'HeyGen', 'ElevenLabs', 'Synthesia', 'Midjourney', 'Adobe Premiere Pro'],
    faq: [
      {
        question: 'How can AI video creation benefit my business?',
        answer: 'AI video creation allows businesses to produce professional explainer, corporate, product, and promotional ad videos rapidly at a fraction of traditional video production costs.',
      },
    ],
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'Search Engine Optimization (SEO)',
    category: 'Digital Growth',
    tagline: 'Data-driven technical and content SEO designed to rank your business for high-intent search terms.',
    shortDescription: 'Organic search strategies that build sustainable search rankings and qualified inbound leads.',
    fullDescription: 'Capture customers when they are actively searching for your solutions. Qvantix delivers comprehensive Search Engine Optimization—combining technical web optimization, targeted keyword architecture, quality content creation, and search indexing to increase your digital visibility in Tamil Nadu and global markets.',
    image: '/assets/solutions/SEO.png',
    capabilities: [
      'Comprehensive Technical SEO Audits & Architecture Fixes',
      'High-Intent Keyword Research & Mapping',
      'On-Page Optimization & Schema Markup Implementation',
      'Content Strategy & Search Engine Copywriting',
      'Local SEO & Google Business Profile Optimization',
      'Link Architecture & Search Authority Building',
    ],
    businessBenefits: [
      'Generate sustainable inbound leads without recurring ad spend',
      'Improve website credibility and search engine indexation',
      'Rank prominently for high-value commercial keywords',
    ],
    technologies: ['Google Search Console', 'Google Analytics', 'Ahrefs', 'Screaming Frog', 'Schema.org'],
    faq: [
      {
        question: 'How long does it take to see results from Qvantix SEO services?',
        answer: 'SEO is a long-term growth asset. While technical indexation improvements can show positive signals within weeks, noticeable search position gains typically develop within 3 to 6 months of consistent execution.',
      },
    ],
  },
];

export const PROBLEMS_SOLUTIONS: ProblemSolution[] = [
  {
    id: '1',
    problem: 'Generic off-the-shelf software doesn\'t fit custom business processes.',
    impact: 'Forcing rigid software on custom workflows leads to manual workarounds, data errors, and frustrated teams.',
    solution: 'Qvantix builds custom software tailored specifically around how your company operates.',
  },
  {
    id: '2',
    problem: 'Slow, outdated websites that fail to convert visitors into inquiries.',
    impact: 'A clunky or slow website damages credibility and loses valuable commercial leads to competitors.',
    solution: 'Qvantix engineers high-speed, modern websites designed to turn visitors into business conversations.',
  },
  {
    id: '3',
    problem: 'Managing multiple fragmented agencies for development, SEO, and design.',
    impact: 'Disconnected vendors create misaligned strategies, missed deadlines, and bloated budgets.',
    solution: 'Qvantix provides end-to-end software development, AI, SEO, and creative media under one unified team.',
  },
  {
    id: '4',
    problem: 'Lack of internal QA testing resulting in buggy software releases.',
    impact: 'Unchecked bugs destroy customer trust and create emergency operational downtime.',
    solution: 'Qvantix provides rigorous automated and manual software testing to guarantee software reliability.',
  },
];

export const WHY_QVANTIX = [
  {
    number: '01',
    title: 'Business-First Thinking',
    description: 'We don\'t just write code; we understand your operational goals and engineer digital solutions designed to generate real business value.',
  },
  {
    number: '02',
    title: 'All-in-One Capabilities',
    description: 'Software development, AI/ML, testing, SEO, Google Ads, and creative design brought together seamlessly under one expert team.',
  },
  {
    number: '03',
    title: 'Quality & Timeline Commitment',
    description: 'We take pride in delivering robust, thoroughly tested solutions within the exact agreed timeline, every single time.',
  },
  {
    number: '04',
    title: 'Scalable Architecture',
    description: 'Built with modern technology stacks engineered to adapt and scale as your business grows into new markets.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the Business',
    description: 'We analyze your core business objectives, operational workflows, and target users to pinpoint the exact digital opportunity.',
    deliverables: ['Requirement Map', 'Scope Definition', 'Technical Feasibility Study'],
  },
  {
    number: '02',
    title: 'STRATEGIZE',
    subtitle: 'Define Architecture & Roadmap',
    description: 'We map out the solution architecture, UI/UX wireframes, database models, and project timeline.',
    deliverables: ['System Architecture', 'UX Blueprint', 'Milestone Roadmap'],
  },
  {
    number: '03',
    title: 'DESIGN & BUILD',
    subtitle: 'Practical Technology Creation',
    description: 'Our engineers and creative designers build custom software, web apps, and digital campaigns using clean code standards.',
    deliverables: ['Clean Production Code', 'UI Design System', 'API Documentation'],
  },
  {
    number: '04',
    title: 'TEST & QA',
    subtitle: 'Rigorous Verification',
    description: 'We test across devices, browsers, load conditions, and security parameters to ensure flaw-free execution.',
    deliverables: ['QA Verification Report', 'Performance Benchmark', 'Security Check'],
  },
  {
    number: '05',
    title: 'DEPLOY',
    subtitle: 'Seamless Rollout',
    description: 'We launch your digital product into production environments with zero downtime and full configuration.',
    deliverables: ['Production Release', 'DNS & Server Config', 'Deployment Audit'],
  },
  {
    number: '06',
    title: 'GROW & MAINTAIN',
    subtitle: 'Ongoing Support & Optimization',
    description: 'We support, maintain, and continuously optimize your digital presence to ensure long-term value.',
    deliverables: ['Continuous Monitoring', 'Growth Analytics', 'Feature Updates'],
  },
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'healthcare',
    name: 'Healthcare & Wellness',
    challenge: 'Managing patient schedules, record privacy, and streamlined telemedicine access.',
    qvantixCapability: 'Secure patient portals, custom management software, and responsive healthcare web platforms.',
    keySolutions: ['Patient Management Systems', 'Healthcare Websites', 'Telemedicine Portal Development'],
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    challenge: 'Scaling digital storefront sales and automating multi-channel inventory management.',
    qvantixCapability: 'High-speed e-commerce development, Google Ads conversion campaigns, and custom ERP integration.',
    keySolutions: ['Custom E-Commerce Storefronts', 'Inventory Automation Software', 'Google Ads ROAS Campaigns'],
  },
  {
    id: 'finance',
    name: 'Finance & Professional Services',
    challenge: 'Building client trust, high-security transaction portals, and technical SEO visibility.',
    qvantixCapability: 'Encrypted financial portals, authority branding, and high-conversion client acquisition websites.',
    keySolutions: ['Client Document Portals', 'Financial Services Web Apps', 'Technical SEO & Branding'],
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    challenge: 'Delivering interactive learning content, student administration, and digital student acquisition.',
    qvantixCapability: 'Custom learning management systems (LMS), mobile educational apps, and search marketing.',
    keySolutions: ['Student Administration Portals', 'Educational Mobile Apps', 'Digital Marketing Campaigns'],
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Industrial',
    challenge: 'Digitizing manual inventory workflows, order tracking, and industrial B2B branding.',
    qvantixCapability: 'Custom inventory & supply tracking software, B2B corporate web applications, and logo design.',
    keySolutions: ['Inventory Tracking Software', 'B2B Corporate Portals', 'Industrial Brand Identity'],
  },
  {
    id: 'saas',
    name: 'SaaS & Technology Startups',
    challenge: 'Accelerating product MVP delivery, high-performing landing pages, and QA automated testing.',
    qvantixCapability: 'Full-stack web app development, automated software testing, and motion graphics explainer videos.',
    keySolutions: ['SaaS Web App Architecture', 'Automated QA Testing', 'Product Motion Explainer Videos'],
  },
];

export const TECH_ECOSYSTEM = [
  {
    category: 'Frontend Development',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'Vue.js'],
  },
  {
    category: 'Backend & APIs',
    technologies: ['Node.js', 'Python', 'FastAPI', 'Express', 'PostgreSQL', 'MongoDB', 'REST & GraphQL'],
  },
  {
    category: 'Mobile Applications',
    technologies: ['React Native', 'Flutter', 'iOS & Android Native SDKs', 'Firebase'],
  },
  {
    category: 'Intelligence & Cloud',
    technologies: ['PyTorch', 'OpenAI Integration', 'Docker', 'AWS', 'Vercel', 'GitLab CI/CD'],
  },
  {
    category: 'QA & Testing',
    technologies: ['Playwright', 'Selenium', 'Postman', 'JMeter', 'Jest'],
  },
  {
    category: 'Digital Growth & Creative',
    technologies: ['Google Ads', 'Google Analytics 4', 'Ahrefs', 'Figma', 'Adobe After Effects', 'Adobe Illustrator'],
  },
];

export const GENERAL_FAQS: FAQItem[] = [
  {
    question: 'What software and digital solutions does Qvantix provide?',
    answer: 'Qvantix provides custom software development, website and mobile app development, software testing & QA, AI & ML solutions, SEO, Google Ads, digital marketing, graphic & logo design, and 2D motion graphics.',
    category: 'General',
  },
  {
    question: 'Can Qvantix build custom software tailored specifically for my company?',
    answer: 'Yes. We specialize in building custom business software, ERPs, CRMs, and internal automation tools designed around your unique business operations.',
    category: 'Software',
  },
  {
    question: 'How does Qvantix ensure projects are completed on time?',
    answer: 'We follow a structured 6-step delivery process with clear milestone timelines, transparent project updates, and rigorous QA verification before deployment.',
    category: 'Process',
  },
  {
    question: 'Where is Qvantix based?',
    answer: 'Qvantix is a digital and software solutions company based in Tamil Nadu, serving businesses, startups, and growing enterprises locally and globally.',
    category: 'Company',
  },
  {
    question: 'How can I start a project with Qvantix?',
    answer: "Starting is simple. Click 'Let's Talk' or visit our Contact page to share your project requirements. Our team will get back to you promptly with a structured consultation.",
    category: 'Contact',
  },
];
