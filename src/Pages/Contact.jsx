import axios from 'axios';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const [loading, setloading] = useState(false);
  const { t } = useTranslation();

  const SendMessage = (event) => {
    setloading(true);
    event.preventDefault();
    const token = '7701854027:AAGhN8KCJe0nQ1CnCH2SXclbuBxZ4jlQHGE';
    const chat_id = 6135129095;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const theme = document.getElementById("theme").value;
    const message = document.getElementById("message").value;

    const messageContent = `Ismi: ${name} \nEmail: ${email} \nTelefon raqami: ${phone} \nMavzu: ${theme} \nXabar: ${message}`;

    axios({
      url: url,
      method: 'POST',
      data: {
        "chat_id": chat_id,
        "text": messageContent,
      }
    }).then((res) => {
      document.getElementById("myForm").reset();
      alert("Muvaffaqiyatli yuborildi");
    }).catch((error) => {
      console.log("yuborishda xatolik", error);
    }).finally(() => {
      setloading(false);
    });
  };

  return (
    <section className='py-12 bg-gray-50' id='contact'>
      <div className='text-center mb-16'>
        <h1 className='text-3xl md:text-4xl font-bold mb-6'>
          {t("Biz bilan bog'lanish")}
        </h1>
        <p className='text-lg md:text-xl text-gray-600'>
          {t("Savollaringiz bormi? Biz sizga yordam berishdan xursandmiz")}
        </p>
      </div>
      {/* modal */}
      <div className='max-w-[1200px] mx-auto h-fit grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* 1 */}
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <form className='space-y-6' onSubmit={SendMessage} id='myForm'>
            {/* name */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                {t("Ismingiz")}
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="text" id='name' name='name' required />
            </div>
            {/* email */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                {t("Email manzilingiz")}
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="text" id='email' name='email' required />
            </div>
            {/* phone */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                {t("Telefon raqamingiz")}
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="phone" id='phone' name='phone' required />
            </div>
            {/* theme */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                {t("Mavzu")}
              </label>
              <input className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="tex" id='theme' name='theme' required />
            </div>
            {/* Message */}
            <div>
              <label className='block text-gray-700 mb-2' for='name'>
                {t("Xabaringiz")}
              </label>
              <textarea className='w-full h-24 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-nemo-dark'
                type="text" id='message' name='message' required />
            </div>
            {/* Button */}
            <button className="bg-black text-white w-full h-fit py-2.5 rounded-lg 
             transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 active:scale-95"
              type="submit"
              loading={loading}
            >
              {loading ? t("Yuborilmoqda...") : t("Yuborish")}
            </button>
          </form>
        </div>
        <div>
          {/* 2 */}
          <div className='bg-white rounded-lg shadow-lg p-6'>
            <h3 className='text-xl font-semibold text-dark mb-4'>{t("Aloqa ma'lumotlari")}</h3>
            <div className='space-y-4 text-gray-600'>
              <p>{t("Manzil: Toshkent shahri, Muqimiy ko'chasi 44-A uy")}</p>
              <p>{t("Tel: +998 95 150 00 00")}</p>
              <p>Email: info@nemoavia.uz</p>
              <p>{t("Ish vaqti: Du-Sha 24 soat")}</p>
            </div>
          </div>
          {/* 3 */}
          <div className='bg-white rounded-lg shadow-lg p-6 mt-6'>
            <div className='w-full h-[350px] rounded-lg overflow-hidden'>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.2835640978988!2d69.23692447590305!3d41.28093263920834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8af549caa943%3A0xb57ba020a1de5d09!2z0YPQu9C40YbQsCDQnNGD0LrQuNC80LggNDQsINCi0LDRiNC60LXQvdGCLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1734545057788!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
