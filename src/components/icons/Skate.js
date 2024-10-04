import * as React from "react";
const SvgSkate = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M22 19.91H2l16.27-9H22zM1.929 9.6l1.616.8 8.66-5 .116-1.8"
    />
    <path
      fill="#333"
      d="M6.165 12.44a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M11.725 9.44a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgSkate;
