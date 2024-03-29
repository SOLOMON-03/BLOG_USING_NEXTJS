import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Component/Header/header";
import Footer from "@/Component/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col justify-between min-h-[100vh]">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
