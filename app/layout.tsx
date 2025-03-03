import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "ACJ International Realty LLC",
  description:
    "ACJ International Realty LLC offers expert consulting services in the commercial real estate sector. We specialize in assisting international companies in expanding their business within New York and New Jersey.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden min-h-screen">{children}</main>
        {/* <main className="">{children}</main> */}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
