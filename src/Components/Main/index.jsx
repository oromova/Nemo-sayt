import Aos from "aos";
import { useEffect } from "react";
import { GenericButton } from "../Generics/Button";
import { useTranslation } from 'react-i18next';

export const Main = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({
      duration: 900,
      easing: 'ease-in-out',
    });
  });

  return (
    <section id="main" className="bg-[var(--primary-color)] w-full h-[741px] text-white flex justify-center">
      <div className='flex flex-col max-w-7xl justify-center items-center text-center'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl mb-4 lg:mb-6 font-bold' data-aos="fade-up">
          {t("Sayohatingizni biz bilan boshlang")}
        </h1>
        <p className='text-2xl pb-12' data-aos="fade-up" data-aos-delay='200'>
          {t("Nemo Travel - huzur uchun yo'l")}
        </p>
        <div className='md:rounded-full p-8 sm:flex justify-between flex-wrap justify-center items-center bg-white md:max-w-4xl gap-8 md:gap-16 mx-auto h-fit text-gray-800 rounded-2xl max-w-2xl  backdrop-blur-sm shadow-lg'>
          {/* 1 */}
          <div className='flex items-start gap-3'>
            <div className="w-10 h-10 mr-3 bg-[var(--primary-color)] rounded-full flex justify-center items-center shrink-0 mb-5">
              <svg className="text-white w-5 h-5 m-auto" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            </div>

            <div className='flex flex-col items-start'>
              <p>{t("Mamnun mijozlar")}</p>
              <p className='font-bold'>45000+</p>
            </div>
          </div>
          {/* 2 */}
          <div className='flex items-start gap-3'>

            <div className="w-10 h-10 mr-3 bg-[var(--primary-color)] rounded-full flex justify-center items-center shrink-0 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"></path></svg>
            </div>
            <div className='flex flex-col items-start'>
              <p>{t("Mamlakatlar")}</p>
              <p className='font-bold'>30+</p>
            </div>
          </div>
          {/* 3 */}
          <div className='flex items-start gap-3'>
            <div className="w-10 h-10 mr-3 bg-[var(--primary-color)] rounded-full flex justify-center items-center shrink-0 mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className=''>
              <p>{t("Tajriba")}</p>
              <p className='font-bold'>{t("5 + yil")}</p>
            </div>
          </div>
          <a href="#contact" className="sm:">
            <GenericButton name="Batafsil ma'lumot" />
          </a>
        </div>
      </div >
    </section >
  );
};
