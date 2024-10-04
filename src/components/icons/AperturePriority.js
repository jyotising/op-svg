import * as React from "react";
const SvgAperturePriority = (props) => (
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
      d="M7.5 6 9 3h6l1.5 3zM20.5 6h-17C2.672 6 2 6.627 2 7.4v12.2c0 .773.672 1.4 1.5 1.4h17c.828 0 1.5-.627 1.5-1.4V7.4c0-.773-.672-1.4-1.5-1.4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="m8.5 17 3.5-7 3.5 7M9.5 15.02h5"
    />
  </svg>
);
export default SvgAperturePriority;
