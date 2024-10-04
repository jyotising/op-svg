import * as React from "react";
const SvgTreadmill = (props) => (
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
      d="M19.875 22H4.655A2.657 2.657 0 0 1 2 19.345v-2.71c0-.605.53-1.07 1.125-.995l17.01 2.125A2.13 2.13 0 0 1 22 19.875C22 21.05 21.05 22 19.875 22M8 16 2 2h3.215M3 15.5l3-4M12.5 7.5h-8"
    />
  </svg>
);
export default SvgTreadmill;
