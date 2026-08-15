export type Project = {
  slug: string;
  number: string;
  title: string;
  category: "Cloud & DevOps" | "Data & Research";
  summary: string;
  challenge: string;
  highlights: string[];
  tags: string[];
  href: string;
  metric?: string;
  metricLabel?: string;
  repositoryHref?: string;
};

export const devopsProjects: Project[] = [
  {
    slug: "secure-aws-platform",
    number: "01",
    title: "Secure AWS Application Platform",
    category: "Cloud & DevOps",
    summary: "A production-minded AWS foundation built with Terraform: private workloads, layered ingress security, centralized observability, and tested incident workflows.",
    challenge: "Expose an application safely while keeping compute and data private—and make the platform operable when something fails.",
    highlights: ["Route 53, ACM, ALB, and AWS WAF at the public edge", "Private EC2 and RDS with SSM access and VPC endpoints", "CloudWatch telemetry plus ALB and WAF logs", "Lambda, S3, SNS, and Bedrock-assisted incident reporting"],
    tags: ["Terraform", "AWS", "Security", "Observability"],
    href: "https://github.com/Akqadafi/aws-secure-application-platform",
  },
  {
    slug: "multi-region-residency",
    number: "02",
    title: "Multi-Region Data Residency Platform",
    category: "Cloud & DevOps",
    summary: "A verifiable cross-region architecture that keeps regulated data in Tokyo while serving application compute from São Paulo over private connectivity.",
    challenge: "Meet a strict residency boundary without sacrificing resilient application delivery or audit-ready proof.",
    highlights: ["RDS constrained to Tokyo; compute deployed in São Paulo", "Private Transit Gateway peering with explicit routes", "CloudFront, WAF, and a protected ALB origin", "CloudTrail and validation evidence for residency and traffic flow"],
    tags: ["Multi-region", "Networking", "Compliance", "Terraform"],
    href: "https://github.com/Akqadafi/aws-multi-region-data-residency-platform",
  },
  {
    slug: "familiar-automation",
    number: "03",
    title: "Familiar: Local Automation Server",
    category: "Cloud & DevOps",
    summary: "A local, standard-library Python MCP server that turns a Markdown knowledge base into a searchable, maintainable second brain.",
    challenge: "Make personal knowledge useful across sessions without sending private notes to a hosted database.",
    highlights: ["Save, search, read, and write workflows for a local vault", "Daily briefs, inbox triage, and project summaries", "Duplicate and contradiction auditing", "Installer, smoke tests, full tests, and operational documentation"],
    tags: ["Python", "Automation", "MCP", "Testing"],
    href: "https://github.com/Akqadafi/familiar-second-brain",
  },
];

export const dataProjects: Project[] = [
  {
    slug: "teen-participation",
    number: "D01",
    title: "Where Are the Teens?",
    category: "Data & Research",
    summary: "A mixed-methods study of participation in a virtual youth program that turned behavioral evidence into a new engagement strategy.",
    challenge: "Understand why teens were not participating consistently in a Facebook-based virtual program and identify practical levers for change.",
    highlights: ["Survey analysis and staff/member focus groups", "Multiple regression to identify significant participation predictors", "Research-backed Instagram engagement strategy", "Post-launch validation using participation and engagement trends"],
    tags: ["Regression", "Mixed Methods", "Program Evaluation", "Strategy"],
    href: "/projects/data/teen-participation",
    metric: "35%",
    metricLabel: "increase in active teen participation after the strategy launched",
  },
  {
    slug: "virtual-club-ux",
    number: "D02",
    title: "Virtual Club UX Study",
    category: "Data & Research",
    summary: "A usability evaluation of online learning modules combining surveys, interviews, task testing, and a prioritized error taxonomy.",
    challenge: "Find the specific content and platform issues preventing teens from completing virtual learning modules.",
    highlights: ["30 participants ages 13–18", "Surveys, interviews, and task-based usability testing", "Critical, major, minor, and cosmetic error classification", "Prioritized recommendations tied to observed failure points"],
    tags: ["UX Research", "Usability Testing", "Interviews", "Analysis"],
    href: "/projects/data/virtual-club-ux",
    metric: "70%",
    metricLabel: "of participants found the modules engaging and easy to understand",
  },
  {
    slug: "diy-stem",
    number: "D03",
    title: "Unlocking the Power of DIY STEM",
    category: "Data & Research",
    summary: "A two-part segmentation and program-impact study that shaped a hands-on STEM curriculum and tested it against the standard program.",
    challenge: "Design a STEM program around member preferences, then determine whether the new curriculum improved youth outcomes.",
    highlights: ["Latent class analysis identified three learner segments", "255 participants across DIY and standard curricula", "Mixed-design ANOVA across interest, understanding, and efficacy", "Findings translated into curriculum guidance"],
    tags: ["Latent Class Analysis", "ANOVA", "Segmentation", "Impact Evaluation"],
    href: "/projects/data/diy-stem",
    metric: "255",
    metricLabel: "participants in the comparative curriculum evaluation",
  },
  {
    slug: "marginalized-youth",
    number: "D04",
    title: "Investing in Our Future",
    category: "Data & Research",
    summary: "A community-centered mixed-methods study of education, safety, resources, and resilience among marginalized youth.",
    challenge: "Turn lived experiences and survey evidence into concrete recommendations for community investment and youth support.",
    highlights: ["Interviews with teachers, parents, and young people", "Student survey on attainment, violence, and education quality", "Integrated themes of alienation, resilience, and access", "Actionable recommendations for programs, schools, and funders"],
    tags: ["Qualitative Research", "Survey Research", "Community Data", "Policy"],
    href: "/projects/data/marginalized-youth",
  },
  {
    slug: "community-health-intelligence",
    number: "D05",
    title: "Community Health Operations Intelligence",
    category: "Data & Research",
    summary: "A decision intelligence platform that combines public CDC, Census, and CMS data to prioritize healthcare outreach and resource investment across Arizona counties.",
    challenge: "Where should a health system or public-health team invest limited outreach, mobile-clinic, care-coordination, or grant resources first?",
    highlights: ["Reproducible ingestion for CDC PLACES, Census ACS, and CMS hospital data", "Explainable four-domain priority score with explicit missing-data treatment", "Interactive county profiles and budget-aware resource allocation simulator", "Automated tests, data contracts, lineage, Docker, GitHub Actions, and Terraform"],
    tags: ["Healthcare Analytics", "Python", "Streamlit", "Terraform"],
    href: "/projects/data/community-health-intelligence",
    repositoryHref: "https://github.com/Akqadafi/healthcare-decision-intelligence-platform",
    metric: "15",
    metricLabel: "Arizona counties scored with public aggregate data",
  },
];
