import Link from "next/link";
import type { Project } from "../portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  const external = project.href.startsWith("http");
  return <article className="project-card"><div className="project-number">{project.number}</div><div className="project-body">
    <div className="project-title-row"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>{external ? <a className="project-link" href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title}`}>↗</a> : <Link className="project-link" href={project.href} aria-label={`View ${project.title}`}>↗</Link>}</div>
    <p className="project-summary">{project.summary}</p>
    {project.metric && <div className="metric-inline"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>}
    <div className="project-details"><div><h4>The question</h4><p>{project.challenge}</p></div><div><h4>What I did</h4><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></div>
    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  </div></article>;
}
