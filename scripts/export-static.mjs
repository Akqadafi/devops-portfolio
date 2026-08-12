import { mkdir, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const workerUrl = pathToFileURL(path.join(root, "dist/server/index.js"));
workerUrl.searchParams.set("static-export", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const environment = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const context = {
  waitUntil() {},
  passThroughOnException() {},
};

const routes = [
  ["/", "index.html"],
  ["/robots.txt", "robots.txt"],
  ["/sitemap.xml", "sitemap.xml"],
];

for (const [route, output] of routes) {
  const response = await worker.fetch(
    new Request(`https://akqadafi.com${route}`),
    environment,
    context,
  );

  if (!response.ok) {
    throw new Error(`Static export failed for ${route}: ${response.status}`);
  }

  const destination = path.join(root, "dist/client", output);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, await response.text(), "utf8");
}

console.log("Static portfolio exported to dist/client");
