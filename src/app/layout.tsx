import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dall-E",
  description: "DALL_E built with next js, prisma, tailwindcss and typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-openAI_Secondary">
        <Header />
        {children}
      </body>
    </html>
  );
}
