import * as React from "react";
const SvgIosFaceRecognition = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#ios-face-recognition_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2 17v5h5M17 22h5v-5M17 2h5v5M7 2H2v5M8 17s1.5 1.5 4 1.5 4-1.5 4-1.5M12 7v4.5c0 1-1 2-2 2h-.5M17 7v1M7 7v1"
      />
    </g>
    <defs>
      <clipPath id="ios-face-recognition_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIosFaceRecognition;
