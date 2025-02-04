import React from 'react';
import Marquee from 'react-fast-marquee';
import partner1 from '../assets/qatar.jpg';
import partner2 from '../assets/uzairways.jpg';
import partner3 from '../assets/emirates.jpg';
import partner4 from '../assets/centrum.jpg';
import partner5 from '../assets/turkish.jpg';
import { useTranslation } from 'react-i18next';

export const Partners = () => {
  const {t} = useTranslation();

  return (
    <div className='py-10'>
      <div className='text-center mb-8'>
        <h1 className='text-2xl font-bold mb-6'>{t("Hamkorlarimiz")}</h1>
      </div>
      <Marquee>
        <div className='grid grid-cols-10 mr-8 gap-8'>
          {/* 1 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner1} alt="Qatar" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
             Qatar Airways
            </p>
          </div>
          {/* 2 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner2} alt="Uzairways" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Uzairways
            </p>
          </div>
          {/* 3 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner3} alt="Emirates" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Emirates
            </p>
          </div>
          {/* 4 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner4} alt="Centrum Air" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Centrum Air
            </p>
          </div>
          {/* 5 */}
          <div >
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner5} alt="turkish" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Turkish Airlines
            </p>
          </div>
          
          {/* 1 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner1} alt="Qatar" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
             Qatar Airways
            </p>
          </div>
          {/* 2 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner2} alt="Uzairways" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Uzairways
            </p>
          </div>
          {/* 3 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner3} alt="Emirates" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Emirates
            </p>
          </div>
          {/* 4 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner4} alt="Centrum Air" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Centrum Air
            </p>
          </div>
          {/* 5 */}
          <div>
            <img className='w-[144px] h-[96px] rounded-lg' 
              src={partner5} alt="turkish" />
            <p className='text-center mt-2 text-sm text-gray-700 font-medium'>
              Turkish Airlines
            </p>
          </div>
        </div>
      </Marquee>
    </div>
  );
};
