import "@/styles/globals.css";
import { Layout } from "@/components/layout";
import type { AppProps } from "next/app";
import { Geist, Geist_Mono, PT_Sans_Caption, Inter } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ptSansCaption = PT_Sans_Caption({
  variable: "--font-pt-sans-caption",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} ${ptSansCaption.variable} ${inter.variable} bg-black text-white min-h-screen font-sans`}>

      <Layout>
      <Component {...pageProps} />
      </Layout>
    </div>
  );
}
