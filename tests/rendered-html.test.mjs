import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
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
  assert.match(html, /Secure cloud systems\./);
  assert.match(html, /Secure AWS Application Platform/);
  assert.match(html, /Multi-Region Data Residency Platform/);
  assert.match(html, /Familiar: Local Automation Server/);
  assert.match(html, /application\/ld\+json/);
  assert.doesNotMatch(html, /Your site is taking shape|SkeletonPreview/);
});

test("includes recruiter contact and public project destinations", async () => {
  const html = await (await render()).text();
  assert.match(html, /mailto:akqadafi@gmail\.com/);
  assert.match(html, /github\.com\/Akqadafi\/aws-secure-application-platform/);
  assert.match(html, /linkedin\.com\/in\/ahmad-qadafi-phd-67503381/);
});
