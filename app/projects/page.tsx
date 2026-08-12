import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { dataProjects, devopsProjects } from "../portfolio-data";

export const metadata: Metadata = { title: "Projects", description: "Cloud engineering, automation, data analysis, UX research, and program evaluation projects by Ahmad Qadafi, PhD.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><SiteHeader /><main><section className="page-hero section-shell"><p className="kicker">Selected work · 2019—2026</p><h1>Two disciplines.<br /><span>One systems mindset.</span></h1><p>Cloud platforms and data research may look different, but both depend on the same habits: define the question, make the system observable, test the critical assumptions, and leave behind evidence.</p></section>
    <section className="projects section-shell project-track" id="devops"><div className="section-heading"><div><p className="kicker">01 · Cloud &amp; DevOps</p><h2>Secure systems,<br />built to be operated.</h2></div><p>Hands-on infrastructure projects with source, architecture rationale, validation, and operational runbooks.</p></div><div className="project-list">{devopsProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section>
    <section className="projects section-shell data-track" id="data"><div className="section-heading"><div><p className="kicker">02 · Data &amp; Research</p><h2>Evidence that moves<br />decisions forward.</h2></div><p>Selected work migrated from my original research portfolio and reshaped as concise, outcome-led case studies.</p></div><div className="project-list">{dataProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section>
    <section className="contact section-shell"><p className="kicker">Let&apos;s connect</p><h2>Looking for someone who understands both systems and the people they serve?</h2><a href="mailto:akqadafi@gmail.com">akqadafi@gmail.com <span>↗</span></a></section>
  </main><SiteFooter /></>;
}
