import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TableNavbar } from "./components/navbar/TableNavbar";
import { ThemeProvider } from "./context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Data Table",
  description: "UI design in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeProvider>
        <body className={inter.className}>
          <TableNavbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
