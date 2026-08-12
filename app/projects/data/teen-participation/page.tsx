import type { Metadata } from "next";
import { DataCaseStudy } from "../../../components/data-case-study";
import { dataProjects } from "../../../portfolio-data";

export const metadata: Metadata = { title: "Where Are the Teens?", description: "Mixed-methods research case study on virtual youth-program participation and a validated engagement strategy.", alternates: { canonical: "/projects/data/teen-participation" } };
const project = dataProjects.find((item) => item.slug === "teen-participation")!;

export default function Page() { return <DataCaseStudy project={project} findings={["Access to technology, enjoyment, and desire for recognition emerged as significant predictors of participation.", "Teens wanted more influence over programming and a space where peers would actually see their work.", "Staff viewed the virtual program positively, but platform and social constraints limited sustained teen engagement."]} outcome="The evidence led to a dedicated teen Instagram presence where staff could cross-post activities and young people could share news, art, and project work. In the weeks after launch, active teen participation increased by 35%, alongside gains in posting and engagement." />; }

