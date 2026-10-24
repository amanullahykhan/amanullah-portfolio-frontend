import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}