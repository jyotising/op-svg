import * as React from "react";
const SvgTorch = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M13.5 17h-3v5h3zM15.5 17h-7L7 13h10zM10.5 7c1-2.305 3-5 3-5s3.18 5.745 3.18 7.615S15.37 13 13.5 13h-4c-1.32 0-2.18-1.07-2.18-2.39S9.5 5 9.5 5s.48 1.005 1 2"
    />
  </svg>
);
export default SvgTorch;
