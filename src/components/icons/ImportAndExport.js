import * as React from "react";
const SvgImportAndExport = (props) => (
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
      d="m7 13-4.5 4.5L7 22M2.5 17.504h8.75M17 9l4.5 4.5L17 18M21.5 13.504h-8.75M2.25 12V3.75h19.5V7.5"
    />
  </svg>
);
export default SvgImportAndExport;
