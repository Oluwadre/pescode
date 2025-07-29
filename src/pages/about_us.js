import Head from "next/head";
import Layout from "@/layout/index";
import Index from "@/components/about/index";
import TeamSection from "@/components/about/team";
// import TestimonialsSection from '../components/TestimonialsSection'

export default function AboutPage() {
  return (
    <main title="About Pescode Technology">
      <Head>
        <meta
          name="description"
          content="Learn about Pescode Technology and our team of security experts"
        />
      </Head>

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Our Company
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Trusted security solutions for homes and businesses since 2010
          </p>
        </div>
      </div>

      <Index />
      <TeamSection />
      {/* <TestimonialsSection /> */}
    </main>
  );
}
