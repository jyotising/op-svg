import * as React from "react";
const SvgLinkBreak = (props) => (
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
      d="M16 7.5h5a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-5M8.5 7.5H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5.5M12 3v18M6 12h2M16 12h2"
    />
  </svg>
);
export default SvgLinkBreak;
