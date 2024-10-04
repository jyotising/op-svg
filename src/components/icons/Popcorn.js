import * as React from "react";
const SvgPopcorn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#popcorn_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16.848 20.434 19.5 8.5h-16l2.652 11.934c.167.75.25 1.126.524 1.346.275.22.66.22 1.428.22h6.792c.769 0 1.153 0 1.427-.22.275-.22.358-.595.525-1.346M13.5 22 14 8.5M9.5 22 9 8.5M15.5 22h-8M15.5 8.5h-8M5.5 8.5S5 7 5.75 6.25 8 5.75 8 5.75s0-1.5 1-2 2.5.25 2.5.25 1-1.679 2.5-1.25C15.5 3.178 15.5 5 15.5 5s1.25 0 2 1 0 2.5 0 2.5"
      />
    </g>
    <defs>
      <clipPath id="popcorn_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPopcorn;
