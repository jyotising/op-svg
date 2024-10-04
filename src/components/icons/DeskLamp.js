import * as React from "react";
const SvgDeskLamp = (props) => (
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
      d="M4 12.298c0 .388.314.702.702.702h14.596a.7.7 0 0 0 .702-.702V10a8 8 0 1 0-16 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 21v-8M7.5 16v-3M16.5 21h-9"
    />
  </svg>
);
export default SvgDeskLamp;
