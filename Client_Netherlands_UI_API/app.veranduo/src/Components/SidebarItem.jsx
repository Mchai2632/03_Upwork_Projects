"use client";

import React from "react";
import style from "./Sidebar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

export default function SidebarItem({ menu, index }) {
  return (
    <li
      key={index}
      className={style.menuItem}
      data-tooltip-id={`tooltip-${menu.name}`}
      data-tooltip-content={menu.name}
    >
      <Link href={menu.link} className={style.menuLink}>
        <Image src={menu.icon} alt={menu.name} width={24} height={24} />
      </Link>

      <Tooltip id={`tooltip-${menu.name}`} place="right" />
    </li>
  );
}
