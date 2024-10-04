import * as React from "react";
const SvgBroadcast = (props) => (
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
      d="M12 14.315a2.27 2.27 0 0 0 2.273-2.266A2.27 2.27 0 0 0 12 9.783a2.27 2.27 0 0 0-2.272 2.266A2.27 2.27 0 0 0 12 14.315Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7.5c-2.667 2.485-2.667 6.515 0 9M16 16.5c2.667-2.485 2.667-6.515 0-9M5 5C1 8.866 1 15.134 5 19M19.071 19.098a9.947 9.947 0 0 0 0-14.098"
    />
  </svg>
);
export default SvgBroadcast;
