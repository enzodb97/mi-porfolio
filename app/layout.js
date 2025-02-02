import { Montserrat, Lato } from "next/font/google";
import "./globals.css";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight:["500", "600", "800"]
});

const latoFont = Lato({
  subsets: ["latin"],
  weight:["400"]
});

export const metadata = {
  title: "Enzo Bertolusso - Portafolio",
  description: "Desarrollador web en Scriptal - Especializado en creación de aplicaciones web y soluciones innovadoras.",
  keywords: "Enzo Bertolusso, desarrollador web, Scriptal, aplicaciones web, soluciones innovadoras, portafolio, desarrollo frontend, desarrollo backend",
  author: "Enzo Bertolusso",
  charset: "UTF-8",
  robots: "index, follow"
};


export default function RootLayout({ children }) {
  return (
    <html lang="es" className="scroll-smooth ">  
      <body
        className={`${montserratFont.className} ${latoFont.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
