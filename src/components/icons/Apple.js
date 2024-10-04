import * as React from "react";
const SvgApple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#apple_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        d="M11.956 5.659c.04-1.116.354-2.096.933-2.915.581-.824 1.543-1.409 2.859-1.74q.012.06.027.121v.212c0 .481-.117 1.032-.347 1.639a5 5 0 0 1-1.119 1.638c-.468.44-.901.73-1.284.862-.127.038-.3.075-.509.108q-.28.044-.56.075"
      />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12.175 7.315C10.69 7.315 9.657 6 8.191 6s-4.487 1.348-4.487 6 2.683 7.65 2.982 8 .994 1.25 2.07 1.25c1.074 0 2.25-.855 3.42-.855 1.168 0 2.639.855 3.599.855s1.355-.392 2.008-1.067c.654-.675 1.9-2.735 2.336-3.972-.717-.427-2.618-1.585-2.618-4.211q0-2.625 1.92-4.362Q18.16 6 16.5 6c-1.662 0-2.84 1.314-4.326 1.314Z"
      />
    </g>
    <defs>
      <clipPath id="apple_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgApple;
