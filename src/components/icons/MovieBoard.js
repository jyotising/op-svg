import * as React from "react";
const SvgMovieBoard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#movie-board_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 8H2v13h20zM22 8V3H2v5zM13 3l2 5M9 3l2 5M5 3l2 5M17 3l2 5M6 12h12M6 16h6"
      />
    </g>
    <defs>
      <clipPath id="movie-board_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMovieBoard;
