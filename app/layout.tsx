import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/Header/page";
import { MenuContextWrapper } from "./components/Context/menuContext";
import ThemeContextWrapper from "./components/Context/themeContextWrapper";
import Footer from "./components/Footer/page";

const metadata: Metadata = {
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
        <body className="relative h-screen">
          <MenuContextWrapper>
            <Header />
          </MenuContextWrapper>
          {children}
          <Footer />
        </body>
      </html>
    </ThemeContextWrapper>
  );
}
