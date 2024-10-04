import * as React from "react";
const SvgSunOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#sun-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
      />
      <path
        fill="#333"
        d="M12 3a1.25 1.25 0 1 0 0-2.5A1.25 1.25 0 0 0 12 3M19.25 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M22.25 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M19.25 20.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M12 23.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M4.75 20.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M1.75 13.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M4.75 6a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5"
      />
    </g>
    <defs>
      <clipPath id="sun-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgSunOne;
