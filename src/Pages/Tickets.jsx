import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Tickets = () => {
  const { t } = useTranslation();
  const [passengerCount, setPassengerCount] = useState(1);
  const [returnTrip, setReturnTrip] = useState(false);

  return (
    <div className='pt-4' id='flights'>
      <div className='pt-8 h-fit mt-8 bg-gray-50'>
        <div className='max-w-[1200px] mx-auto p-4 sm:px-6 lg:px-8'>
          <h1 className='md:text-4xl font-bold mb-6 text-3xl text-center '>{t("Avia Chiptalar")}</h1>
          <div className='bg-white rounded-lg shadow-lg p-6 mb-12'>
            <div className='md:flex space-x-4 mb-6 block'>
              <button
                className={`px-4 py-2 rounded-md ${!returnTrip ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setReturnTrip(false)}
              >
                {t("Borish")}
              </button>
              <button
                className={`px-4 py-2 rounded-md ${returnTrip ? 'bg-[var(--primary-color)] text-white' : 'bg-gray-100 text-gray-600'}`}
                onClick={() => setReturnTrip(true)}
              >
                {t("Qaytish")}
              </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  {t("Qayerdan")}
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0' type="text" />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  {t("Qayerga")}
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0' type="text" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {t("Yo'lovchilar")}
                </label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md outline-0"
                  type="number"
                  min="1"
                  value={passengerCount}
                  onChange={(e) => setPassengerCount(e.target.value)}
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>
                  {t("Jo'nash sanasi")}
                </label>
                <input className='w-full p-2 border border-gray-300 rounded-md outline-0' type="date" />
              </div>
              {returnTrip && (
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1'>
                    {t("Qaytish sanasi")}
                  </label>
                  <input className='w-full p-2 border border-gray-300 rounded-md outline-0' type="date" />
                </div>
              )}
            </div>
            <button className='w-full mt-6 bg-[var(--primary-color)] text-white py-3 rounded-md transition transform duration-200 ease-in-out hover:scale-102 active:scale-95'>
              {t("Qidirish")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
