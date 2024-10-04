import * as React from "react";
const SvgBarberBrush = (props) => (
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
      d="M14.898 12H8.102s-1.993 3.854 1.274 5.417C11.467 18.667 8.102 22 8.102 22h6.796s-3.365-3.646-1.274-4.583C16.89 15.854 14.898 12 14.898 12M18.5 5 15 12H8L4.5 5s1.5-3 7-3 7 3 7 3M12.5 12l1-6M10.5 12l-1-6"
    />
  </svg>
);
export default SvgBarberBrush;
