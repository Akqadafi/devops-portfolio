import type { Metadata } from "next";
import { ProjectCard } from "../components/project-card";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { dataProjects, devopsProjects, productProjects } from "../portfolio-data";

export const metadata: Metadata = { title: "Projects", description: "Cloud engineering, automation, data analysis, UX research, and program evaluation projects by Ahmad Qadafi, PhD.", alternates: { canonical: "/projects" } };

export default function ProjectsPage() {
  return <><SiteHeader /><main><section className="page-hero section-shell"><p className="kicker">Selected work · 2019—2026</p><h1>Three disciplines.<br /><span>One systems mindset.</span></h1><p>Cloud platforms, applied AI products, and data research all depend on the same habits: define the question, make the system observable, test the critical assumptions, and leave behind evidence.</p></section>
    <section className="projects section-shell project-track" id="devops"><div className="section-heading"><div><p className="kicker">01 · Cloud &amp; DevOps</p><h2>Secure systems,<br />built to be operated.</h2></div><p>Hands-on infrastructure projects with source, architecture rationale, validation, and operational runbooks.</p></div><div className="project-list">{devopsProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section>
    <section className="projects section-shell data-track" id="applied-ai"><div className="section-heading"><div><p className="kicker">02 · Applied AI &amp; Product Engineering</p><h2>Useful AI,<br />under human control.</h2></div><p>Product work that turns model capability into reviewable workflows with clear boundaries, dependable outputs, and user control.</p></div><div className="project-list">{productProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section>
    <section className="projects section-shell project-track" id="data"><div className="section-heading"><div><p className="kicker">03 · Data &amp; Research</p><h2>Evidence that moves<br />decisions forward.</h2></div><p>Research and data systems that turn complex questions into clear findings, practical recommendations, and informed decisions.</p></div><div className="project-list">{dataProjects.map((project) => <ProjectCard project={project} key={project.title} />)}</div></section>
    <section className="contact section-shell"><p className="kicker">Let&apos;s connect</p><h2>Looking for someone who understands both systems and the people they serve?</h2><a href="mailto:akqadafi@gmail.com">akqadafi@gmail.com <span>↗</span></a></section>
  </main><SiteFooter /></>;
}
