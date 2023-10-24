import css from "../style.module.css";
import { SidebarItems } from "./SidebarItems";

import { useDashboardContext } from "../Provider";

interface SidebarProps {
  mobileOrientation: "start" | "end";
}

const style = {
  mobileOrientation: {
    start: "left-0",
    end: "right-0",
  },
  
  container: "bg-gray-100 w-34 ",
  close: "hidden lg:block lg:w-64 lg:z-auto",
  open: "w-34 absolute z-40 sm:w-5/12 ",
  default: "bg-gray-100 scrollbar  overflow-auto h-screen   ",
};

export function Sidebar(props: SidebarProps) {
  const { sidebarOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default}
        ${style.mobileOrientation[props.mobileOrientation]}
        ${sidebarOpen ? style.open : style.close} ${css.scrollbar}`}
    >
      <div className={style.container}>

        <SidebarItems />
      </div>
      <div className="mb-20 pr-10">
      <div className="text-center py-4">
        <p className="text-xs">Powered by</p>
        <img
          src="https://www.npxtech.com.br/images/logo.png"
          alt="Logo"
          className="mx-auto h-8"
        />
      </div>
    </div>

    </aside>
  );
}
