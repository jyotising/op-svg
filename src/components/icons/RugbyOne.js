import * as React from "react";
const SvgRugbyOne = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M2 12c1.146 4.315 5.188 7.5 10 7.5s8.854-3.185 10-7.5c-1.146-4.315-5.188-7.5-10-7.5S3.146 7.685 2 12Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M20 12h2M7 12h10M2 12h2M8.5 10v4M15.5 10v4M12 10v4"
    />
  </svg>
);
export default SvgRugbyOne;
