import * as React from "react";
const SvgMirror = (props) => (
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
      d="M17 22H7c-2.5 0-3.5-.5-3.5-2v-3H9l.5 2H15l.5-2h5v3c0 1.5-1 2-3.5 2M6 17c-1.022-1.559-2.5-3.5-2.5-6.073C3.5 5.711 7.306 2 12 2s8.5 3.711 8.5 8.927c0 2.573-1.478 4.514-2.5 6.073"
    />
  </svg>
);
export default SvgMirror;
