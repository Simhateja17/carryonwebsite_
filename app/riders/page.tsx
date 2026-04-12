import type { Metadata } from "next";
import "@/styles/riders.css";
import { RidersPageContent } from "@/components/pages/RidersPageContent";
import { RidersVehicleTabs } from "@/components/RidersVehicleTabs";

export const metadata: Metadata = {
  title: "Riders — CarryOn",
  description: "Ship and track with CarryOn for riders.",
};

export default function RidersPage() {
  return (
    <>
      <RidersPageContent />
      <RidersVehicleTabs />
    </>
  );
}
