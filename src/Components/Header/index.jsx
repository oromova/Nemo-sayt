import { useTranslation } from 'react-i18next';
import logo from '../../assets/logo.png';
import logo1 from '../../assets/logo1.png';
import { useEffect, useState } from 'react';
import { IoMenu, IoClose } from "react-icons/io5"; // Burger icon uchun

export const Header = () => {
  const { t, i18n } = useTranslation();
  const laungages = localStorage.getItem('i18nextLng');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Burger menyu holati

  useEffect(() => {
    const handleScroll = () => {
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
      <nav className={`fixed w-full z-50 duration-300 ${isScrolled ? 'bg-white text-black' : "bg-[rgb(242,101,34)] text-white"}`}>
        <div className='max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div>
              <a href="/">
                <img className="mt-2 w-auto h-10 hover:scale-105 transition duration-200"
                  src={isScrolled ? logo1 : logo} alt="Logo" />
              </a>
            </div>

            {/* Burger Menu (Mobil versiya uchun) */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-3xl">
                {isMenuOpen ? <IoClose /> : <IoMenu />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block w-[700px]">
              <ul className="flex justify-between">
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#main">{t("Asosiy")}</a></li>
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#about">{t("Biz haqimizda")}</a></li>
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#tours">{t("Turlar")}</a></li>
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#hotels">{t("Mehmonxonalar")}</a></li>
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#flights">{t("Avia Chiptalar")}</a></li>
                <li><a className="font-semibold transition duration-200 hover:text-[rgb(242,101,34)]" href="#contact">{t("Aloqa")}</a></li>
              </ul>
            </div>

            {/* Language Select */}
            <div className="hidden lg:block">
              <select className="focus:outline-none bg-transparent cursor-pointer transition duration-200 hover:scale-105 hover:text-[rgb(242,101,34)] font-semibold"
                onChange={handleChange} value={laungages}>
                <option className="text-black" value="uz">UZ</option>
                <option className="text-black" value="ru">RU</option>
                <option className="text-black" value="en">EN</option>
              </select>
            </div>
          </div>

          {/* Mobil menyu */}
          {isMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md text-black transition-all duration-300">
              <ul className="flex flex-col items-center space-y-4 py-6">
                <li><a className="text-lg font-semibold" href="#main" onClick={() => setIsMenuOpen(false)}>{t("Asosiy")}</a></li>
                <li><a className="text-lg font-semibold" href="#about" onClick={() => setIsMenuOpen(false)}>{t("Biz haqimizda")}</a></li>
                <li><a className="text-lg font-semibold" href="#tours" onClick={() => setIsMenuOpen(false)}>{t("Turlar")}</a></li>
                <li><a className="text-lg font-semibold" href="#hotels" onClick={() => setIsMenuOpen(false)}>{t("Mehmonxonalar")}</a></li>
                <li><a className="text-lg font-semibold" href="#flights" onClick={() => setIsMenuOpen(false)}>{t("Avia Chiptalar")}</a></li>
                <li><a className="text-lg font-semibold" href="#contact" onClick={() => setIsMenuOpen(false)}>{t("Aloqa")}</a></li>
                
                {/* Language Select Mobil versiya */}
                <li>
                  <select className="focus:outline-none bg-transparent cursor-pointer text-lg"
                    onChange={handleChange} value={laungages}>
                    <option className="text-black" value="uz">UZ</option>
                    <option className="text-black" value="ru">RU</option>
                    <option className="text-black" value="en">EN</option>
                  </select>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
