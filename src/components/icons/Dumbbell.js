import * as React from "react";
const SvgDumbbell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#dumbbell_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 6.8c0-.718-.672-1.3-1.5-1.3S4 6.082 4 6.8v10.4c0 .718.672 1.3 1.5 1.3S7 17.918 7 17.2zM20 6.8c0-.718-.672-1.3-1.5-1.3S17 6.082 17 6.8v10.4c0 .718.672 1.3 1.5 1.3s1.5-.582 1.5-1.3zM4 9.333C4 8.597 3.328 8 2.5 8S1 8.597 1 9.333v5.334C1 15.403 1.672 16 2.5 16S4 15.403 4 14.667zM23 9.333C23 8.597 22.328 8 21.5 8S20 8.597 20 9.333v5.334c0 .736.672 1.333 1.5 1.333s1.5-.597 1.5-1.333zM17 13.5H7v-3h10z"
      />
    </g>
    <defs>
      <clipPath id="dumbbell_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgDumbbell;
