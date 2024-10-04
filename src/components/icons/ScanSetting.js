import * as React from "react";
const SvgScanSetting = (props) => (
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
      d="M20 2.5H4A1.5 1.5 0 0 0 2.5 4v16A1.5 1.5 0 0 0 4 21.5h16a1.5 1.5 0 0 0 1.5-1.5V4A1.5 1.5 0 0 0 20 2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 10.5 1.5 1.5-1.5 1.5M7 10.5 5.5 12 7 13.5M13.5 7 12 5.5 10.5 7M13.5 17 12 18.5 10.5 17"
    />
  </svg>
);
export default SvgScanSetting;
