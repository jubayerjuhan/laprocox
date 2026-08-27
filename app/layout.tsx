import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Laprocox — Custom software, built from scratch",
  description:
    "Laprocox designs and engineers custom websites, mobile apps, CRMs and SaaS platforms end to end. One team, from the first whiteboard to the release that ships.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
