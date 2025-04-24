import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { TRPCReactProvider } from "@/trpc/client";

const dm_sans = DM_Sans({
  subsets: ["latin"],

})

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Glimroad",
    template: "Glimroad %s"
  },
  description: "Glimroad is a platform for creators to monetize their content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dm_sans.className} antialiased`}
      >
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
