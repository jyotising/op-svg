import * as React from "react";
const SvgDome = (props) => (
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
      d="M2 21.5h20"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M2.5 12s4.5-.5 9.5-.5 9.5.5 9.5.5M3 9s4.526-2 9-2 9 2 9 2M2.5 15S7 16 12 16s9.5-1 9.5-1"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 3C6.477 3 2 7.477 2 13c0 3.904 1.737 6.853 5 8.5h10c3.263-1.647 5-4.596 5-8.5 0-5.523-4.477-10-10-10Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 3c-1.933 0-3.5 4.477-3.5 10 0 3.589.506 6.736 1.5 8.5h4c.994-1.764 1.5-4.911 1.5-8.5 0-5.523-1.567-10-3.5-10Z"
    />
  </svg>
);
export default SvgDome;
