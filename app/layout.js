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
  title: "Porfolio - Enzo Bertolusso",
  description: "Desarrollador web - Scriptal",
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
