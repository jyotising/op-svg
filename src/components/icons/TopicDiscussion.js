import * as React from "react";
const SvgTopicDiscussion = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#topic-discussion_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M22 4H2v15h7.5l2.5 2.5 2.5-2.5H22z"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M10.5 7.5 10 16M14 7.5l-.5 8.5M16.5 10H8M16 13.5H7.5"
      />
    </g>
    <defs>
      <clipPath id="topic-discussion_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTopicDiscussion;
