const traySlideFrames = [
  { transform: "translateX(-100vmin)" },
  { transform: "translateX(10vmin) " },
  { transform: "translateX(3vmin) " },
];
const traySlideTiming = {
  duration: 3500,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(.49,-0.01,.5,.92)",
};

const secondTraySlideFrames = [
  { transform: "translateX(-150vmin)" },
  { transform: "translateX(20vmin)" },
  { transform: "translateX(13vmin)" },
];
const secondTraySlideTiming = {
  duration: 3500,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(.49,-0.01,.5,.92)",
};

const thirdTraySlideFrames = [
  { transform: "translateX(-150vmin)" },
  { transform: "translateX(20vmin)" },
  { transform: "translateX(18vmin)" },
];
const thirdTraySlideTiming = {
  duration: 3500,
  iterations: 1,
  fill: "forwards",
  easing: "cubic-bezier(.49,-0.01,.5,.92)",
};

const cubeFallFrames = [
  { transform: "translateZ(0vmin)" },
  { transform: "translateZ(-23vmin)" },
];
const cubeFallTiming = {
  duration: 500,
  iterations: 1,
  fill: "forwards",
  easing: "ease-in",
};

const cubeFallSecondFrames = [
  { transform: "translateZ(0vmin)" },
  { transform: "translateZ(-13vmin)" },
];

const cubeFallThirdFrames = [
  { transform: "translateZ(0vmin)" },
  { transform: "translateZ(-3vmin)" },
];

// cubic-bezier(.68,.21,1,1.01)
export const skillStackData = {
  cubeFallFrames,
  cubeFallTiming,
  traySlideFrames,
  traySlideTiming,
  secondTraySlideFrames,
  secondTraySlideTiming,
  thirdTraySlideFrames,
  thirdTraySlideTiming,
  cubeFallSecondFrames,
  cubeFallThirdFrames,
};
