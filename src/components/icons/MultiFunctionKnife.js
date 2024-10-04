import * as React from "react";
const SvgMultiFunctionKnife = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#multi-function-knife_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 5a3 3 0 1 0-6 0v14a3 3 0 1 0 6 0zM15 10.157l3.621 3.621a2 2 0 1 0 2.829-2.828L15 4.5z"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9.036 13.707-3.622-3.621a2 2 0 1 0-2.828 2.828l6.45 6.45z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 5v.5M12 18.5v.5"
      />
    </g>
    <defs>
      <clipPath id="multi-function-knife_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgMultiFunctionKnife;
