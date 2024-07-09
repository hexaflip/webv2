import type { Metadata } from "next";
import { Roboto } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Thomas Laskowski",
  description: "My Stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main>{children}</main>
        <Toaster />
        </body>
    </html>
  );
}
