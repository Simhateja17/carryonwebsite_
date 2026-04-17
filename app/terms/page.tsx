import type { Metadata } from "next";
import "@/styles/terms.css";
import { TermsPageContent } from "@/components/pages/TermsPageContent";

export const metadata: Metadata = {
  title: "Terms of Service — CarryOn",
  description: "CarryOn Logistics terms of service and compliance documentation.",
};

export default function TermsPage() {
  return <TermsPageContent />;
}
