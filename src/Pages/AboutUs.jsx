import React from 'react';
import img1 from '../assets/about1.jpg';
import img2 from '../assets/about2.jpg';
import img3 from '../assets/about3.jpg';
import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className='py-8 px-6 overflow-hidden' id='about'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>{t("Biz haqimizda")}</h1>
        <p className='text-xl text-gray-600'>{t("Sizning ishonchli sayohat hamkoringiz")}</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 '>
        <div className='p-8 rounded-lg shadow-lg' data-aos="fade-right">
          <h2 className='text-2xl font-bold mb-4'>{t("Bizning vazifamiz")}</h2>
          <p className='text-gray-600'>
            {t("Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish")}
          </p>
        </div>
        <div className='p-8 rounded-lg shadow-lg' data-aos="fade-left">
          <h2 className='text-2xl font-bold mb-4'>{t("Bizning maqsadimiz")}</h2>
          <p className='text-gray-600'>
            {t("O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish")}
          </p>
        </div>
      </div>
      {/* 2 */}
      <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
        <div data-aos="fade-right">
          <p className='text-gray-600 leading-relaxed text-[17px] mb-4'>
            {t("Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.")}
          </p>
          <p className='text-gray-600 leading-relaxed text-[17px]'>
            {t("Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada.")}
          </p>
        </div>
        {/* images */}
        <div data-aos="fade-left" className='grid grid-cols-2 gap-4'>
          <div className='col-span-2'>
            <img className='w-full h-[260px] rounded-lg object-cover'
              src={img1} alt="tour experience" />
          </div>
          <img className='w-full h-40 object-cover rounded-lg shadow-md'
            src={img2} alt="beatiful destinations" />
          <img className='w-full h-40 object-cover rounded-lg shadow-md'
            src={img3} alt="confortable travels" />
        </div>
      </div>
      {/* Bizning jamoa */}
      <div className='mb-16 mt-10'>
        <h2 className='text-3xl font-bold text-center mb-12'>{t("Bizning jamoa")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 transition-all duration-300 group-hover:opacity-60"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <p className="text-lg md:text-xl font-medium text-gray-800">{t("Direktor")}</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 transition-all duration-300 group-hover:opacity-60"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <p className="text-lg md:text-xl font-medium text-gray-800">{t("Yurist")}</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 transition-all duration-300 group-hover:opacity-60"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <p className="text-lg md:text-xl font-medium text-gray-800">{t("Operator")}</p>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 transition-all duration-300 group-hover:opacity-60"></div>
            <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-xl">
              <p className="text-lg md:text-xl font-medium text-gray-800">{t("Administrator")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
