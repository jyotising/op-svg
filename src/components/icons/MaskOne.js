import * as React from "react";
const SvgMaskOne = (props) => (
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
      d="M9 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM15 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 17.5c1.38 0 2.5-.672 2.5-1.5s-1.12-1.5-2.5-1.5-2.5.672-2.5 1.5 1.12 1.5 2.5 1.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.636 19.071a9 9 0 0 0 2.919 2.17 8.2 8.2 0 0 0 6.89 0 9 9 0 0 0 2.919-2.17M20.317 15.827c.44-1.179.683-2.472.683-3.827 0-1.356-.243-2.65-.683-3.828M3.683 8.172A11 11 0 0 0 3 12c0 1.355.243 2.648.683 3.827M18.364 4.929a9 9 0 0 0-2.92-2.17A8.2 8.2 0 0 0 12 2C9.514 2 7.264 3.12 5.636 4.929"
    />
  </svg>
);
export default SvgMaskOne;
