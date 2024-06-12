import React from "react";
import style from "./skillsItem.module.css";

function Skillsitem({ ComponentIcon, name, text }) {
  return (
    <div className={style.skillsitemwrapper}>
      <div className={style.iconSide}>
        <div className={style.icon}>
          <ComponentIcon />
        </div>
        <div className={style.title}>
          <h4>{name}</h4>
        </div>
      </div>
      <div className={style.infoSide}>
        <p>{text}</p>
        {/* <p className={style.viewmore}>View Examples</p> */}
      </div>
    </div>
  );
}

export default Skillsitem;
