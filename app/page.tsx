import Image from "next/image";

const profile = {
  name: "Pedro Enrique",
  title: "Founder of Orbitali · Senior Software Engineer",
  focus: "Mobile - Full-stack - Infrastructure",
  location: "Spain",
  email: "pedro.tma@gmail.com",
  linkedin: "https://linkedin.com/in/pec1985",
  github: "https://github.com/pec1985",
  orbitaliUrl: "https://orbitali.ai",
  volandooUrl: "https://volandoo.com",
  fluxionDbUrl: "https://fluxiondb.com",
  tagline:
    "Building products across mobile, full-stack systems, and infrastructure.",
};

const images = {
  portrait: "/photos/pedro-enrique.png",
  hangGliding:
    "https://ik.imagekit.io/tcixzkbxb/personal/pedro-hang-gliding.png?tr=f-auto,q-auto,w-1200",
  family:
    "https://ik.imagekit.io/tcixzkbxb/personal/pedro-family.png?tr=f-auto,q-auto,w-1200",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Orbitali", href: "#orbitali" },
  { label: "Volandoo", href: "#volandoo" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const credibilityStats = [
  {
    value: "2010",
    label: "Building in Silicon Valley startup environments since",
  },
  { value: "15+ years", label: "Production software experience" },
  { value: "18k+", label: "Volandoo users worldwide" },
  { value: "Full stack", label: "Mobile, product software, infrastructure" },
];

const volandooFeatures = [
  "Native iOS app",
  "Native Android app",
  "Real-time GPS live tracking",
  "External tracker integrations",
  "Event and competition management",
  "Social features for pilots and organizers",
  "Public-facing React web portal",
  "Backend services for high-frequency location ingestion",
  "Custom time-series storage for GPS data",
  "Kubernetes-based deployment and infrastructure",
  "RevenueCat integration for subscriptions",
];

const volandooStack = [
  "iOS",
  "Android",
  "Swift",
  "Kotlin",
  "TypeScript",
  "React",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "Real-time location systems",
  "Custom time-series storage",
];

const experienceItems = [
  {
    company: "Orbitali",
    role: "Founder and CEO/CTO",
    dates: "Present",
    description:
      "Leading company direction, product, and engineering at Orbitali, a platform for building and operating real-time AI voice agents. Owning the architecture and delivery across the voice runtime, APIs, developer dashboard, and infrastructure.",
    highlights: [
      "Real-time voice orchestration",
      "Phone and browser voice agents",
      "Custom tools and knowledge retrieval",
      "Public API and MCP integrations",
      "Call transcripts and observability",
    ],
  },
  {
    company: "Agentuity",
    role: "Senior Full Stack Engineer",
    dates: "Jan 2025 - Mar 2026",
    location: "Remote",
    description:
      "Designed, scaled, and maintained infrastructure for autonomous AI agents, with a focus on low-latency LLM orchestration, event-driven workflows, real-time agent communication, and monitoring interfaces.",
    highlights: [
      "Golang and Node.js backend microservices",
      "AI agent orchestration infrastructure",
      "TypeScript and React dashboards",
      "Long-running agent context management",
      "Vector database and caching integrations",
    ],
  },
  {
    company: "Volandoo",
    role: "Founder and Engineer",
    dates: "May 2022 - Present",
    description:
      "Built a self-funded platform for the paragliding and hang gliding community, including native mobile apps, real-time GPS tracking, event tools, social features, backend infrastructure, and web interfaces.",
    highlights: [
      "18,000+ users worldwide",
      "Native iOS and Android apps",
      "Real-time GPS live tracking",
      "Custom time-series backend",
      "Public web portal",
      "RevenueCat subscription integration",
    ],
  },
  {
    company: "Shopmonkey",
    role: "Senior Full Stack Engineer",
    dates: "Oct 2022 - Dec 2024",
    location: "Remote",
    description:
      "Built backend services, payment integrations, and frontend interfaces for a SaaS platform serving automotive shops.",
    highlights: [
      "Node.js and Golang backend services",
      "Stripe, Finix, and First Mile payment integrations",
      "Next.js and Tailwind CSS frontend work",
      "Salesforce and analytics integrations",
    ],
  },
  {
    company: "Automox",
    role: "Senior Software Engineer",
    dates: "Feb 2022 - Oct 2022",
    location: "Remote",
    description:
      "Engineered high-performance agent software in Golang deployed across thousands of endpoints, working with security and compliance requirements.",
    highlights: [
      "Golang endpoint agent work",
      "Cross-platform compatibility",
      "Security and compliance collaboration",
      "Unit testing and code review",
    ],
  },
  {
    company: "Pinpoint",
    role: "Senior Full Stack Engineer",
    dates: "Aug 2018 - Feb 2022",
    location: "Remote",
    description:
      "Developed data pipelines, backend services, analytics dashboards, and third-party integrations, collaborating closely with product and data science teams.",
    highlights: [
      "Golang data pipelines",
      "Backend services",
      "Analytics dashboards",
      "Product and data science collaboration",
    ],
  },
  {
    company: "Salesforce",
    role: "Senior iOS Engineer",
    dates: "Apr 2016 - Sep 2018",
    location: "Palo Alto, CA",
    description:
      "Contributed to core iOS application work, including scalable and accessible UI components, native framework integrations, and performance improvements.",
    highlights: [
      "Native iOS engineering",
      "Scalable UI components",
      "Accessibility",
      "Performance enhancements",
      "Enterprise mobile application development",
    ],
  },
  {
    company: "Appcelerator",
    role: "iOS Engineer",
    dates: "Dec 2010 - Apr 2016",
    location: "Mountain View, CA",
    description:
      "Worked on cross-platform mobile SDK features in Objective-C, Java, and C++, collaborating across iOS, Android, BlackBerry, and Windows platforms.",
    highlights: [
      "Cross-platform mobile SDK architecture",
      "Objective-C, Java, and C++",
      "Developer tooling and support",
      "Platform-specific debugging",
    ],
  },
];

const skillGroups = [
  {
    title: "Mobile",
    skills: [
      "iOS",
      "Swift",
      "SwiftUI",
      "Objective-C",
      "Android",
      "Kotlin",
      "Java",
      "React Native",
      "Mobile SDK architecture",
      "Background location",
      "Real-time tracking",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Dashboard interfaces",
      "Map-based interfaces",
      "Product UI implementation",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Golang",
      "REST APIs",
      "WebSockets",
      "WebRTC",
      "Event-driven workflows",
      "Microservices",
      "Real-time communication systems",
    ],
  },
  {
    title: "Data and storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Custom time-series storage",
      "High-frequency GPS data",
      "Optimized indexing",
      "Data pipelines",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "NGINX",
      "Cloud infrastructure",
      "Deployment workflows",
      "Reliability and observability",
    ],
  },
  {
    title: "AI and automation",
    skills: [
      "Autonomous AI agents",
      "LLM orchestration",
      "AI agent infrastructure",
      "Real-time agent communication",
      "Vector database integrations",
      "Distributed caching",
    ],
  },
];

const buildPrinciples = [
  "Own the problem, not just the ticket.",
  "Choose practical architecture over impressive architecture.",
  "Build the smallest useful thing, then harden what proves valuable.",
  "Keep systems observable, understandable, and maintainable.",
  "Treat mobile, backend, frontend, and infrastructure as one connected product surface.",
  "Communicate clearly, especially when tradeoffs are uncomfortable.",
];

const technicalProjectHighlights = [
  "Built for high-frequency GPS data",
  "Optimized for real-time tracking queries",
  "Designed around Volandoo's product needs",
  "Supports millions of location points per day",
  "Practical alternative to overcomplicated infrastructure",
];

const ctaLinks = [
  {
    label: "Connect with Pedro",
    href: `mailto:${profile.email}?subject=Helping%20Orbitali%20grow`,
  },
  { label: "Explore Orbitali", href: profile.orbitaliUrl },
  { label: "LinkedIn", href: profile.linkedin },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-[#f7f5f0]/90 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8"
      >
        <a
          href="#top"
          className="text-sm font-semibold tracking-[0.18em] text-stone-950 uppercase"
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition hover:text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-stone-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p
          className={`mb-3 text-sm font-semibold tracking-[0.2em] uppercase ${
            tone === "dark" ? "text-emerald-300" : "text-emerald-800"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold sm:text-4xl ${
          tone === "dark" ? "text-white" : "text-stone-950"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-lg leading-8 ${
            tone === "dark" ? "text-stone-300" : "text-stone-600"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function ArrowLink({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light" | "outline";
}) {
  const className = {
    dark: "bg-stone-950 text-white hover:bg-emerald-800",
    light: "bg-white text-stone-950 hover:bg-stone-100",
    outline:
      "border border-stone-300 text-stone-900 hover:border-emerald-800 hover:text-emerald-800",
  }[variant];

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 ${className}`}
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        -&gt;
      </span>
    </a>
  );
}

function HeroSection() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.16fr_0.84fr] lg:py-20"
    >
      <div>
        <p className="mb-5 text-sm font-semibold tracking-[0.22em] text-emerald-800 uppercase">
          {profile.focus}
        </p>
        <h1 className="max-w-4xl text-4xl leading-tight font-semibold text-stone-950 sm:text-5xl lg:text-6xl">
          Founder of Orbitali. Engineer building AI, mobile, and full-stack
          products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
          I&apos;m building Orbitali, a platform for real-time AI voice agents.
          I&apos;ve been building software in Silicon Valley startup
          environments since 2010, from native mobile SDKs and iOS apps to
          backend systems, frontend applications, Kubernetes infrastructure,
          real-time platforms, and AI agent tooling.
        </p>
        <p className="mt-4 text-base font-medium text-stone-800">
          Based in Spain. Building Orbitali for teams around the world.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ArrowLink href="#orbitali">Explore Orbitali</ArrowLink>
          <ArrowLink href="#experience" variant="outline">
            View experience
          </ArrowLink>
          <ArrowLink href="#volandoo" variant="outline">
            See Volandoo
          </ArrowLink>
          <ArrowLink href="#contact" variant="outline">
            Contact Pedro
          </ArrowLink>
        </div>
      </div>

      <div className="mx-auto w-full max-w-md lg:max-w-[430px]">
        <div className="aspect-[4/4.6] overflow-hidden rounded-[1.5rem] border border-stone-200 bg-stone-200 shadow-2xl shadow-stone-300/40">
          <Image
            src={images.portrait}
            alt="Pedro Enrique"
            width={2048}
            height={2048}
            priority
            className="h-full w-full object-cover object-top"
          />
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            "Since 2010",
            "15+ years building software",
            "18k+ Volandoo users",
            "Mobile - React - Node.js - Golang - Kubernetes",
          ].map((badge) => (
            <div
              key={badge}
              className="rounded-2xl border border-white/80 bg-white/90 p-4 text-sm leading-5 font-semibold text-stone-800 shadow-lg shadow-stone-300/30 backdrop-blur"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="border-y border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-px px-5 py-5 sm:px-8 md:grid-cols-4">
        {credibilityStats.map((stat) => (
          <div key={stat.value} className="py-6 md:px-6">
            <p className="text-3xl font-semibold text-stone-950">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow="About" title="About Pedro" />
        <div className="space-y-6 text-lg leading-8 text-stone-700">
          <p>
            Pedro Enrique is the founder and CEO/CTO of Orbitali and a senior
            software engineer with deep experience
            across native mobile, backend systems, frontend applications,
            infrastructure, and product development. He started working in
            Silicon Valley startup environments in 2010 and has since
            contributed to mobile SDKs, enterprise iOS applications, SaaS
            platforms, security agents, AI infrastructure, and self-funded
            products.
          </p>
          <p>
            His work sits at the intersection of engineering depth and product
            ownership. He is comfortable moving from Swift and Kotlin to
            TypeScript, Golang, PostgreSQL, Docker, Kubernetes, React, and
            real-time systems, not as a collection of buzzwords, but as tools
            used to ship real products.
          </p>
        </div>
      </div>
    </section>
  );
}

function OrbitaliSection() {
  return (
    <section id="orbitali" className="border-t border-stone-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow="Founder and CEO/CTO"
            title="Orbitali: real-time AI voice agents"
            subtitle="A platform for developers and teams to build and operate AI voice agents on phone numbers and in the browser."
          />
          <p className="mt-6 text-lg leading-8 text-stone-700">
            I founded Orbitali to make voice agents practical to build and run.
            I lead product, technology, and engineering, from the real-time
            conversation runtime to the APIs, dashboard, and infrastructure.
          </p>
          <p className="mt-5 text-base leading-7 text-stone-600">
            Orbitali manages audio, turn-taking, and conversation orchestration.
            Teams connect their own phone carrier, bring their knowledge, and
            link agents to their applications through tools and APIs.
          </p>
          <div className="mt-8">
            <ArrowLink href={profile.orbitaliUrl}>Visit Orbitali</ArrowLink>
          </div>
        </div>
        <div className="grid content-start gap-4">
          {[
            {
              title: "Conversations across phone and web",
              description:
                "Real-time voice with natural interruptions, browser sessions, and Twilio or Telnyx carrier connections.",
            },
            {
              title: "Connected to business workflows",
              description:
                "Custom tools, knowledge retrieval, a public REST API, and MCP integrations connect agents to the systems teams already use.",
            },
            {
              title: "Built to operate",
              description:
                "A developer dashboard brings agent configuration, call records, transcripts, logs, and usage into one place.",
            },
          ].map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-stone-200 bg-[#f7f5f0] p-6"
            >
              <h3 className="text-xl font-semibold text-stone-950">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-stone-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function VolandooSection() {
  return (
    <section id="volandoo" className="bg-stone-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-300 uppercase">
              Product case study
            </p>
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Volandoo: a real product, built end-to-end
            </h2>
            <p className="mt-5 text-xl leading-8 text-stone-300">
              Pedro&apos;s clearest example of full-stack product ownership.
            </p>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-300">
              Volandoo is a self-funded platform for the paragliding and hang
              gliding community. Pedro built it from the ground up across native
              mobile apps, backend services, real-time GPS tracking, event
              tools, public web interfaces, and infrastructure.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 font-semibold text-white">
              Volandoo has served more than 18,000 users worldwide and continues
              to grow organically.
            </p>
            <div className="mt-8">
              <ArrowLink href={profile.volandooUrl} variant="light">
                Visit Volandoo
              </ArrowLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-stone-900">
            <Image
              src={images.hangGliding}
              alt="Pedro Enrique flying a hang glider"
              width={900}
              height={700}
              className="h-full min-h-[360px] w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">What Pedro built</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {volandooFeatures.map((feature) => (
                <p
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-stone-900 px-4 py-3 text-sm leading-6 text-stone-300"
                >
                  {feature}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h3 className="text-xl font-semibold">Technical stack</h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {volandooStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-100"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceTimeline() {
  return (
    <section id="experience" className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <SectionHeading
        eyebrow="Experience"
        title="Experience"
        subtitle="From mobile SDKs to AI infrastructure."
      />
      <div className="mt-10 space-y-5">
        {experienceItems.map((item) => (
          <article
            key={`${item.company}-${item.dates}`}
            className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm shadow-stone-200/60 sm:p-8"
          >
            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <p className="text-sm font-semibold text-emerald-800">
                  {item.dates}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-950">
                  {item.company}
                </h3>
                <p className="mt-1 font-medium text-stone-700">{item.role}</p>
                {item.location ? (
                  <p className="mt-1 text-sm text-stone-500">{item.location}</p>
                ) : null}
              </div>
              <div>
                <p className="text-base leading-7 text-stone-700">
                  {item.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-stone-100 px-3 py-1.5 text-sm text-stone-700"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <SectionHeading
          eyebrow="Technical range"
          title="Technical range"
          subtitle="Pedro's strength is not one narrow stack. It is the ability to connect product needs with the right technical layer."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-3xl border border-stone-200 bg-[#f7f5f0] p-6"
            >
              <h3 className="text-xl font-semibold text-stone-950">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-stone-700">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700"
                    />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowIBuildSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Method" title="How I build" />
          <p className="mt-6 text-lg leading-8 text-stone-700">
            I like working close to the product, but I care deeply about the
            engineering underneath it. The best software is not just a clean
            codebase or a good-looking interface. It is a system that solves a
            real problem, survives real users, and can keep evolving.
          </p>
          <p className="mt-6 text-base leading-7 text-stone-600">
            Hang gliding has shaped how I think about engineering: understand
            the conditions, respect complexity, prepare carefully, and make calm
            decisions when the environment changes.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {buildPrinciples.map((principle) => (
            <div
              key={principle}
              className="rounded-3xl border border-stone-200 bg-white p-5 text-base leading-7 font-medium text-stone-800 shadow-sm shadow-stone-200/70"
            >
              {principle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnicalProjectSection() {
  return (
    <section className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Technical product"
              title="FluxionDB: time-series storage for high-frequency GPS data"
              subtitle="FluxionDB is another product Pedro built, written in C++. It is lightweight time-series storage tailored to high-frequency GPS tracking, designed to store and query large volumes of location points efficiently for real-time sports tracking."
              tone="dark"
            />
            <div className="mt-8">
              <ArrowLink href={profile.fluxionDbUrl} variant="light">
                Visit FluxionDB
              </ArrowLink>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <ul className="space-y-4">
              {technicalProjectHighlights.map((highlight) => (
                <li key={highlight} className="flex gap-4 text-stone-200">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-emerald-300"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonalSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-200">
          <Image
            src={images.family}
            alt="Pedro Enrique with his family"
            width={900}
            height={680}
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
        <div>
          <SectionHeading
            eyebrow="Outside work"
            title="Grounded outside of work"
          />
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
            Pedro lives in Spain with his wife and three children. Outside of
            software, he flies hang gliders, a sport that rewards preparation,
            judgment, patience, and calm execution.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="bg-[#17443a] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-emerald-100 uppercase">
              Investors and partners
            </p>
            <h2 className="text-3xl font-semibold sm:text-5xl">
              Help grow Orbitali
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-emerald-50">
              I&apos;m building Orbitali to help teams bring AI voice agents
              into everyday business workflows. If you&apos;re an investor or
              partner who shares that vision, I&apos;d love to connect.
            </p>
            <p className="mt-5 text-base font-semibold text-white">
              Capital, introductions to customers, strategic partnerships, and
              experience scaling developer platforms can help Orbitali grow.
            </p>
          </div>
          <div className="grid content-start gap-3 sm:grid-cols-2">
            {ctaLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-base font-semibold text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-sm text-stone-600 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          {profile.name} - {profile.title}
        </p>
        <p>{profile.tagline}</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f7f5f0] text-stone-950">
      <Header />
      <HeroSection />
      <CredibilityStrip />
      <AboutSection />
      <OrbitaliSection />
      <VolandooSection />
      <ExperienceTimeline />
      <SkillsSection />
      <HowIBuildSection />
      <TechnicalProjectSection />
      <PersonalSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
