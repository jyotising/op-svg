import * as React from "react";
const SvgFourLeaves = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#four-leaves_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15.5 8.5 14 10m8-8s-5.205-.9-7 2c-1.336 2.158.5 4.5.5 4.5zm0 0s.9 5.205-2 7c-2.158 1.336-4.5-.5-4.5-.5zm0 0-6.5 6.5zM15.5 15.5 14 14m8 8s-5.205.9-7-2c-1.336-2.158.5-4.5.5-4.5zm0 0s.9-5.205-2-7c-2.158-1.336-4.5.5-4.5.5zm0 0-6.5-6.5zM8.632 8.5l1.5 1.5m-8-8s5.205-.9 7 2c1.336 2.158-.5 4.5-.5 4.5zm0 0s-.9 5.205 2 7c2.158 1.336 4.5-.5 4.5-.5zm0 0 6.5 6.5zM8.632 15.5l1.5-1.5m-8 8s5.205.9 7-2c1.336-2.158-.5-4.5-.5-4.5zm0 0s-.9-5.205 2-7c2.158-1.336 4.5.5 4.5.5zm0 0 6.5-6.5z"
      />
    </g>
    <defs>
      <clipPath id="four-leaves_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFourLeaves;
