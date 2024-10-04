import * as React from "react";
const SvgParagraphAlphabet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#paragraph-alphabet_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.5h9M12 9.5h9M3 14.5h18M3 19.5h18M3.5 8.5h4M3 9.5l.5-1zm5 0-.5-1zm-4.5-1 2-4 2 4z"
      />
    </g>
    <defs>
      <clipPath id="paragraph-alphabet_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgParagraphAlphabet;
