import Navbar from "./components/Navbar";
import "./globals.css";
import InitI18n from "./initI18n";
import { Amiri } from "next/font/google";


const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Cars Gallary",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={amiri.className}>
        <InitI18n />
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
