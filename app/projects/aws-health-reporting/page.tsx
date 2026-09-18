import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "AWS Public Health Reporting Workflow",
  description: "A public-health reporting case study covering dataset validation, versioned corrections, manager review, and traceable approved archives.",
  alternates: { canonical: "/projects/aws-health-reporting" },
};

const steps = [
  ["Define the reporting cycle", "A manager sets the reporting dates and required datasets. Missing submissions remain visible until every current dataset is valid."],
  ["Validate incoming data", "The shared Python validator checks required fields, identifiers, reporting dates, and controlled values. Safe formatting changes are applied; ambiguous values produce explicit errors."],
  ["Correct the source", "An analyst uses row-level feedback to correct the CSV. Each upload receives a new version. Earlier results remain in history, and a failed replacement blocks approval."],
  ["Review the current versions", "A manager inspects validation results and aggregate reports, then approves or rejects with a reason. A revision check prevents approval from an outdated screen."],
  ["Archive the approved reports", "Approval locks the versions and records their checksums. Archiving verifies the report bytes and preserves the selected versions in a manifest."],
];

export default function ReportingCaseStudy() {
  return <><SiteHeader /><main className="case-study reporting-case">
    <section className="case-hero section-shell">
      <a className="back-link" href="/projects">← All projects</a>
      <p className="kicker">04 · Cloud &amp; Data Engineering</p>
      <h1>Public health reporting, from upload to approval.</h1>
      <p className="case-deck">A reporting workflow that tracks required datasets, preserves corrections, and connects each archived report to the versions a manager approved.</p>
      <div className="tag-row">{["Python", "FastAPI", "SQL", "React", "AWS architecture"].map(tag => <span key={tag}>{tag}</span>)}</div>
    </section>
    <section className="case-body section-shell">
      <aside><p className="kicker">Project context</p><p className="source-note">Portfolio reconstruction for public-health operations, demonstrated with synthetic data.</p>
        <div className="case-metric"><strong>30</strong><span>backend checks passed for validation, workflow state, and recovery</span></div>
        <p className="source-note">Implemented demonstration: React, FastAPI, SQLite, and local files. AWS event integration and PostgreSQL persistence remain planned.</p>
        <a className="case-repository-link" href="https://github.com/Akqadafi/aws-public-health-reporting-workflow" target="_blank" rel="noreferrer">View source on GitHub ↗</a>
        <a className="case-repository-link" href="/case-studies/aws-health-reporting/operating-procedure.html">Read the operating procedure ↗</a>
        <a className="case-repository-link" href="/case-studies/aws-health-reporting/approved-manifest.json" download>Download example manifest ↓</a>
        <p className="source-note">The repository contains the application, automated tests, architecture, infrastructure definitions, and operating documentation.</p>
      </aside>
      <div className="case-copy">
        <section><p className="kicker">The problem</p><h2>Which files are ready, and which output was approved?</h2><p>Recurring reporting brings together files from multiple programs. A valid file can arrive while another dataset is missing. A correction can replace an earlier submission, and a manager can be looking at an outdated version when approving the report.</p><p>The project makes those conditions explicit. File validation, cycle completeness, and manager approval each have their own state.</p></section>
        <section><p className="kicker">My contribution</p><h2>Translate reporting rules into a reviewable workflow.</h2><p>This portfolio implementation was developed with AI-assisted coding. The work covers the reporting rules, state transitions, analyst and manager screens, failure scenarios, and operating documentation. The demonstration uses synthetic records and does not include employer code or production data.</p><p>The resulting workflow connects dataset requirements to version history, human decisions, and the exact reports retained in the archive.</p></section>
        <section><p className="kicker">How it works</p><ol className="reporting-steps">{steps.map(([title, body], i) => <li key={title}><span aria-hidden="true">0{i + 1}</span><div><h3>{title}</h3><p>{body}</p></div></li>)}</ol></section>
        <section><p className="kicker">Demonstrated outcome</p><h2>Two required datasets. Three submissions. One approved archive.</h2><p>In the browser walkthrough, the first valid upload left the cycle at 1 of 2 datasets complete. After the second dataset arrived, the manager rejected the cycle with a reason. A replacement became version 2 while version 1 remained in history.</p><p>Approval locked program A version 1 and program B version 2. The archive retained those exact versions and their SHA-256 checksums. Repeating archive verification returned the same archive.</p>
          <figure className="reporting-evidence"><a href="/case-studies/aws-health-reporting/archive-status.png" target="_blank" rel="noreferrer"><img src="/case-studies/aws-health-reporting/archive-status.png" width="1265" height="712" alt="Local reporting portal showing Archived status, two of two required datasets validated, and current versions one and two." loading="lazy" /></a><figcaption>Captured from the local synthetic-data walkthrough. The two sample datasets remain separate reports; their totals are not a unique population count.</figcaption></figure>
        </section>
        <section><p className="kicker">Engineering decisions</p><h2>Make changes and failures traceable.</h2><dl className="reporting-decisions">
          <div><dt>Current version determines readiness</dt><dd>A failed replacement blocks review even when an older file passed. Late validation of an older upload cannot make it current again.</dd></div>
          <div><dt>Serialize state changes</dt><dd>SQLite write transactions protect version allocation and manager decisions. Review requests include the revision the manager saw.</dd></div>
          <div><dt>Bind approval to report content</dt><dd>The approval snapshot records versions and hashes. Missing or changed report files stop the archive operation.</dd></div>
          <div><dt>Give retries a stable destination</dt><dd>The archive uses the approval identifier as its destination and writes the manifest last. After a storage failure, the cycle remains approved and the operation can be retried.</dd></div>
        </dl></section>
        <section><p className="kicker">Verification</p><h2>Exercise the paths that can change the result.</h2><p>Thirty backend tests passed, including required-dataset completeness, failed replacements, stale approvals, role restrictions, concurrent version allocation, legacy-state migration, and archive recovery. Two repository checks, lint, and the frontend production build also passed.</p><p>The browser walkthrough covered configuration, uploads, aggregate review, rejection, replacement, approval, and archive verification. Invalid CSV and storage-failure scenarios were checked through automated API tests. These results describe software behavior; no reporting-time savings or production health outcomes were measured in this demonstration.</p></section>
        <section><p className="kicker">AWS architecture and next work</p><h2>Carry the same reporting rules into cloud processing.</h2><p>The repository includes an AWS architecture and infrastructure definitions using S3, EventBridge, Step Functions, Lambda, and an intended PostgreSQL state layer. The local workflow shares the CSV validation logic used by the Lambda code.</p><p>Connecting cloud events to PostgreSQL, binding submissions to immutable S3 versions, and integrating enterprise identity remain future work. The local role selector simulates permissions. Worker crash recovery, retention automation, and external-agency delivery are also outside the demonstrated scope.</p><p>Approved cycles are locked; later corrections require a new cycle. The archive and database are separate storage systems, so committed Archived status is the completion signal. Docker image validation was unavailable because the local engine was stopped.</p></section>
        <section className="outcome"><p className="kicker">What this project demonstrates</p><p>Data engineering that accounts for the people reviewing the output: explicit requirements, actionable validation, preserved history, and a record of what was approved.</p></section>
      </div>
    </section>
    <section className="next-project section-shell"><p>Continue exploring</p><nav className="case-project-nav" aria-label="Related projects"><a className="all-projects-link" href="/projects">All cloud + data projects <span>→</span></a><div className="case-project-links"><a href="/projects/data/community-health-intelligence">Community Health Operations Intelligence</a><a href="mailto:akqadafi@gmail.com?subject=Public%20Health%20Reporting%20Workflow">Discuss this project</a></div></nav></section>
  </main><SiteFooter /></>;
}
