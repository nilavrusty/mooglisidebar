"use client";

import { useRouter } from "next/navigation";

import { usePathHook } from "./usePathHook";
import LogoComponent from "./components/LogoComponent";
import YearOfReport from "./components/YearOfReport";
import UserDetails from "./components/UserDetails";
import SideNav from "./components/SideNav";

export default function SideBar() {
  const router = useRouter();
  const { isOpenVar, pathname } = usePathHook();

  const toggleOpen = (e) => {
    e.stopPropagation();
    router.push(pathname + `?isOpen=${isOpenVar > 0 ? 0 : 1}`);
  };

  return (
    <aside
      className={` text-[#6A6F85] text-sm font-normal flex flex-col relative shadow-sm border-r border-gray-100 h-screen transition-all ease-in-out overflow-hidden
        duration-150 h-screen ${isOpenVar ? "w-80" : "w-24"}`}
    >
      <LogoComponent toggleOpen={toggleOpen} isOpenVar={isOpenVar} />
      <div className={`flex-1 overflow-y-auto`}>
        <div
          className={`p-4 mb-4 ${
            isOpenVar ? "" : "flex flex-col items-center"
          }`}
        >
          <YearOfReport isOpenVar={isOpenVar} />
          <SideNav />
        </div>
      </div>
      <UserDetails isOpenVar={isOpenVar} />
    </aside>
  );
}
