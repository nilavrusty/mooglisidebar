import React from "react";
import Image from "next/image";
import Icon20yy from "../../../public/images/Icon20yyIcon.svg";
import Updown from "../../../public/images/doubleupdown.svg";

const YearOfReport = ({ isOpenVar }) => {
  return (
    <div
      className={`flex p-2 mb-4 border border-gray-200 rounded-xl ${
        isOpenVar ? "justify-between" : "justify-center px-4 ml-0"
      }`}
    >
      <div className="flex">
        {isOpenVar ? (
          <Image src={Icon20yy} alt="logo" className="mr-4" />
        ) : null}
        <div className="flex flex-col">
          <span
            className={`text-black ${isOpenVar ? "mb-2" : "mb-0"} font-bold`}
          >
            20yy
          </span>
          {isOpenVar ? <span className="text-xs">year of report</span> : null}
        </div>
      </div>
      {isOpenVar ? <Image src={Updown} alt="logo" /> : null}
    </div>
  );
};

export default YearOfReport;
