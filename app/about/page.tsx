import type { Metadata } from "next";
import "@/styles/about.css";
import { AboutPageContent } from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About — CarryOn",
  description: "CarryOn logistics platform — about us.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
