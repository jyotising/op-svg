import * as React from "react";
const SvgBread = (props) => (
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
      d="M2 16.042c0-.601.133-1.198.486-1.685C3.523 12.926 6.335 10 12 10s8.477 2.926 9.514 4.357c.353.487.486 1.084.486 1.685A3.96 3.96 0 0 1 18.042 20H5.958A3.96 3.96 0 0 1 2 16.042"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 4.5v2M7 11v2M18 4.5v2M17 11v2M12 3.5v3M12 10v4M20 12.722C18.453 11.389 15.904 10 12 10s-6.453 1.39-8 2.722"
    />
  </svg>
);
export default SvgBread;
