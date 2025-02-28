import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFacebook, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa";

const style = {
  link: "text-base font-normal z-10 hover:gradient-text transition-all duration-300 ease-in-out cursor-pointer text-white",
};

const Navbar = () => {
  const [active, setActive] = useState("features");

  const { t } = useTranslation();

  return (
    <>
      <div className="w-[83%] mx-auto">
        <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] w-full relative bg-[#444444] md:h-[120px] h-[420px] px-2">
          <div className="bg-[#1C1C1C] border-0 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-20 py-3 px-5">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-20">
              <img
                src="logo (2).png"
                className="md:w-[100px] w-[120px]"
                alt="Logo"
              />
              <div className="flex flex-col md:flex-row gap-4 md:gap-7 text-center md:text-left items-center">
                <a
                  href="#about"
                  className={`${style.link} ${
                    active === "features" && "gradient-text"
                  }`}
                  onClick={() => setActive("features")}
                >
                  {t("features")}
                </a>
                <a
                  href="#games"
                  className={`${style.link} ${
                    active === "games" && "gradient-text"
                  }`}
                  onClick={() => setActive("games")}
                >
                  {t("games")}
                </a>
                <a
                  href="#roadmap"
                  className={`${style.link} ${
                    active === "roadmap" && "gradient-text"
                  }`}
                  onClick={() => setActive("roadmap")}
                >
                  {t("roadmap")}
                </a>
                <a
                  href="#team"
                  className={`${style.link} ${
                    active === "team" && "gradient-text"
                  }`}
                  onClick={() => setActive("team")}
                >
                  {t("team")}
                </a>
                <a
                  href="#partners"
                  className={`${style.link} ${
                    active === "partners" && "gradient-text"
                  }`}
                  onClick={() => setActive("partners")}
                >
                  {t("partners")}
                </a>
                <a
                  href="#contact"
                  className={`${style.link} ${
                    active === "contact" && "gradient-text"
                  }`}
                  onClick={() => setActive("contact")}
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center gap-8">
              <div className="footer-icons ">
                <a
                  href="https://t.me/CharlieUnicornaiOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegram className="lg:w-7 lg:h-7 w-5 h-5 text-white/80 transition-all duration-300 ease-in-out hover:scale-110" />
                </a>

                <a
                  href="https://www.youtube.com/@CharlieUnicoin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube className="lg:w-7 lg:h-7 w-5 h-5 text-white/80 transition-all duration-300 ease-in-out hover:scale-110" />
                </a>
                <a
                  href="https://x.com/CHRLEunicornAI"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter className="lg:w-7 lg:h-7 w-5 h-5 text-white/80 transition-all duration-300 ease-in-out hover:scale-110" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61572583794294"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook className="lg:w-7 lg:h-7 w-5 h-5 text-white/80 transition-all duration-300 ease-in-out hover:scale-110" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
