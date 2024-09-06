import data from "../../dataArray.json";
import { NestedMenu } from "./NestedMenuComp";
import { usePathHook } from "../usePathHook";

export default function SideNav() {
  const { isOpenVar } = usePathHook();
  return (
    <div className={`${!isOpenVar ? "text-center" : "pl-4 "} `}>
      {data.map((firstLevel, i) => (
        <nav key={firstLevel + i}>
          <span className="text-tiny tracking-widest opacity-90 mt-2 inline-block">
            {firstLevel.heading}
          </span>

          <NestedMenu list={firstLevel.list} />
        </nav>
      ))}
    </div>
  );
}
