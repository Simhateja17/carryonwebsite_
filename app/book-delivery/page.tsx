import type { Metadata } from "next";
import "@/styles/book-delivery.css";
import { BookDeliveryPageContent } from "@/components/pages/BookDeliveryPageContent";

export const metadata: Metadata = {
  title: "Book Delivery - CarryOn",
  description: "Book a delivery with city selection, address inputs, and transparent fare estimate.",
};

export default function BookDeliveryPage() {
  return <BookDeliveryPageContent />;
}
