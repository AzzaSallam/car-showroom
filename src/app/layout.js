import DirectionController from "./components/DirectionController";
import FacebookBtn from "./components/FacebookBtn";
import Navbar from "./components/Navbar";
import WhatsAppBtn from "./components/WhatsAppBtn";
import "./globals.css";
import InitI18n from "./initI18n";
import { Amiri } from "next/font/google";


const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Cars Gallary",
  icons: {
    icon: "/favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={amiri.className} suppressHydrationWarning={true}>
        <InitI18n />
        <DirectionController/>
        <Navbar/>
        <FacebookBtn/>
        <WhatsAppBtn/>
        {children}
      </body>
    </html>
  );
}
