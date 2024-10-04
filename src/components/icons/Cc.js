import * as React from "react";
const SvgCc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#cc_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.64 6.07q1.426.255 2.706.725a5.09 5.09 0 0 0-3.819 1.757l-.1.117c-1.419 1.734-1.514 4.22-.285 6.056l-.03-.056c1.263 2.321 3.414 4.358 5.637 5.013 1.791.528 3.466.668 5.01.418l.013-.01a10.36 10.36 0 0 1-6.356 2.193h-.059l-.215-.003a10.37 10.37 0 0 1-7.288-3.223l-.165-.176A10.36 10.36 0 0 1 2 11.923v-.066l.003-.228a10.4 10.4 0 0 1 1.495-5.136l-.034.01q3.377-.934 6.175-.433m5.268 10.246c.773-.367 1.705-.19 2.316.422l2.506 2.505-.17.166-.04.039q-2.544.685-5.636-.224c-1.49-.439-2.767-1.515-3.909-2.839l-.024-.013a5.1 5.1 0 0 0 4.861-.007zM12.378 1.5l.22.002a10.36 10.36 0 0 1 7.125 3.041l-2.499 2.499-.078.074c-.637.575-1.575.712-2.334.298l-.13-.069-.075-.037Q12.414 6.081 9.723 5.6q-2.677-.478-5.835.299.432-.616.966-1.177l.163-.167A10.36 10.36 0 0 1 12.375 1.5zM20.775 8.663 16.83 10.94l-.108.074s-.338.227-.3.705c.032.419.33.595.33.595l4.116 2.374s.322.174.723-.042c.448-.243.417-.716.417-.716V9.349a.8.8 0 0 0-.324-.629.8.8 0 0 0-.492-.168c-.243 0-.417.11-.417.11"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="cc_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgCc;
