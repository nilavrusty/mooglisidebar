export const fetchLinkStyles = (isActive, icon, isOpenVar) => {
  if (isOpenVar) {
    if (isActive) {
      return "font-medium text-black bg-gray-50 rounded-md relative justify-between w-full";
    } else {
      return " justify-between w-full";
    }
  } else {
    if (!icon && href) {
      return "hidden";
    } else if (isActive) {
      return "justify-center pr-2 w-auto bg-gray-50 rounded-2xl";
    } else {
      return "justify-center pr-2 w-auto";
    }
  }
};

export const fetchActiveLinkStyles = (pathname, href) => {
  if (pathname === "/dashboard" + href) {
    return "absolute w-0.5 h-4 bg-gray-900 left-0 top-2.5 rounded-r-2xl";
  } else {
    return "hidden";
  }
};

export const fetchLogoImage = (isActive, val) => {
  if (isActive) {
    return `/images/${val.iconActive}`;
  } else {
    return `/images/${val.icon}`;
  }
};
