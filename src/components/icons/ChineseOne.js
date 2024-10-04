import * as React from "react";
const SvgChineseOne = (props) => (
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
      d="M19.5 3h-15A1.5 1.5 0 0 0 3 4.5v15A1.5 1.5 0 0 0 4.5 21h15a1.5 1.5 0 0 0 1.5-1.5v-15A1.5 1.5 0 0 0 19.5 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 9.97c-.2-.583-.799-1.601-1.996-1.456s-2.096 1.747-1.996 3.784S7.705 15.5 8.703 15.5c1.198 0 1.797-1.397 1.797-1.397M13 15.5v-6M13 15.5v-3.25a2.25 2.25 0 1 1 4.5 0v3.25"
    />
  </svg>
);
export default SvgChineseOne;
