import * as React from "react";
const SvgAlphabeticalSorting = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alphabetical-sorting_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 2v19.75M3.5 14h8l-8 8h8M3.5 10l4.138-8 3.862 8M22 18l-4 4-4-4"
      />
    </g>
    <defs>
      <clipPath id="alphabetical-sorting_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlphabeticalSorting;
