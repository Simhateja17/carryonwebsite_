import type { Metadata } from "next";
import "@/styles/legal.css";
import { PrivacyPageContent } from "@/components/pages/PrivacyPageContent";

export const metadata: Metadata = {
  title: "Privacy Policy — CarryOn",
  description: "How CarryOn Logistics safeguards your personal data and privacy.",
};

export default function PrivacyPage() {
  return <PrivacyPageContent />;
}
