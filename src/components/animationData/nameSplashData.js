const mainTitleSlideFrames = [
  { transform: "translateX(-50vmin)", opacity: 0.2 },
  { transform: "translateX(10vmin)", opacity: 1 },
];
const mainTitleSlideTiming = {
  duration: 1600,
  iterations: 1,
  fill: "forwards",
  easing: "ease",
};
const lineSlideFrames = [
  { transform: "translateX(-50vmin) translateY(0.78vmin)", opacity: 0.2 },
  { transform: "translateX(-8vmin) translateY(0.78vmin)", opacity: 1 },
];
const lineSlideTiming = {
  duration: 1600,
  iterations: 1,
  fill: "forwards",
  easing: "ease",
};
const apostrapheSlideFrames = [
  { transform: "translateX(-50vmin) translateY(-6vmin)", opacity: 0.2 },
  { transform: "translateX(-8vmin) translateY(-6vmin)", opacity: 1 },
];
const apostrapheSlideTiming = {
  duration: 1600,
  iterations: 1,
  fill: "forwards",
  easing: "ease",
};
const brokenLetterFrames = [
  { transform: " translateY(10vmin) translateX(-9vmin) rotateZ(0deg)" },
  {
    transform:
      "translateY(10vmin) translateX(-9vmin) rotateZ(-23deg) translateY(6vmin)",
  },
];
const brokenLetterTiming = {
  duration: 1500,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(.99,-0.01,.85,.5)",
};
const knockedFramesP1 = [
  { transform: "translateX(11vmin) translateY(1vmin)" },
  { transform: "translateX(14vmin) translateY(2.2vmin)" },
];
const knockedTimingP1 = {
  duration: 150,
  iterations: 1,
  fill: "forwards",
  easing: "ease-out",
};
const knockedFramesP2 = [
  { transform: "translateX(14vmin) translateY(2.2vmin)" },
  { transform: "translateX(9.5vmin) translateY(-0.1vmin)", offset: 0.8 },
  { transform: "translateX(10vmin) translateY(0.1vmin)" },
];
const knockedTimingP2 = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in",
};
const knockedLineFrames = [
  { transform: " translateX(-8vmin) translateY(1.3vmin) rotateZ(0deg) " },
  { transform: " translateX(-5vmin) translateY(1.3vmin) rotateZ(5deg)" },
];
const knockedLineTiming = {
  duration: 200,
  iterations: 1,
  fill: "forwards",
  easing: "ease-out",
};

const knockedLineFramesP2 = [
  { transform: " translateX(-5vmin) translateY(1.3vmin) rotateZ(5deg)" },
  { transform: " translateX(-8vmin) translateY(1.3vmin) rotateZ(0deg) " },
];
const knockedLineTimingP2 = {
  duration: 200,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in",
};

const flyingApostrapheFrames = [
  { transform: " translateX(-8vmin)" },

  { transform: " translateX(42.2vmin)" },
];

const flyingApostrapheTiming = {
  duration: 1200,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in",
};

const flyingApostrapheBoxFrames = [
  { transform: "translateY(25vmin)" },
  { transform: "translateY(-100vmin)", offset: 0.95 },
  { transform: "translateY(10vmin)" },
];

// { transform: "translateY(-6vmin)" },
// { transform: "translateY(-100vmin)", offset: 0.95 },
// { transform: "translateY(-21.4vmin)" },
const flyingApostrapheBoxTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-out",
};

const lineToPlaneFrames = [
  {
    transform:
      "rotateX(-5deg) rotateY(-5deg) rotateX(90deg) translateZ(-10vmin)",
    height: "50vmin",
  },
];

const lineToPlaneTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
  easing: "ease-out",
};

export const nameSplashAnimations = {
  mainTitleSlideFrames,
  mainTitleSlideTiming,
  lineSlideFrames,
  lineSlideTiming,
  apostrapheSlideFrames,
  apostrapheSlideTiming,
  brokenLetterFrames,
  brokenLetterTiming,
  knockedFramesP1,
  knockedTimingP1,
  knockedFramesP2,
  knockedTimingP2,
  knockedLineFrames,
  knockedLineTiming,
  knockedLineFramesP2,
  knockedLineTimingP2,
  flyingApostrapheFrames,
  flyingApostrapheTiming,
  flyingApostrapheBoxFrames,
  flyingApostrapheBoxTiming,
  lineToPlaneFrames,
  lineToPlaneTiming,
};
