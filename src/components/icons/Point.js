import * as React from "react";
const SvgPoint = (props) => (
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
      d="M9.5 20.5c-2.75-1.375-5.5-5.5-7-8s1.657-4.844 3.5-3l2 2V3.75a1.75 1.75 0 1 1 3.5 0V8A1.75 1.75 0 1 1 15 8v.75a1.75 1.75 0 0 1 3.5 0v2.5a1.75 1.75 0 0 1 3.5 0v4.372c0 .577-.131 1.15-.457 1.627-.584.857-1.742 2.268-3.543 3.251-2.75 1.5-5.75 1.375-8.5 0"
    />
  </svg>
);
export default SvgPoint;
