import * as React from "react";
const SvgPetrol = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21V3h-1.5L15 8H6l-3 3v10z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 8 5-5h9M10.322 14.444c.715-.94 1.267-2.239 1.565-2.944.522.705 1.655 2.474 2.013 3.414.447 1.176-.671 2.586-2.013 2.586s-2.46-1.88-1.565-3.056M5.5 4 2 7.5"
    />
  </svg>
);
export default SvgPetrol;
