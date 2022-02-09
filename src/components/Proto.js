import React, { useRef, useState, useEffect } from "react";
import "../style.css";

function Proto() {
  let animationRefs = useRef([]);
  let elementRefs = useRef([]);
  let indexRef = useRef(0);
  let forwards = useRef(false);
  const addToRefs = (el) => {
    elementRefs.current.push(el);
  };

  const getEdgeAnimationData = () => {
    return {
      keyframes: [
        { width: "0vmin", opacity: "0" },
        { width: "25vmin", opacity: "0.9" },
      ],
      timing: {
        duration: 500,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
      },
    };
  };

  const getNodeAnimationData = () => {
    return {
      keyframes: [{ opacity: 0 }, { opacity: 1 }],
      timing: {
        duration: 200,
        iterations: 1,
        fill: "forwards",
        easing: "ease",
      },
    };
  };

  const initializeAnimations = () => {
    for (let i = 0; i < elementRefs.current.length; i += 2) {
      let { keyframes, timing } = getEdgeAnimationData();
      let edgeAnimation = elementRefs.current[i].animate(keyframes, timing);
      edgeAnimation.pause();
      animationRefs.current.push({ animation: edgeAnimation, fired: false });

      let nodeAnimationData = getNodeAnimationData();
      let nodeAnimation = elementRefs.current[i + 1].animate(
        nodeAnimationData.keyframes,
        nodeAnimationData.timing
      );
      nodeAnimation.pause();
      animationRefs.current.push({ animation: nodeAnimation, fired: false });
    }
  };

  const keyHandler = (e) => {
    switch (e.keyCode) {
      case 65:
        //Start animation
        //a
        forwards.current = !forwards.current;
        animate();

        break;
      case 68:
        //Reverse animation
        //d
        //    animation.current.reverse();
        animationRefs.current[0].reverse();

        break;
    }
  };

  const animate = () => {
    fireAnimation();
    setAnimationCallback();
  };

  const fireAnimation = () => {
    if (animationRefs.current[indexRef.current].fired) {
      animationRefs.current[indexRef.current].animation.reverse();
    } else {
      animationRefs.current[indexRef.current].animation.play();
      animationRefs.current[indexRef.current].fired = true;
    }
  };

  const setAnimationCallback = () => {
    if (forwards.current && indexRef.current < elementRefs.current.length - 1) {
      animationRefs.current[indexRef.current].animation.onfinish =
        nextAnimation;
    } else if (!forwards.current && indexRef.current > 0) {
      animationRefs.current[indexRef.current].animation.onfinish =
        nextAnimation;
    }
  };

  const nextAnimation = () => {
    animationRefs.current[indexRef.current].animation.onfinish = null;
    let increment;
    forwards.current ? (increment = 1) : (increment = -1);
    if (
      indexRef.current + increment < animationRefs.current.length &&
      indexRef.current + increment >= 0
    ) {
      if (animationRefs.current[indexRef.current + increment].fired) {
        animationRefs.current[indexRef.current + increment].animation.reverse();
        animationRefs.current[indexRef.current + increment].animation.onfinish =
          nextAnimation;
      } else {
        animationRefs.current[indexRef.current + increment].animation.play();
        animationRefs.current[indexRef.current + increment].fired = true;
        animationRefs.current[indexRef.current + increment].animation.onfinish =
          nextAnimation;
      }
      indexRef.current += increment;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", keyHandler);
    return () => {
      window.removeEventListener("keydown", keyHandler);
    };
  });

  useEffect(() => {
    initializeAnimations();
    console.log("Useeffect");
    console.log(elementRefs.current);
    console.log(animationRefs.current);
  }, []);

  return (
    <>
      <div className="parent">
        <div className="edge" ref={addToRefs}></div>
        <div className="node" ref={addToRefs}>
          Front-end
        </div>
      </div>
      <div className="parent2">
        <div className="edge" ref={addToRefs}></div>
        <div className="node" ref={addToRefs}>
          HTML
        </div>
      </div>
    </>
  );
}

export default Proto;
