import * as React from "react";
const SvgThin = (props) => (
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
      d="M16.5 12.5h-9c-.795 0-1.885-.115-2.5-.5-1.825-1.155-2.17-3.685-1-5.5L7 2c1.965 4.215 8.02 4.21 10 0l3 4.5c1.17 1.815.82 4.345-1 5.5-.615.39-1.705.5-2.5.5M6 12.5l1.26 4.775A4.95 4.95 0 0 1 6 22M18 12.5l-1.26 4.79A4.92 4.92 0 0 0 18 22M12 21v-1"
    />
  </svg>
);
export default SvgThin;
