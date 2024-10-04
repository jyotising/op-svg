import * as React from "react";
const SvgH1 = (props) => (
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
      d="M3 4v16M12.5 4v16M3 12h9.5M17.113 12 19.5 9.508V20"
    />
  </svg>
);
export default SvgH1;
