import * as React from "react";
const SvgWashingMachineOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#washing-machine-one_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M19 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M4 6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1z"
      />
      <path
        fill="#333"
        d="M7 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
      />
    </g>
    <defs>
      <clipPath id="washing-machine-one_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgWashingMachineOne;
