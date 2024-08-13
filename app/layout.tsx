import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

// Import Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "The Literature Project",
  description: "The Black Literature Project focuses on educating, empowering, and celebrating literature created by British writers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className={`${poppins.className} font-aloja`}>{children}</main>
      </body>
    </html>
  );
}
