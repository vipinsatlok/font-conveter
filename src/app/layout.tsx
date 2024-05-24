import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Font Converter",
  description: "Font Converter by Vipin Das",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`background ${inter.className}`}
      >
        <div className="w-full lg:w-[70%] flex-1">
          <header className="w-full">
            <Header />
            <img src="./guru.png" className="w-full" alt="" />
          </header>
          <div className="w-full mt-10">
            {children}</div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
