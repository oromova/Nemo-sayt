import React from 'react';
import img1 from '../assets/hotel1.jpg';
import img2 from '../assets/hotel2.jpg';
import img3 from '../assets/hotel3.jpg';
import GenericButton from '../Components/Generics/Button';


export const Hotels = () => {
  return (
    <div className='py-8' id='hotels'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>Mehmonxonalar</h1>
      </div>
      <div className='flex justify-around'>
        {/* 1 */}
          <div className='rounded-lg shadow-lg overflow-hidden'>
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
        <div>
          <div className='rounded-lg shadow-lg overflow-hidden'>
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
        </div>
        {/* 3 */}
        <div>
          <div className='rounded-lg shadow-lg overflow-hidden'>
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
        </div>
      </div>
    </div>
  );
};
