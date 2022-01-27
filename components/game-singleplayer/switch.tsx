import { useState } from "react";
import CircleIcon from "../icons/circle-icon";
import ComputerIcon from "../icons/computer-icon";
import CrossIcon from "../icons/cross-icon";
import PersonIcon from "../icons/person-icon";
import classes from "./switch.module.css";

type PropsTypes = {
  switchFor: string;
  currentOption: boolean;
  func: (mode?: boolean) => void;
};

const Switch = ({ currentOption, switchFor, func }: PropsTypes) => {
  const handleClick = () => {
    func();
  };

  return (
    <div className={classes.switchBackground}>
      <div className={classes.switchGrid}>
        <div className={classes.svgContainer}>
          <div
            style={{ opacity: `${currentOption ? 1 : 0.4}` }}
            onClick={handleClick}
          >
            {switchFor === "turn" ? <CrossIcon /> : <PersonIcon />}
          </div>
        </div>
        <div className={classes.svgContainer}>
          <div
            style={{ opacity: `${!currentOption ? 1 : 0.4}` }}
            onClick={handleClick}
          >
            {switchFor === "turn" ? <CircleIcon /> : <ComputerIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Switch;
