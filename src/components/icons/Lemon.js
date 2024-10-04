import * as React from "react";
const SvgLemon = (props) => (
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
      d="M18 13c0-3.204-2.191-6.405-4.5-7.236L12 4l-1.5 1.763C8.191 6.595 6 9.797 6 13s2.191 6.406 4.5 7.236c.477.172.98 1.764 1.5 1.764s1.023-1.592 1.5-1.764c2.309-.83 4.5-4.032 4.5-7.236"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17.571 2.116a.736.736 0 0 1 .596 1.032c-.267.638-.753 1.479-1.569 1.95s-1.787.471-2.473.384a.736.736 0 0 1-.596-1.032c.267-.638.753-1.479 1.57-1.95.815-.471 1.787-.471 2.472-.384Z"
    />
  </svg>
);
export default SvgLemon;
