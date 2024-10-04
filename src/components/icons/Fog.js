import * as React from "react";
const SvgFog = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fog_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.727 15.497A6.98 6.98 0 0 1 2 9.943C2 6.108 5.053 3 8.818 3c3.149 0 5.799 2.173 6.583 5.127a4.46 4.46 0 0 1 2.053-.499c2.51 0 4.546 2.073 4.546 4.629a4.63 4.63 0 0 1-2.727 4.243"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.121 7.879a3 3 0 0 0-4.243 4.243M10 17h4M5 21h5M14 21h5M13 13h4"
      />
    </g>
    <defs>
      <clipPath id="fog_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFog;
