import * as React from "react";
const SvgSailing = (props) => (
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
      d="M9.5 15h-4l4-4.5M19.5 15c0-6.496-5.003-13-10-13v13zM16.326 20.788 21 18H3l1 3h11.557a1.5 1.5 0 0 0 .769-.212M9.5 15v3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14.5 10.5h6"
    />
  </svg>
);
export default SvgSailing;
