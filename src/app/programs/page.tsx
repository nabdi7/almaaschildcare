import React from 'react'
import { Metadata } from "next";
import ProgramsPage from '@/components/programs/ProgramsPage'

export const metadata: Metadata = {
  title: "Programs | Almaas Family Childcare",
  description: "We offer a variety of programs to meet the needs of children and families in Covington, WA.",
};


const page = () => {
  return (
    <ProgramsPage />
  )
}

export default page