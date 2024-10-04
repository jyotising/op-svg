import * as React from "react";
const SvgTray = (props) => (
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
      d="m21.572 10.814-8.485-8.486a1 1 0 0 0-1.415 0L2.48 11.521a1 1 0 0 0 0 1.414l8.485 8.485a1 1 0 0 0 1.414 0l9.193-9.192a1 1 0 0 0 0-1.415"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.097 8.339 2.121-2.122-3.535-3.535-2.122 2.121M9 10.5h6M9 13.5h2M14 13.5h1"
    />
  </svg>
);
export default SvgTray;
