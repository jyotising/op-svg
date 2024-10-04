import * as React from "react";
const SvgSoundWave = (props) => (
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
      d="M3 7V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v1M16 9v6M20 10v4M12 7.5v9M8 9v6M4 10v4M3 17v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1"
    />
  </svg>
);
export default SvgSoundWave;
