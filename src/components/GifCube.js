import React, { useRef, useEffect } from "react";
import rubik from "../resources/cube.m4v";
import shellchat from "../resources/shellchat.m4v";

function GifCube() {
  let vid = useRef(null);
  let holder = useRef(null);

  useEffect(() => {
    vid.current.play();
  }, []);

  const rotate = () => {
    let keyframes = [
      { transform: "rotateY(0deg) rotateX(0deg)" },
      { transform: "rotateY(360deg) rotateX(360deg)" },
    ];

    let timing = {
      duration: 10000,
      iterations: 1,
      fill: "forwards",
      easing: "ease",
    };

    vid.current.animate(keyframes, timing);
  };

  const keyHandler = (e) => {
    // rotate();
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  return (
    <>
      <div className="scene">
        <div className="videoHolder">
          <video preload="auto" ref={vid} muted="muted" className="front">
            <source src={shellchat} type="video/mp4" />
          </video>
          <video preload="auto" ref={vid} muted="muted" className="right">
            <source src={rubik} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}

export default GifCube;
