import React from 'react';
import img1 from '../assets/uz.jpg';
import GenericButton from '../Components/Generics/Button';
export const Cities = () => {
  return (
    <div className='w-full h-fit bg-gray-50'>
      <div className='py-8 px-4 mb-2.5 w-[1200px] m-auto' id='tours'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold mb-6'>Mashhur shaharlar</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
          {/* 1 */}
          <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105 animate-fadeIn'>
            <div className=''>
              <img className='h-[200px] w-full rounded-tl-lg rounded-tr-lg object-cover'
                src={img1} alt='uzbekistan' />
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-xl mb-2'>O'zbekiston bo'ylab <br /> sayohat</h1>
              <p className='mb-4 text-gray-600'>O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar</p>
              <GenericButton name='Batafsil' />
            </div>
          </div>
          {/* 2 */}
          <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className=''>
              <img className='h-[200px] w-full rounded-tl-lg rounded-tr-lg object-cover'
                src='https://www.nemoaviatrip.uz/assets/saudi-8KHwzW8O.avif' alt="turkiya" />
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-xl mb-2'>Turkiya bo'ylab <br /> sayohat</h1>
              <p className='mb-4 text-gray-600'>Istanbul, Antalya, Kappadokiya - eng mashhur joylar</p>
              <GenericButton name='Batafsil' />
            </div>
          </div>
          {/* 3 */}
          <div className='shadow-lg rounded-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className=''>
              <img className='h-[200px] w-full rounded-tl-lg rounded-tr-lg object-cover'
                src='https://www.nemoaviatrip.uz/assets/istanbul-DLpjv57y.avif' alt="dubay" />
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-xl mb-2'>Dubay bo'ylab <br /> sayohat</h1>
              <p className='mb-4 text-gray-600'>Zamonaviy arxitektura va hashamatli savdo markazlari
              </p>
              <GenericButton name='Batafsil' />
            </div>
          </div>
          {/* 4 */}
          <div className='shadow-lg rounded-bl-lg rounded-br-lg animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className=''>
              <img className='h-[200px] w-full rounded-tl-lg rounded-tr-lg object-cover'
                src='https://www.nemoaviatrip.uz/assets/antaliya-q-8wNECN.avif' alt="yevropa" />
            </div>
            <div className='p-4'>
              <h1 className='font-bold text-xl mb-2'>Yevropa bo'ylab <br /> sayohat</h1>
              <p className='mb-4 text-gray-600'>Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar
              </p>
              <GenericButton name='Batafsil' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
