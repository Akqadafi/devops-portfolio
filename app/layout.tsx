import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://akqadafi.com"),
  title: { default: "Ahmad Qadafi | AWS DevOps & Cloud Engineer", template: "%s | Ahmad Qadafi" },
  description: "AWS DevOps and Cloud Engineer with a decade of experience in data systems, research, automation, and production-minded infrastructure.",
  keywords: ["AWS DevOps Engineer", "Cloud Engineer", "Data Engineer", "Terraform", "AWS", "Infrastructure as Code", "Data Analysis", "Program Evaluation"],
  authors: [{ name: "Ahmad Qadafi" }],
  creator: "Ahmad Qadafi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", url: "https://akqadafi.com", title: "Ahmad Qadafi | AWS DevOps & Cloud Engineer",
    description: "Cloud systems and data intelligence. Explore AWS, Terraform, automation, analytics, UX research, and evaluation projects.",
    siteName: "Ahmad Qadafi — Cloud Engineering & Data Systems",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Ahmad Qadafi — Cloud Engineering and Data Systems" }],
  },
  twitter: { card: "summary_large_image", title: "Ahmad Qadafi | AWS DevOps & Cloud Engineer", description: "Cloud systems and data intelligence.", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
