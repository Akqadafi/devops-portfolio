import { ProjectCard } from "./components/project-card";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { dataProjects, devopsProjects } from "./portfolio-data";

const capabilities = [
  ["Cloud Infrastructure", "AWS architecture across networking, compute, data, storage, and edge delivery.", "VPC · EC2 · ECS · RDS · S3 · Lambda · CloudFront · Route 53"],
  ["Infrastructure as Code", "Reusable Terraform modules, explicit configuration, and validation evidence.", "Terraform · Git · GitHub Actions · CI/CD · State management"],
  ["Data & Evaluation", "Research design that connects rigorous analysis to real program and product decisions.", "Python · SQL · Regression · ANOVA · Mixed methods · UX research"],
  ["Automation & Systems", "Practical tooling that removes repetitive work and makes operations easier to verify.", "Python · Bash · Linux · Docker · APIs · MCP"],
];

const experience = [
  ["2024—2026", "Data Systems & Cloud Automation", "Maricopa County / South Phoenix Healthy Start", "Built cloud-connected reporting and automation workflows for public-health operations, reducing monthly reporting time by 70% while strengthening data quality and repeatability."],
  ["2023—2024", "Senior Statistical Analyst / Data & Cloud Engineering", "Advocates for Human Potential", "Engineered reproducible data processes and analytical systems for complex behavioral-health programs and regulated reporting environments."],
  ["2019—2023", "Research & Evaluation / Data & Cloud Engineering", "Boys & Girls Clubs of Chicago", "Designed durable data infrastructure, automated recurring analysis, and translated technical findings for cross-functional stakeholders."],
];

const schema = { "@context": "https://schema.org", "@type": "Person", name: "Ahmad Qadafi, PhD", url: "https://akqadafi.com", email: "mailto:akqadafi@gmail.com", jobTitle: "AWS DevOps and Cloud Engineer", image: "https://akqadafi.com/ahmad-qadafi.jpg", sameAs: ["https://github.com/Akqadafi", "https://www.linkedin.com/in/ahmad-qadafi-phd-67503381/"], alumniOf: { "@type": "CollegeOrUniversity", name: "University of Chicago" } };

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <SiteHeader />
    <main id="top">
      <section className="hero section-shell" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="status-dot" aria-hidden="true" />AWS Certified Solutions Architect — Associate · 2026</p><h1 id="hero-title">Cloud systems.<br /><span>Data intelligence.</span></h1><p className="hero-intro">I&apos;m Ahmad Qadafi, PhD—an AWS DevOps and Cloud Engineer with a decade of experience turning complex data into systems, decisions, and measurable outcomes.</p><div className="hero-actions"><Link className="button button-primary" href="/projects">Explore my work <span aria-hidden="true">→</span></Link><a className="button button-secondary" href="mailto:akqadafi@gmail.com">Start a conversation <span aria-hidden="true">↗</span></a></div></div>
        <figure className="hero-portrait"><Image src="/ahmad-qadafi.jpg" alt="Ahmad Qadafi" width="1100" height="1068" priority unoptimized /><figcaption><span>AHMAD QADAFI, PHD</span><span>PHOENIX, ARIZONA</span></figcaption><div className="portrait-badge"><strong>10+</strong><span>years with data, research &amp; systems</span></div></figure>
      </section>
      <section className="proof-strip" aria-label="Selected career proof points"><div><strong>70%</strong><span>reduction in monthly reporting time through automation</span></div><div><strong>10M+</strong><span>behavioral-health and grant records managed</span></div><div><strong>2</strong><span>disciplines united: cloud engineering and data research</span></div></section>

      <section className="projects section-shell" id="projects"><div className="section-heading"><div><p className="kicker">Featured cloud engineering</p><h2>Platforms with proof,<br />not just diagrams.</h2></div><p>Architecture decisions, Terraform source, operational documentation, and evidence that the critical controls work.</p></div><div className="project-list">{devopsProjects.slice(0, 2).map((project) => <ProjectCard project={project} key={project.title} />)}</div><Link className="section-cta" href="/projects#devops">View all cloud projects <span>→</span></Link></section>

      <section className="data-feature section-shell"><div className="section-heading"><div><p className="kicker">Data &amp; research portfolio</p><h2>Analysis that changed<br />what happened next.</h2></div><p>Mixed-methods studies, statistical modeling, usability testing, and program evaluation—translated into decisions people could act on.</p></div><div className="data-preview-grid">{dataProjects.slice(0, 3).map((project) => <Link href={project.href} key={project.title} className="data-preview"><span>{project.number}</span><h3>{project.title}</h3><p>{project.summary}</p>{project.metric && <div><strong>{project.metric}</strong><small>{project.metricLabel}</small></div>}<b>Read case study →</b></Link>)}</div><Link className="section-cta light" href="/projects#data">View all data projects <span>→</span></Link></section>

      <section className="skills section-shell" id="skills"><div className="section-heading compact"><div><p className="kicker">Technical capabilities</p><h2>From evidence<br />to operations.</h2></div><p>I work at the connective tissue: systems that are secure, repeatable, observable, and understandable by the next person.</p></div><div className="capability-grid">{capabilities.map((capability, index) => <article key={capability[0]}><span className="capability-index">0{index + 1}</span><h3>{capability[0]}</h3><p>{capability[1]}</p><div>{capability[2]}</div></article>)}</div></section>

      <section className="experience section-shell" id="experience"><div className="section-heading compact"><div><p className="kicker">Experience</p><h2>Engineering shaped<br />by real constraints.</h2></div><p>My path into cloud engineering began with high-stakes data systems—work that demanded accuracy, traceability, and clear communication.</p></div><div className="timeline">{experience.map((item) => <article key={item[2]}><time>{item[0]}</time><div><h3>{item[1]}</h3><p className="organization">{item[2]}</p></div><p className="experience-detail">{item[3]}</p></article>)}</div></section>

      <section className="about section-shell" id="about"><div className="about-label"><p className="kicker">About me</p><span>PHOENIX, ARIZONA</span></div><div className="about-copy"><h2>I bring a researcher&apos;s rigor to cloud engineering.</h2><p>Before building AWS platforms, I spent years designing data systems and evaluating complex public programs. That background trained me to make assumptions explicit, test what matters, and leave behind evidence that other people can trust.</p><p>Today, I apply that same discipline to infrastructure: translating requirements into secure architecture, automating repeatable delivery, and documenting the path from design decision to verified outcome.</p><div className="education"><span>PhD, University of Chicago</span><span>MA, University of Chicago</span><span>BA, Washington University in St. Louis</span></div></div></section>
      <section className="contact section-shell" id="contact"><p className="kicker">Start a conversation</p><h2>Need someone who can connect infrastructure, data, and decisions?</h2><a href="mailto:akqadafi@gmail.com">akqadafi@gmail.com <span aria-hidden="true">↗</span></a><div className="contact-links"><a href="https://github.com/Akqadafi" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/ahmad-qadafi-phd-67503381/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></section>
    </main><SiteFooter />
  </>;
}
import Image from "next/image";
import Link from "next/link";
