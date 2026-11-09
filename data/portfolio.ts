export const siteInfo = {
  name: "CodeAxis",
  tagline: "Software, Architecture & Engineering Services",
  description:
    "CodeAxis is a technology and engineering services company. We build high-performance software platforms and deliver architecture, BIM and civil engineering for ambitious clients.",
} as const;

export type Founder = {
  name: string;
  title: string;
  focus: string;
  bio: string;
  expertise: string[];
  photo?: string;
  href?: string;
};

export const founders: Founder[] = [
  {
    name: "Faizan Zafar",
    title: "Co-founder",
    focus: "Software & Technology",
    bio: "Faizan co-founded CodeAxis to give product teams one engineering partner that owns delivery end to end, from system architecture and build to launch and scale. He leads the software practice and client partnerships, and keeps every engagement tied to measurable business outcomes.",
    expertise: ["Product engineering", "AI & automation", "Cloud platforms", "Client partnerships"],
  },
  {
    name: "David Nguyen",
    title: "Co-founder",
    focus: "Architecture, BIM & Civil Engineering",
    bio: "David leads the CodeAxis architecture and engineering practice. He brings architectural design, BIM engineering and civil engineering together in one team, taking residential, mixed-use and commercial projects from concept and permit drawings through coordinated BIM models to construction documentation.",
    expertise: ["Architectural design", "BIM engineering", "Civil engineering", "Construction documentation"],
  },
  {
    name: "Agustin W. Salas",
    title: "Co-founder",
    focus: "Design Architecture & Master Planning",
    bio: "Agustin is a Venezuelan-American architect and master planner with 22 years of experience and 375+ projects designed, including high-rise towers and mixed-use districts in Miami and abroad as Lead Project Designer at Stantec. He leads design at CodeAxis, bringing bioclimatic, wellbeing-led and computational design to every building.",
    expertise: ["High-rise & mixed-use", "Master planning", "Bioclimatic design", "Parametric design"],
    photo: "/agustin/profile.jpg",
    href: "/portfolio/agustin-salas",
  },
];

/** Live sites from previous client and service engagements. */
export const clientLinks = [
  "https://www.bitvavo.com",
  "https://www.reya.xyz",
  "https://www.bentley.com",
  "https://www.worcester-bosch.co.uk",
  "https://www.mccann.com",
  "https://www.on.com/en-gb",
  "https://www.onbuy.com/gb",
  "https://www.twitch.tv/",
  "https://www.netflix.com/",
  "https://www.bbc.com/",
  "https://localhomesmarket.com",
  "https://Kiteworks.com",
  "https://imgprep.com",
  "https://insolebuddy.com",
  "https://ppt-auto-fill-generator-1.onrender.com",
];

/** Brands shown in the "trusted by" strip on the home page. */
export const featuredClients = [
  { name: "Bitvavo", href: "https://www.bitvavo.com", sector: "Crypto exchange" },
  { name: "Reya", href: "https://www.reya.xyz", sector: "DeFi network" },
  { name: "Bentley", href: "https://www.bentley.com", sector: "Automotive" },
  { name: "Worcester Bosch", href: "https://www.worcester-bosch.co.uk", sector: "Home energy" },
  { name: "McCann", href: "https://www.mccann.com", sector: "Advertising" },
  { name: "On", href: "https://www.on.com/en-gb", sector: "Sportswear" },
  { name: "OnBuy", href: "https://www.onbuy.com/gb", sector: "Marketplace" },
];

export function toLinkLabel(href: string) {
  try {
    return new URL(href).hostname.replace(/^www\./, "").toLowerCase();
  } catch {
    return href;
  }
}

export const stats = [
  { value: "10+", label: "Years of delivery experience" },
  { value: `${clientLinks.length}+`, label: "Live software platforms delivered" },
  { value: "22", label: "Projects in our architecture portfolios" },
  { value: "3", label: "Co-founders, one accountable team" },
];

export const credibilityItems = [
  "10+ years building production software",
  "Scalable SaaS and enterprise platforms",
  "AI automation and workflow systems",
  "Architecture, BIM and civil engineering in-house",
  "Performance, clean architecture, measurable impact",
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  role: string;
  description: string;
  website?: string;
  problem?: string;
  solution?: string;
  results?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-workflow-automation-platform",
    title: "AI Listing Agent & Chatbot — Homeshow.ai",
    website: "https://homeshow.ai",
    summary:
      "An AI listing assistant for The Home Show marketplace: users photograph or film a product, and computer vision plus NLP identify the item, fill listing fields, suggest pricing and shipping, and support edits by voice or text.",
    stack: ["React", "Python", "OpenAI API", "MySQL"],
    impact:
      "Listing creation time down 50%+; accuracy up 40%+; 90%+ image-based product match accuracy and 95%+ voice command recognition, with a path to broader marketplace automation.",
    role:
      "Full-stack and AI integration across the listing flow: React client experience, Python services, OpenAI for image/voice/text processing, and MySQL-backed catalog scale (560M+ product entries).",
    description: "",
    problem:
      "The Home Show needed to simplify and speed up creating product listings on its marketplace. Sellers faced tedious manual data entry, uncertain pricing, and long forms. The product needed a smarter, faster way to generate listings with minimal effort.",
    solution:
      "We built an AI-powered listing assistant: users take a photo or video of a product, and the system uses computer vision and NLP to identify the item, auto-fill listing fields (title, specs, value), and suggest pricing, auction settings, and shipping. Users can refine listings via voice or text, and the system learns preferences for future listings.",
    results:
      "The assistant cut listing creation time by over 50% and increased listing accuracy by over 40%. With 90%+ image-based product match accuracy and 95%+ voice command recognition, satisfaction improved significantly. The work also established a foundation for AI-driven automation across the marketplace, including future dispute-resolution bots and shopper assistants.",
  },
  {
    slug: "scalable-saas-web-application",
    title: "Allswell Alert — Elderly Safety & Monitoring SaaS",
    website: "https://allswellalert.com/",
    summary:
      "Allswell Alert is a cross-platform safety service that helps families and caregivers stay connected to elderly loved ones through 24/7 inactivity awareness, GPS location, encrypted data, and instant alerts—including a panic button and notifications to chosen contacts—with a streamlined admin experience for ongoing management.",
    stack: ["TypeScript", "React Native", "Node.js", "AWS"],
    impact:
      "Shipped a secure, globally usable monitoring product: fast setup, trusted alerting workflows, and native iOS and Android clients backed by encryption-first architecture and an operational admin panel.",
    role:
      "End-to-end product delivery: requirements and roadmap with the client, mobile apps for Apple and Android, backend APIs and real-time alerting, security and encryption practices, cloud deployment, and admin tooling for application management.",
    description: "",
    problem:
      "After aligning with the client on their vision, we partnered to turn ideas into a clear product brief. Caregivers needed a dependable way to know when an elderly person might be inactive or in distress, understand where they are, and reach trusted contacts quickly—without a complicated setup or compromising privacy.",
    solution:
      "We defined and built Allswell Alert around those priorities: continuous monitoring of elderly inactivity, GPS location tracking, and the ability for authorized users to follow status from anywhere in the world. The solution includes native-quality experiences on Apple and Android, strong security and data encryption, a panic button for emergencies, setup designed to complete in minutes, configurable alerts to selected contacts, and a user-friendly admin panel to manage accounts, devices, and notification rules at scale.",
    results:
      "The result is a production SaaS platform oriented toward real-world caregiver workflows—combining reliability, clarity, and security so families can respond faster with confidence while keeping sensitive health and location data protected.",
  },
  {
    slug: "high-performance-backend-system",
    title: "KneePillow.com.au — eCommerce SEO & Authority Building",
    website: "https://kneepillow.com.au",
    summary:
      "An Australian eCommerce brand selling knee pillows needed stronger visibility for the high-intent query “knee pillow Australia.” With a thin backlink profile, the site struggled to compete against established retailers in organic search.",
    stack: ["Off-page SEO", "Link building", "Digital PR", "eCommerce"],
    impact:
      "Achieved the #1 organic ranking for “knee pillow Australia,” alongside measurable gains in domain authority and organic traffic—delivered through off-page SEO alone, without on-page site changes.",
    role:
      "SEO strategy and execution: prospecting and securing placements on authoritative sites, business directories and editorial mentions, contextual links from high-ranking articles, and ongoing management of anchor text and a natural dofollow/nofollow link mix.",
    description: "",
    problem:
      "KneePillow.com.au wanted to rank higher on Google for “knee pillow Australia,” a commercially valuable keyword in a crowded niche. The site lacked a strong backlink footprint, which made it difficult to earn trust and authority next to larger, established brands with years of link history.",
    solution:
      "We focused on high-quality off-page SEO. That included earning posts and references on authoritative sites, listings in relevant business directories, and editorial-style mentions where they fit the brand. We secured contextual backlinks from high-ranking articles so links appeared in useful, reader-first contexts. Throughout the campaign we maintained a natural backlink profile—balancing dofollow and nofollow links—and tuned anchor text for relevance and diversity so the profile looked organic to search engines.",
    results:
      "The site ranked #1 for “knee pillow Australia,” with improved domain authority and stronger organic traffic. The outcome showed that a disciplined, white-hat link-building program can shift competitive rankings even when on-page elements are left unchanged—ideal when the priority is authority and trust signals at scale.",
  },
  {
    slug: "full-stack-product-build",
    title: "Capatol — Private Real Estate Capital Marketplace",
    website: "https://capatol.com",
    summary:
      "Capatol.com is a private capital marketplace built to connect real estate professionals and mortgage brokers with vetted investors—covering the full journey from deal discovery through diligence to portfolio management in one secure, streamlined platform.",
    stack: ["React", "Node.js", "AWS", "PostgreSQL"],
    impact:
      "Delivered a production marketplace emphasizing trust and speed: encrypted workflows, two-sided growth, and advanced tooling including AI-assisted deal matching and real-time analytics.",
    role:
      "Project management and delivery leadership: steering cross-functional development, prioritizing security and compliance automation, coordinating go-to-market for brokers and investors, and shaping UX for complex financial workflows.",
    description: "",
    problem:
      "The client set out to modernize private real estate investment with a secure, efficient marketplace. The core objective was to unite real estate professionals and mortgage brokers with a curated network of investors—reducing friction across the investment lifecycle from finding deals to managing portfolios.",
    solution:
      "We guided development end to end as the project management team, focusing on automating deal presentation, due diligence workflows, and compliance checkpoints. Major priorities included institutional-grade security, building liquidity on both sides of the marketplace, and an intuitive experience despite sophisticated financial tooling. We implemented end-to-end encryption, ran targeted marketing to seed the network—emphasizing faster closings for professionals and exclusive access to vetted deals for investors—and delivered iteratively through an agile process. The platform ships advanced capabilities such as AI-powered deal matching and real-time analytics to support confident decisions.",
    results:
      "The launch is a secure, transparent marketplace that connects real estate opportunity with capital at scale—meeting the client’s vision for a trusted private investment venue while giving professionals and investors a single place to collaborate from first touch through ongoing portfolio oversight.",
  },
];

export const services = [
  {
    title: "AI & Automation",
    summary: "Put LLMs and agents to work where they remove real manual effort.",
    items: ["LLM integrations", "AI agents", "Workflow automation", "Internal tools"],
  },
  {
    title: "Product Engineering",
    summary: "Web and mobile products built to launch fast and stay fast.",
    items: ["SaaS platforms", "Dashboards", "Web & mobile apps", "API integrations"],
  },
  {
    title: "Backend & Architecture",
    summary: "Systems designed for throughput, reliability and change.",
    items: ["Scalable APIs", "Microservices", "Event-driven systems", "Data pipelines"],
  },
  {
    title: "Cloud & DevOps",
    summary: "Predictable releases and infrastructure that scales with demand.",
    items: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD pipelines"],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    text: "We map goals, users and constraints with your team, then agree a scoped roadmap with clear milestones.",
  },
  {
    step: "02",
    title: "Architect",
    text: "We choose the stack and design the system for performance, security and the scale you expect next year.",
  },
  {
    step: "03",
    title: "Build",
    text: "Senior engineers ship in short iterations with code review, automated tests and a working demo every sprint.",
  },
  {
    step: "04",
    title: "Launch & scale",
    text: "We deploy, monitor and tune in production, and stay on as your engineering partner as the product grows.",
  },
];

export const stackGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { title: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"] },
  { title: "AI", items: ["OpenAI APIs", "Anthropic APIs", "LangChain", "Prompt engineering"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "BigQuery"] },
  { title: "Cloud / DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { title: "Architecture & BIM", items: ["Revit", "AutoCAD", "Navisworks", "SketchUp", "Enscape"] },
  { title: "Civil & Visualisation", items: ["Civil 3D", "3ds Max", "Lumion", "V-Ray"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiencePageIntro =
  "CodeAxis runs two practices under one roof. Our software practice ships dependable platforms: AI-assisted marketplaces, mobile safety products, fintech-grade workflows and high-traffic consumer sites. Our architecture and engineering practice designs buildings and delivers the BIM and civil engineering to build them. Below is how we engage, followed by representative case studies.";

export const experienceItems: ExperienceItem[] = [
  {
    role: "Product & Platform Engineering",
    company: "Startups, scale-ups and enterprise brands",
    period: "2021 — present",
    summary:
      "End-to-end delivery on modern stacks: shipping SaaS capabilities, integrating LLM and computer-vision services, and keeping architecture pragmatic as requirements evolve.",
    highlights: [
      "Scalable frontends (React, Next.js) and services (Node.js, Python) with clear boundaries, observability and performance budgets.",
      "AI-assisted workflows such as listing automation, deal matching and NLP/vision, where automation directly reduces manual effort and error rates.",
      "A dedicated delivery lead on every engagement, working with your product owners on scope, milestones and risk.",
      "Cloud-native deployments on AWS/GCP, containerised workloads and CI/CD so releases stay predictable at increasing scale.",
    ],
  },
  {
    role: "Architecture, BIM & Civil Engineering",
    company: "Developers, investors, builders and homeowners",
    period: "Led by David Nguyen & Agustin Salas",
    summary:
      "Building design and engineering from first sketch to construction set, for residential towers, mixed-use schemes, private homes and interiors.",
    highlights: [
      "Design architecture and master planning for high-rise, mixed-use and hospitality projects, led by Agustin Salas.",
      "Architectural design from massing and façade studies through planning and permit drawings.",
      "BIM engineering in Revit with coordinated models, clash detection and quantity take-offs across trades.",
      "Civil and site engineering: site layout, grading, drainage, utilities and structural coordination.",
      "Photoreal visualisation, 3D floor plans and virtual staging for sales, investors and approvals.",
    ],
  },
  {
    role: "Web, eCommerce & Growth Engineering",
    company: "SaaS, eCommerce and internal platform teams",
    period: "2016 — 2021",
    summary:
      "Customer-facing web applications, operational dashboards and integrations delivered in fast-moving product environments.",
    highlights: [
      "Responsive UIs, REST APIs and relational data models (PostgreSQL, MySQL) built for maintainability and fast onboarding.",
      "Roadmaps turned into incremental releases tied to measurable outcomes, together with client designers and PMs.",
      "Performance work, automated testing and code review as standard practice.",
      "Technical SEO and growth engineering where acquisition goals depend on the platform.",
    ],
  },
];
