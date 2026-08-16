import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the DevOps portfolio", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Ahmad Qadafi \| AWS DevOps &amp; Cloud Engineer/);
  assert.match(html, /Cloud systems\./);
  assert.match(html, /Secure AWS Application Platform/);
  assert.match(html, /Multi-Region Data Residency Platform/);
  assert.match(html, /Unlocking the Power of DIY STEM/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /Your site is taking shape|SkeletonPreview/);
});

test("renders the project hub and migrated data case studies", async () => {
  const projects = await (await render("/projects")).text();
  assert.match(projects, /Where Are the Teens\?/);
  assert.match(projects, /Virtual Club UX Study/);
  assert.match(projects, /Unlocking the Power of DIY STEM/);
  assert.match(projects, /Investing in Our Future/);
  assert.match(projects, /Community Health Operations Intelligence/);

  const caseStudy = await (await render("/projects/data/diy-stem")).text();
  assert.match(caseStudy, /Latent class analysis/);
  assert.match(caseStudy, /255/);
  assert.match(caseStudy, /From evidence to action/);

  const healthCaseStudy = await (await render("/projects/data/community-health-intelligence")).text();
  assert.match(healthCaseStudy, /CDC PLACES/);
  assert.match(healthCaseStudy, /75\.1/);
  assert.match(healthCaseStudy, /github\.com\/Akqadafi\/healthcare-decision-intelligence-platform/);
  assert.match(healthCaseStudy, /Browse another case study/);
  assert.match(healthCaseStudy, /\/projects\/data\/teen-participation/);
  assert.match(healthCaseStudy, /\/projects\/data\/virtual-club-ux/);
});

test("includes recruiter contact and public project destinations", async () => {
  const html = await (await render()).text();
  assert.match(html, /mailto:akqadafi@gmail\.com/);
  assert.match(html, /github\.com\/Akqadafi\/aws-secure-application-platform/);
  assert.match(html, /linkedin\.com\/in\/ahmad-qadafi-phd-67503381/);
});
