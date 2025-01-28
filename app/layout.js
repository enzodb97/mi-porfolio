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
    <html lang="es">
      <body
        className={`${montserratFont.className} ${latoFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
