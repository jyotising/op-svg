import * as React from "react";
const SvgRecycling = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#recycling_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m16.763 9.75-3.867-6.697a1 1 0 0 0-1.746.026L8.5 8M12.5 20h8.21a1 1 0 0 0 .852-1.524L18.5 13.5M6.5 11.5l-4.113 6.993A1 1 0 0 0 3.248 20H8.5"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m14.5 18-2 2 2 2M14 9.1l2.732.733.732-2.732M3.75 12.232l2.732-.732.732 2.732"
      />
    </g>
    <defs>
      <clipPath id="recycling_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRecycling;
