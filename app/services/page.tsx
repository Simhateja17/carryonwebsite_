import type { Metadata } from "next";
import "@/styles/services.css";
import { ServicesPageContent } from "@/components/pages/ServicesPageContent";

export const metadata: Metadata = {
  title: "Services — CarryOn",
  description: "Enterprise logistics infrastructure — bulk delivery, route optimization, transparent pricing.",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
