import React from 'react';
import img1 from '../assets/hotel1.jpg';
import img2 from '../assets/hotel2.jpg';
import img3 from '../assets/hotel3.jpg';
import GenericButton from '../Components/Generics/Button';


export const Hotels = () => {
  return (
    <section className='py-8' id='hotels'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>Mehmonxonalar</h1>
      </div>
      <div className='pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 '>
        {/* 1 */}
        <div className='rounded-lg shadow-lg overflow-hidden animtion-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className='h-48'>
              <img className='w-full h-full object-cover' src={img1} alt="hyaat" />
            </div>
            <div className='p-6'>
              <h2 className='font-semibold text-xl mb-2'>Hyatt Regency Tashkent</h2>
              <p className='text-gray-600 mb-2'>Navoiy ko'chasi 1-uy, tashkent</p>
              <p className='mb-4 text-gray-700'>Zamonaviy mehmonxona Toshkent markazida </p>
              <GenericButton name="Batafsil ma'lumot" />
            </div>
        </div>
        {/* 2 */}
          <div  className='rounded-lg shadow-lg overflow-hidden animation-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className='h-48'>
              <img className='w-full h-full object-cover' src={img2} alt="Hilton Tashkent City" />
            </div>
            <div className='p-6'>
              <h2 className='font-semibold text-xl mb-2'>Hilton Tashkent City</h2>
              <p className='text-gray-600 mb-2'>Islom Karimov ko'chasi 2-uy, Toshkent</p>
              <p className='mb-4 text-gray-700'>Biznes mehmonxona shahar markazida</p>
              <GenericButton name="Batafsil ma'lumot" />
            </div>
          </div>
        {/* 3 */}
          <div  className='rounded-lg shadow-lg overflow-hidden animation-transform duration-300 hover:shadow-xl hover:scale-105  animate-fadeIn'>
            <div className='h-48'>
              <img className='w-full h-full object-cover' src={img3} alt="City place Hotel" />
            </div>
            <div className='p-6'>
              <h2 className='font-semibold text-xl mb-2'>City Place Hotel</h2>
              <p className='text-gray-600 mb-2'>
                Amir Temur ko'chasi 15-uy, Toshkent
              </p>
              <p className='mb-4 text-gray-700'>Qulay mehmonxona diqqatiga sazovor joylar yaqinida </p>
              <GenericButton name="Batafsil ma'lumot" />
            </div>
          </div>
      </div>
    </section>
  );
};
