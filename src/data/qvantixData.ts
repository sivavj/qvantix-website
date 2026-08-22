export interface Service {
  id: string;
  slug: string;
  title: string;
  category: 'Engineering & Software' | 'Intelligence & AI' | 'Digital Growth' | 'Creative Media';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
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
  tagline: 'Software & Digital Solutions in Tamil Nadu',
  location: 'Tamil Nadu, India',
  heroHeadline: 'Technology that turns complex business challenges into practical, scalable digital solutions.',
  heroSubheadline: 'Qvantix helps startups, small businesses, and growing companies build business-focused software, mobile applications, AI systems, and targeted digital growth campaigns tailored to their goals.',
  eyebrow: 'SOFTWARE & DIGITAL SOLUTIONS',
  primaryCTA: "Let's Talk",
  secondaryCTA: 'Explore Solutions',
  manifesto: 'Understand the Need. Create with Purpose. Deliver with Impact.',
  vision: 'To become a trusted digital and software solutions partner for businesses by combining technology, creativity, and strategic thinking to build solutions that create long-term value and meaningful growth.',
  mission: "At Qvantix Digital & Software Solutions, our mission is to understand each client's business, goals, and challenges before creating the right solution.",
  commitments: [
    'Delivering projects with quality and attention to detail',
    'Completing work within the agreed timeline',
    'Creating solutions based on each client\'s unique requirements',
    'Combining creativity with practical technology',
    'Building long-term and trustworthy client relationships',
    'Continuously improving our skills, ideas, and digital solutions',
  ],
  contactPlaceholder: {
    email: 'contact@qvantix.com',
    phone: '+91 (044) XXXX-XXXX',
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
    tagline: 'Bespoke enterprise software built to automate operations and drive business efficiency.',
    shortDescription: 'Practical, reliable custom software tailored to the exact way your business operates.',
    fullDescription: 'At Qvantix, we build custom software solutions designed specifically around your operational workflow. Instead of forcing your business into rigid off-the-shelf software, we engineer tailored platforms, internal tools, ERPs, CRMs, and management portals that streamline day-to-day operations and prepare your company for scalable growth.',
    capabilities: [
      'Bespoke Business Management Systems & ERPs',
      'Custom CRM & Internal Portal Development',
      'Workflow Automation & Process Optimization',
      'API Architecture & Third-Party System Integrations',
      'Legacy System Modernization & Refactoring',
      'Enterprise Cloud-Native Backend Engineering',
    ],
    businessBenefits: [
      'Eliminate manual data entry and repetitive admin tasks',
      'Scale software features seamlessly as your business expands',
      'Full ownership of custom code and IP assets',
      'Higher security tailored to enterprise compliance',
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
    tagline: 'High-performing, responsive, and conversion-focused web solutions.',
    shortDescription: 'Modern business websites engineered for speed, clean UX, and customer conversion.',
    fullDescription: 'Your website is the digital front door to your company. Qvantix builds lightning-fast, visually compelling, and SEO-optimized business websites that communicate your positioning with clarity and turn visitors into qualified business leads.',
    capabilities: [
      'Corporate & Business Web Applications',
      'E-Commerce & Digital Storefront Solutions',
      'Responsive Cross-Browser & Mobile Web Design',
      'Headless CMS Implementation',
      'Technical Web Performance & Core Web Vitals Optimization',
      'Interactive User Experience (UX/UI) Engineering',
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
    tagline: 'Intuitive iOS & Android mobile applications built for seamless performance.',
    shortDescription: 'Cross-platform native-feel mobile applications that engage users and streamline access.',
    fullDescription: 'Deliver a powerful brand experience directly to your customers\' smartphones. Qvantix designs and builds high-performing mobile applications for iOS and Android, focusing on intuitive interfaces, fast response times, and robust offline-online synchronization.',
    capabilities: [
      'Cross-Platform iOS & Android App Development',
      'Native Feature Integration (Camera, GPS, Push Notifications)',
      'Secure User Authentication & Payment Gateways',
      'Offline-First Data Sync & Local Caching',
      'Mobile UX/UI Design & Micro-Interactions',
      'App Store & Google Play Publishing Support',
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
    title: 'Software Testing & QA',
    category: 'Engineering & Software',
    tagline: 'Rigorous quality assurance guaranteeing stability, security, and flaw-free deployment.',
    shortDescription: 'Comprehensive manual and automated testing to ensure your software performs flawlessly.',
    fullDescription: 'Software flaws hurt client trust and cost money. Qvantix provides rigorous Software Testing & Quality Assurance services to validate your software architecture across functional testing, performance benchmarks, security compliance, and user interface responsiveness before release.',
    capabilities: [
      'End-to-End Automated & Manual Functional Testing',
      'Cross-Browser & Multi-Device Compatibility Verification',
      'API, System Integration & Database Testing',
      'Performance, Load & Stress Testing',
      'Security & Vulnerability Assessment',
      'Regression Testing & Continuous Integration (CI/CD) Audits',
    ],
    businessBenefits: [
      'Prevent costly production bugs before your customers encounter them',
      'Ensure high application availability during peak user traffic',
      'Maintain software reputation through rigorous quality benchmarks',
    ],
    technologies: ['Selenium', 'Playwright', 'Postman', 'Jemter', 'Jest', 'GitLab CI'],
    faq: [
      {
        question: 'Does Qvantix provide independent testing for existing software projects?',
        answer: 'Yes, we perform independent QA audits, regression testing, and performance testing for third-party or existing internal software builds.',
      },
    ],
  },
  {
    id: 'ai-ml-solutions',
    slug: 'ai-ml-solutions',
    title: 'AI & Machine Learning Solutions',
    category: 'Intelligence & AI',
    tagline: 'Practical artificial intelligence and machine learning built for real-world business integration.',
    shortDescription: 'Smart automation, predictive data analysis, and intelligent assistant workflows.',
    fullDescription: 'Integrate artificial intelligence into your operational core. Qvantix delivers pragmatic AI & Machine Learning solutions—including automated data processing, natural language assistants, predictive analytics, and smart workflow automation—to help your business run smarter.',
    capabilities: [
      'Custom AI Agent & Conversational Assistant Integration',
      'Business Process Automation & Intelligent Document Processing',
      'Predictive Analytics & Data Pattern Recognition',
      'Natural Language Processing (NLP) & Sentiment Analysis',
      'Machine Learning Model Fine-Tuning & Pipeline Deployment',
      'AI API Integration (LLMs, Computer Vision, Speech-to-Text)',
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
        answer: 'AI is no longer just for massive tech enterprises. Growing businesses use Qvantix AI solutions for customer service chatbots, lead scoring, document extraction, and predictive inventory forecasting to save hours of manual labor.',
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
  {
    id: 'google-ads-marketing',
    slug: 'google-ads-marketing',
    title: 'Google Ads & Paid Search',
    category: 'Digital Growth',
    tagline: 'Targeted pay-per-click ad campaigns engineered for immediate traffic and measurable ROI.',
    shortDescription: 'High-converting Google Search, Display, and Remarketing ad campaigns built around your budget.',
    fullDescription: 'Get your business in front of ready-to-buy prospects instantly. Qvantix manages precision Google Ads campaigns—focusing on ad copy optimization, targeted bidding strategies, conversion landing page alignment, and continuous campaign refinement to maximize your return on ad spend (ROAS).',
    capabilities: [
      'Google Search Ad Campaign Setup & Optimization',
      'Display & Remarketing Ad Strategy',
      'High-Converting Landing Page Design & Testing',
      'Conversion Tracking & Event Analytics Setup',
      'A/B Testing of Copy, Headlines & CTA Buttons',
      'ROAS & Cost-Per-Acquisition (CPA) Bidding Management',
    ],
    businessBenefits: [
      'Immediate business visibility on top Google search results',
      'Granular audience targeting based on intent, location, and device',
      'Transparent tracking showing exact acquisition metrics and ad spend ROI',
    ],
    technologies: ['Google Ads Manager', 'Google Tag Manager', 'Google Analytics 4', 'Looker Studio'],
    faq: [
      {
        question: 'How does Qvantix optimize Google Ads spend for maximum conversion?',
        answer: 'We continuously test keyword match types, negative keywords, high-intent landing page designs, and bid adjustments to eliminate ad waste and drive qualified conversion leads.',
      },
    ],
  },
  {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing & Brand Strategy',
    category: 'Digital Growth',
    tagline: 'Cohesive multi-channel digital growth campaigns to expand brand reach and engagement.',
    shortDescription: 'Strategic digital marketing uniting content, social channels, ad positioning, and brand awareness.',
    fullDescription: 'Build a commanding digital presence across online touchpoints. Qvantix creates holistic digital marketing strategies combining channel distribution, social presence management, content marketing, and brand messaging to help your company engage audiences and accelerate digital growth.',
    capabilities: [
      'Multi-Channel Brand Growth & Digital Strategy',
      'Content Marketing & Editorial Copywriting',
      'Social Media Presence & Community Management',
      'Lead Nurturing & Email Marketing Workflows',
      'Brand Identity Positioning & Digital PR Support',
      'Performance Analytics & Executive Reporting',
    ],
    businessBenefits: [
      'Consistent brand presence across all customer touchpoints',
      'Higher customer trust and digital brand retention',
      'Unified strategy connecting creative marketing directly to sales outcomes',
    ],
    technologies: ['Meta Business Suite', 'Mailchimp', 'Canva', 'Google Analytics 4', 'HubSpot'],
    faq: [
      {
        question: 'What makes Qvantix digital marketing different from traditional advertising agencies?',
        answer: 'We unite software engineering, data analytics, and creative strategy under one roof. Our marketing decisions are grounded in real metrics, conversion design, and tech-driven optimization.',
      },
    ],
  },
  {
    id: 'graphic-logo-design',
    slug: 'graphic-logo-design',
    title: 'Graphic & Logo Design',
    category: 'Creative Media',
    tagline: 'Distinctive logo branding, visual identity systems, and high-impact corporate marketing collateral.',
    shortDescription: 'Memorable brand identity and visual assets that reflect modern professional software standards.',
    fullDescription: 'Your visual identity shapes how clients perceive your technical credibility. Qvantix crafts distinctive logo designs, visual guidelines, typography systems, social media templates, and business marketing collateral that build instant authority and leave a lasting visual impression.',
    capabilities: [
      'Corporate Logo Design & Visual Brand Identity',
      'Brand Style Guides, Color Palette & Typography Systems',
      'Business Collateral (Cards, Pitch Decks, Brochures)',
      'Digital Graphic Assets for Websites & Social Media',
      'Product Packaging & Digital Marketing Banners',
      'Vector Asset Creation & Design System Standards',
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
    tagline: 'Dynamic motion graphics, explainer videos, and 2D animations that bring digital concepts to life.',
    shortDescription: 'Engaging visual storytelling videos that explain complex technology products with clarity.',
    fullDescription: 'Complex software and digital solutions are best explained with dynamic visuals. Qvantix produces professional motion graphics, 2D explainer animations, product demo visuals, and logo animations that simplify abstract technical concepts and capture audience attention.',
    capabilities: [
      '2D Animated Product Explainer Videos',
      'Logo Animation & Motion Brand Identifiers',
      'Social Media Motion Banners & Video Ads',
      'UI/UX Interaction Animation & Micro-Motion Graphics',
      'Typography Motion Graphics & Technical Demos',
      'Storyboarding, Scripting & Voiceover Integration',
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
