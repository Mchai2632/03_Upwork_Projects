import React from "react";
import style from "./Navbar.module.css";
import Image from "next/image";
import { ICONS } from "@/constants/icons";

export default function Navbar() {
  return (
    <div className={style.navbar}>
      <div style={{ marginRight: "16px" }}>
        <Image
          src={ICONS.Ic_Help}
          alt="help"
          width={24}
          height={24}
          style={{ marginRight: "6px" }}
        />
        <Image src={ICONS.Notifications} alt="notifications" width={24} height={24} />
      </div>
      <div className={style.navbar_user_container}>
        <div className={style.navbar_user_image}>VV</div>
        <div className={style.navbar_user_name_role}>
          <span style={{ fontWeight: "500" }}>Varo Veranda</span>
          <span style={{ color: "gray", fontSize: "12px" }}>Admin</span>
        </div>
      </div>
    </div>
  );
}
