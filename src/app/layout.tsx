import { Footer, Header } from "@/components";
import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "./Providers";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Sabiq Prasetyo",
    default: "Sabiq Prasetyo",
  },
  description: "Welcome to my webpage, the place where you can get to know me better!",
  alternates: {
    canonical: "https://sabiqprasetyo.vercel.app/",
  },
  authors: [{ name: "Sabiq Prasetyo" }],
  creator: "Sabiq Prasetyo",
  publisher: "Sabiq Prasetyo",
  keywords: ["Sabiq Prasetyo", "Webpage", "Web Portofolio"],
  applicationName: "Sabiq Prasetyo's Webpage",
  openGraph: {
    title: "Sabiq Prasetyo",
    description: "Welcome to my webpage, the place where you can get to know me better!",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Providers>
        <body className={`${inter.className} bg-secondary2 dark:bg-secondary1`}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
