import * as React from "react";
const SvgMedicalBox = (props) => (
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
      d="M20.5 8.5h-17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1ZM17 3.5H7v5h10z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.5 14.5h5M12 12v5"
    />
  </svg>
);
export default SvgMedicalBox;
