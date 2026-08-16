import type { Project } from "../portfolio-data";

export function ProjectCard({ project }: { project: Project }) {
  const external = project.href.startsWith("http");
  return <article className="project-card"><div className="project-number">{project.number}</div><div className="project-body">
    <div className="project-title-row"><div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div><a className="project-link" href={project.href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} aria-label={`View ${project.title}`}>↗</a></div>
    <p className="project-summary">{project.summary}</p>
    {project.metric && <div className="metric-inline"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>}
    <div className="project-details"><div><h4>The question</h4><p>{project.challenge}</p></div><div><h4>What I did</h4><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div></div>
    <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
  </div></article>;
}
