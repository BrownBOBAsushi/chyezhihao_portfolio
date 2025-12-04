import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chye Zhi Hao | Applied Computing (FinTech) Student · AI & Web3 Enthusiast",
  description:
    "Year 1 Applied Computing (FinTech) student at Singapore Institute of Technology. Passionate about AI, blockchain, and emerging technologies. Active hackathon participant with interests in FinTech innovation and Web3 infrastructure.",
  keywords: [
    "Chye Zhi Hao",
    "FinTech",
    "Applied Computing",
    "AI",
    "Web3",
    "Blockchain",
    "Singapore Institute of Technology",
    "Portfolio",
  ],
  authors: [{ name: "Chye Zhi Hao" }],
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    title: "Chye Zhi Hao | Applied Computing (FinTech) Student",
    description:
      "Year 1 Applied Computing (FinTech) student passionate about AI, blockchain, and emerging technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chye Zhi Hao | Applied Computing (FinTech) Student",
    description:
      "Year 1 Applied Computing (FinTech) student passionate about AI, blockchain, and emerging technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
