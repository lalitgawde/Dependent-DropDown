import React from "react";
import "../App.css";
import style from "./Example1.module.css";

import DropDown from "./DropDown";

const countryList = [{ value: "India" }, { value: "Germany" }];

const stateList = [
  { country: "India", value: "Maharashtra" },
  { country: "India", value: "Delhi" },
  { country: "Germany", value: "Berlin" },
  { country: "Germany", value: "Hamburg" },
];

const cityList = [
  { state: "Maharashtra", value: "Pune" },
  { state: "Maharashtra", value: "Mumbai" },
  { state: "Delhi", value: "New Delhi" },
  { state: "Delhi", value: "North Delhi" },
  { state: "Berlin", value: "Berlin Treptow" },
  { state: "Berlin", value: "Buckow" },
  { state: "Hamburg", value: "Harburg" },
  { state: "Hamburg", value: "Lurup" },
];

function Example1() {
  return (
    <div className="DropDown">
      <div className={style["DropDown-item"]}>
        <DropDown label="Country" options={countryList} />
      </div>
      <div className={style["DropDown-item"]}>
        <DropDown label="State" options={stateList} />
      </div>
      <div className={style["DropDown-item"]}>
        <DropDown label="City" options={cityList} />
      </div>
    </div>
  );
}

export default Example1;
