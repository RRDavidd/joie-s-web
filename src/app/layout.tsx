import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const blankRiver = localFont({
  src: [{ path: "../../public/fonts/blank_river.ttf" }],
  variable: "--blankRiver",
});

export const metadata: Metadata = {
  title: "Joiebells",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${blankRiver.variable}`}>{children}</body>
    </html>
  );
}
