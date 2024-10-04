import * as React from "react";
const SvgCode = (props) => (
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
      d="m8 6.5-6 6.216L8 18.5M16 6.5l6 6.216-6 5.784"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m14 2-3.5 20"
    />
  </svg>
);
export default SvgCode;
