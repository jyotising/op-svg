import * as React from "react";
const SvgCompass = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#compass_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 22 5.344-14.25M18 22 12.656 7.75M12 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18.785 16.5a12.44 12.44 0 0 1-6.785 2c-2.501 0-4.83-.735-6.785-2M12 4V2"
      />
    </g>
    <defs>
      <clipPath id="compass_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCompass;
