import * as React from "react";
const SvgTwoHands = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M21.966 2.034H2.441V21.56h19.525z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.627}
      d="m17.492 10.16-.4 1.609-3.542 2.566.02 4.766 2.701.017-.151-3.451q4.223-2.641 4.223-3.87V4.497M6.915 10.19l.42 1.607 3.404 2.61.146 4.764-2.75-.052.083-3.292q-4.145-2.385-4.145-3.631v-7.71"
    />
  </svg>
);
export default SvgTwoHands;
