import React from 'react';
import logo from '../../assets/logo.png';

export const Header = () => {
  return (
    <header className="bg-[var(--primary-color)]">
      <nav className="w-[1200px]" style={{ margin: '0 auto', color: 'white' }}>
        <div className="flex justify-between items-center h-16 px-4">
          {/* Logo */}
          <div>
            <a href="/">
              <img className="mt-2 w-[120px] h-10 hover:scale-105 transition duration-200" src={logo} alt="Logo" />
            </a>
          </div>
          
          {/* Navigation */}
          <div className="w-[700px]">
            <ul className="flex justify-between">
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Asosiy</a>
              </li>
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Biz haqimizda</a>
              </li>
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Turlar</a>
              </li>
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Mehmonxonalar</a>
              </li>
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Avia Chiptalar</a>
              </li>
              <li>
                <a className="font-semibold transition duration-200 hover:text-gray-300" href="/">Aloqa</a>
              </li>
            </ul>
          </div>

          {/* Language Select */}
          <div>
            <select className="focus:outline-none bg-transparent text-white cursor-pointer transition duration-200 hover:scale-105">
              <option className="text-black" value="uz">UZ</option>
              <option className="text-black" value="ru">RU</option>
              <option className="text-black" value="en">EN</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};
