import React from "react";
import style from "./Sidebar.module.css";
import Image from "next/image";
import { ICONS } from "@/constants/icons";
import Link from "next/link";

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
          <li key={index} className={style.menuItem}>
            <Link href={menu.link} className={style.menuLink}>
              <Image src={menu.icon} alt={menu.name} width={24} height={24} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
