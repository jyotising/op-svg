import * as React from "react";
const SvgCrib = (props) => (
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
      d="M19 3v19M5 20h14M5 17h14M3 6h18M17.5 3h3M3.5 3h3M5 3v19M8.5 6v8M12 6v8M15.5 6v8"
    />
  </svg>
);
export default SvgCrib;
