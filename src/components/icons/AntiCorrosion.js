import * as React from "react";
const SvgAntiCorrosion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#anti-corrosion_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 20.998q10 .077 10-1.637C22 17.646 14.207 9 12 9S2 17.826 2 19.361q0 1.535 10 1.637Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.53 14.83 8.72 17"
      />
      <path
        fill="#333"
        d="M12.25 5.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5M17 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 10.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8.75 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      />
    </g>
    <defs>
      <clipPath id="anti-corrosion_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAntiCorrosion;
