import type { Metadata } from "next";
import { DataCaseStudy } from "../../../components/data-case-study";
import { dataProjects } from "../../../portfolio-data";

export const metadata: Metadata = { title: "Investing in Our Future", description: "Community-centered research on educational access, violence, resources, and resilience among marginalized youth.", alternates: { canonical: "/projects/data/marginalized-youth" } };
const project = dataProjects.find((item) => item.slug === "marginalized-youth")!;

export default function Page() { return <DataCaseStudy project={project} findings={["Neighborhood violence affected school attendance and young people's sense of safety.", "Participants described alienation from schools alongside limited access to educational, employment, and mental-health resources.", "Family and community support remained powerful sources of resilience, hope, and a desire to give back."]} outcome="The work connected community evidence to a specific investment agenda: violence prevention, trauma-informed support, tutoring and mentoring, deeper community engagement, and increased public funding for education and youth programs." />; }
