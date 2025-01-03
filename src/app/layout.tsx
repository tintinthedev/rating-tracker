import type { Metadata } from "next";
import { JetBrains_Mono as font } from "next/font/google";
import "./globals.css";

const customFont = font({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Chess.com rating tracker",
  description:
    "Track your chess.com rating progress easily by just entering your username",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${customFont.className}`}>{children}</body>
    </html>
  );
}
