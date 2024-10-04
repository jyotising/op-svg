import * as React from "react";
const SvgCategoryManagement = (props) => (
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
      strokeWidth={2}
      d="M19 14H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10 3.5H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path fill="#333" d="M17 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
  </svg>
);
export default SvgCategoryManagement;
