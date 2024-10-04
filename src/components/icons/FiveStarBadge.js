import * as React from "react";
const SvgFiveStarBadge = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#five-star-badge_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.552 10.409a.5.5 0 0 1 .896 0l1.493 3.024a.5.5 0 0 0 .376.273l3.338.485a.5.5 0 0 1 .277.853l-2.415 2.354a.5.5 0 0 0-.144.443l.57 3.324a.5.5 0 0 1-.725.527l-2.985-1.57a.5.5 0 0 0-.466 0l-2.985 1.57a.5.5 0 0 1-.725-.527l.57-3.324a.5.5 0 0 0-.144-.443l-2.415-2.354a.5.5 0 0 1 .277-.853l3.338-.485a.5.5 0 0 0 .376-.273zM18 2H6v5l6 2.5L18 7z"
      />
    </g>
    <defs>
      <clipPath id="five-star-badge_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFiveStarBadge;
