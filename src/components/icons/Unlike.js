import * as React from "react";
const SvgUnlike = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#unlike_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 9.5a5.5 5.5 0 0 0-10-3.163A5.5 5.5 0 0 0 2 9.5C2 15 8.5 20 12 21.163c.597-.198 1.28-.508 2.005-.913M17.48 13.5l3.439 4.25M20.919 13.5l-3.44 4.25"
      />
    </g>
    <defs>
      <clipPath id="unlike_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgUnlike;
