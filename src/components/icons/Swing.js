import * as React from "react";
const SvgSwing = (props) => (
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
      d="M5 18c-1-1.75-1-5-1-9.5C4 7 6 6.5 7 8c.554.83.908 3.132.908 3.132l3.248-5.625a1.26 1.26 0 1 1 2.182 1.26l.194-.335a1.26 1.26 0 0 1 2.183 1.26l-.194.336a1.26 1.26 0 1 1 2.183 1.26l-.776 1.344a1.262 1.262 0 0 1 2.186 1.26l-4.584 7.98a2 2 0 0 1-.16.245c-.286.353-1.298 1.383-3.37 1.383-2.33 0-4.76-1.33-6-3.5M18.5 2.5c.69.367 1.753.88 2.5 2 .5.75.75 1.75.895 3"
    />
  </svg>
);
export default SvgSwing;
