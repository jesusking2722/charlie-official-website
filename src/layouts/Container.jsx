import React from "react";
import { TranslatorSelect } from "../components/TranslatorSelect";

const languageMap = ["US", "PL", "FR", "UK", "PT", "RU", "DE", "IT", "TR"];
const Container = ({ children }) => {
  return (
    <div className="bg-contain  py-10 background-image">
      <TranslatorSelect items={languageMap} />
      {children}
    </div>
  );
};

export default Container;
