import * as React from "react";
const SvgFileDoc = (props) => (
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
      d="M5 19v3h14v-3M19 10V7l-4-5H5v8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 2v5h5"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M8 6h2" />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M5 12.5v4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 12.5h1a2 2 0 1 1 0 4H5M12 16.5c.828 0 1.5-.895 1.5-2s-.672-2-1.5-2-1.5.895-1.5 2 .672 2 1.5 2M19 12.5h-1a2 2 0 1 0 0 4h1"
    />
  </svg>
);
export default SvgFileDoc;
