import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

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
      <Head>
        {" "}
        {/* Add Head component here */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
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
