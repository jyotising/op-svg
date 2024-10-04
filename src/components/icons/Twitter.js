import * as React from "react";
const SvgTwitter = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#twitter_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.5 17.881c.964.533 7.946 4.558 12.91 1.456s4.69-8.445 4.69-10.894c.45-.942 1.4-1.421 1.4-3.971q-1.4 1.293-2.782.88-1.355-2.065-3.728-1.827c-2.373.238-3.242 2.566-2.986 5.578-3.659 1.85-6.528-1.341-8.007-3.751-.494 1.898-.97 4.177 0 6.698q.97 2.52 4.666 4.262-3.745 2.03-6.163 1.57Z"
      />
    </g>
    <defs>
      <clipPath id="twitter_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTwitter;
