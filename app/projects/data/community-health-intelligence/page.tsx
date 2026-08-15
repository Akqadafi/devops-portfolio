import type { Metadata } from "next";
import { DataCaseStudy } from "../../../components/data-case-study";
import { dataProjects } from "../../../portfolio-data";

export const metadata: Metadata = {
  title: "Community Health Operations Intelligence",
  description: "Healthcare decision intelligence case study using public CDC, Census, and CMS data to prioritize Arizona outreach and resource investment.",
  alternates: { canonical: "/projects/data/community-health-intelligence" },
};

const project = dataProjects.find((item) => item.slug === "community-health-intelligence")!;

export default function Page() {
  return <DataCaseStudy
    project={project}
    sourceNote="Built as an end-to-end healthcare analytics, data engineering, and DevOps portfolio project."
    findings={[
      "Apache County ranked first at 75.1/100, with high health burden, social need, transportation barriers, and a 30.5% poverty rate driving the recommendation.",
      "All 15 Arizona counties passed automated schema, coverage, uniqueness, score-range, and recommendation-completeness checks.",
      "The simulator converts a budget and delivery constraint into a ranked deployment scenario while keeping reach assumptions explicit and editable.",
    ]}
    outcome="The result is a decision product rather than a standalone analysis: leaders can see where to invest first, understand why each community ranks where it does, test a resource scenario, and inspect the lineage and limitations behind the recommendation. The repository packages the product with CI, containerization, and safe-by-default AWS infrastructure as code."
  />;
}
