"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathHook } from "../usePathHook";
// uitils kept outside the render cycle to avoid recreation every render.
import {
  fetchLinkStyles,
  fetchActiveLinkStyles,
  fetchLogoImage,
} from "./utils";

export const NestedMenu = ({ list }) => {
  return list?.map((listData, i) => {
    return <EachTree {...listData} key={listData.heading + i} />;
  });
};

const EachTree = ({ heading, href, icon, iconActive, list }) => {
  const { isOpenVar, pathname } = usePathHook();

  const isActive = pathname.replace("dashboard/", "").startsWith(href);

  const [openChildren, setOpenChildren] = useState(Boolean(isOpenVar));

  const onOpenToggle = () => {
    setOpenChildren((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Link
        className={`flex items-baseline py-2 hover:bg-gray-50 hover:rounded-md  w-full ${fetchLinkStyles(
          isActive,
          icon,
          isOpenVar
        )}`}
        href={"/dashboard" + href + `?isOpen=${isOpenVar}`}
        onClick={list ? onOpenToggle : null}
      >
        {!icon ? (
          <div className={fetchActiveLinkStyles(pathname, href)}></div>
        ) : null}

        <div className="flex items-center">
          {icon ? (
            <Image
              src={fetchLogoImage(isActive, { iconActive, icon })}
              alt="logo"
              width={20}
              height={20}
              className={isOpenVar ? "mr-2" : ""}
            />
          ) : (
            <></>
          )}
          {isOpenVar ? (
            <span className={!list ? `pl-3` : ""}>{heading}</span>
          ) : null}
        </div>
        {list?.length && isOpenVar ? (
          <Image
            src="/images/basicarrow.svg"
            alt="arrow-logo"
            width={20}
            height={20}
            className={`mr-2 ${!openChildren ? "-rotate-90" : ""}`}
          />
        ) : null}
      </Link>
      {list?.length && isOpenVar && openChildren ? (
        <div className="pl-4 add-line">
          <NestedMenu list={list} />
        </div>
      ) : null}
    </React.Fragment>
  );
};
