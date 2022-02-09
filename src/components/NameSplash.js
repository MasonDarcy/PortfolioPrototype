import React, { useEffect, useRef, useState } from "react";
import { nameSplashAnimations } from "./animationData/nameSplashData";
import SkillStack from "./SkillStack/SkillStack";

const NameSplash = () => {
  const mainTitleRef = useRef(null);
  const subTitleRef = useRef(null);
  const mLetterRef = useRef(null);
  const lineRef = useRef(null);
  const apostrapheRef = useRef(null);
  const apostrapheContainerRef = useRef(null);
  const [rainingCube, setRainingCube] = useState(false);

  useEffect(() => {
    let titleSlideAnimation = mainTitleRef.current.animate(
      nameSplashAnimations.mainTitleSlideFrames,
      nameSplashAnimations.mainTitleSlideTiming
    );
    titleSlideAnimation.onfinish = subtitleSlideAnimation;
    console.log(titleSlideAnimation.timeline);
  }, []);

  const subtitleSlideAnimation = () => {
    let subTitleSlideAnimation = subTitleRef.current.animate(
      nameSplashAnimations.mainTitleSlideFrames,
      nameSplashAnimations.mainTitleSlideTiming
    );

    lineRef.current.animate(
      nameSplashAnimations.lineSlideFrames,
      nameSplashAnimations.lineSlideTiming
    );
    apostrapheRef.current.animate(
      nameSplashAnimations.apostrapheSlideFrames,
      nameSplashAnimations.apostrapheSlideTiming
    );
    subTitleSlideAnimation.onfinish = brokenLetterAnimation;
  };
  const brokenLetterAnimation = () => {
    let mLetterBreaks = mLetterRef.current.animate(
      nameSplashAnimations.brokenLetterFrames,
      nameSplashAnimations.brokenLetterTiming
    );
    mLetterBreaks.onfinish = knockedAnimationP1;
  };
  const knockedAnimationP1 = () => {
    let knocked = subTitleRef.current.animate(
      nameSplashAnimations.knockedFramesP1,
      nameSplashAnimations.knockedTimingP1
    );
    knocked.onfinish = knockedAnimationP2;
  };
  const knockedAnimationP2 = () => {
    let knockedSubtitle = subTitleRef.current.animate(
      nameSplashAnimations.knockedFramesP2,
      nameSplashAnimations.knockedTimingP2
    );
    knockedLineAnimation();
  };
  const knockedLineAnimation = () => {
    let knockedLine = lineRef.current.animate(
      nameSplashAnimations.knockedLineFrames,
      nameSplashAnimations.knockedLineTiming
    );
    apostrapheAnimation();
    knockedLine.onfinish = () => {
      let knockedLine = lineRef.current.animate(
        nameSplashAnimations.knockedLineFramesP2,
        nameSplashAnimations.knockedLineTimingP2
      );
    };
  };
  const apostrapheAnimation = () => {
    let apostrapheAnim = apostrapheRef.current.animate(
      nameSplashAnimations.flyingApostrapheFrames,
      nameSplashAnimations.flyingApostrapheTiming
    );
    let apostrapheBoxAnim = apostrapheContainerRef.current.animate(
      nameSplashAnimations.flyingApostrapheBoxFrames,
      nameSplashAnimations.flyingApostrapheBoxTiming
    );
    apostrapheBoxAnim.onfinish = lineToFloorAnimation;
  };
  const lineToFloorAnimation = () => {
    let lineToFloorAnimation = lineRef.current.animate(
      nameSplashAnimations.lineToPlaneFrames,
      nameSplashAnimations.lineToPlaneTiming
    );

    lineToFloorAnimation.onfinish = () => {
      setRainingCube(true);
    };
  };

  return (
    <>
      <div className="nameSplashParent">
        <div className="mainTitle" ref={mainTitleRef}>
          <div className="mLetter" ref={mLetterRef}>
            M
          </div>

          <div>ason D Arcy</div>
        </div>
        <div className="subTitle" ref={subTitleRef}>
          Web developer
        </div>
        <div className="line" ref={lineRef} />
        <div className="apostrapheBox" ref={apostrapheContainerRef}>
          <div className="apostraphe" ref={apostrapheRef}>
            '
          </div>
        </div>
      </div>

      {rainingCube ? <SkillStack /> : null}
    </>
  );
};

export default NameSplash;
