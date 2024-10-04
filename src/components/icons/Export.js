import * as React from "react";
const SvgExport = (props) => (
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
      d="M21 13.5c0 3-2 8-9 8s-9-5-9-8M12.004 2.55V16.5M6 8.5l6-6 6 6"
    />
  </svg>
);
export default SvgExport;
