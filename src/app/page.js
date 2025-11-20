"use client";
import { useTranslation } from "react-i18next";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Why from "./sections/Why";
import Types from "./sections/Types";
import Category from "./sections/Category";
import Footer from "./components/Footer";


export default function Home() {

  const { t } = useTranslation();

  return (
   <div className="">
      <Hero/>
      <Types/>
      <Category/>
      <Services/>
      <Why/>
      <Footer/>
    </div>
  );
}
