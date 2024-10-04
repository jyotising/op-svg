import * as React from "react";
const SvgFaceRecognition = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7.5V3h4.5M3 16.5V21h4.5M21 16.5V21h-4.5M16.5 3H21v4.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 19c3.314 0 6-3.134 6-7s-2.686-7-6-7-6 3.134-6 7 2.686 7 6 7Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 12h18M10.035 15.053q.952.703 1.965.703 1.015 0 2.02-.703"
    />
  </svg>
);
export default SvgFaceRecognition;
