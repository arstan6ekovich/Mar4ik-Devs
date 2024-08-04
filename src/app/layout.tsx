import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import LayoutPage from "@/components/layout/LayoutPage";
// import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mar4ik Dev | Full-Stack Developer",
  description: "Next Js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutPage>{children}</LayoutPage>
      </body>
    </html>
  );
}
