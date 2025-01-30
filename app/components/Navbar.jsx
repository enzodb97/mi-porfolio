"use client";

import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false); // Cambiado useEffect por useState

  const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="fondo de color"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center 
        justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <Link href={"/"}>
          <Image
            src={assets.logo}
            className="w-28 cursor-pointer mr-24"
            alt="Logo de Scriptal"
          />
        </Link>
        <ul
          className={`hidden lg:flex items-center gap-6 lg:gap-8 
          rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white750 dark:bg-transparent"
          } `}
        >
          <li>
            <Link href={"#top"}>Inicio</Link>
          </li>
          <li>
            <Link href={"#about"}>Sobre mi</Link>
          </li>
          <li>
            <Link href={"#services"}>Servicios</Link>
          </li>
          <li>
            <Link href={"#work"}>Mis trabajos</Link>
          </li>
          <li>
            <Link href={"#contact"}>Contactar</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="luna modo dark"
              className="w-6"
            />
          </button>

          <Link
            href={"#contact"}
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Lato dark:border-white/50"
          >
            
            Contacto
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="Flecha de contacto"
            />
          </Link>
          <button className="block lg:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu modo dark"
              className="w-6"
            />
          </button>
        </div>
        {/*Mobile menu */}
        <ul
          ref={sideMenuRef}
          className="flex lg:hidden flex-col gap-4 py-20 px-10 fixed 
          -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="boton para cerrar el navbar"
            ></Image>
          </div>
          <li>
            <Link href={"#top"} onClick={closeMenu}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href={"#about"} onClick={closeMenu}>
              Sobre mi
            </Link>
          </li>
          <li>
            <Link href={"#services"} onClick={closeMenu}>
              Servicios
            </Link>
          </li>
          <li>
            <Link href={"#work"} onClick={closeMenu}>
              Mis trabajos
            </Link>
          </li>
          <li>
            <Link href={"#contact"} onClick={closeMenu}>
              Contactar
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
