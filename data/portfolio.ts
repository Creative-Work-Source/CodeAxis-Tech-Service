export const siteInfo = {
  name: "Mykhailo Pyvovarov",
  role: "Full-Stack Engineer",
  email: "pyvovarovmykhailo@gmail.com",
  linkedin: "https://www.linkedin.com/in/mykhailo-pyvovarov-9b824a3b6",
  github: "https://github.com/Creative-Work-Source",
  telegram: "https://t.me/s_techguy_2142",
  telegramHandle: "@s_techguy_2142",
} as const;

export const socialLinks = [
  { label: "GitHub", href: siteInfo.github, icon: "github" as const },
  { label: "LinkedIn", href: siteInfo.linkedin, icon: "linkedin" as const },
  { label: "Email", href: `mailto:${siteInfo.email}`, icon: "mail" as const },
  { label: "Telegram", href: siteInfo.telegram, icon: "telegram" as const },
];

export const credibilityItems = [
  "10+ years building production software",
  "Scalable SaaS and full-stack applications",
  "AI automation and workflow systems",
  "Experience across startups and enterprise products",
  "Performance, clean architecture, and real-world impact",
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
      "Full-stack and AI integration work across the listing flow: React client experience, Python services, OpenAI for image/voice/text processing, and MySQL-backed catalog scale (560M+ product entries).",
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
    items: ["LLM integrations", "AI agents", "Workflow automation", "Internal tools"],
  },
  {
    title: "Full-Stack Apps",
    items: ["SaaS platforms", "Dashboards", "Web products", "API integrations"],
  },
  {
    title: "Backend & Architecture",
    items: ["Scalable APIs", "Microservices", "Event-driven systems", "Data pipelines"],
  },
  {
    title: "Cloud & Delivery",
    items: ["AWS / GCP", "Docker", "Kubernetes", "CI/CD pipelines"],
  },
];

export const stackGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
  { title: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "NestJS", "FastAPI", "Django", "Express"] },
  { title: "AI", items: ["OpenAI APIs", "Anthropic APIs", "LangChain", "Prompt engineering"] },
  { title: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "BigQuery"] },
  { title: "Cloud / DevOps", items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experiencePageIntro =
  "I work with product leaders and founders to ship dependable software: from AI-assisted marketplaces and mobile safety products to SEO-led growth and regulated fintech-style workflows. Below is how I typically engage, followed by representative engagements you can open as full case studies.";

export const experienceItems: ExperienceItem[] = [
  {
    role: "Senior Full-Stack / AI Engineer",
    company: "Product teams, startups, and client engagements",
    period: "2021 — present",
    summary:
      "Lead end-to-end delivery on modern stacks—shipping SaaS capabilities, integrating LLM and computer-vision services, and keeping architecture pragmatic as requirements evolve.",
    highlights: [
      "Design and build scalable frontends (React, Next.js) and services (Node.js, Python) with clear boundaries, observability, and performance budgets.",
      "Ship AI-assisted workflows—listing automation, deal matching, NLP/Vision—where automation directly reduces manual effort and error rates.",
      "Partner with product and stakeholders on scope, milestones, and risk; comfortable as a technical counterpart in agile, cross-functional teams.",
      "Operate cloud-native deployments on AWS/GCP, containerized workloads, and CI/CD so releases stay predictable at increasing scale.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "SaaS, eCommerce, and internal platform teams",
    period: "2016 — 2021",
    summary:
      "Delivered customer-facing web applications, operational dashboards, and integrations in fast-moving product environments.",
    highlights: [
      "Built responsive UIs, REST APIs, and relational data models (PostgreSQL, MySQL) with maintainability and onboarding in mind.",
      "Collaborated with designers and PMs to turn roadmaps into incremental releases tied to measurable outcomes.",
      "Contributed to performance work, automated testing, and code review as engineering groups grew.",
      "Supported growth and marketing initiatives—including technical SEO partnerships—where engineering needed to align with acquisition goals.",
    ],
  },
];
