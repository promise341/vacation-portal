import type {Metadata} from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata:Metadata={
  title:"Vacation Support Portal",
  description:"Independent vacation information and application support portal."
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        <Script 
          src="//code.jivosite.com/widget/XBfGo1KG1T" 
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
