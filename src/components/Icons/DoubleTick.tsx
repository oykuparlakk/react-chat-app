import React from "react";

const DoubleTick = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      { ...props }
    >
      <rect width="25" height="25" fill="white" fillOpacity="0.9" />
      <path
        d="M8.98438 15.2344L12.8906 19.1406L22.2656 8.98438M2.73438 15.2344L6.64062 19.1406L2.73438 15.2344ZM12.1094 12.8906L16.0156 8.98438L12.1094 12.8906Z"
        stroke="#9747FF"
        strokeWidth="2.8125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DoubleTick;
