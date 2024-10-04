import * as React from "react";
const SvgFourArrows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#four-arrows_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 12 9.5 9.5M12 4v8zm0 8 2.5-2.5zM12 12l-2.5 2.5M12 20v-8zm0-8 2.5 2.5zM10 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4M4 12h16M20 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4M14 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
      />
    </g>
    <defs>
      <clipPath id="four-arrows_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFourArrows;
