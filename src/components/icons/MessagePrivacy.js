import * as React from "react";
const SvgMessagePrivacy = (props) => (
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
      d="M12.75 18.5H10.5l-5 2.5v-2.5H2v-15h20V9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 13.5h-7v4h7zM20 13.5V12a1.5 1.5 0 1 0-3 0v1.5M6 7.5h3M6 10.5h6"
    />
  </svg>
);
export default SvgMessagePrivacy;
