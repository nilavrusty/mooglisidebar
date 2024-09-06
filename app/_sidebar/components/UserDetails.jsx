import React from "react";
import Image from "next/image";
import UserIcon from "../../../public/images/Iconuser.svg";

const UserDetails = ({ isOpenVar }) => {
  return (
    <div className="flex pl-6 bottom-0 z-10 bg-white mb-0 w-80 h-24 items-center shadow-sm border-t border-gray-100">
      <Image src={UserIcon} alt="logo" className="mr-4" />
      {isOpenVar ? (
        <div className="flex flex-col">
          <span className="text-black mb-1 font-bold">John Doe</span>
          <span className="text-xs">john.doe@moogli.io</span>
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;
