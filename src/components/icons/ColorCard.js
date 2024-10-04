import * as React from "react";
const SvgColorCard = (props) => (
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
      d="M5 22a3 3 0 0 0 3-3V2H2v17a3 3 0 0 0 3 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.121 21.121 21.992 6.25 17.742 2 8 11.757M12.243 16H22v6H6.25"
    />
  </svg>
);
export default SvgColorCard;
