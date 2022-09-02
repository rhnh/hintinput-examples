import React from "react";
import "./BlueBar.css";

import { Hintput } from "@ribrary/hintput";


export const BlueBar= ({ items }) => {
  return (
    <div>
    <div className="flexbox">
      <div className="search">
        <h3>Click on search icon, then type your keyword.</h3>
        <div>
          <Hintput
            items={items}
            type="text"
            placeholder="Search . . ."
            required
            className="hintInput"
            isInline={true}
              style={{ color: "#ffffff" }}
              
          />
        </div>
        </div>
      </div>
      <a style={{color:'#282c34'}} href="https://codepen.io/takaneichinose/pen/gKVXXL"> source for blue Search bar </a>
    </div>

  );
};
