import { Sofia_Sans_Extra_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const sofiaSansExtraCondensed = Sofia_Sans_Extra_Condensed({
  subsets: ["latin"],
});

export const metadata = {
  title: "Raja Imran Hussain | Portfolio",
  description:
    "First Disable in History of Pakistan Who Contested General Election",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sofiaSansExtraCondensed.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
