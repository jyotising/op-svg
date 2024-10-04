import * as React from "react";
const SvgHandUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#hand-up_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20.5 19h-11v3h11z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.5 19q-4.89-5.342-5.61-6.192c-.723-.85-.42-1.81 1.387-1.81s2.847 2.643 4.223 2.643q.012.002.002-10.139A1.5 1.5 0 0 1 11 2h.001c.83 0 1.502.672 1.502 1.502v4.005q5.98.906 6.502 1c.522.094 1.494.592 1.494 2.027V19z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="hand-up_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHandUp;
