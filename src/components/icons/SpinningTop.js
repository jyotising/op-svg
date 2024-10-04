import * as React from "react";
const SvgSpinningTop = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 22v-1.5M22 10 12 20.5 2 10zM22 6H2v4h20zM12 6V2"
    />
  </svg>
);
export default SvgSpinningTop;
