import * as React from "react";
const SvgUnionSelection = (props) => (
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
      d="M16 8h4.5a1 1 0 0 1 1 1v11.5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V16"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8V3.5a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1V15a1 1 0 0 0 1 1H8M20.5 8l-12 12M16 3.5 3.5 16M16 8l-8 8M21.5 12 12 21.5M12 2.5 2.5 12M21.5 17 17 21.5M7 2.5 2.5 7"
    />
  </svg>
);
export default SvgUnionSelection;
