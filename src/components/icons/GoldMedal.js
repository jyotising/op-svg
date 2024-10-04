import * as React from "react";
const SvgGoldMedal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#gold-medal_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 2h-6.5l-2 5.15A7.51 7.51 0 0 1 18.635 11zM8.5 2H2l3.365 9A7.51 7.51 0 0 1 10.5 7.15z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.5 14.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 17.5h-2m2 0V11l-1.5.5zm0 0h2z"
      />
    </g>
    <defs>
      <clipPath id="gold-medal_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgGoldMedal;
