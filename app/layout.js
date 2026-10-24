import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Amanullah Khan — WordPress Developer & Digital Growth Strategist",
    template: "%s | Amanullah Khan",
  },
  description:
    "Full-stack WordPress developer specializing in custom plugins, automation (n8n), REST API integrations, and performance/SEO.",
  openGraph: {
    title: "Amanullah Khan — WordPress Developer & Digital Growth Strategist",
    description:
      "Full-stack WordPress developer specializing in custom plugins, automation (n8n), REST API integrations, and performance/SEO.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
