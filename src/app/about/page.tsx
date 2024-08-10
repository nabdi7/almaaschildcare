import React from 'react'
import { Metadata } from "next";
import AboutPage from "@/components/about/Aboutpage";

export const metadata: Metadata = {
  title: "About | Almaas Family Childcare",
  description: "Learn more about Almaas Family Childcare, a trusted and reliable childcare provider in Covington, WA.",
};

const page = () => {
  return (
    <AboutPage />
  )
}

export default page