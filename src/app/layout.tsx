import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI活用研修 2026 | チャット型AIからIDE型AIへ",
  description: "生成AIを「使う」段階から「組み合わせて業務を再設計する」段階へ。チャット型AIからIDE型AIへの変革を、ともにチャレンジしましょう。",
  keywords: ["AI研修", "生成AI", "ChatGPT", "NotebookLM", "IDE", "業務効率化"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
