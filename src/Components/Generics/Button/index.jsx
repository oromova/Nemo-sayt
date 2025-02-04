import React from 'react'
import { useTranslation } from 'react-i18next';

export const GenericButton = ({name}) => {
   const {t} = useTranslation();
   
  return (
    <button className="bg-[var(--primary-color)] text-white font-medium py-2 px-5 rounded-full transition transform duration-200 ease-in-out hover:scale-105 active:scale-95">
      {t(name)}
    </button>
  )
}

export default GenericButton;