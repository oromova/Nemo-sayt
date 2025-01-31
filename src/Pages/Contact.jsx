import React from 'react';

export const Contact = () => {
  return (
    <div className='py-12 bg-gray-50'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold mb-6'>
          Biz bilan bog'lanish
        </h1>
        <p className='text-xl text-gray-600'>
          Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz
        </p>
      </div>
      {/* modal */}
      <div className='w-[1200px] mx-auto h-fit grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* 1 */}
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <form className='space-y-6'>
            {/* name */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                Ismingiz
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="text" id='name' name='name' required />
            </div>
            {/* email */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                Email manzilingiz
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="text" id='email' name='email' required />
            </div>
            {/* phone */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                Telefon raqamingiz
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="phone" id='phone' name='phone' required />
            </div>
            {/* theme */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                Mavzu
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="phone" id='phone' name='phone' required />
            </div>
            {/* Message */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                Xabaringiz
              </label>
              <textarea className='w-full h-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="phone" id='phone' name='phone' required />
            </div>
            {/* Button */}
            <button className="bg-black text-white w-full h-fit py-2.5 rounded-lg 
             transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 active:scale-95"
              type="submit"
            >
              Yuborish
            </button>
          </form>
        </div>
        <div>
          {/* 2 */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-dark mb-4'>Aloqa ma'lumotlari</h3>
            <div className='space-y-4 text-gray-600'>
              <p>Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
              <p>Tel: +998 95 150 00 00</p>
              <p>Email: info@nemoavia.uz</p>
              <p>Ish vaqti: Du-Sha 24 soat</p>
            </div>
          </div>
          {/* 3 */}
          <div className='bg-white rounded-lg shadow-lg p-6 mt-6'>
            <div className='w-full h-[350px] rounded-lg overflow-hidden'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2835640978988!2d69.23692447590305!3d41.28093263920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1734545057788!5m2!1sru!2s" frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};
