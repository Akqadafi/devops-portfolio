const projects = [
  {
    number: "01",
    title: "Secure AWS Application Platform",
    summary: "A production-minded AWS foundation built with Terraform: private workloads, layered ingress security, centralized observability, and tested incident workflows.",
    challenge: "Expose an application safely while keeping compute and data private—and make the platform operable when something fails.",
    highlights: ["Route 53, ACM, ALB and AWS WAF at the public edge", "Private EC2 and RDS with SSM access and VPC endpoints", "CloudWatch telemetry, ALB/WAF logs and alerting", "Lambda, S3, SNS and Bedrock-assisted incident reporting"],
    tags: ["Terraform", "AWS", "Security", "Observability"],
    href: "https://github.com/Akqadafi/aws-secure-application-platform",
  },
  {
    number: "02",
    title: "Multi-Region Data Residency Platform",
    summary: "A verifiable cross-region architecture that keeps regulated data in Tokyo while serving application compute from Sao Paulo over private connectivity.",
    challenge: "Meet a strict residency boundary without sacrificing resilient application delivery or audit-ready proof.",
    highlights: ["RDS constrained to Tokyo; compute deployed in Sao Paulo", "Private Transit Gateway peering corridor with explicit routes", "CloudFront, WAF and a protected ALB origin", "CloudTrail and validation evidence for residency and traffic flow"],
    tags: ["Multi-region", "Networking", "Compliance", "Terraform"],
    href: "https://github.com/Akqadafi/aws-multi-region-data-residency-platform",
  },
  {
    number: "03",
    title: "Familiar: Local Automation Server",
    summary: "A local, standard-library Python MCP server that turns a Markdown knowledge base into a searchable, maintainable second brain.",
    challenge: "Make personal knowledge useful across sessions without sending private notes to a hosted database.",
    highlights: ["Save, search, read and write workflows for a local vault", "Daily briefs, inbox triage and project summaries", "Duplicate and contradiction auditing", "Installer, smoke tests, full tests and operational documentation"],
    tags: ["Python", "Automation", "MCP", "Testing"],
    href: "https://github.com/Akqadafi/familiar-second-brain",
  },
];

const capabilities = [
  ["Cloud Infrastructure", "AWS architecture across networking, compute, data, storage and edge delivery.", "VPC · EC2 · ECS · RDS · S3 · Lambda · CloudFront · Route 53"],
  ["Infrastructure as Code", "Reusable Terraform modules, explicit configuration and validation evidence.", "Terraform · Git · GitHub Actions · CI/CD · State management"],
  ["Security & Reliability", "Least-privilege access, private network paths and observable production controls.", "IAM · WAF · Secrets Manager · SSM · CloudWatch · CloudTrail"],
  ["Automation & Systems", "Practical tooling that removes repetitive work and makes operations easier to verify.", "Python · Bash · Linux · Docker · APIs · MCP"],
];

const experience = [
  ["2024—2026", "Data Systems & Cloud Automation", "Maricopa County / South Phoenix Healthy Start", "Built cloud-connected reporting and automation workflows for public-health operations, reducing monthly reporting time by 70% while strengthening data quality and repeatability."],
  ["2023—2024", "Senior Statistical Analyst / Data & Cloud Engineering", "Advocates for Human Potential", "Engineered reproducible data processes and analytical systems for complex behavioral-health programs and regulated reporting environments."],
  ["2019—2023", "Research & Evaluation / Data & Cloud Engineering", "Boys & Girls Clubs of Chicago", "Designed durable data infrastructure, automated recurring analysis and translated technical findings for cross-functional stakeholders."],
];

const schema = {
  "@context": "https://schema.org", "@type": "Person", name: "Ahmad Qadafi, PhD", url: "https://akqadafi.com", email: "mailto:akqadafi@gmail.com", jobTitle: "AWS DevOps and Cloud Engineer",
  sameAs: ["https://github.com/Akqadafi", "https://www.linkedin.com/in/ahmad-qadafi-phd-67503381/"], alumniOf: { "@type": "CollegeOrUniversity", name: "University of Chicago" },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Ahmad Qadafi — home">AQ<span>.</span></a>
      <nav aria-label="Primary navigation"><a href="#projects">Projects</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#about">About</a></nav>
      <a className="header-contact" href="mailto:akqadafi@gmail.com">Let&apos;s talk <span aria-hidden="true">↗</span></a>
    </header>
    <main id="top">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" aria-hidden="true" />AWS Certified Solutions Architect — Associate · 2026</p>
          <h1 id="hero-title">Secure cloud systems.<br /><span>Built to be operated.</span></h1>
          <p className="hero-intro">I&apos;m Ahmad Qadafi, an AWS DevOps and Cloud Engineer. I design, automate and validate infrastructure with Terraform, private networking, CI/CD controls and production-grade observability.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <span aria-hidden="true">↓</span></a><a className="button button-secondary" href="https://github.com/Akqadafi" target="_blank" rel="noreferrer">GitHub profile <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-system" aria-label="Cloud engineering focus areas">
          <div className="system-topline"><span>PLATFORM / 01</span><span className="online">AVAILABLE FOR OPPORTUNITIES</span></div>
          <div className="system-core"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core-mark"><span>AWS</span><small>DEVOPS</small></div><span className="node node-a">IaC</span><span className="node node-b">SEC</span><span className="node node-c">OBS</span><span className="node node-d">CI/CD</span></div>
          <div className="system-footer"><span>Terraform</span><span>Python</span><span>Linux</span><span>Docker</span></div>
        </div>
      </section>
      <section className="proof-strip" aria-label="Selected career proof points"><div><strong>70%</strong><span>reduction in monthly reporting time through automation</span></div><div><strong>10M+</strong><span>behavioral-health and grant records managed</span></div><div><strong>3</strong><span>portfolio platforms with documented validation evidence</span></div></section>
      <section className="projects section-shell" id="projects">
        <div className="section-heading"><div><p className="kicker">Selected engineering work</p><h2>Platforms with proof,<br />not just diagrams.</h2></div><p>Each project includes architecture decisions, Terraform source, operational documentation and evidence that the critical controls work.</p></div>
        <div className="project-list">{projects.map((project) => <article className="project-card" key={project.title}><div className="project-number">{project.number}</div><div className="project-body"><div className="project-title-row"><h3>{project.title}</h3><a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>↗</a></div><p className="project-summary">{project.summary}</p><div className="project-details"><div><h4>The challenge</h4><p>{project.challenge}</p></div><div><h4>What I built</h4><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></div><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      </section>
      <section className="skills section-shell" id="skills">
        <div className="section-heading compact"><div><p className="kicker">Technical capabilities</p><h2>From architecture<br />to operations.</h2></div><p>I focus on the connective tissue: infrastructure that is secure, repeatable, observable and understandable by the next engineer.</p></div>
        <div className="capability-grid">{capabilities.map((capability, index) => <article key={capability[0]}><span className="capability-index">0{index + 1}</span><h3>{capability[0]}</h3><p>{capability[1]}</p><div>{capability[2]}</div></article>)}</div>
      </section>
      <section className="experience section-shell" id="experience">
        <div className="section-heading compact"><div><p className="kicker">Experience</p><h2>Engineering shaped<br />by real constraints.</h2></div><p>My path into cloud engineering began with high-stakes data systems—work that demanded accuracy, traceability and clear communication.</p></div>
        <div className="timeline">{experience.map((item) => <article key={item[2]}><time>{item[0]}</time><div><h3>{item[1]}</h3><p className="organization">{item[2]}</p></div><p className="experience-detail">{item[3]}</p></article>)}</div>
      </section>
      <section className="about section-shell" id="about"><div className="about-label"><p className="kicker">About me</p><span>PHOENIX, ARIZONA</span></div><div className="about-copy"><h2>I bring a researcher&apos;s rigor to cloud engineering.</h2><p>Before building AWS platforms, I spent years designing data systems and evaluating complex public programs. That background trained me to make assumptions explicit, test what matters and leave behind evidence that other people can trust.</p><p>Today, I apply that same discipline to infrastructure: translating requirements into secure architecture, automating repeatable delivery and documenting the path from design decision to verified outcome.</p><div className="education"><span>PhD, University of Chicago</span><span>MA, University of Chicago</span><span>BA, Washington University in St. Louis</span></div></div></section>
      <section className="contact section-shell" id="contact"><p className="kicker">Start a conversation</p><h2>Building something that needs to be secure, clear and reliable?</h2><a href="mailto:akqadafi@gmail.com">akqadafi@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/Akqadafi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ahmad-qadafi-phd-67503381/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
    </main>
    <footer><a className="brand" href="#top" aria-label="Back to top">AQ<span>.</span></a><p>Ahmad Qadafi, PhD · AWS DevOps &amp; Cloud Engineering</p><a href="#top">Back to top ↑</a></footer>
  </>;
}
