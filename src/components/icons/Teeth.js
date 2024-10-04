import * as React from "react";
const SvgTeeth = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#teeth_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M6.559 2.5H7c2.333.345 2.966 1.67 5 1.67 2.032 0 2.665-1.325 4.998-1.67h.251A4.75 4.75 0 0 1 22 7.25v.313c0 1.451-1.545 3.109-2 4.679-.483 1.667-.813 3.03-.91 4.455-.228 3.34-1.366 4.803-2.59 4.803-1.827 0-3.45-7.487-4.469-7.487S8.99 21.5 7.501 21.5c-.91 0-2.086-.537-2.528-4.803C4.797 15 4.5 13.97 4 12.242c-.44-1.52-1.924-3.336-2-4.966A4.563 4.563 0 0 1 6.56 2.5Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="m7.741 6.231 8.26 2.663M7.741 8.894l8.26-2.663"
      />
    </g>
    <defs>
      <clipPath id="teeth_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTeeth;
