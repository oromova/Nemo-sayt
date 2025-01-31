import React from 'react';

export const Tickets = () => {
  return (
    <div className='pt-8' id='flights'>
      <div className='pt-20 h-fit mt-8 bg-gray-50'>
        <div className='w-[1200px] mx-auto p-4 sm:px-6 lg:px-8'>
          <h1 className='text-4xl font-bold mb-6'>Aviachiptalar</h1>
          <div className='bg-white rounded-lg shadow-lg p-6 mb-12'>
            <div className='flex space-x-4 mb-6'>
              <button className='px-4 py-2 rounded-md bg-[var(--primary-color)] text-white'>
                Borish
              </button>
              <button className='px-4 py-2 rounded-md bg-gray-100 text-gray-600'>
                Qaytish
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Qayerdan
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0'
                  type="text" />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Qayerga
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0'
                  type="text" />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Jo'nash sanasi
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0'
                  type="date" />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  Yo'lovchilar
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0'
                  type="number" min='1' value='4' />
              </div>
            </div>
            <button className='w-full mt-6 bg-[var(--primary-color)] text-white py-3 rounded-md transition transform duration-200 ease-in-out hover:scale-105 active:scale-95'>
              Qidirish
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
