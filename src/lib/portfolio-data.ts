export type Project = {
  name: string;
  short: string;
  domain: string;
  repo: string;
  problem: string;
  value: string;
  stack: string[];
};

export const socialLinks = {
  telegram: "https://t.me/rollsev",
  github: "https://github.com/rollce",
};

export const coreSkills = [
  "Product-focused frontend architecture",
  "Responsive UI systems with strong visual identity",
  "API design and integration for web products",
  "Rapid prototyping from concept to deployment",
  "Domain modeling for real-world user pain points",
  "Production deployment and CI delivery",
];

export const stackGroups = [
  {
    title: "Frontend",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Ant Design",
      "Material UI",
      "Mantine",
      "React-Bootstrap",
      "Chakra UI",
    ],
  },
  {
    title: "Backend & APIs",
    items: [
      "Next.js Route Handlers",
      "REST API design",
      "Data-driven dashboard flows",
      "Service integrations",
    ],
  },
  {
    title: "DevOps",
    items: ["Railway", "GitHub Actions", "Domain routing", "Production rollouts"],
  },
];

export const projects: Project[] = [
  {
    name: "Open Data Lab",
    short: "data.rollsev.work",
    domain: "https://data.rollsev.work",
    repo: "https://github.com/rollce/open-data-lab",
    problem: "Open datasets are hard for non-experts to understand.",
    value: "Turns raw public data into readable insights and clean visuals.",
    stack: ["Next.js", "Ant Design", "Recharts"],
  },
  {
    name: "Campus Track",
    short: "track.rollsev.work",
    domain: "https://track.rollsev.work",
    repo: "https://github.com/rollce/campus-track",
    problem: "Student teams lose control over deadlines and ownership.",
    value: "Makes planning, execution, and tracking transparent for teams.",
    stack: ["Next.js", "Ant Design", "Framer Motion"],
  },
  {
    name: "Essay Insight AI",
    short: "essay.rollsev.work",
    domain: "https://essay.rollsev.work",
    repo: "https://github.com/rollce/essay-insight-ai",
    problem: "Essay feedback is too slow and unclear for students.",
    value: "Provides explainable AI feedback loops with practical next steps.",
    stack: ["Next.js", "Ant Design", "TypeScript"],
  },
  {
    name: "RentWise Splitter",
    short: "rent.rollsev.work",
    domain: "https://rent.rollsev.work",
    repo: "https://github.com/rollce/rentwise-splitter",
    problem: "Roommates argue over shared bills and fairness.",
    value: "Automates split logic and settlement clarity in one workflow.",
    stack: ["Next.js", "Ant Design", "Framer Motion"],
  },
  {
    name: "QueueCare Navigator",
    short: "queue.rollsev.work",
    domain: "https://queue.rollsev.work",
    repo: "https://github.com/rollce/queuecare-navigator",
    problem: "Patients spend time in wrong clinic queues.",
    value: "Guides triage and clinic choices to reduce waiting time.",
    stack: ["Next.js", "Material UI", "TypeScript"],
  },
  {
    name: "SafePath Campus",
    short: "safe.rollsev.work",
    domain: "https://safe.rollsev.work",
    repo: "https://github.com/rollce/safepath-campus",
    problem: "Students need safer nighttime movement across campus.",
    value: "Builds confidence with route planning and check-in patterns.",
    stack: ["Next.js", "Mantine", "TypeScript"],
  },
  {
    name: "FoodLoop Home",
    short: "food.rollsev.work",
    domain: "https://food.rollsev.work",
    repo: "https://github.com/rollce/foodloop-home",
    problem: "Households waste food due to poor pantry visibility.",
    value: "Tracks pantry state and shopping needs to reduce waste.",
    stack: ["Next.js", "React-Bootstrap", "TypeScript"],
  },
  {
    name: "SkillBridge Local",
    short: "skill.rollsev.work",
    domain: "https://skill.rollsev.work",
    repo: "https://github.com/rollce/skillbridge-local",
    problem: "Communities struggle to match volunteers to needs quickly.",
    value: "Matches local skills with real requests and impact context.",
    stack: ["Next.js", "Chakra UI", "Framer Motion"],
  },
];

export const openSourceProjects = [
  {
    name: "DialogSpyBot",
    link: "https://github.com/rollce/DialogSpyBot",
    stack: "Go, PostgreSQL, Docker",
    summary: "Telegram Business chat archive with a web dossier interface.",
  },
  {
    name: "fragmentsender",
    link: "https://github.com/rollce/fragmentsender",
    stack: "Python, FastAPI, TON",
    summary: "Fragment Stars/Premium API workflow automation.",
  },
  {
    name: "ton-price-bot",
    link: "https://github.com/rollce/ton-price-bot",
    stack: "Python, aiogram, matplotlib",
    summary: "TON price bot with scheduled market chart updates.",
  },
];
