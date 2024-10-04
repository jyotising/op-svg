import * as React from "react";
const SvgBringToFront = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#bring-to-front_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 9h-11a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.985 3H3v2.017M4.999 15H3v-1.994M13.001 3H15v2.008M8.014 3h1.99M3 8v2M15 8v1.004"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M7.996 15H9"
      />
    </g>
    <defs>
      <clipPath id="bring-to-front_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBringToFront;
