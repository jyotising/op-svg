import * as React from "react";
const SvgParagraphTriangle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paragraph-triangle_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.5h9M12 9.5h9M3 14.5h18M3 19.5h18M3 4.883a.5.5 0 0 1 .757-.43l3.528 2.118a.5.5 0 0 1 0 .857L3.757 9.545A.5.5 0 0 1 3 9.116z"
      />
    </g>
    <defs>
      <clipPath id="paragraph-triangle_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParagraphTriangle;
