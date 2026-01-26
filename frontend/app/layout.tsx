import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Skogbunn Mikromusheri",
  description: "Kortreist matsopp, rett fra gården. Skogbunn Mikromusheri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
