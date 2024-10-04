import * as React from "react";
const SvgExcludeSelection = (props) => (
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
      d="M20.5 8H9a1 1 0 0 0-1 1v11.5a1 1 0 0 0 1 1h11.5a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 2.5H3.5a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1H15a1 1 0 0 0 1-1V3.5a1 1 0 0 0-1-1M12.5 16 8 20.5M20.5 8 16 12.5M8 11.5 3.5 16M16 3.5 11.5 8M21.5 12 12 21.5M12 2.5 2.5 12M21.5 17 17 21.5M7 2.5 2.5 7"
    />
  </svg>
);
export default SvgExcludeSelection;