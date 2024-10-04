import * as React from "react";
const SvgCurrency = (props) => (
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
      d="m9.5 8 2.5 3 2.5-3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 7s3.75-5.75 10.25-3.5S21 12.25 21 12.25M19.5 17s-3 5.5-9.75 3.75S3 12 3 12M21 4v8M3 12v8M9 14h6M9 11h6M12 11v6"
    />
  </svg>
);
export default SvgCurrency;
