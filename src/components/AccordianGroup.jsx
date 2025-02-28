import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

const AccordianGroup = ({ items }) => {
  const [actived, setActived] = useState("");

  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className={`relative transition-all ease-in-out duration-300 accordian cursor-pointer clip bg-gradient w-full mb-4 ${
            actived === item.title || actived !== "" ? "" : "h-[60px]"
          }`}
          style={{
            height: actived === item.title ? `${item.activedHeight}px` : "60px",
          }}
        >
          <div className="absolute clip inset-[1px] bg-[#1C1C1C] overflow-y-scroll">
            <div
              className="flex w-full items-center justify-between mt-4"
              onClick={() => {
                setActived(actived === item.title ? "" : item.title);
              }}
            >
              <div className="flex items-center justify-center sticky">
                <span className="gradient-text font-semibold text-sm md:text-lg ml-10 ">
                  {item.title}
                </span>
              </div>
              <FaAngleDown
                className={`transition-transform duration-300 ease-in-out mr-10 ${
                  actived === item.title ? "rotate-180" : "rotate-0"
                }`}
                color="white"
              />
            </div>
            {actived === item.title && (
              <>
                <div className="bg-gradient h-[1px] w-[95%] mx-auto mt-2"></div>
                <p className="text-white/80 font-normal text-xs md:text-base px-4 md:px-10 mt-2">
                  {item.info}
                </p>
                {item.activedHeight === 400 && (
                  <p className="text-white/80 font-normal text-xs md:text-base px-4 md:px-10 mt-2 mb-2">
                    <br />
                    1. {item.info1}
                    <br />
                    <br />
                    2. {item.info2}
                    <br />
                    <br />
                    3. {item.info3}
                    <br />
                    <br />
                    4. {item.info4}
                    <br />
                    <br />
                    5. {item.info5}
                    <br />
                    <br />
                    6. {item.info6}
                    <br />
                    <br />
                    7. {item.info7}
                    <br />
                    <br />
                    8. {item.info8}
                    <br />
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AccordianGroup;
