import type { Metadata } from "next";
import { Inter, Zen_Antique } from "next/font/google";
import "./globals.css";
import { PageContainer } from "@/features/common/components/PageContainer";

const inter = Inter({ subsets: ["latin"] });
const zenAntique = Zen_Antique({
  subsets: ["latin"],
  weight: ["400"],
});

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
        <body className={[inter.className, zenAntique.className].join(" ")}>
        <PageContainer>
        {children}
        </PageContainer>
        </body>
      </html>

);
}
