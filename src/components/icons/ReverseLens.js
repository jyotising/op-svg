import * as React from "react";
const SvgReverseLens = (props) => (
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
      d="M6.5 12.5V5h3l1-1.5h3l1 1.5h3v7.5zM10 17.5l2 2-2 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19.5c-5.523 0-10.5-2.24-10.5-5 0-1.126.744-2.165 2-3.001M16 19.084c3.532-.772 6.5-2.534 6.5-4.584 0-1.126-.744-2.165-2-3.001z"
    />
    <path
      stroke="#333"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
export default SvgReverseLens;
