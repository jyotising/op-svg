import * as React from "react";
const SvgPlanet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#planet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.782 7.755c2.11.184 3.557.831 3.843 1.898.572 2.134-3.722 5.138-9.59 6.71s-11.088 1.118-11.66-1.016c-.3-1.118.736-2.475 2.634-3.74"
      />
    </g>
    <defs>
      <clipPath id="planet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPlanet;
