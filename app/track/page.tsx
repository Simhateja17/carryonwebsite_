import type { Metadata } from "next";
import "@/styles/track.css";
import { TrackPageContent } from "@/components/pages/TrackPageContent";

export const metadata: Metadata = {
  title: "Live Tracking - CarryOn",
  description: "Track your delivery in real-time with live coordinates, driver info, and delivery timeline.",
};

export default function TrackPage() {
  return <TrackPageContent />;
}

