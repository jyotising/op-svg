import * as React from "react";
const SvgCompassOne = (props) => (
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
      strokeWidth={2}
      d="M12 22a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 2h5M10 13.5l2-3.5 2 3.5-2 3.5zM3.5 13.5h2M18.5 13.5h2M12 5v2M12 20v2M8.75 21.356A8.5 8.5 0 0 0 12 22a8.5 8.5 0 0 0 3.25-.644M4.143 10.25A8.5 8.5 0 0 0 3.5 13.5c0 1.151.229 2.249.643 3.25M19.856 10.25a8.5 8.5 0 0 1 .644 3.25 8.5 8.5 0 0 1-.644 3.25M8.504 5.75A8.5 8.5 0 0 1 12 5a8.5 8.5 0 0 1 3.496.75"
    />
  </svg>
);
export default SvgCompassOne;
