import * as React from "react";
const SvgSoccer = (props) => (
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
      d="M8.909 2.49C3.655 4.194.785 9.839 2.49 15.088s7.349 8.124 12.598 6.419c5.254-1.705 8.123-7.35 6.419-12.598-1.705-5.254-7.35-8.124-12.598-6.42"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="m17 10.5-5-4-5 4 2 6h6zM17 10.5 21.5 9M18 20l-3-3.5M9 16.5 6 20M7 10.5 2.5 9M12 6.5V2"
    />
  </svg>
);
export default SvgSoccer;
