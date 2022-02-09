import React from "react";

/*
Atomic cube shape. Given a set of co-ordinates, creates a cube at that position.
*/
const Cube = ({ position, name }) => {
  const CUBE_DIMENSION_SIZE = 10;
  const CUBE_UNIT = "vmin";

  return (
    <div
      className="cubeParent"
      style={{
        transform: `translateX(${position.x * CUBE_DIMENSION_SIZE}${CUBE_UNIT}) 
        translateY(${position.y * CUBE_DIMENSION_SIZE}${CUBE_UNIT})
        translateZ(${position.z * -1 * CUBE_DIMENSION_SIZE}${CUBE_UNIT})`,
      }}
    >
      <div className="front">{name}</div>
      <div className="back"></div>
      <div className="right"></div>
      <div className="left"></div>
      <div className="top"></div>
      <div className="bottom"></div>
    </div>
  );
};

export default Cube;
