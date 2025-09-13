import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Vishnu Vivek for SDE internship opportunities and full-stack development roles. Open to new opportunities and collaborations.",
  openGraph: {
    title: "Contact | Vishnu Vivek",
    description: "Get in touch with Vishnu Vivek for SDE internship opportunities and full-stack development roles.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}


