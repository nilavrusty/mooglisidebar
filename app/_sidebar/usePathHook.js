import { usePathname, useSearchParams } from "next/navigation";

export const usePathHook = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isOpen = searchParams.get("isOpen");

  const isOpenVar = Number(isOpen);

  return { pathname, isOpenVar };
};
