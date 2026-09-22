export interface Service {
  slug: string;
  title: string;
  outcome: string;
  icon?: string; // Optional: number or custom SVG
  description?: string;
  included?: string[];
  process?: { step: string; description: string }[];
}

export const services: Service[] = [
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    outcome: "Position your brand to stand out in a crowded market",
    icon: "01",
    description:
      "We help organizations define who they are, what they stand for, and how they show up in the world. Our brand strategy work combines research, positioning, and messaging into a foundation that guides every decision.",
    included: [
      "Competitive landscape analysis",
      "Brand positioning and value proposition",
      "Messaging architecture and tone of voice",
      "Brand guidelines and visual direction",
      "Go-to-market recommendations",
    ],
    process: [
      {
        step: "Discovery",
        description:
          "We interview stakeholders, audit existing materials, and research your competitors to understand the landscape.",
      },
      {
        step: "Positioning",
        description:
          "We define your unique market position, core message, and the problem you solve better than anyone else.",
      },
      {
        step: "Expression",
        description:
          "We translate strategy into visual and verbal guidelines that your team can use immediately.",
      },
    ],
  },
  {
    slug: "digital-design",
    title: "Digital Design",
    outcome: "Interfaces that users understand and remember",
    icon: "02",
    description:
      "We design digital products and experiences that people actually want to use. Our work balances clarity, usability, and visual craft—no filler, no decorative noise.",
    included: [
      "User research and journey mapping",
      "Interface design (web, mobile, SaaS)",
      "Design systems and component libraries",
      "Prototyping and usability testing",
      "Ongoing design support and iteration",
    ],
    process: [
      {
        step: "Research",
        description:
          "We map user flows, identify friction points, and define success metrics before touching design tools.",
      },
      {
        step: "Design",
        description:
          "We create high-fidelity mockups and interactive prototypes, iterating based on feedback and testing.",
      },
      {
        step: "Systems",
        description:
          "We document patterns and components so your team can ship consistent interfaces at scale.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    outcome: "Fast, scalable sites built for conversion",
    icon: "03",
    description:
      "We build performant, maintainable websites and web apps that work across devices and scale with your business. Our development is purpose-driven—every line of code serves the user and the business goal.",
    included: [
      "Full-stack development (React, Next.js, Node)",
      "Headless CMS integration (Sanity, Contentful)",
      "E-commerce platforms (Shopify, custom)",
      "Performance optimization and SEO",
      "Hosting, deployment, and support",
    ],
    process: [
      {
        step: "Architecture",
        description:
          "We map out the tech stack, data flow, and integrations required to meet your technical and business needs.",
      },
      {
        step: "Development",
        description:
          "We build in sprints with regular demos, ensuring alignment and catching issues early.",
      },
      {
        step: "Launch",
        description:
          "We deploy, test, and monitor the site in production, then hand off documentation and training.",
      },
    ],
  },
  {
    slug: "content-production",
    title: "Content Production",
    outcome: "Stories that connect with your audience",
    icon: "04",
    description:
      "We produce written, visual, and video content that earns attention and drives action. Whether it's a campaign, case study, or ongoing content engine, we deliver work that reflects your brand and resonates with your audience.",
    included: [
      "Campaign concepting and copywriting",
      "Case studies and editorial content",
      "Photography and video production",
      "Social media content and templates",
      "Content strategy and planning",
    ],
    process: [
      {
        step: "Concept",
        description:
          "We collaborate with your team to define the narrative, format, and distribution plan.",
      },
      {
        step: "Production",
        description:
          "We write, shoot, and edit the content, keeping you in the loop with drafts and proofs.",
      },
      {
        step: "Delivery",
        description:
          "We package final assets with guidelines for use, optimization, and repurposing across channels.",
      },
    ],
  },
];
