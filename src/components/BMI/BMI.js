import React, { useState } from "react";
import "../BMI/BMI.css"

const BMI = () => {
    const [bmi, setBmi] = useState();
    const [info, setInfo] = useState();
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const handleBmi = () => {
      let val = (
        [Number(weight) / Number(height) / Number(height)] * 10000
      ).toFixed(1);
      setBmi(val);
      if (val < 18.5) {
        setInfo("Under Weight");
      } else if (val > 18.5 && val <= 24.9) {
        setInfo("Healthy");
      } else if (val > 24.9 && val < 30) {
        setInfo("Overweight");
      } else {
        setInfo("Obese");
      }
    };
    return (
      <div  className="calculator">
        <h1 className="bmi">BMI Calculator</h1>
        <input className="height-cm"
          type="number"
          onChange={(e) => setHeight(e.target.value)}
          placeholder="height in cm"
        />
        <input className="height-cm"
          type="number"
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Weight in kg"
        />
        <button className="btn" onClick={handleBmi}>Calculate</button>
        <h1>{bmi}</h1>
        <h2>{info}</h2>
      </div>
    );
  };
  
  export default BMI;

  