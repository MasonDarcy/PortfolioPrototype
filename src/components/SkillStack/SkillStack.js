import React, { useEffect, useRef } from "react";
import Cube from "./Cube";
import { skillStackData } from "../animationData/skillStackData";

export default function SkillStack() {
  //Cube takes an {x, y, z} object
  let trayRef = useRef(null);
  let secondTrayRef = useRef(null);
  let thirdTrayRef = useRef(null);
  let nodeRef = useRef(null);
  let expressRef = useRef(null);
  let mongoRef = useRef(null);
  let reactRef = useRef(null);
  let reduxRef = useRef(null);
  let jsRef = useRef(null);
  let htmlRef = useRef(null);
  let cssRef = useRef(null);
  let httpRef = useRef(null);
  let restRef = useRef(null);
  let jokeRef = useRef(null);

  useEffect(() => {
    animate();
  }, []);

  const animate = () => {
    let slideInAnimate = trayRef.current.animate(
      skillStackData.traySlideFrames,
      skillStackData.traySlideTiming
    );
    secondTrayAnimate();
    thirdTrayAnimate();

    slideInAnimate.onfinish = () => {
      let mongoAnimate = mongoRef.current.animate(
        skillStackData.cubeFallFrames,
        skillStackData.cubeFallTiming
      );

      let expressAnimate = expressRef.current.animate(
        skillStackData.cubeFallFrames,
        { ...skillStackData.cubeFallTiming, delay: 250 }
      );
      let reactAnimate = reactRef.current.animate(
        skillStackData.cubeFallFrames,
        { ...skillStackData.cubeFallTiming, delay: 375 }
      );

      let reduxAnimate = reduxRef.current.animate(
        skillStackData.cubeFallFrames,
        { ...skillStackData.cubeFallTiming, delay: 437.5 }
      );

      let nodeAnimate = nodeRef.current.animate(skillStackData.cubeFallFrames, {
        ...skillStackData.cubeFallTiming,
        delay: 468.75,
      });
    };
  };

  const secondTrayAnimate = () => {
    let slideInAnimate = secondTrayRef.current.animate(
      skillStackData.secondTraySlideFrames,
      { ...skillStackData.secondTraySlideTiming, delay: 2700 }
    );

    slideInAnimate.onfinish = () => {
      let jsAnimate = jsRef.current.animate(
        skillStackData.cubeFallSecondFrames,
        skillStackData.cubeFallTiming
      );
      let cssAnimate = cssRef.current.animate(
        skillStackData.cubeFallSecondFrames,
        { ...skillStackData.cubeFallTiming, delay: 250 }
      );
      let htmlAnimate = htmlRef.current.animate(
        skillStackData.cubeFallSecondFrames,
        { ...skillStackData.cubeFallTiming, delay: 375 }
      );
    };
  };

  const thirdTrayAnimate = () => {
    let slideInAnimate = thirdTrayRef.current.animate(
      skillStackData.thirdTraySlideFrames,
      { ...skillStackData.thirdTraySlideTiming, delay: 5400 }
    );

    slideInAnimate.onfinish = () => {
      let httpAnimate = httpRef.current.animate(
        skillStackData.cubeFallThirdFrames,
        skillStackData.cubeFallTiming
      );
      let restAnimate = restRef.current.animate(
        skillStackData.cubeFallThirdFrames,
        { ...skillStackData.cubeFallTiming, delay: 250 }
      );
    };
  };

  return (
    <>
      <div className="camera">
        <div className="horizontalParent" ref={trayRef}>
          <div className="verticalParent" ref={mongoRef}>
            <Cube position={{ x: 2, y: 3, z: 0 }} name="mongo" />
          </div>
          <div className="verticalParent" ref={expressRef}>
            <Cube position={{ x: 3, y: 3, z: 0 }} name="express" />
          </div>
          <div className="verticalParent" ref={reactRef}>
            <Cube position={{ x: 4, y: 3, z: 0 }} name="react" />
          </div>
          <div className="verticalParent" ref={reduxRef}>
            <Cube position={{ x: 5, y: 3, z: 0 }} name="redux" />
          </div>
          <div className="verticalParent" ref={nodeRef}>
            <Cube position={{ x: 6, y: 3, z: 0 }} name="node" />
          </div>
        </div>
        <div className="horizontalParent" ref={secondTrayRef}>
          <div className="verticalParent" ref={jsRef}>
            <Cube position={{ x: 2, y: 3, z: 0 }} name="js" />
          </div>
          <div className="verticalParent" ref={cssRef}>
            <Cube position={{ x: 3, y: 3, z: 0 }} name="css" />
          </div>
          <div className="verticalParent" ref={htmlRef}>
            <Cube position={{ x: 4, y: 3, z: 0 }} name="html" />
          </div>
        </div>
        <div className="horizontalParent" ref={thirdTrayRef}>
          <div className="verticalParent" ref={httpRef}>
            <Cube position={{ x: 2, y: 3, z: 0 }} name="http" />
          </div>
          <div className="verticalParent" ref={restRef}>
            <Cube position={{ x: 3, y: 3, z: 0 }} name="rest" />
          </div>
        </div>
      </div>
    </>
  );
}
