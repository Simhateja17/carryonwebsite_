import type { Metadata } from "next";
import "@/styles/drivers.css";
import { DriversPageContent } from "@/components/pages/DriversPageContent";

export const metadata: Metadata = {
  title: "Drivers — CarryOn",
  description: "Drive with CarryOn — careers and fleet.",
};

export default function DriversPage() {
  return <DriversPageContent />;
}
