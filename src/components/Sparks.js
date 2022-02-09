import React, { useRef, useState, useEffect } from "react";
import style from "../style.css";

const Sparks = () => {
  const sparkRef = useRef(null);

  useEffect(() => {
    const keyframes = [
      { transform: "translateX(10vmin) rotateZ(0deg)", opacity: 0.2 },
      { transform: "translateY(10vmin) rotateZ(180deg)", opacity: 1 },
    ];

    const timing = {
      duration: 500,
      iterations: 1,
      fill: "forwards",
      easing: "ease",
    };

    sparkRef.current.animate(keyframes, timing);
  }, []);

  return (
    <>
      <div className="sparkOrigin">
        <div className="spark" ref={sparkRef}></div>
      </div>
    </>
  );
};

export default Sparks;
