import * as React from "react";
const SvgSoccerOne = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M14.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <path fill="#333" d="M9.5 23a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12.19 9.455 10 13.5l3.655 3.01c.155.12.265.285.33.47L15.5 22M10 13.5l-2.745 3.82c-.27.395-.78.545-1.22.36L2 16"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M21 12h-3.5c-.18 0-.36-.045-.52-.135l-1.605-.905A19.7 19.7 0 0 0 8.89 8.57l-1.61-.285c-.225-.04-.46 0-.66.11L3.5 10"
    />
  </svg>
);
export default SvgSoccerOne;
