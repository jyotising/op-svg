import * as React from "react";
const SvgEndocrine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#endocrine_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11.573 22C15.647 22 20 21.505 20 15.09q0-4.662-2.237-7.59-2.09 3.5-3.098 3.5c-1.008 0 0-3.045-1.166-5.354Q12.334 3.336 9.364 2q.413 3.327-.178 4.828c-.592 1.5-5.61 4.127-5.157 8.64C4.482 19.98 7.5 22 11.573 22Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10.854 12.004Q8 14.599 8.42 16.805c.242 1.267 1.203 1.883 1.928 2.082.56.154 1.533.24 2.401-.534.92-.82.554-1.984-.78-3.425q-.844-.912-1.116-2.924Z"
      />
    </g>
    <defs>
      <clipPath id="endocrine_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEndocrine;
