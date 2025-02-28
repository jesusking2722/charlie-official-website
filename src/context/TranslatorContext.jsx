import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import i18n from "../i18n";
import { I18nextProvider } from "react-i18next";

const languageMap = {
  US: "en",
  PL: "pl",
  FR: "fr",
  UK: "en",
  PT: "pt",
  RU: "ru",
  DE: "de",
  IT: "it",
  TR: "tr",
};

// Initial TranslatorContext value
const initialTranslatorContextValue = {
  setLanguage: () => {},
  country: "",
};

// Create TranslatorContext
const TranslatorContext = createContext(initialTranslatorContextValue);

// Custom hook to use TranslatorContext
export const useTranslator = () => {
  const context = useContext(TranslatorContext);
  if (!context) {
    throw new Error("useTranslator must be used within TranslatorProvider");
  }
  return context;
};

// TranslatorProvider component
export const TranslatorProvider = ({ children }) => {
  const [country, setCountry] = useState("");
  // Function to fetch country code using GeoPlugin
  const getCountryWithGeoPlugin = async () => {
    try {
      const response = await axios.get("http://www.geoplugin.net/json.gp");
      const countryCode = response.data.geoplugin_countryCode;
      console.log("Country code detected:", countryCode);
      return countryCode;
    } catch (error) {
      console.error("Error detecting country code:", error);
      return null;
    }
  };

  // Function to set language based on IP address
  const setLanguageBasedOnIP = async () => {
    const countryCode = await getCountryWithGeoPlugin();
    if (countryCode) {
      const userLanguage = languageMap[countryCode] || "en"; // Default to English if country is not mapped
      i18n.changeLanguage(userLanguage); // Change language in i18n
    }
  };

  const setLanguage = (countryCode) => {
    const userLanguage = languageMap[countryCode] || "en"; // Default to English if country is not mapped
    i18n.changeLanguage(userLanguage); // Change language in i18n
  };

  // Run setLanguageBasedOnIP on initial render
  useEffect(() => {
    const getCountry = async () => {
      const co = await getCountryWithGeoPlugin();
      const userLanguage = languageMap[co] || "US";
      setCountry(userLanguage);
    };
    getCountry();
    setLanguageBasedOnIP();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <TranslatorContext.Provider value={{ setLanguage, country }}>
        {children}
      </TranslatorContext.Provider>
    </I18nextProvider>
  );
};
