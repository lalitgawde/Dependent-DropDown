import React, { useState } from "react";
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
  const [selectedCountry, setSelectedCountry] = useState();
  const [selectedState, setSelectedState] = useState();
  const [selectedCity, setSelectedCity] = useState();

  const [statesList, setStatesList] = useState();
  const [citiesList, setCitiesList] = useState();

  const onSelectChange = (event, val) => {
    console.log("event", event, event.target.value);
    if (val === "Country") {
      setSelectedCountry(event.target.value);
      let arr = [];
      stateList.forEach((item) => {
        if (item.country === event.target.value) {
          arr.push(item);
        }
      });
      setCitiesList("");
      setSelectedCity("");
      // arr = stateList.filter((state) => {
      //   return state.country === event.target.value;
      // });
      setStatesList(arr);
    }
    if (val === "State") {
      setSelectedState(event.target.value);
      let arr = [];
      cityList.forEach((item) => {
        if (item.state === event.target.value) {
          arr.push(item);
        }
      });
      // arr = cityList.filter((state) => {
      //   return state.state === event.target.value;
      // });
      setCitiesList(arr);
    }
    if (val === "City") {
      setSelectedCity(event.target.value);
    }
  };

  return (
    <div className="DropDown">
      <div className={style["DropDown-item"]}>
        <DropDown
          label="Country"
          options={countryList}
          onCountryChange={onSelectChange}
          selectedItem={selectedCountry}
        />
      </div>
      <div className={style["DropDown-item"]}>
        <DropDown
          label="State"
          options={statesList}
          onStateChange={onSelectChange}
          selectedItem={selectedState}
        />
      </div>
      <div className={style["DropDown-item"]}>
        <DropDown
          label="City"
          options={citiesList}
          onCityChange={onSelectChange}
          selectedItem={selectedCity}
        />
      </div>
    </div>
  );
}

export default Example1;
