import * as React from "react";
const SvgThreeDGlasses = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#three-d-glasses_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.8 17.25h4.4"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.151 13.695 4.98 4.781 7.475 3.5M22.902 13.817 19.025 4.78 16.53 3.5"
      />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M1.7 13.4h7.658a.647.647 0 0 1 .646.698l-.464 5.855a.647.647 0 0 1-.645.596H2.164a.647.647 0 0 1-.645-.596l-.464-5.855a.647.647 0 0 1 .645-.699ZM14.642 13.4H22.3a.647.647 0 0 1 .645.698l-.464 5.855a.647.647 0 0 1-.645.596h-6.73a.647.647 0 0 1-.646-.596l-.464-5.855a.647.647 0 0 1 .646-.699Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="three-d-glasses_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgThreeDGlasses;
