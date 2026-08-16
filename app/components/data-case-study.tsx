import { dataProjects, type Project } from "../portfolio-data";
import { SiteFooter, SiteHeader } from "./site-chrome";

export function DataCaseStudy({ project, findings, outcome, sourceNote }: { project: Project; findings: string[]; outcome: string; sourceNote?: string }) {
  const relatedProjects = dataProjects.filter((item) => item.slug !== project.slug && item.href.startsWith("/"));
  return <><SiteHeader /><main className="case-study">
    <section className="case-hero section-shell"><a className="back-link" href="/projects">← All projects</a><p className="kicker">{project.number} · {project.category}</p><h1>{project.title}</h1><p className="case-deck">{project.summary}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section>
    <section className="case-body section-shell"><aside><p className="kicker">At a glance</p>{project.metric && <div className="case-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>}<p className="source-note">{sourceNote ?? <>Adapted from Ahmad&apos;s original research portfolio.</>}</p>{project.repositoryHref && <a className="case-repository-link" href={project.repositoryHref} target="_blank" rel="noreferrer">View source on GitHub <span aria-hidden="true">â†—</span></a>}</aside><div className="case-copy">
      <section><p className="kicker">The question</p><h2>{project.challenge}</h2></section>
      <section><p className="kicker">Approach</p><ul className="method-list">{project.highlights.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ul></section>
      <section><p className="kicker">Key findings</p><div className="finding-grid">{findings.map((finding) => <article key={finding}><span aria-hidden="true">+</span><p>{finding}</p></article>)}</div></section>
      <section className="outcome"><p className="kicker">From evidence to action</p><p>{outcome}</p></section>
    </div></section>
    <section className="next-project section-shell"><p>Browse another case study</p><nav className="case-project-nav" aria-label="More portfolio projects"><a className="all-projects-link" href="/projects">All cloud + data projects <span>→</span></a><div className="case-project-links">{relatedProjects.map((item) => <a href={item.href} key={item.slug}><span>{item.number}</span>{item.title}</a>)}</div></nav></section>
  </main><SiteFooter /></>;
}
