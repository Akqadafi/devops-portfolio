import type { Metadata } from "next";
import { DataCaseStudy } from "../../../components/data-case-study";
import { dataProjects } from "../../../portfolio-data";

export const metadata: Metadata = { title: "DIY STEM Comparative Study", description: "Segmentation and impact-evaluation case study comparing hands-on and standard STEM curricula.", alternates: { canonical: "/projects/data/diy-stem" } };
const project = dataProjects.find((item) => item.slug === "diy-stem")!;

export default function Page() { return <DataCaseStudy project={project} findings={["Latent class analysis surfaced DIY enthusiasts, tech-savvy learners, and fun explorers—three groups with meaningfully different program preferences.", "Both curricula improved STEM interest, understanding, and efficacy from pre-test to post-test.", "The DIY curriculum produced stronger results for STEM interest and STEM efficacy than the standard curriculum."]} outcome="The segmentation work shaped a hands-on DIY curriculum, and the comparative evaluation tested whether that design choice worked. The result gave educators evidence to favor engaging, project-based learning while continuing to investigate the more complex drivers of STEM understanding." />; }

