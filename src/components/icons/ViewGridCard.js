import * as React from "react";
const SvgViewGridCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3Z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6.5h-4v4h4zM17.5 6.5h-4v4h4zM10.5 13.5h-4v4h4zM17.5 13.5h-4v4h4z"
    />
  </svg>
);
export default SvgViewGridCard;
