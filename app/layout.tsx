import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/page";
import ThemeContextWrapper from "./components/Context/themeContextWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of my portifolio",
};

// export async function generateMetadata({
//   params,
// }: {
//   params: {
//     id: number;
//   };
// }) {
//   return {
//     title: `Meu TODO #${params.id}`,
//   };
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContextWrapper>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </ThemeContextWrapper>
  );
}
