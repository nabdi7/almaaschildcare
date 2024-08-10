import React from "react";
import { Metadata } from "next";
import Contact from "@/components/contact/Contact";

export const metadata: Metadata = {
  title: "Contact | Almaas Family Childcare",
  description: "Contact Almaas Family Childcare for more information about our childcare programs and enrollment.",
};

const page = () => {
  return <Contact />;
};

export default page;
