import * as React from "react";
const SvgMagicHat = (props) => (
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
      d="M5 5c.25 1.5.5 2.25.75 4 .2 1.4.25 3.583.25 4.5C4.917 14 2.5 15 2.5 17S5 21.5 12 21.5s9.5-2.5 9.5-4.5-3.5-3.5-3.5-3.5 0-2.75.25-4.5.5-2.5.75-4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 13.5c0 2-.5 4-6.25 4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 7.5c3.866 0 7-1.12 7-2.5s-3.134-2.5-7-2.5S5 3.62 5 5s3.134 2.5 7 2.5Z"
    />
  </svg>
);
export default SvgMagicHat;
