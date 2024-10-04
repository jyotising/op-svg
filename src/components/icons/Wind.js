import * as React from "react";
const SvgWind = (props) => (
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
      d="M6 8.5H5a2 2 0 0 0 0 4h1M11 16.5H9.5a2 2 0 1 0 0 4H11M13.5 3.5H12a2 2 0 1 0 0 4h1.5M12 7.5h8M6 12.5h15M11 16.5h6"
    />
  </svg>
);
export default SvgWind;
