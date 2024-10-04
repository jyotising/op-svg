import * as React from "react";
const SvgPicture = (props) => (
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M13.895 13.11a1 1 0 0 1 1.621.026l4.388 6.292a1 1 0 0 1-.82 1.572H8z"
    />
  </svg>
);
export default SvgPicture;
