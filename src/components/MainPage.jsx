import React from "react";
import CustomCarousal from "./CustomCarousal";
import "../responsive.css";
import AccordianGroup from "./AccordianGroup";
import CircularChat from "./CircularChat";
import { useTranslation } from "react-i18next";
import { FaTelegram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import ContactForm from "./ContactForm";

const MainPage = () => {
  const { t } = useTranslation();

  const logosWithText = [
    { logo: "logo (2).png", text: "MARKETPLACE" },
    { logo: "logo (2).png", text: "MULTICHAIN" },
    { logo: "logo (2).png", text: "DEX" },
    { logo: "logo (2).png", text: "LAUNCHPAD" },
    { logo: "logo (2).png", text: "PC GAME" },
  ];

  const completedDevelopmentSlides = [
    <div className="relative clip w-full h-[300px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto md:p-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("token")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("10kNFTCollection")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("landingWebsite")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full h-[300px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto md:p-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("p2eGame")} Telegram
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("nftMintingWebsite")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("tokenPresaleWebsite")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full h-[300px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto md:p-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("charlieAIChatbot")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center overflow-auto">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center overflow-auto">
                {t("stakingWithMultipleAPY")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("bridgeToTON")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  const ongoingDevelopmentSlides = [
    <div className="relative clip w-full h-[300px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto md:p-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("p2eGame")} PC
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("aiVideoGenerator")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("marketplace")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full h-[300px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto md:p-8 px-4 py-8">
        <div className="flex flex-col gap-4">
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("dex")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("launchpad")}
              </h1>
            </div>
          </div>
          <div className="relative bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] h-[50px] w-full mt-4">
            <div className="absolute bg-[#1C1C1C] opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px] flex items-center justify-center">
              <h1 className="gradient-text font-semibold text-xs lg:text-lg text-center">
                {t("multichain")}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  const RoadMapSlides = [
    <div className="relative clip w-full roadmap h-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto">
        <div className="py-4 px-4 md:px-10">
          <span className="gradient-text font-semibold text-sm md:text-xl">
            {t("phase")} 1
          </span>
          <p className="text-white text-xs md:text-base">
            <br /> {t("createWhitePaper")}
            <br /> {t("startDevelopment")}
            <br /> {t("createLandingWebsite")}
            <br /> {t("buildNFTMintingWebsite")}
            <br /> {t("buildTokenPresaleWebsite")}
            <br /> {t("createSocialMediaAccounts")}
            <br />
            <br />
            <h2 className="md:text-xl text-sm font-semibold mb-2 bg-gradient-to-r from-custom-1 via-custom-2 to-custom-4 bg-clip-text text-white">
              {t("createTokenomics")}
            </h2>
            <br /> {t("createTokenSmartContract")}
            <br /> {t("undergoKYC")}
            <br /> {t("buildCharlieAIChatbot")}
            <br /> {t("designOfficial10KNFT")}
            <br />
            <br />
            <h2 className="md:text-xl text-sm font-bold mb-2 bg-gradient-to-r from-custom-1 via-custom-2 to-custom-4 bg-clip-text text-white">
              {t("buildMinigame")}
            </h2>
            <br /> {t("buildOurNFTmarketplace")}
            <br /> {t("designOfficial10KNFT")}
            <br /> {t("buildP2EApplication")}
            <br /> <br />
          </p>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full roadmap h-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto">
        <div className="py-4 px-4 md:px-10">
          <span className="gradient-text font-semibold text-sm md:text-xl">
            {t("phase")} 2
          </span>
          <p className="text-white text-xs md:text-base">
            <br /> {t("buildOfficialWebsite")}
            <br /> {t("launchNFTCollection")}
            <br /> {t("startTokenPresale")}
            <br /> {t("launchP2EGameOnTelegram")}
            <br /> {t("activelySearchForPartnerships")}
            <br /> {t("startMarketing")}
            <br /> {t("buildCommunity")}
            <br /> {t("writeAndAnimate")}
            <br /> {t("charlieBand")}
            <br /> {t("developCrossChain")}
          </p>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full roadmap h-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto">
        <div className="py-4 px-4 md:px-10">
          <span className="gradient-text font-semibold text-sm md:text-xl">
            {t("phase")} 3
          </span>
          <p className="text-xs text-white md:text-base">
            <br /> {t("developDex")}
            <br /> {t("developStakingAndFarms")}
            <br /> {t("endSeason")}
            <br /> {t("developNFTGames")}
            <br /> {t("developOurOwnBlockchain")}
            <br /> {t("developLaunchpad")}
            <br /> {t("startBuildingBlockchain")}
            <br /> {t("startBuildingLaunchpad")}
            <br /> {t("createOnlineStore")}
            <br /> {t("improvementsAndUpgrades")}
          </p>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full roadmap h-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto">
        <div className="py-4 px-4 md:px-10">
          <span className="gradient-text font-semibold text-sm md:text-xl">
            {t("phase")} 4
          </span>
          <p className="text-white text-xs md:text-base">
            <br /> {t("developCharlieDating")}
            <br /> {t("startSeasonTwo")}
            <br /> {t("developCharlieWallet")}
          </p>
        </div>
      </div>
    </div>,
    <div className="relative clip w-full roadmap h-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90 overflow-y-auto">
        <div className="py-4 px-4 md:px-10">
          <span className="gradient-text font-semibold text-sm md:text-xl">
            {t("phase")} 5
          </span>
          <p className="text-white text-xs md:text-base">
            <br /> {t("globalCex")}
            <br /> {t("theFirstCryptoBank")}
          </p>
        </div>
      </div>
    </div>,
  ];

  const gameSlides1 = [
    <div className="relative game-slide clip h-[350px] w-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
        <img
          src="game4.jpg"
          alt="Game4"
          className="w-full h-full object-cover"
        />
      </div>
    </div>,
    <div className="relative clip game-slide h-[350px] w-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
        <img
          src="game5.jpg"
          alt="Game5"
          className="w-full h-full object-cover"
        />
      </div>
    </div>,
  ];

  const gameSlides2 = [
    <div className="relative clip game-slide h-[350px] w-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
        <img
          src="game1.jpg"
          alt="Game1"
          className="w-full h-full object-cover"
        />
      </div>
    </div>,
    <div className="relative clip game-slide h-[350px] w-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
        <img
          src="game2.jpg"
          alt="Game2"
          className="w-full h-full object-cover"
        />
      </div>
    </div>,
    <div className="relative clip game-slide h-[350px] w-[350px] bg-gradient">
      <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
        <img
          src="game3.jpg"
          alt="Game3"
          className="w-full h-full object-cover"
        />
      </div>
    </div>,
  ];

  const ourGoals = [
    {
      title: t("primaryGoal"),
      info: t("primaryGoal-des"),
      activedHeight: 150,
    },
    {
      title: t("blockchainGoal"),
      info: t("blockchainGoal-des"),
      info1: t("blockchainGoal-des1"),
      info2: t("blockchainGoal-des2"),
      info3: t("blockchainGoal-des3"),
      info4: t("blockchainGoal-des4"),
      info5: t("blockchainGoal-des5"),
      info6: t("blockchainGoal-des6"),
      info7: t("blockchainGoal-des7"),
      info8: t("blockchainGoal-des8"),
      activedHeight: 400,
    },
    {
      title: t("cexGoal"),
      info: t("cexGoal-des"),
      activedHeight: 170,
    },
    {
      title: t("fundraising"),
      info: t("fundraising-des"),
      activedHeight: 170,
    },
  ];

  const presalePhases = [
    {
      title: `${t("phase")} 1`,
      info: t("presalePhase1"),
      activedHeight: 100,
    },
    {
      title: `${t("phase")} 2`,
      info: t("presalePhase2"),
      activedHeight: 120,
    },
    {
      title: `${t("phase")} 3`,
      info: t("presalePhase3"),
      activedHeight: 120,
    },
    {
      title: `${t("phase")} 4`,
      info: t("presalePhase4"),
      activedHeight: 120,
    },
    {
      title: `${t("phase")} 5`,
      info: t("presalePhase5"),
      activedHeight: 120,
    },
    {
      title: `${t("phase")} 6`,
      info: t("presalePhase6"),
      activedHeight: 130,
    },
  ];

  const members = [
    {
      name: t("ceoName"),
      role: "CEO",
      photo: "ceo.jpg",
      flag: "pl.svg",
      flag_eu: "eu.svg",
      linkedin:
        "https://pl.linkedin.com/in/%C5%82ukasz-szymborski-8bab38205?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile",
    },
  ];

  return (
    <>
      <div className="font-[Montserrat] mt-8">
        <div className="flex justify-center gap-2 md:gap-4 py-6 ">
          <div className="relative h-60 w-60 ads  bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-6 md:mt-10 -rotate-[20deg]">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img
                src="game5.jpg"
                alt=""
                className="h-60 w-60 ads-img object-cover"
              />
            </div>
          </div>
          <div className="relative h-60 w-60 ads bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]  z-20">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img src="game4.jpg" alt="" className="ads-img object-cover" />
            </div>
          </div>
          <div className="relative h-60 w-60 ads bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-6 md:mt-10  rotate-[20deg]">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img src="game1.jpg" alt="" className="ads-img object-cover" />
            </div>
          </div>
        </div>
        <div className="pt-6 pb-6 text-center w-[83%] mx-auto">
          <h1 className="text-white text-xl md:text-2xl font-semibold">
            {t("welcome")}
          </h1>
          <br />
          <p className="text-white/80 font-normal text-sm md:text-base">
            {t("welcome-des1")}
            <br />
            <br />
            {t("welcome-des2")}
          </p>
          <p className="text-left w-full md:w-[40%] mx-auto text-white/80 font-normal text-sm md:text-base">
            <br />
            {t("welcome-des3")} <br />
            {t("welcome-des4")}
            <br /> {t("welcome-des5")}
            <br />
            <br />
          </p>
          <p className="text-white/80 font-normal text-sm md:text-base mb-8">
            {t("welcome-des6")}
          </p>
          <div
            className="button-container live "
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            <div className="transition-all ease-in-out duration-300 hover:scale-105 [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] relative bg-gradient h-[50px] w-[300px]">
              <div className="absolute inset-[3px] bg-white [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)]">
                <a
                  href="https://charlieunicornai-sale.eu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex items-center justify-center inset-[1px] [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] bg-gradient 
                          text-white font-normal text-xs md:text-base"
                >
                  {t("buyPresale")}
                </a>
              </div>
            </div>
            <div className="transition-all ease-in-out ml-4 duration-300 hover:scale-105 [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] relative bg-gradient h-[50px] w-[300px]">
              <div className="absolute inset-[3px] bg-white [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)]">
                <a
                  href="https://drive.google.com/file/d/1vC6Vz_PAB2pnPR48ADuHKXD8IAjs6haI/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-[1px] flex items-center justify-center [clip-path:polygon(0%_0.8em,_0.8em_0%,_100%_0%,_100%_calc(100%_-_0.8em),_calc(100%_-_0.8em)_100%,_0_100%)] bg-gradient 
                          text-white font-normal text-xs md:text-base"
                >
                  <span>{t("whitePaper")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="powered_by_logos">
          <div className="rfm-marquee-container">
            <div className="rfm-marquee">
              <div className="rfm-content">
                {[...logosWithText, ...logosWithText].map((item, index) => (
                  <div key={index} className="rfm-child">
                    <img
                      className="w-[60px] ml-4 mr-2"
                      src={item.logo}
                      alt={`Logo ${index + 1}`}
                    />
                    <span className="gradient-text font-semibold text-xs md:text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-[83%] mx-auto mt-14">
          <p className="text-white/80 text-lg mt-4 text-center font-semibold">
            {t("upcomingGames")}
            <br />
            <span className="">Q3 2025/Q1 2026</span>
            <br />
            {t("your")}
            <span className="gradient-text">$CHRLE</span> {t("tokenAsCurrency")}
          </p>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-32 lg:mt-8 mt-10">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="relative clip w-80 h-80 mx-auto roadmap bg-gradient mt-8 -rotate-[15deg] game-item">
                  <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
                    <img
                      src="game5.jpg"
                      alt="Game5"
                      className="object-cover w-80 h-80 game-item"
                    />
                  </div>
                </div>
                <div className="relative clip w-80 h-80 mx-auto roadmap bg-gradient mt-8 rotate-[15deg] game-item">
                  <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
                    <img
                      src="game4.jpg"
                      alt="Game4"
                      className="object-cover w-80 h-80 game-item"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-semibold gradient-text mt-14">
                {t("unicornRacingWorld")}
              </h2>
              <p className="text-white/80 md:text-base text-sm mt-8">
                {t("unicornRacingWorld-sub-des")}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <div className="relative clip w-80 h-80 mx-auto roadmap bg-gradient mt-8 -rotate-[15deg] game-item">
                  <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
                    <img
                      src="game3.jpg"
                      alt="Game3"
                      className="object-cover w-80 h-80 game-item"
                    />
                  </div>
                </div>
                <div className="relative clip w-80 h-80 mx-auto roadmap bg-gradient mt-8 rotate-[15deg] game-item">
                  <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
                    <img
                      src="game1.jpg"
                      alt="Game1"
                      className="object-cover w-80 h-80 game-item"
                    />
                  </div>
                </div>
              </div>
              <h2 className="text-2xl font-semibold gradient-text mt-14">
                {t("legendaryBattles")}
              </h2>
              <h2 className="text-white/80 md:text-base text-sm mt-8">
                {t("legendaryBattles-sub-des")}
              </h2>
            </div>
          </div>
        </div>

        {/* Games */}
        <div
          id="games"
          className="relative games w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-8 mb-1 h-[720px]"
        >
          <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] px-4 md:px-16 py-4 overflow-x-hidden overflow-y-scroll">
            <h1 className="text-lg md:text-2xl font-semibold mb-8 text-center mt-10">
              <span className="gradient-text">{t("games")}</span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="lg:w-[50%] w-full">
                <CustomCarousal slides={gameSlides1} />
                <h1 className="text-center mt-8 lg:text-lg text-base">
                  {" "}
                  <span className="gradient-text font-semibold">
                    {t("unicornRacingWorld")}
                  </span>
                </h1>
                <p className="text-white/80 lg:text-base text-sm p-2 h-[180px] overflow-x-hidden overflow-y-scroll">
                  {t("unicornRacingWorld-des1")}
                  <span className="gradient-text font-semibold">
                    $CHRLE
                  </span>{" "}
                  {t("unicornRacingWorld-des2")}
                </p>
              </div>
              <div className="lg:w-[50%] w-full">
                <CustomCarousal slides={gameSlides2} />
                <h1 className="text-center mt-8 lg:text-lg text-base">
                  {" "}
                  <span className="gradient-text font-semibold">
                    {t("legendaryBattles")}
                  </span>
                </h1>
                <p className="text-white/80 lg:text-base text-sm p-2 h-[180px] overflow-x-hidden overflow-y-scroll">
                  {t("legendaryBattles-des1")}
                  <span className="gradient-text font-semibold">
                    {" "}
                    $CHRLE
                  </span>{" "}
                  {t("legendaryBattles-des2")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-white/80 text-center mt-8 md:text-2xl text-lg font-semibold">
          {t("canPlayNow1")}
          <span className="gradient-text">P2E</span>
          {t("canPlayNow2")}
          <br />
        </p>

        {/* Revolution */}
        <div className="relative revolution w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-14 mb-1 h-[740px]">
          <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] p-8 overflow-x-hidden overflow-y-scroll">
            <div className="text-center">
              <span className="gradient-text text-xl md:text-2xl font-extrabold">
                P2E {t("revolution")}: {t("revolution-title")}
              </span>

              <div
                className="footer-icons mt-8"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <a href="#">
                  <img src="/Apple_Store_logo.svg" alt="" className="icon" />
                </a>{" "}
                <a
                  href="https://t.me/CharlieUnicornaiOfficial"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/telegramlogo.png" alt="" className="icon" />
                </a>
                <a href="#">
                  <img src="/playstore.png" alt="" className="icon" />
                </a>
              </div>

              <div className="relative clip w-60 h-80 clicker mx-auto roadmap bg-gradient mt-8 hover:scale-105 transition-all ease-in-out duration-300">
                <div className="absolute clip inset-[1px] bg-[#181818] opacity-90">
                  <a
                    href="https://t.me/CharliegameBot"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="./clicker.png"
                      alt="CharlieTelegramGame"
                      className="object-cover w-60 h-80 clicker"
                    />
                  </a>
                </div>
              </div>

              <p className="text-white/80 text-sm md:text-base mt-8 px-8">
                {t("revolution-des1")}
              </p>
              <p className="text-white/80 text-sm md:text-base mt-4">
                {t("revolution-des2")}
              </p>
              <p className="text-white/80 text-sm md:text-base mt-8">
                {t("revolution-des3")}
                <a
                  href="https://t.me/CharliegameBot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="font-semibold gradient-text text-base gradient-underline">
                    @Charliegamebot {`(https://t.me/CharliegameBot)`}
                  </span>
                </a>
              </p>
              <p className="mt-4">
                <span className="gradient-text mt-8 text-sm md:text-base font-semibold">
                  MULTICHAIN * DEX * LAUNCHPAD * PC GAME*{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Welcome */}
        <div className="relative welcome w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-14 mb-1 h-[450px]">
          <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] flex flex-col items-center justify-center px-4">
            <h1 className="text-lg md:text-2xl font-semibold">
              <span className="gradient-text">{t("welcomeToMainPage")}</span>
            </h1>
            <div className="w-full md:w-[83%] mx-auto flex flex-col lg:flex-row gap-0 lg:gap-8 items-center justify-between">
              {/* Airdrops and Giveaways Box */}
              <div className="relative w-full lg:w-[50%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-4 md:mt-14 mb-1 h-[300px]">
                <div className="opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] px-4 py-2 md:py-8 overflow-y-scroll">
                  <h1 className="text-white font-semibold text-md lg:text-xl mt-6 mb-8">
                    {t("welcomeToMainPage-title1")}
                  </h1>
                  <p className="text-white/80 font-normal text-sm lg:text-base">
                    {t("welcomeToMainPage-title1-des1")}
                    <strong>$500,000</strong>
                    {t("welcomeToMainPage-title1-des2")}
                    <strong> 30 {t("months")}</strong>
                    {t("welcomeToMainPage-title1-des3")}
                    {t("welcomeToMainPage-title1-des4")}
                  </p>
                </div>
              </div>

              {/* Heavy Marketing Box */}
              <div className="relative w-full lg:w-[50%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-6 md:mt-14 mb-1 h-[300px]">
                <div className="opacity-90 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] px-4 py-2 md:py-8 overflow-y-scroll">
                  <h1 className="text-white font-semibold text-md lg:text-xl mt-6 mb-8">
                    {t("welcomeToMainPage-title2")}!
                  </h1>
                  <p className="text-white/80 font-normal text-sm lg:text-base">
                    {t("welcomeToMainPage-title2-des1")}
                    <strong>{t("welcomeToMainPage-title2-des2")}</strong>
                    {t("welcomeToMainPage-title2-des3")}
                    <strong>$1,000,000</strong>
                    {t("welcomeToMainPage-title2-des4")}
                  </p>
                  <ul>
                    <li className="text-white/80 font-normal text-sm lg:text-base">
                      🤝{t("welcomeToMainPage-title2-sub1")}
                    </li>
                    <li className="text-white/80 font-normal text-sm lg:text-base">
                      🌐{t("welcomeToMainPage-title2-sub2")}
                    </li>
                    <li className="text-white/80 font-normal text-sm lg:text-base">
                      🖥️{t("welcomeToMainPage-title2-sub3")}
                    </li>
                    <li className="text-white/80 font-normal text-sm lg:text-base">
                      🤝{t("welcomeToMainPage-title2-sub4")}
                    </li>
                    <li className="text-white/80 font-normal text-sm lg:text-base">
                      🎨{t("welcomeToMainPage-title2-sub5")}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div
          id="roadmap"
          className="relative bg-gradient w-[83%] h-[730px] mx-auto mt-14 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]"
        >
          <div className="absolute bg-[#1C1C1C] [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px]">
            <div className="flex relative justify-center mb-20 mt-10">
              <img
                src="logo (2).png"
                alt="Main Image"
                className="lg:w-40 w-32 roadmap-logo"
              />
              <h1 className="absolute mt-32 lg:mt-[200px] text-white font-normal text-md md:text-xl roadmap-title">
                {t("charlieUnicornAI")}
              </h1>
              <p className="absolute roadmap-subtitle roadmap-title mt-[150px] lg:mt-44 text-lg lg:text-[30px] bg-gradient-to-r from-custom-1 via-custom-2 to-custom-4 bg-clip-text text-transparent">
                {t("roadmap")}
              </p>
            </div>
            <img
              src="redleft.png"
              alt=""
              className="hidden lg:absolute w-60 -ml-0 -mt-16 z-10"
            />
            <img
              src="bluerigh.png"
              alt=""
              className="hidden lg:absolute -right-0 -mt-0 z-10 w-64"
            />
            <div className="w-full">
              <CustomCarousal slides={RoadMapSlides} />
            </div>
          </div>
        </div>

        {/* Tokenomics */}
        <div className="relative bg-gradient w-[83%] tokenomics h-[700px] mx-auto mt-14 [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]">
          <div className="absolute bg-[#1C1C1C] [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] inset-[1px]">
            {/* Top Centered Image */}
            <div className="flex relative justify-center mb-20 mt-4">
              <img
                src="logo (2).png"
                alt="Main Image"
                className="lg:w-40 w-32 tokenomics-logo"
              />
              <h1 className="absolute mt-32 lg:mt-[160px] text-white font-normal text-md md:text-xl tokenomics-title">
                {t("tokenomics")}
              </h1>
              <p className="absolute mt-40 lg:mt-[200px] text-sm token-billion lg:text-[30px] tokenomics-subtitle bg-gradient-to-r from-custom-1 via-custom-2 to-custom-4 bg-clip-text text-transparent">
                {t("token")}:{" "}
                <span className="font-semibold gradient-text">100</span>{" "}
                {t("billion")}
              </p>
            </div>
            <CircularChat />
          </div>
        </div>

        {/* Presale Phases */}
        <div className="w-[83%] mx-auto mt-14">
          <h1 className="font-semibold text-2xl text-white text-center mb-8">
            {t("presalePhases")}
          </h1>
          <AccordianGroup items={presalePhases} />
        </div>

        {/* Completed */}
        <div className="relative completed w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-8 mb-1 h-[500px]">
          <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] px-4 md:px-16">
            <h1 className="text-lg md:text-2xl font-semibold mb-8 mt-8 text-center">
              <span className="gradient-text">
                {t("completedDevelopments")}
              </span>
            </h1>
            <div className="w-full">
              <CustomCarousal slides={completedDevelopmentSlides} />
            </div>
          </div>
        </div>

        {/* Ongoing */}
        <div className="relative ongoing w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-8 mb-1 h-[430px]">
          <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] px-4 md:px-16">
            <h1 className="text-lg md:text-2xl font-semibold mb-8 mt-8 text-center">
              <span className="gradient-text">{t("ongoingDevelopments")}</span>
            </h1>
            <div className="w-full">
              <CustomCarousal slides={ongoingDevelopmentSlides} />
            </div>
          </div>
        </div>

        {/* About */}
        <div
          id="about"
          className="flex justify-center gap-2 md:gap-4 py-6 mt-14"
        >
          <div className="relative h-60 w-60 ads  bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-6 md:mt-10 -rotate-[20deg]">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img
                src="game5.jpg"
                alt=""
                className="h-60 w-60 ads-img object-cover"
              />
            </div>
          </div>
          <div className="relative h-60 w-60 ads bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)]  z-20">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img src="game4.jpg" alt="" className="ads-img object-cover" />
            </div>
          </div>
          <div className="relative h-60 w-60 ads bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-6 md:mt-10  rotate-[20deg]">
            <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C]">
              <img src="game1.jpg" alt="" className="ads-img object-cover" />
            </div>
          </div>
        </div>

        <div className="w-[83%] lg:w-[50%] mx-auto mt-14">
          {/* Image */}
          {/* Text content */}
          <div className="relative clip w-full h-[50px] bg-gradient">
            <div className="absolute clip inset-[1px] bg-[#1C1C1C] flex items-center justify-center">
              <span className="gradient-text font-semibold text-base">
                {t("charlieAI")}
              </span>
            </div>
          </div>
          <br />
          <p className="text-white text-sm md:text-base">
            {t("charlieAI-des")}
          </p>
          <div className="flex justify-center gap-2 md:gap-4 py-6 ">
            <img src="Pic1.png" alt="" className="w-36 md:w-60" />
          </div>
          <br />
          <div className="relative clip w-full h-[50px] bg-gradient">
            <div className="absolute clip inset-[1px] bg-[#1C1C1C] flex items-center justify-center px-4 md:px-0">
              <span className="gradient-text font-semibold text-sm md:text-base">
                {t("stakeYourCharlie")}
              </span>
            </div>
          </div>
          <p className="text-white text-sm md:text-base">
            <br></br>
            {t("stakeYourCharlie-des")}
          </p>
          <div className="relative clip w-full h-[50px] bg-gradient mt-10">
            <div className="absolute clip inset-[1px] bg-[#1C1C1C] flex items-center justify-center">
              <span className="gradient-text font-semibold text-base">
                {t("charlieP2E")}
              </span>
            </div>
          </div>
          <p className="text-white text-sm md:text-base">
            <br></br>
            {t("charlieP2E-des")}
          </p>
          <div className="relative clip w-full h-[50px] bg-gradient mt-10">
            <div className="absolute clip inset-[1px] bg-[#1C1C1C] flex items-center justify-center">
              <span className="gradient-text font-semibold text-base">
                {t("utilityAndPartnerships")}
              </span>
            </div>
          </div>
          <p className="text-white text-sm md:text-base">
            <br></br>
            {t("utilityAndPartnerships-des")}
          </p>
          <br />
        </div>
      </div>

      {/* Our goals */}
      <div className="w-[83%] mx-auto mt-14">
        <h1 className="font-semibold text-2xl text-white text-center mb-8">
          {t("ourGoals")}
        </h1>
        <AccordianGroup items={ourGoals} />
      </div>

      {/* Listings On */}
      <div className="relative listings-on w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-14 mb-1 h-[300px]">
        <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] flex flex-col items-center justify-center px-16">
          <h1 className="gradient-text text-xl md:text-2xl font-semibold">
            {t("listingsOn")}
          </h1>
          <h2 className="text-white/80 text-2xl font-semibold text-center mt-10">
            {t("listings-des")} !
          </h2>
        </div>
      </div>

      {/* Questions */}
      <div className="relative questions w-[83%] mx-auto bg-gradient [clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] mt-14 mb-1 h-[120px]">
        <div className="[clip-path:polygon(0%_0.9em,_0.9em_0%,_100%_0%,_100%_calc(100%_-_0.9em),_calc(100%_-_0.9em)_100%,_0_100%)] absolute inset-[1px] bg-[#1C1C1C] flex flex-col items-center justify-center px-16 overflow-x-hidden overflow-y-scroll">
          <h1 className="text-lg md:text-2xl font-semibold text-center">
            <span className="gradient-text">{t("questions")}</span>
            😊
          </h1>
          <div
            className="footer-icons mt-4"
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <a
              href="https://t.me/CharlieUnicornaiOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram className="lg:w-7 lg:h-7 w-5 h-5 text-white/80 transition-all duration-300 ease-in-out hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className="mt-14" id="team">
        <div className="flex items-center justify-center">
          <span className="text-white font-semibold text-2xl">{t("TEAM")}</span>
        </div>
        {/* Members Section */}
        <div className="flex items-center w-[63%] justify-between mx-auto mt-8">
          {members.map((member, index) => (
            <div
              key={index}
              className="relative member clip bg-gradient w-full h-[360px]"
            >
              <div className="absolute clip bg-[#1C1C1C] inset-[1px] flex flex-col items-center justify-center">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-[200px] h-[200px] rounded-full object-cover object-[70%_20%] mb-4"
                />
                <h3 className="text-white font-normal text-base">
                  {member.name}
                </h3>
                <p className="gradient-text font-normal text-base">
                  {member.role}
                </p>
                <div className="flex items-center justify-center mt-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="linkedin.svg" className="w-5 h-5" />
                    </a>
                  )}
                  {member.flag && (
                    <img
                      src={`/flags/${member.flag}`}
                      alt={member.name}
                      className={`w-6 ${member.linkedin && "ml-4"}`}
                    />
                  )}
                  {member.flag_eu && (
                    <img
                      src={`/flags/${member.flag_eu}`}
                      alt="EU"
                      className={`w-7 ${member.flag && "ml-4"}`}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="contact" className="mt-14 w-[63%] mx-auto">
        <div className="flex items-center justify-center mb-8">
          <span className="text-white font-semibold text-2xl">CONTACT US</span>
        </div>
        <ContactForm />
      </div>

      <div className="relative w-[83%] bg-[#444444] footer-bar mx-auto h-[70px] [clip-path:polygon(0%_1em,_1em_0%,_100%_0%,_100%_calc(100%_-_1em),_calc(100%_-_1em)_100%,_0_100%)] mt-20">
        <div className="absolute inset-[1px] bg-[#1C1C1C] [clip-path:polygon(0%_1em,_1em_0%,_100%_0%,_100%_calc(100%_-_1em),_calc(100%_-_1em)_100%,_0_100%)] px-4 flex flex-col md:flex-row justify-center gap-2 items-center md:justify-between">
          <div className="flex flex-row gap-8 items-center">
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
          <div className="flex flex-col lg:flex-row lg:gap-5 gap-0 items-center justify-center">
            <h2 className="text-white/80 lg:text-base text-sm">
              ©Copyright {new Date().getFullYear()}
            </h2>
            <h2 className="text-white/80 lg:text-base text-sm">
              All rights reserved
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
