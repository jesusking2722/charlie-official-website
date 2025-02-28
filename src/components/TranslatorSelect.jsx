import React, { useEffect, useState } from "react";
import { useTranslator } from "../context/TranslatorContext";

export const TranslatorSelect = ({ items, width }) => {
  const [lang, setLang] = useState("");
  const [open, setOpen] = useState(false);
  const { country, setLanguage } = useTranslator();

  const handleLanguageChange = (countryCode) => {
    setLanguage(countryCode);
    setLang(countryCode);
    setOpen(false);
  };

  useEffect(() => {
    setLang(country);
  }, [country]);

  return (
    <div className="fixed w-24 right-2 translator z-[99]">
      <div
        className={`[clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] cursor-pointer relative bg-gradient h-[36px]`}
        onClick={() => setOpen(!open)}
      >
        <div className="inset-[1px] absolute [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] flex items-center opacity-80 justify-between bg-[#212121] px-2">
          <div className="flex flex-row gap-4 items-center cursor-pointer">
            <img
              src={`./flags/${lang.toLowerCase()}.svg`}
              alt={lang}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-xs text-white/80">{lang}</span>
          </div>
          {/* Display the selected menu */}
          <img
            src="./narrow.svg"
            alt="narrow"
            className={`absolute right-4 transform transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      {open && (
        <div
          className={`flex flex-col absolute w-full z-50 mt-1 bg-[#212121] [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] `}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-row gap-4 items-center cursor-pointer hover:bg-[#2C2C2C] py-2 px-4"
              onClick={() => handleLanguageChange(item)}
            >
              <img
                src={`./flags/${item.toLowerCase()}.svg`}
                alt={item}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
              <span className="text-xs text-white/80">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
