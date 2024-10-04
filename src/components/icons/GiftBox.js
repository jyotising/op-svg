import * as React from "react";
const SvgGiftBox = (props) => (
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
      d="M3 4.5A1.5 1.5 0 0 1 4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15M2 12h20M12 22V2M3 15V9M21 15V9M15 21H9M15 3H9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 12s3.949-1.773 4.55-2.374a1.538 1.538 0 1 0-2.176-2.175C13.773 8.05 12 12 12 12m0 0s-3.949-1.773-4.55-2.374zm0 0s-1.773-3.949-2.374-4.55zm0 0s3.948 1.773 4.55 2.374zm0 0s1.773 3.949 2.374 4.55zm0 0s-3.949 1.773-4.55 2.374a1.538 1.538 0 1 0 2.176 2.175C10.227 15.95 12 12 12 12"
    />
  </svg>
);
export default SvgGiftBox;
