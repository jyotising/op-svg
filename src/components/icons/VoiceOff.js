import * as React from "react";
const SvgVoiceOff = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 12V5.5a3.5 3.5 0 0 0-7 0V12a3.5 3.5 0 1 0 7 0Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 11.5a7.5 7.5 0 0 1-.624 3M4.5 11.5a7.5 7.5 0 0 0 10 7.073M12 19v3M21 21 3 3"
    />
  </svg>
);
export default SvgVoiceOff;
