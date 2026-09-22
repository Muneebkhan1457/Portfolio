export interface Project {
  slug: string;
  title: string;
  client: string;
  industry: string;
  result: string;
  tags: string[];
  image: string;
  challenge?: string;
  approach?: string;
  metrics?: { label: string; value: string }[];
  tech?: string[];
}

export const projects: Project[] = [
  {
    slug: "fintech-rebrand",
    title: "Financial Platform Rebrand",
    client: "FinanceHub",
    industry: "Fintech",
    result: "Repositioned a legacy platform for modern users",
    tags: ["brand-strategy", "digital-design"],
    image: "/projects/fintech.jpg", // TODO: Replace with real image
    challenge:
      "FinanceHub had been serving small business owners for over a decade, but their brand felt dated and disconnected from the mobile-first, design-conscious audience they wanted to reach. Competitors with cleaner interfaces were winning new accounts, and customer research revealed confusion about what FinanceHub actually offered beyond basic accounting.",
    approach:
      "We started with a comprehensive brand audit and competitor analysis, interviewing customers and internal teams to understand perception gaps. Our positioning work clarified FinanceHub's unique value—financial tools built for founders who aren't accountants—and informed a visual refresh that balanced trust with approachability. We delivered a complete brand system including messaging, visual identity, and interface design guidelines that the team could apply immediately across web, mobile, and marketing.",
    metrics: [
      { label: "Brand recall increase", value: "42%" },
      { label: "Trial sign-ups (first quarter)", value: "+67%" },
    ],
    tech: ["Brand Strategy", "Visual Identity", "Interface Design", "Messaging"],
  },
  {
    slug: "ecommerce-rebuild",
    title: "E-commerce Performance Overhaul",
    client: "RetailCo",
    industry: "E-commerce",
    result: "Rebuilt checkout flow, reduced cart abandonment by 34%",
    tags: ["web-development", "digital-design"],
    image: "/projects/ecommerce.jpg", // TODO: Replace with real image
    challenge:
      "RetailCo's checkout experience was costing them sales. Their legacy platform had grown brittle over years of bolt-on features, resulting in slow load times, confusing navigation, and a mobile experience that drove users away. Analytics showed over half of mobile users abandoned their carts before completing payment.",
    approach:
      "We rebuilt the entire checkout flow from scratch using Next.js and Shopify's headless storefront API, prioritizing performance and mobile usability. We streamlined the multi-step process into a single-page flow with persistent progress indicators, added express payment options, and optimized images and scripts to hit sub-2-second load times on 3G. The new system integrated seamlessly with RetailCo's existing inventory and CRM.",
    metrics: [
      { label: "Cart abandonment reduction", value: "34%" },
      { label: "Mobile conversion increase", value: "58%" },
      { label: "Page load time", value: "1.8s" },
    ],
    tech: ["Next.js", "Shopify API", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "saas-launch",
    title: "SaaS Product Launch",
    client: "CloudTools",
    industry: "SaaS",
    result: "Full brand and product design for Series A startup",
    tags: ["brand-strategy", "digital-design", "content-production"],
    image: "/projects/saas.jpg", // TODO: Replace with real image
    challenge:
      "CloudTools had a working beta and early traction, but no cohesive brand or go-to-market presence. They needed to position their developer-focused product in a crowded infrastructure market, design a polished product interface, and launch with content that would resonate with a technical audience.",
    approach:
      "We partnered with CloudTools through a compressed four-month sprint: brand positioning and messaging that emphasized speed and reliability, a complete product redesign focused on reducing cognitive load for power users, and a content strategy centered on technical case studies and integration guides. We delivered a launch site, product design system, and a library of reusable content templates that the team could scale post-launch.",
    metrics: [
      { label: "Launch day sign-ups", value: "1,200+" },
      { label: "Organic traffic (first 60 days)", value: "12K visits" },
    ],
    tech: [
      "Brand Strategy",
      "Product Design",
      "Design Systems",
      "Technical Writing",
    ],
  },
  {
    slug: "media-platform",
    title: "Editorial Platform Redesign",
    client: "MediaGroup",
    industry: "Publishing",
    result: "Modernized CMS and reader experience",
    tags: ["web-development", "digital-design"],
    image: "/projects/media.jpg", // TODO: Replace with real image
    challenge:
      "MediaGroup's editorial platform was functional but outdated. Editors struggled with a clunky CMS workflow, and readers faced slow page loads and a cluttered reading experience. Traffic was declining as competitors with cleaner, faster sites captured audience attention.",
    approach:
      "We redesigned the reader-facing site with a focus on typography, readability, and performance, and rebuilt the CMS using a headless architecture that gave editors more control over layout and media. The new front-end was built with Next.js for static generation, reducing server load and improving speed. We also introduced a streamlined design system to unify MediaGroup's suite of publications under one cohesive visual language.",
    metrics: [
      { label: "Page load improvement", value: "68% faster" },
      { label: "Session duration increase", value: "+41%" },
    ],
    tech: ["Next.js", "Sanity CMS", "React", "Design Systems"],
  },
];
