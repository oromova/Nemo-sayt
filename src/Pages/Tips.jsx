import { useTranslation } from 'react-i18next';
import img1 from '../assets/tips1.jpg'
import img2 from '../assets/tips2.jpg'
import img3 from '../assets/tips3.jpg'
import img4 from '../assets/tips4.jpg'
import GenericButton from '../Components/Generics/Button';

export const Tips = () => {
    const {t} = useTranslation();

  return (
    <section className='px-4 my-2.5' id='tours'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>{t("Turlar")}</h1>
        <p className='text-xl text-gray-600'>{t("Eng yaxshi sayohat turlari")}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
        {/* 1 */}
        <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
          <div className='w-full h-[200px]'>
            <img className='w-full h-full rounded-tl-lg rounded-tr-lg object-cover'
             src={img1} alt="o'zbekiston" />
          </div>
          <div className='p-6'>
            <h1 className='font-bold text-xl mb-2'>{t("O'zbekiston bo'ylab sayohat")}</h1>
            <p className='mb-4 text-gray-600'>{t("O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar")}</p>
            <a href="#contact">
              <GenericButton name='Batafsil'/>
            </a>
          </div>
        </div>
        {/* 2 */}
        <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
          <div className='w-full h-[200px]'>
            <img className='w-full h-full rounded-tl-lg rounded-tr-lg object-cover'
             src={img2} alt="turkiya" />
          </div>
          <div className='p-6'>
            <h1 className='font-bold text-xl mb-7'>{t("Turkiya bo'ylab sayohat")}</h1>
            <p className='mb-4 text-gray-600'>{t("Istanbul, Antalya, Kappadokiya - eng mashhur joylar")}</p>
            <a href="#contact">
              <GenericButton name='Batafsil'/>
            </a>
          </div>
        </div>
        {/* 3 */}
        <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
          <div className='w-full h-[200px]'>
            <img className='w-full h-full rounded-tl-lg rounded-tr-lg object-cover'
             src={img3} alt="dubay" />
          </div>
          <div className='p-6'>
            <h1 className='font-bold text-xl mb-7'>{t("Dubay bo'ylab sayohat")}</h1>
            <p className='mb-4 text-gray-600'>{t("Zamonaviy arxitektura va hashamatli savdo markazlari")}
            </p>
            <a href="#contact">
              <GenericButton name='Batafsil'/>
            </a>
          </div>
        </div>
        {/* 4 */}
        <div className='shadow-lg rounded-bl-lg rounded-br-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
          <div className='w-full h-[200px]'>
            <img className='w-full h-full rounded-tl-lg rounded-tr-lg object-cover'
             src={img4} alt="yevropa" />
          </div>
          <div className='p-6'>
            <h1 className='font-bold text-xl mb-7'>{t("Yevropa bo'ylab sayohat")}</h1>
            <p className='mb-4 text-gray-600'>{t("Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar")}
            </p>
            <a href="#contact">
              <GenericButton name='Batafsil'/>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
