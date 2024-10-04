import * as React from "react";
const SvgTextMessage = (props) => (
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
      d="M22 3.5H2v15h7.5L12 21l2.5-2.5H22z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 8h3M7 12h1M14.5 7l3.5 7M14.5 7 11 14M12 12h5"
    />
  </svg>
);
export default SvgTextMessage;
