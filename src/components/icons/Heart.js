import * as React from "react";
const SvgHeart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#heart_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.27 10.01Q6.004 8.453 4.893 9.34c-1.112.888-1.43 3.984-.536 6.714C5.25 18.784 6.99 22.5 10.5 22.5c3.51 0 4.341-3.74 5.773-6 1.432-2.262 2.19-4.443.786-7.16"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M5.5 9.019A322 322 0 0 0 3.5 6c-.723-1.072 1.126-2.459 2-1.516q.874.943 2.323 2.779"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7.512 12.82q-.363-4.548.591-5.923c.955-1.374 2.729-1.896 4.399-1.896q1.491 0 2.724 1.271"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M20.5 6.306c.293 1.019-.185 1.949-1.658 2.16-1.472.21-2.576.95-3.373 1.573-.796.623-2.22 2.513-2.501 3.462s-1.888.076-2.32-.303c-.431-.378-.855-1.208 0-2.075.856-.868.671-1.04.671-1.92S16 5.413 18.636 5.147c.586-.034 1.571.141 1.864 1.16Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M11.504 2v2.631M10.153 5.36Q7.89 2.514 6.503 2.183M8.502 3.515l.495-2.034M17.806 5.359q-.24.828 0 1.553.243.725 1.036 1.554"
      />
    </g>
    <defs>
      <clipPath id="heart_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgHeart;
