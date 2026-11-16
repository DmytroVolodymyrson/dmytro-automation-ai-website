const supportingProjects = [
  {
    title: "Consultant website",
    description: "Soushiant Asadi’s services website.",
    status: "Live website",
    stack: "Next.js · TypeScript",
    image: "/images/web-development/soushiant.webp",
    alt: "Screenshot of Soushiant Asadi’s consultant website",
    width: 960,
    height: 600,
    links: [
      { label: "Live site ↗", href: "https://soushiant-website.vercel.app" },
      { label: "Source code ↗", href: "https://github.com/DmytroVolodymyrson/soushiant-website" },
    ],
  },
  {
    title: "Telegram Mini App",
    description: "Захист України. A real local game preview.",
    status: "Local preview · not deployed",
    stack: "HTML5 Canvas · JavaScript",
    image: "/images/web-development/ukraine-tower-defense.webp",
    alt: "Local browser preview of the Захист України tower defense game",
    width: 960,
    height: 600,
    links: [
      { label: "Source code ↗", href: "https://github.com/DmytroVolodymyrson/ukraine-tower-defense" },
    ],
  },
];

const WebDevelopmentSection = () => (
  <section id="web-development" aria-labelledby="web-development-heading" className="scroll-mt-24 bg-background py-12 md:py-16">
    <div className="container-tight">
      <div className="max-w-2xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-primary">Web development</p>
        <h2 id="web-development-heading" className="font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
          Web development is my core.<br /> Automation is a plus.
        </h2>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          Business websites, portfolios and custom web apps — built by a frontend developer who can also connect the workflows behind them.
        </p>
      </div>

      <div className="my-7 grid gap-4 rounded-xl border border-border bg-card p-5 md:grid-cols-3 md:gap-6 md:px-6">
        {[
          ["React · Next.js · TypeScript", "Modern frontend development"],
          ["Enterprise fintech / e-commerce", "Career frontend experience"],
          ["Websites + Mini Apps", "Real work you can inspect"],
        ].map(([title, description]) => (
          <div key={title} className="border-b border-border pb-3 last:border-0 last:pb-0 md:border-0 md:pb-0">
            <p className="font-display font-bold text-foreground">{title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-[1.35fr_1fr]">
        <article className="overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover">
          <img src="/images/web-development/andrey.webp" alt="Screenshot of Andrey’s developer portfolio" width="1200" height="750" loading="lazy" className="aspect-[1.8] w-full object-cover object-top" />
          <div className="p-5 md:p-6">
            <p className="mb-2 text-xs text-muted-foreground">Featured website · Live</p>
            <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">Andrey’s developer portfolio</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">An editorial Next.js website that gives a frontend developer a distinct visual identity.</p>
            <p className="mt-4 text-xs text-muted-foreground">Next.js · TypeScript</p>
            <div className="mt-3 flex flex-wrap gap-x-5 text-sm font-semibold text-primary [&>a]:py-2 [&>a]:hover:underline [&>a]:focus-visible:outline [&>a]:focus-visible:outline-2 [&>a]:focus-visible:outline-offset-4">
              <a href="https://dmytrovolodymyrson.github.io/andrey-portfolio/" target="_blank" rel="noopener noreferrer">Live site ↗</a>
              <a href="https://github.com/DmytroVolodymyrson/andrey-portfolio" target="_blank" rel="noopener noreferrer">Source code ↗</a>
            </div>
            <details className="mt-3 border-t border-border pt-3 text-sm">
              <summary className="cursor-pointer py-1 font-semibold text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">See the project scope</summary>
              <p className="mt-3 leading-relaxed text-muted-foreground">Developer portfolio, project sections and responsive page layout.</p>
            </details>
          </div>
        </article>

        <div className="grid gap-5">
          {supportingProjects.map((project) => (
            <article key={project.title} className="grid grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-shadow hover:shadow-card-hover md:grid-cols-[0.92fr_1.08fr]">
              <img src={project.image} alt={project.alt} width={project.width} height={project.height} loading="lazy" className="h-full min-h-52 w-full object-cover object-top md:object-left-top" />
              <div className="min-w-0 p-4">
                <p className="mb-2 text-xs text-muted-foreground">{project.status}</p>
                <h3 className="font-display text-xl font-bold leading-tight tracking-tight text-foreground">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <p className="mt-4 hidden text-xs text-muted-foreground md:block">{project.stack}</p>
                <div className="mt-3 flex flex-wrap gap-x-3 text-xs font-semibold text-primary [&>a]:py-2 [&>a]:hover:underline [&>a]:focus-visible:outline [&>a]:focus-visible:outline-2 [&>a]:focus-visible:outline-offset-4">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        This website is also my work: <a href="https://github.com/DmytroVolodymyrson/dmytro-automation-ai-website" target="_blank" rel="noopener noreferrer" className="inline-block py-2 font-medium text-primary hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">React · Vite · Tailwind CSS ↗</a>
      </p>
      <details className="mt-6 rounded-2xl bg-primary/5 p-5 md:p-6">
        <summary className="flex cursor-pointer list-none flex-col gap-4 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 sm:flex-row sm:items-center sm:justify-between [&::-webkit-details-marker]:hidden">
          <span>
            <span className="block font-display text-2xl font-bold text-foreground">Have a website in mind?</span>
            <span className="mt-1 block text-sm text-muted-foreground">Share the pages, features and deadline you need.</span>
          </span>
          <span className="rounded-lg bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground">Discuss a website →</span>
        </summary>
        <div className="mt-5 border-t border-primary/20 pt-5">
          <h3 className="font-display text-xl font-semibold text-foreground">Start with your scope.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">What are you building: a business website, a landing page, a storefront or a Mini App? Bring your content, reference links, required integrations and timeline.</p>
          <p className="mt-3 text-sm text-muted-foreground">This opens a project brief only. No message is sent and no booking is made.</p>
        </div>
      </details>
    </div>
  </section>
);

export default WebDevelopmentSection;
