import * as React from "react";
const SvgMemoryCard = (props) => (
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
      d="M20 20H4a1 1 0 0 1-1-1V9.553a1 1 0 0 1 .168-.555l3.035-4.553A1 1 0 0 1 7.035 4H20a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1M9 8V4M12 8V4M15 8V4M18 8V4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 14h9v6h-9z"
    />
  </svg>
);
export default SvgMemoryCard;
