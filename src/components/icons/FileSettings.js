import * as React from "react";
const SvgFileSettings = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7l-4.5-5H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9.5V11M12 16v1.5M14.914 10.5l-1.06 1.06M9.914 15.5l-1.06 1.06M9 10.5l1.06 1.06M14 15.5l1.06 1.06M8 13.5h1.5M14.5 13.5H16M15 2v5h5"
    />
  </svg>
);
export default SvgFileSettings;
