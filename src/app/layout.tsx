import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
          rel="stylesheet"
        />

        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
      </head>

      <body
        className={
          inter.className +
          "justify-center items-center flex flex-col w-full h-screen"
        }
      >
        <div className="w-[70%]">
          <header className="w-full">
            <Header />
          </header>
          <div className="w-full">{children}</div>
        </div>
      </body>
    </html>
  );
}