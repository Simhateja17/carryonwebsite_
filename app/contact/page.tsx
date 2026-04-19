import type { Metadata } from "next";
import "@/styles/contact.css";
import { ContactPageContent } from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — CarryOn",
  description: "Get in touch with CarryOn support. We're here to help with any questions about our delivery services.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
