import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@/features/common/components/PageContainer";

export const metadata: Metadata = {
  title: "AWVRE Music",
  description: "The offical website of AWVRE Music",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <html lang="en">
        <body>
        <PageContainer>
        {children}
        </PageContainer>
        </body>
      </html>

);
}
