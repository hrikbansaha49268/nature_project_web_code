import { Inter } from "next/font/google";
import "./globals.css";
import FooterCom from "@/components/FooterCom";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center">
          <Nav />
        </nav>
        {children}
        <FooterCom />
      </body>
    </html>
  );
}
