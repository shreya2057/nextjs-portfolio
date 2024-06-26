import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-dvh flex flex-col max-w-screen justify-between">
          <NavBar />
          <div className="flex flex-1 h-full min-w-screen">{children}</div>
          <footer>Test</footer>
        </div>
      </body>
    </html>
  );
}
