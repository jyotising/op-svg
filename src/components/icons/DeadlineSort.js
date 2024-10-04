import * as React from "react";
const SvgDeadlineSort = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#deadline-sort_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 2.5v12.502h18V2.5M15 18.5l-3 3-3-3M12 15v6.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m9.172 10.33 5.657-5.658M9.172 4.671l5.657 5.657"
      />
    </g>
    <defs>
      <clipPath id="deadline-sort_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDeadlineSort;
