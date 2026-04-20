import type { Metadata } from "next";
import "@/styles/contact-sales.css";
import { ContactSalesPageContent } from "@/components/pages/ContactSalesPageContent";

export const metadata: Metadata = {
  title: "Contact Sales — CarryOn",
  description: "Join the CarryOn fleet. Drive your future with flexible hours and steady demand.",
};

export default function ContactSalesPage() {
  return <ContactSalesPageContent />;
}
