import type { Metadata } from "next";
import { DataCaseStudy } from "../../../components/data-case-study";
import { dataProjects } from "../../../portfolio-data";

export const metadata: Metadata = { title: "Virtual Club UX Study", description: "A mixed-method usability study of virtual learning modules for teenage participants.", alternates: { canonical: "/projects/data/virtual-club-ux" } };
const project = dataProjects.find((item) => item.slug === "virtual-club-ux")!;

export default function Page() { return <DataCaseStudy project={project} findings={["Interactive activities such as games and polls worked best; long videos and difficult assignments reduced engagement.", "Navigation was generally clear, but video playback failures and unclear quizzes created critical task barriers.", "The error taxonomy separated release-blocking problems from smaller copy and formatting improvements."]} outcome="The study produced a practical improvement sequence: fix playback, clarify quiz instructions, shorten videos, align interactions with learning objectives, and add regular usability checks. That made the research usable as a product-quality backlog rather than a one-time report." />; }

