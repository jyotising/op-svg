import * as React from "react";
const SvgRoadCone = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#road-cone_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m18.5 21-.75-2.7L16 12l-1.25-4.5-.625-2.25L13.5 3h-3l-.625 2.25L9.25 7.5 8 12l-1.25 4.5-.625 2.25L5.5 21m13 0h-13zm0 0H3h15.5m0 0H21zM6.75 16.5h10.5M16 12H8M14.75 7.5h-5.5M14.125 5.25 17.75 18.3M6.125 18.75l3.75-13.5"
      />
    </g>
    <defs>
      <clipPath id="road-cone_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgRoadCone;
