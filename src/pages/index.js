import Image from "next/image";
import { Inter } from "next/font/google";
import Index from "@/components/landing/hero"
import ServicesGrid from "@/components/landing/services";
import ProcessSteps from "@/components/landing/card";
import TestimonialsSection from "@/components/landing/testimonies";
import ContactForm from "@/components/landing/contact";
import ComparisonTable from "@/components/landing/table";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <Index />
      <ServicesGrid />
      <ProcessSteps/>
      <ComparisonTable/>
      <TestimonialsSection/>
      <ContactForm/>
    </main>
  );
}
