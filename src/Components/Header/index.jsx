import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png';

import { useEffect, useState } from 'react';

export const Header = () => {
  const { t, i18n } = useTranslation();
  const laungages = localStorage.getItem('i18nextLng');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('header');
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (event) => {
    const selectedLaungage = event.target.value;
    i18n.changeLanguage(selectedLaungage);
  };


  return (
    <header>
      <nav className={`fixed w-full translation-all z-50 duration-300 ${isScrolled ? 'bg-white' : "bg-[rgb(242 101 34)]"} ${isScrolled ? "text-black" : "text-white"}`}>
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div>
              <a href="/">
                <img className="mt-2 w-auto h-10 hover:scale-105 transition duration-200"
                  src={isScrolled ? logo1 : logo} alt="Logo" />
              </a>
            </div>

            {/* Navigation */}
            <div className="w-[700px]">
              <ul className="flex justify-between">
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#main">{t("Asosiy")}</a>
                </li>
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#about">{t("Biz haqimizda")}</a>
                </li>
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#tours">{t("Turlar")}</a>
                </li>
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#hotels">{t("Mehmonxonalar")}</a>
                </li>
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#flights">{t("Avia Chiptalar")}</a>
                </li>
                <li>
                  <a className="font-semibold transition duration-200 hover:text-gray-300" href="#contact">{t("Aloqa")}</a>
                </li>
              </ul>
            </div>

            {/* Language Select */}
            <div>
              <select className="focus:outline-none bg-transparent cursor-pointer transition duration-200 hover:scale-105"
                onChange={handleChange} value={laungages}>
                <option className="text-black" value="uz">UZ</option>
                <option className="text-black" value="ru">RU</option>
                <option className="text-black" value="en">EN</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </header >
  );
};;
