import React, {  useState } from "react";
import Timer from "./Timer";

const TimerWrapper = () => {

  const [toggle, setToggle] = useState(true);
 // const display = document.querySelector("#count-dislay");
  //const button = document.querySelector("#toggle-button");

  const toggleCount = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <button id="toggle-button" onClick={toggleCount}>
        toggle count
      </button>
      {toggle && <Timer />}
    </div>
  );
};
export default TimerWrapper;
