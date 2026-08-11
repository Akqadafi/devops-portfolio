import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akqadafi.com"),
  title: { default: "Ahmad Qadafi | AWS DevOps & Cloud Engineer", template: "%s | Ahmad Qadafi" },
  description: "AWS DevOps and Cloud Engineer building secure, observable infrastructure with Terraform, Python and production-minded automation.",
  keywords: ["AWS DevOps Engineer", "Cloud Engineer", "Terraform", "AWS", "Infrastructure as Code", "Cloud Security", "CI/CD"],
  authors: [{ name: "Ahmad Qadafi" }],
  creator: "Ahmad Qadafi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "https://akqadafi.com", title: "Ahmad Qadafi | AWS DevOps & Cloud Engineer",
    description: "Secure cloud systems, built to be operated. Explore AWS, Terraform and automation projects with validation evidence.",
    siteName: "Ahmad Qadafi — Cloud Engineering",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ahmad Qadafi — AWS DevOps and Cloud Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Ahmad Qadafi | AWS DevOps & Cloud Engineer", description: "Secure cloud systems, built to be operated.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
