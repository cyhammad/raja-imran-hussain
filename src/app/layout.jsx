import { Sofia_Sans_Condensed as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Raja Imran Hussain | Portfolio",
  description:
    "First Disable in History of Pakistan Who Contested General Election",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
