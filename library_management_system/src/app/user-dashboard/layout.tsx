import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../../../components/navbar/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className={inter.className}>
        {children}   
      </div>
    </html>
  );
}
