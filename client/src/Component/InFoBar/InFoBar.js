import React from "react";
import onlineIcon from "../../icons/onlineIcon.png";
import CloseIcon from "../../icons/CloseIcon.png";
import "./InFoBar.css";

const InFoBar = ({ room }) =>(
    <div className="infobar">
      <div className="leftinnercontainer">
        <img className="onlineIcon" src={onlineIcon} alt="online" />
        <h3>{room}</h3>
      </div>
      <div className="rightinnercontainer">
        <a href="/">
                <img src={CloseIcon} alt="close" />
        </a>
      </div>
    </div>
  );


export default InFoBar;
