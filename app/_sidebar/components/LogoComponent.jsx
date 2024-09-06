import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Framelogo.svg";
import OpenCloseIcon from "../../../public/images/openClose.svg";
import LogoCollapsed from "../../../public/images/figurelogoCollapsed.svg";

const LogoComponent = ({ toggleOpen, isOpenVar }) => {
  return (
    <button
      onClick={toggleOpen}
      className={`bg-white ${
        isOpenVar ? "justify-between" : "justify-center"
      } py-6 flex `}
    >
      <Image
        src={isOpenVar ? Logo : LogoCollapsed}
        alt="logo"
        width={isOpenVar ? 112 : 32}
        height={32}
        className={isOpenVar && "ml-6"}
      />
      {isOpenVar ? (
        <Image
          src={OpenCloseIcon}
          alt="logo"
          width={24}
          height={24}
          className="mr-4"
        />
      ) : (
        <></>
      )}
    </button>
  );
};

export default LogoComponent;
