import React from "react";
import style from "./DropDown.module.css";

const DropDown = (props) => {
  console.log("props", props);
  const onSelectHandler = (event) => {
    if (props.label === "Country") {
      props.onCountryChange(event, "Country");
    }
    if (props.label === "State") {
      props.onStateChange(event, "State");
    }
    if (props.label === "City") {
      props.onCityChange(event, "City");
    }
  };
  return (
    <>
      <div className={style.label}>
        <label>{props.label}</label>
      </div>
      <div className={style["dropDown-list"]}>
        <select onChange={onSelectHandler} value={props.selectedItem}>
          <option style={{ fontSize: "15px" }}>Select {props.label}</option>
          {props.options &&
            props.options.map((option) => {
              return <option>{option.value}</option>;
            })}
        </select>
      </div>
    </>
  );
};

export default DropDown;
