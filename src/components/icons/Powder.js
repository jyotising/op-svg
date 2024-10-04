import * as React from "react";
const SvgPowder = (props) => (
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
      d="M22 20V10a1.5 1.5 0 0 0-1.5-1.5h-2.642c-.771 0-1.447.621-1.963 1.194C15.317 10.337 14.189 11 12 11s-3.316-.663-3.896-1.306C7.59 9.121 6.914 8.5 6.143 8.5H3.5A1.5 1.5 0 0 0 2 10v10a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 22 20Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 8.5c0 1.38-2.015 2.5-4.5 2.5S7.5 9.88 7.5 8.5M12 7.5c2.485 0 4.5-1.12 4.5-2.5S14.485 2.5 12 2.5 7.5 3.62 7.5 5 9.515 7.5 12 7.5M16.5 8.5V5M7.5 8.5V5"
    />
    <path
      fill="#333"
      d="M13.5 5.5c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5M10.5 5.5c.552 0 1-.224 1-.5s-.448-.5-1-.5-1 .224-1 .5.448.5 1 .5"
    />
  </svg>
);
export default SvgPowder;
