import Image from 'next/image';
import { workData, assets } from '../assets/assets';

const Work = (isDarkMode) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Lato">Mi porfolio</h4>
      <h2 className="text-center text-5xl font-Montserrat">Mis trabajos</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Montserrat">
        Todos los trabajos hechos
      </p>

      <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg relative cursor-pointer group"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div
              className="bg-white w-10/12 rounded-md absolute bottom-5
            left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7"
            >
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2xp_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover">
        Show More <Image src={isDarkMode ? assets.right_arrow_bold  : assets.right_arrow_bold_dark } alt="right arrow" className="w-4"/>
      </a>
    </div>
  );
};

export default Work;
