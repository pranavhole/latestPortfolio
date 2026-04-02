export const PERSONAL = {
  name: "Pranav Hole",
  fullName: "Pranav Sandip Hole",
  title: "Full-Stack Engineer | BlockChain | JavaScript | AI",
  location: "Mumbai, India",
  openToRemote: true,
  email: "pranavhole02@gmail.com",
  github: "https://github.com/pranavhole",
  linkedin: "https://www.linkedin.com/in/pranav-hole/",
  portfolio: "https://www.pranavhole.space",
  phone: "+91 8530008525",
};

export const ROLES = [
  "Developer",
  "Engineer",
  "Builder",
  "Creator",
  "Architect",
];

export const STATS = [
  { value: 2, suffix: "+", label: "Years XP" },
  { value: 10, suffix: "+", label: "Projects" },
  { value: 53, suffix: "", label: "GitHub Repos" },
  { value: 5, suffix: "+", label: "DApps Built" },
];

export const EXPERIENCE = [
  {
    role: "Full-Stack Engineer",
    company: "Vendorbay",
    period: "Dec 2025 → Present",
    active: true,
    stack: "Node.js · TypeScript · PostgreSQL · GraphQL · Redis · Docker · AWS · RAG · Agentic AI",
    description:
      "B2B Procure-to-Pay SaaS. Scaled backend services, built GraphQL APIs, integrated RAG-based AI workflows, deployed on AWS EKS.",
  },
  {
    role: "Backend Developer",
    company: "Tata Consultancy Services",
    period: "Aug 2024 → Dec 2025",
    active: false,
    stack: "Node.js · Express · React · PostgreSQL · Azure · JWT",
    description:
      "Led migration of legacy VB.NET + PL/SQL system to modern Node.js stack. Improved DB performance by ~25%.",
  },
  {
    role: "Freelance Full-Stack Engineer",
    company: "Independent",
    period: "2022 → 2024",
    active: false,
    stack: "React · Node.js · MongoDB · PostgreSQL · Tailwind",
    description: "Delivered 5+ SaaS & web apps end-to-end for clients.",
  },
];

export const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      "React.js", "Next.js", "TypeScript", "Tailwind CSS",
      "Redux", "SCSS", "React Native", "Framer Motion",
    ],
    hot: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: [
      "Node.js", "Express.js", "GraphQL", "FastAPI",
      "REST APIs", "WebSockets", "Kafka",
    ],
    hot: ["Node.js", "Express.js", "GraphQL"],
  },
  {
    label: "Databases & Cloud",
    skills: [
      "PostgreSQL", "Redis", "MongoDB", "AWS (EKS·ECS·S3·EC2)",
      "Azure", "Docker", "Terraform", "Elasticsearch", "Firebase",
    ],
    hot: ["PostgreSQL", "Redis", "MongoDB", "AWS (EKS·ECS·S3·EC2)"],
  },
  {
    label: "AI / GenAI",
    skills: [
      "LangChain", "OpenAI", "RAG Pipelines", "Agentic AI",
      "CrewAI", "Google ADK", "Ollama", "Streamlit",
    ],
    hot: ["LangChain", "OpenAI", "RAG Pipelines", "Agentic AI"],
  },
  {
    label: "Web3 / Blockchain",
    skills: ["Solidity", "Polygon", "Hardhat", "Truffle", "IPFS", "NFT", "Ganache"],
    hot: ["Solidity", "Polygon"],
  },
];

export const PROJECTS = [
  {
    name: "Muzzy — Music Streaming Platform",
    description:
      "Real-time collaborative music streaming with synchronized playback across users. Redis + WebSockets + HLS reduced latency by ~68%. Deployed on AWS EKS with Terraform.",
    stack: ["AWS EKS", "Terraform", "Node.js", "Next.js", "PostgreSQL", "Redis", "WebSockets", "HLS.js", "Docker"],
    github: "https://github.com/pranavhole/muzzfin",
    live: "https://muzzy.pranavhole.space",
    featured: true,
  },
  {
    name: "Zapier Clone — Automation Platform",
    description:
      "Event-driven microservices automation platform. Kafka-powered workflow engine with visual drag-and-drop flow builder.",
    stack: ["Next.js", "Kafka", "React Flow", "Tailwind", "Node.js"],
    github: "https://github.com/pranavhole/zapier",
    live: "https://zapp.pranavhole.space",
    featured: true,
  },
  {
    name: "Lets Trade India",
    description:
      "Trading education platform with Razorpay payment gateway integration. Full end-to-end SaaS delivery.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
    github: "https://github.com/pranavhole/LetsTread",
    live: "https://www.letstradeindia.co",
    featured: true,
  },
  {
    name: "Web3 DApps Collection",
    description:
      "5+ decentralized applications on Polygon using Solidity smart contracts, IPFS storage, and Hardhat tooling.",
    stack: ["Solidity", "Polygon", "IPFS", "Hardhat"],
    github: "https://github.com/pranavhole",
    live: null,
    featured: false,
  },
];
