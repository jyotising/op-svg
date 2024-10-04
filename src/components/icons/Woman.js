import * as React from "react";
const SvgWoman = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#woman_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M16.243 12.243a6 6 0 1 0-8.485 0"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m3 22 .5-2.5 5.5-4 3 3 3-3 5.5 4L21 22"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M6.497 10.504Q6.506 7.422 7.5 6.001c.994-1.42 1.693-1.316 2.203-1.095s.808 1.667 1.659 2.084c.85.416 3.027.468 3.772.97.746.5 2.45 1.433 2.026 3.025"
      />
    </g>
    <defs>
      <clipPath id="woman_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWoman;
