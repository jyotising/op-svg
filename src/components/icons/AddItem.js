import * as React from "react";
const SvgAddItem = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#add-item_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v-3M3 15h18v6H3zM3 6.25v-.5M3 9v-.5M3 3.5V3M21 6.25v-.5M21 9v-.5M21 3.5V3M21 9h-.5M3.5 9H3M3.5 3H3M7 3h-.5M10.5 3H10M10.5 9H10M14 3h-.5M7 9h-.5M14 9h-.5M17.5 3H17M17.5 9H17M21 3h-.5"
      />
    </g>
    <defs>
      <clipPath id="add-item_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAddItem;
