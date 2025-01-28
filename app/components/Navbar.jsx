"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="fondo de color"
          className="w-full"
        />
      </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        <Link href={"/"}>
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-24"
            alt="Logo de Scriptal"
          />
        </Link>
        <ul className="hidden lg:flex items-center gap-6 lg:gap8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <Link href={"#top"}>Inicio</Link>
          </li>
          <li>
            <Link href={"#about"}>Sobre mi</Link>
          </li>
          <li>
            <Link href={"#Services"}>Servicios</Link>
          </li>
          <li>
            <Link href={"#work"}>Mis trabajos</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contactar</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image
              src={assets.moon_icon}
              alt="luna modo dark"
              className="w-6"
            />
          </button>

          <Link
            href={"#contact"}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            {" "}
            Contacto
            <Image
              src={assets.arrow_icon}
              className="w-3"
              alt="Flecha de contacto"
            />{" "}
          </Link>
          <button className="block lg:hidden ml-3">
            <Image
              src={assets.menu_black}
              alt="menu modo dark"
              className="w-6"
            />
          </button>
        </div>
        {/*Mobile menu */}
        <ul className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-0 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500">
          <li>
            <Link href={"#top"}>Inicio</Link>
          </li>
          <li>
            <Link href={"#about"}>Sobre mi</Link>
          </li>
          <li>
            <Link href={"#Services"}>Servicios</Link>
          </li>
          <li>
            <Link href={"#work"}>Mis trabajos</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contactar</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
