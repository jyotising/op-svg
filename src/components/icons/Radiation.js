import * as React from "react";
const SvgRadiation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#radiation_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path fill="#333" d="M12.002 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.52 15.738a4.47 4.47 0 0 0 2.48.746 4.47 4.47 0 0 0 2.48-.746l3.03 4.603A9.93 9.93 0 0 1 12 22c-2.036 0-3.93-.61-5.51-1.659zm-2.012-3.496-5.49.33Q2 12.275 2 11.973C2 8.046 4.25 4.646 7.527 3l2.46 4.934a4.51 4.51 0 0 0-2.48 4.308Zm6.505-4.308L16.473 3a10.03 10.03 0 0 1 5.51 9.573l-5.49-.331q.007-.135.007-.27a4.51 4.51 0 0 0-2.487-4.038Z"
      />
    </g>
    <defs>
      <clipPath id="radiation_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRadiation;
