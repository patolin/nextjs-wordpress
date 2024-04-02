import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Header} from '@/components/Header';
import Footer from "@/components/Footer";

import SectionContainer from "@/components/SectionContainer";
const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Patolin Next.js Blog",
  description: "Blog de www.patolin.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
                <Header />
                <main className="mb-auto">{children}</main>
                <Footer/>
            </div>
          </SectionContainer>  
      </body>

    </html>
  );
}
