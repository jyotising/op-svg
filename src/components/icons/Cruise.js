import * as React from "react";
const SvgCruise = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19 21 1.695-4.663a1 1 0 0 0-.492-1.236l-7.756-3.878a1 1 0 0 0-.894 0l-7.756 3.878a1 1 0 0 0-.492 1.236L5 21"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.5 7h-11a1 1 0 0 0-1 1v6l6.08-2.807a1 1 0 0 1 .84 0L18.5 14V8a1 1 0 0 0-1-1M14.5 7V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 16v4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22c2 0 2-1 3.5-1s1.5 1 3 1 1.75-1 3.5-1 2 1 3.5 1 1.5-1 3-1 1.5 1 3.5 1"
    />
  </svg>
);
export default SvgCruise;
