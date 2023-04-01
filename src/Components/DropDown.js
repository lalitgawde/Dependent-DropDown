import React from "react";
import style from "./DropDown.module.css";

const DropDown = (props) => {
  return (
    <>
      <div className={style.label}>
        <label>{props.label}</label>
      </div>
      <div className={style["dropDown-list"]}>
        <select>
          <option style={{ fontSize: "15px" }}>Select {props.label}</option>
          {props.options.map((option) => {
            return <option>{option.value}</option>;
          })}
        </select>
      </div>
    </>
  );
};

export default DropDown;
