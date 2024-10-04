import * as React from "react";
const SvgThunderbolt = (props) => (
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
      d="M2 13a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v2.68c0 .477-.342.89-.76 1.12-.593.324-1.362.97-1.637 2.207-.12.539-.55.993-1.103.993h-13c-.552 0-.983-.454-1.103-.993-.275-1.237-1.044-1.883-1.637-2.208-.418-.228-.76-.642-.76-1.119zM7 15.5h10M12.5 2l-3 3.5h5l-3 3.5"
    />
  </svg>
);
export default SvgThunderbolt;
