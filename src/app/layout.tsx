import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Almaas Family Childcare",
  description: "A trusted and reliable family childcare provider, offering a safe and nurturing environment for children in Covington, WA.",
  keywords: "childcare, daycare, preschool, family childcare, covington, wa",
  openGraph: {
    title: "Almaas Family Childcare",
    description:
      "A trusted and reliable family childcare provider, offering a safe and nurturing environment for children in Covington, WA.",
    type: "website",
    siteName: "Almaas Family Childcare",
    url: "https://www.almaaschildcare.com/",

    images: [
      {
        url: "https://almaaschildcare.com/https://res.cloudinary.com/dqwh1u64w/image/upload/v1723317248/almaas-transparent_f7hkqj.png",
        width: 500,
        height: 500,
        alt: "Almaas Family Childcare",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* google analytics */}
      </head>
      <body>
       {/* google tags */}
        
          <div className="relative flex min-h-dvh flex-col bg-background">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
       
      </body>
    </html>
  );
}
