import * as React from "react";
const SvgFolderSettings = (props) => (
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
      d="M2.5 4a1 1 0 0 1 1-1h6L12 6h8.5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10.5V12M12 16v1.5M14.414 11.5l-1.06 1.06M10.414 15.5l-1.06 1.06M9.5 11.5l1.06 1.06M13.5 15.5l1.06 1.06M8.5 14H10M14 14h1.5"
    />
  </svg>
);
export default SvgFolderSettings;
