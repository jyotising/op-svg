import * as React from "react";
const SvgCheckIn = (props) => (
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
      d="m8 10.5 3.065-7.006a1 1 0 0 1 1.39-.48L18 6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 15.5V6h8v14.5h-8v-2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22c4.5 0 4.885-2.658 6.165-2.844 1.511-.219 3.05-.331 4.387-.656a26 26 0 0 0 3.63-1.178.84.84 0 0 0 .427-.384c.282-.54.786-1.733-.149-1.883-1.214-.196-4.97 1.237-6.896.976-1.927-.26-1.25-1.562-.642-1.953 1.648-1.06 3.578-.578 3.578-.578V9s-7.333 1.875-10 5.078M16 10.5h5"
    />
  </svg>
);
export default SvgCheckIn;
