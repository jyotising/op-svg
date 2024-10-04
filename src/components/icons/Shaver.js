import * as React from "react";
const SvgShaver = (props) => (
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
      strokeWidth={2}
      d="M10.392 9.365a.36.36 0 0 1 .508 0l3.735 3.734a.36.36 0 0 1 0 .509l-5.756 5.756a3 3 0 0 1-4.243-4.243z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M21.29 11.194a.447.447 0 0 0 0-.632L13.438 2.71a.447.447 0 0 0-.632 0l-.39.391a6 6 0 0 0 8.485 8.485z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.94 14.06-.708.708M13.829 8.757l1.414 1.414"
    />
  </svg>
);
export default SvgShaver;
