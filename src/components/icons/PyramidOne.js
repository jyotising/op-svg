import * as React from "react";
const SvgPyramidOne = (props) => (
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
      d="m9.5 7 7 14h-14z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12.5 7.5 21M16.5 21h5.25l-4.25-7-2.25 4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.992 13.198a5.818 5.818 0 1 0-6.103-2.167"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 21H5M11.25 10.5l2.5 5"
    />
  </svg>
);
export default SvgPyramidOne;
