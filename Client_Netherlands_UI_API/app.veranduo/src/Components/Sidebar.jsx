import React from "react";
import style from "./Sidebar.module.css";
import Image from "next/image";
import { ICONS } from "@/constants/icons";
import SidebarItem from "./SidebarItem";

const SidebarMenus = [
  { name: "Dashboard", link: "/", icon: ICONS.Dashboard },
  { name: "Teams", link: "/teams", icon: ICONS.Team },
  { name: "Documents", link: "/documents", icon: ICONS.Documents },
  { name: "Reports", link: "/reports", icon: ICONS.Reports },
  { name: "Calendar", link: "/calendar", icon: ICONS.Calendar },
  { name: "Settings", link: "/settings", icon: ICONS.Settings },
  { name: "Help", link: "/help", icon: ICONS.Help },
];

export default function Sidebar() {
  return (
    <div className={style.sidebar_container}>
      <div style={{ width: "100%", textAlign: "center" }}>
        <Image src="/logo.svg" alt="logo" width={50} height={50} />
      </div>
      <ul className={style.sidebar_menu_container}>
        {SidebarMenus.map((menu, index) => (
          <SidebarItem menu={menu} index={index} key={index} />
        ))}
      </ul>
    </div>
  );
}
