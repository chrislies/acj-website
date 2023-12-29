import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ACJ International Realty LLC",
  description: "ACJ International Realty LLC Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden min-h-screen">
          {children}
        </main>
        {/* <main className="">{children}</main> */}
        <Footer />
      </body>
    </html>
  );
}
