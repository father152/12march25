import React from "react";
import "./main.css";
import blockimg1 from "../img/af6544a1cd327d38ebe07fe40db1fabb.jpg";

function Main() {
  return (
    <div className="main">
      <h2>Main</h2>
      <div className="container-main">
        <div className="block-1">
          <div className="girl">
            <img src={blockimg1} alt=""></img>
          </div>
          <h1>never give up</h1>
        </div>
      </div>
    </div>
  );
}
export { Main };
