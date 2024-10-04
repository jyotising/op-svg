import * as React from "react";
const SvgWorker = (props) => (
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
      d="M16 8a4 4 0 1 1-8 0M12 4a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4M6 8h12M12 2v2M12 13.5c-4.694 0-8.5 3.582-8.5 8h17c0-4.418-3.806-8-8.5-8M9 17v2M15 17v2"
    />
  </svg>
);
export default SvgWorker;
