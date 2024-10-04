import * as React from "react";
const SvgComb = (props) => (
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
      d="M2.1 15.536 8.464 21.9 21.9 8.465 15.536 2.1M4.575 13.06l3.536 3.536M7.404 10.232l3.535 3.536M10.232 7.404l3.536 3.535M13.06 4.575l3.536 3.536M6.343 19.778 19.778 6.343"
    />
  </svg>
);
export default SvgComb;
