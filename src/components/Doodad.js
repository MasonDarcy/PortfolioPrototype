import React, { useEffect, useRef } from "react";

const Doodad = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const keyframes = [
      { transform: "translateX(-50vmin)", opacity: 0.2 },
      { transform: "translateX(10vmin)", opacity: 1 },
    ];

    const timing = {
      duration: 1600,
      iterations: 1,
      fill: "forwards",
      easing: "ease",
    };
  }, []);

  return <div className="doodad">Hello</div>;
};

export default Doodad;
