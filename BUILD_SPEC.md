# Agency Portfolio Website — Full Build Spec

Read this entire file before writing any code. Execute it top to bottom. Do not skip the "Anti-Generic-AI Rules" section — it governs every visual decision below.

## 0. Goal

Build a Next.js agency portfolio with a restrained 3D hero, scroll-driven motion, multi-service pages, project/work pages, and a contact form that emails the owner via Nodemailer. No database. No CMS. No admin panel. Reference structure: retnavia.com and brandh2o.com (editorial, monochrome-plus-one-accent, sparse 3D, tasteful motion — not a "3D everywhere" site).

Fill in real company name, real service names, real project case studies, and a real accent color before deploying. Do not ship with lorem ipsum or placeholder logos.

---

## 1. Tech Stack

- Next.js 15 (App Router), TypeScript
- Tailwind CSS v4 — fully custom theme, delete all default Tailwind color usage
- React Three Fiber + drei + Three.js — hero scene only, or one accent scene max
- GSAP + ScrollTrigger — scroll reveals, pinning, marquee
- Lenis — smooth scroll
- Nodemailer — contact form email, via one API route
- Zod — server-side validation of the contact form payload
- react-hook-form — client-side form state
- Vercel — hosting

Install:
```bash
npx create-next-app@latest agency-site --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
cd agency-site
npm install three @react-three/fiber @react-three/drei gsap @studio-freight/lenis nodemailer zod react-hook-form @hookform/resolvers
npm install -D @types/three @types/nodemailer
```

---

## 2. Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Home
│   ├── globals.css
│   ├── about/page.tsx
│   ├── services/
│   │   ├── page.tsx                 # Services index
│   │   └── [slug]/page.tsx          # One template, data-driven
│   ├── work/
│   │   ├── page.tsx                 # Work/portfolio index
│   │   └── [slug]/page.tsx          # Case study template
│   ├── contact/page.tsx
│   └── api/
│       └── contact/route.ts         # Nodemailer endpoint
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── SmoothScroll.tsx         # Lenis wrapper
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── TrustedByMarquee.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── AboutTeaser.tsx
│   │   ├── FaqAccordion.tsx
│   │   └── CtaBand.tsx
│   ├── three/
│   │   ├── HeroScene.tsx            # R3F canvas, lazy-loaded, client only
│   │   └── SceneFallback.tsx        # static image/gradient shown until scene mounts + on low-end/reduced-motion
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── RevealOnScroll.tsx       # GSAP wrapper
│   │   └── Accordion.tsx
│   └── ContactForm.tsx
├── data/
│   ├── services.ts                  # array of service objects, edit this with real content
│   ├── projects.ts                  # array of case studies
│   └── faq.ts
├── lib/
│   ├── mail.ts                      # nodemailer transporter + send function
│   └── validation.ts                # zod schema for contact form
└── styles/
    └── theme.css                    # CSS variables: colors, fonts, spacing scale
```

---

## 3. Design System (must be custom, not Tailwind defaults)

Define in `tailwind.config.ts` and `theme.css`:

- **Typography**: pick two fonts, one display serif or geometric sans for headings, one workhorse sans for body. Do NOT use Inter or Geist as the display font. Load via `next/font`. Set a real type scale (e.g. 15 sizes from 12px to 96px), not Tailwind's default scale.
- **Color**: one near-black, one near-white, one accent color tied to the brand (not indigo/violet/blue-500 defaults), and 3-4 greys in between. No default Tailwind palette names in the final code (no `bg-indigo-500`, `text-slate-600`, etc.) — map everything to named theme tokens like `bg-ink`, `text-muted`, `bg-accent`.
- **Spacing/radius**: pick one radius value used everywhere (either sharp 0px or one consistent rounded value, not mixed rounded-lg/rounded-xl/rounded-full across a page).
- **Motion**: ease curves should be custom cubic-beziers, not the default GSAP/Framer "power2" bounce feel. Prefer short duration (0.4–0.8s), small distance (16–32px) fades/slides on scroll reveal, not large bouncy entrances.

---

## 4. Anti-Generic-AI Rules (apply to every component)

1. No glassmorphism cards (no `backdrop-blur` + white/10 overlays stacked everywhere).
2. No default Lucide icon in a circle for every single feature/service card. Use a mix of custom SVG marks, numbers, or none at all.
3. No purple-to-blue or pink-to-orange gradient text/backgrounds.
4. No every-element-fades-and-slides-up-on-scroll uniformly. Vary the motion: some sections pin, some cross-fade, some just appear with no animation.
5. No stock hero copy like "We build digital experiences that matter." Write specific, concrete copy naming real services and real outcomes with real numbers (never invent numbers — leave a `TODO:` marker if the real number isn't provided).
6. Use real project names and real screenshots/mockups in Work, not generic browser-mockup placeholders.
7. Footer should not be a giant sitemap dump. Keep it close to the Retnavia reference: logo, tagline, nav, socials, copyright.

---

## 5. Page-by-Page Content Spec

### Home (`/`)
1. **Header** — logo, nav (About, Services, Work, Contact), CTA button, sticky, transparent over hero then solid on scroll.
2. **Hero** (`HeroScene.tsx` inside `Hero.tsx`) — full-viewport R3F scene (abstract 3D object, particles, or distorted sphere — pick one, keep it performant), headline, subheadline, two CTAs ("Start a Project", "View Work"). Wrap the canvas in `<Suspense>` with `SceneFallback`. Respect `prefers-reduced-motion`: render `SceneFallback` only, no WebGL, if that media query matches.
3. **TrustedByMarquee** — infinite horizontal scroll of real client/tech logos, pause on hover.
4. **ServicesGrid** — grid of service cards (icon or number, title, one-line outcome, "Learn more" link to `/services/[slug]`). Pull from `data/services.ts`.
5. **FeaturedWork** — 3–4 project cards (image, title, one-line result, tag). Pull from `data/projects.ts`.
6. **AboutTeaser** — short mission statement + team image + link to `/about`.
7. **FaqAccordion** — 4–6 real FAQs, single-open accordion.
8. **CtaBand** — full-width closing CTA with two buttons.
9. **Footer**.

### Services index (`/services`)
Full list of services, each linking to its detail page. Reuse `ServicesGrid` or a denser list layout.

### Service detail (`/services/[slug]`)
Data-driven from `data/services.ts`. Sections: hero (service name + one-liner), what's included (bullet list), process steps, related work (filter `projects.ts` by service tag), CTA band.

### Work index (`/work`)
Grid/list of all case studies from `data/projects.ts`, optional filter by service tag.

### Case study (`/work/[slug]`)
Hero image, client/industry, challenge, approach, result (real metrics only, otherwise omit the stat, do not fabricate), tech stack tags, next-project link.

### About (`/about`)
Mission, team, values, optional timeline.

### Contact (`/contact`)
Left: contact details, socials, office info. Right: `ContactForm`. On submit, POST to `/api/contact`.

---

## 6. Contact Form + Nodemailer (this is the only "backend" in the project)

This project has no database. This single API route is the only server logic. It runs as a Vercel serverless function.

`src/lib/validation.ts`:
```ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  service: z.string().max(100).optional(),
  message: z.string().min(10).max(2000),
  // honeypot field, must stay empty — bots fill it, humans never see it
  website: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof contactSchema>;
```

`src/lib/mail.ts`:
```ts
import nodemailer from "nodemailer";
import type { ContactPayload } from "./validation";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactPayload) {
  await transporter.sendMail({
    from: `"${data.name}" <${process.env.SMTP_USER}>`,
    replyTo: data.email,
    to: process.env.CONTACT_TO_EMAIL,
    subject: `New inquiry from ${data.name}${data.service ? ` — ${data.service}` : ""}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.company ? `Company: ${data.company}` : null,
      data.service ? `Service: ${data.service}` : null,
      "",
      data.message,
    ].filter(Boolean).join("\n"),
  });
}
```

`src/app/api/contact/route.ts`:
```ts
import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendContactEmail } from "@/lib/mail";

// basic in-memory rate limit per server instance, resets on cold start
const hits = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_HITS = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > MAX_HITS;
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await req.json();
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  if (parsed.data.website) {
    // honeypot tripped, silently succeed so bots don't learn
    return NextResponse.json({ ok: true });
  }

  try {
    await sendContactEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email failed:", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
```

`ContactForm.tsx` should:
- Use `react-hook-form` + `zodResolver(contactSchema)`
- Include a visually hidden `website` honeypot input (`tabIndex={-1}`, `autoComplete="off"`, positioned off-screen, not `display:none` since some bots skip hidden fields)
- POST JSON to `/api/contact`, show loading/success/error states, no page reload

`.env.local` (never commit this):
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-agency-email@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_TO_EMAIL=where-you-want-leads@gmail.com
```

If using Gmail: enable 2FA on the account, generate an "App Password" (Google Account → Security → App Passwords), use that as `SMTP_PASS`, not the real account password. For a more deliverable setup, use a transactional provider instead of Gmail: Resend, Postmark, or SMTP from Zoho/Namecheap on the agency's own domain, so the "From" address matches the domain and doesn't land in spam.

---

## 7. 3D + Motion Implementation Notes

- `HeroScene.tsx` must be dynamically imported with `ssr: false` (`next/dynamic`) since Three.js needs the browser.
- Cap the scene: one object/particle system, no more than what's needed for the effect, target 60fps on a mid-range laptop. Test on a throttled CPU in DevTools.
- Show `SceneFallback` (a static gradient or exported image of the scene) while the R3F canvas is loading and whenever `prefers-reduced-motion: reduce` is set.
- GSAP: register `ScrollTrigger` once in a client component, use `gsap.context()` inside `useEffect` and revert on unmount to avoid leaks across route changes (App Router keeps components mounted differently than Pages Router, be careful with re-registration).
- Lenis: initialize in `SmoothScroll.tsx`, wrap `{children}` in `layout.tsx`, sync Lenis' scroll event to `ScrollTrigger.update` so GSAP and Lenis agree on scroll position.

---

## 8. SEO + Metadata

- Use the App Router `metadata` export per page (title, description, OpenGraph image, Twitter card) — mirror the structure seen in the Retnavia reference (per-page title/description, og:image, twitter:card).
- Add `sitemap.ts` and `robots.ts` in `src/app/`.
- Add JSON-LD `Organization` schema in the root layout with real business name, logo, and social links.
- Optimize all images with `next/image`, provide real `alt` text.

---

## 9. Performance + Accessibility Checklist

- Lighthouse targets: Performance 90+, Accessibility 95+, SEO 100.
- Lazy-load the 3D canvas and any below-the-fold heavy sections.
- All interactive elements keyboard-navigable (accordion, mobile nav, form).
- Color contrast meets WCAG AA against the chosen accent/background pairing.
- `prefers-reduced-motion` disables GSAP scroll animations and the 3D canvas, not just autoplay video.

---

## 10. Deployment (Vercel)

1. Push repo to GitHub.
2. Import project in Vercel dashboard, framework auto-detected as Next.js.
3. Add environment variables in Vercel project settings (Production + Preview): `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_TO_EMAIL`.
4. Deploy. Vercel builds the static pages and deploys `/api/contact` as a serverless function automatically — no extra config needed for that split.
5. Connect the agency's real domain in Vercel → Domains, update DNS (A/CNAME per Vercel's instructions).
6. Test the live contact form end to end, confirm the email arrives and isn't in spam. If it lands in spam, switch SMTP provider to one matching the domain (see section 6) and add SPF/DKIM records for that domain.

---

## 11. Final QA Pass

- [ ] Every service listed actually exists in `data/services.ts` with real copy
- [ ] Every "Learn more" / nav link resolves, no 404s
- [ ] No placeholder text (`lorem ipsum`, "Company Name", `example.com`) remains anywhere
- [ ] No fabricated metrics anywhere (only include a stat if it was actually provided)
- [ ] Contact form sends and rate-limit/honeypot both tested
- [ ] Site tested on mobile viewport, 3D scene either scales down or falls back to static on small/low-end devices
- [ ] Lighthouse run on the deployed URL, not just localhost