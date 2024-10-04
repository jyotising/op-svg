import * as React from "react";
const SvgPositiveDynamics = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#positive-dynamics_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M8.5 16.976v4.08M4.5 20v1.028M12.5 13.5v7.536M16.5 9.48v11.564M20.5 5.485v15.557M3.5 16.5 17 3M11.75 3H17"
      />
    </g>
    <defs>
      <clipPath id="positive-dynamics_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPositiveDynamics;
