import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "AI-Assisted Lesson Planning Studio",
  description: "A teacher-controlled lesson planning application with modular drafts, student handouts, structured validation, and review safeguards.",
  alternates: { canonical: "/projects/lesson-planner" },
};

const controls = [
  ["Choose the planning path", "Start from a preset, customize a preset, or build a lesson from scratch. Eight approaches include backward design, inquiry, explicit instruction, and project-based learning."],
  ["Edit the structure", "Add, remove, reorder, and write sections directly. A teacher can regenerate one section without replacing the rest of the draft."],
  ["Create student materials", "Build practice worksheets, guided notes, reference sheets, or exit tickets with separate student and teacher exports."],
  ["Review before export", "Changes clear the reviewed state. Missing objectives, assessments, answer keys, and source context are surfaced before a teacher marks the draft reviewed."],
];

export default function LessonPlannerCaseStudy() {
  return <><SiteHeader /><main className="case-study reporting-case">
    <section className="case-hero section-shell">
      <a className="back-link" href="/projects">← All projects</a>
      <p className="kicker">02 · Applied AI &amp; Product Engineering</p>
      <h1>Lesson planning with structure, review, and teacher control.</h1>
      <p className="case-deck">A Flask application that helps teachers assemble modular lessons and student materials while treating AI output as a draft to validate, edit, and approve.</p>
      <div className="tag-row">{["Python", "Flask", "OpenAI API", "Product Engineering", "Testing"].map(tag => <span key={tag}>{tag}</span>)}</div>
    </section>
    <section className="case-body section-shell">
      <aside><p className="kicker">Release baseline</p><p className="source-note">Local prototype developed with AI-assisted coding and tested without paid model calls.</p>
        <div className="case-metric"><strong>75</strong><span>offline regression tests covering planning, editing, exports, validation, and request safety</span></div>
        <p className="source-note"><strong>v0.2.0</strong> is preserved as an annotated Git tag and GitHub release. The repository currently remains private while production controls and independent content verification are unfinished.</p>
      </aside>
      <div className="case-copy">
        <section><p className="kicker">The problem</p><h2>Generating text is only the beginning of lesson planning.</h2><p>Teachers need goals, timing, materials, activities, learner supports, assessment, and standards context to work together. They also need to revise one part without losing work elsewhere and to know when a generated result is incomplete.</p><p>The product reframes generation as one step inside a teacher-controlled drafting and review workflow.</p></section>
        <section><p className="kicker">The workflow</p><h2>Preserve teacher judgment at every stage.</h2><ol className="reporting-steps">{controls.map(([title, body], index) => <li key={title}><span aria-hidden="true">0{index + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
        <section><p className="kicker">Materials and presentation</p><h2>Plan the lesson and what students receive.</h2><p>Handouts inherit the lesson&apos;s grade and context. Teachers can create up to twenty exercises, keep answers separate from student copies, and choose print-friendly or restrained classroom color themes. Word and PDF routes use the same saved content so the formats do not silently diverge.</p></section>
        <section><p className="kicker">Reliability engineering</p><h2>Reject bad output without destroying good work.</h2><dl className="reporting-decisions">
          <div><dt>Validate structure</dt><dd>Requested sections must appear exactly once with nonempty content. Worksheet items also receive count, identifier, answer, and question-type checks.</dd></div>
          <div><dt>Preserve drafts</dt><dd>Invalid input, API failures, incomplete responses, stale revisions, and overlapping requests leave the last saved draft intact.</dd></div>
          <div><dt>Control paid requests</dt><dd>Opening a page cannot generate content. CSRF-protected POST actions, bounded attempts, disabled automatic retries, and request-size limits guard the provider boundary.</dd></div>
          <div><dt>Test without credits</dt><dd>The offline suite mocks the AI boundary and exercises the application workflow without calling OpenAI or consuming API credits.</dd></div>
        </dl></section>
        <section><p className="kicker">Versioning and recovery</p><h2>Give every stable release a named recovery point.</h2><p>The repository now uses semantic versions, a single application version file, a changelog, annotated Git tags, GitHub releases, and a documented rollback procedure. Feature branches and release tags are pushed off-device before riskier changes move forward.</p><p>Code recovery and data recovery are treated separately: Git protects committed source, while secrets, session files, and future production databases require independent encrypted backups.</p></section>
        <section><p className="kicker">Current limits</p><h2>State clearly what the safeguards do not prove.</h2><p>The application does not yet independently retrieve standards or verify factual claims, citations, activity timing, or answer correctness. It has no teacher authentication, durable lesson library, multi-host coordination, or production deployment. Teacher review remains required.</p></section>
        <section className="outcome"><p className="kicker">What this project demonstrates</p><p>Applied AI product engineering grounded in user control: modular workflows, recoverable state, explicit limits, testable output contracts, and release discipline.</p></section>
      </div>
    </section>
    <section className="next-project section-shell"><p>Continue exploring</p><nav className="case-project-nav" aria-label="Related projects"><a className="all-projects-link" href="/projects">All projects <span>→</span></a><div className="case-project-links"><a href="/projects/aws-health-reporting">Public Health Reporting Workflow</a><a href="/projects/data/community-health-intelligence">Community Health Operations Intelligence</a></div></nav></section>
  </main><SiteFooter /></>;
}
