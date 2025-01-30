import { assets } from "../assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
        <div className="text-center">
            <Image src={assets.logo} alt='logo' className="w-36 mx-auto mb-2"/>
            
            <div className="w-max flex items-center gap-2 mx-auto">
                <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="icon mail" className="w-6"/>
                enzobertolusso@gmail.com

            </div>

        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
            <p>Enzo Bertolusso Scriptal. All rights reserved.</p>
            <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                <li>
                    <a href="https://www.linkedin.com/in/enzobertolusso/" target="_blank">
                        LinkedIn
                    </a>
                </li>
                <li>
                    <a href="https://github.com/enzodb97" target="_blank">
                        GitHub
                    </a>
                </li>
            </ul>
        </div>
        
    </div>
  )
}

export default Footer
