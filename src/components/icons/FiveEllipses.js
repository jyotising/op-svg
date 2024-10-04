import * as React from "react";
const SvgFiveEllipses = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#five-ellipses_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 16.5c.828 0 1.5-1.79 1.5-4s-.672-4-1.5-4-1.5 1.79-1.5 4 .672 4 1.5 4M3.5 16.5c.828 0 1.5-1.79 1.5-4s-.672-4-1.5-4-1.5 1.79-1.5 4 .672 4 1.5 4M12 22c1.657 0 3-4.477 3-10S13.657 2 12 2 9 6.477 9 12s1.343 10 3 10M17 20c1.105 0 2-3.582 2-8s-.895-8-2-8-2 3.582-2 8 .895 8 2 8M7 20c1.105 0 2-3.582 2-8s-.895-8-2-8-2 3.582-2 8 .895 8 2 8"
      />
    </g>
    <defs>
      <clipPath id="five-ellipses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFiveEllipses;
