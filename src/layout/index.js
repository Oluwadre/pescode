import Head from "next/head";
import Navbar from "@/components/ui/nav";
import Footer from "@/components/ui/footer";

export default function Layout({
  children,
  title = "Pepscode Technology - Security Solutions",
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="CCTV, Alarm Systems, Electric Fencing, and Smart Home solutions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}
