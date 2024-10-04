import * as React from "react";
const SvgBless = (props) => (
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
      d="M10.5 12.357v-9.39a.968.968 0 0 0-1.914-.202l-2.057 9.6a1 1 0 0 1-.094.258l-3.658 6.91A1 1 0 0 0 3.661 21h4.042a1 1 0 0 0 .975-.777l1.562-6.836.22-.75q.04-.136.04-.28M6.5 12.5 10 14M13.5 12.357v-9.39a.968.968 0 0 1 1.914-.202l2.057 9.6a1 1 0 0 0 .094.258l3.658 6.91A1 1 0 0 1 20.339 21h-4.042a1 1 0 0 1-.975-.777l-1.562-6.836-.22-.75a1 1 0 0 1-.04-.28M17.5 12.5 14 14"
    />
  </svg>
);
export default SvgBless;
