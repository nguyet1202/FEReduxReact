import React from "react";

export default function Call() {
  return (
    <div>
      <div className="call__btn">
        <a href="tel:0966677885" id="popup__toggle" onclick="return true;">
          <div className="circlePhone" style={{ transformOrigin: "center" }} />
          <div className="circle-fill" style={{ transformOrigin: "center" }} />
          <div className="img-circle" style={{ transformOrigin: "center" }}>
            <div
              className="img-circleBlock"
              style={{ transformOrigin: "center" }}
            />
          </div>
        </a>
      </div>
      
    </div>
  );
}
