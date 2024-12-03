import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { PopupWidget } from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crie E-mails Profissionais",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
