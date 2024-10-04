import * as React from "react";
const SvgFire = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#fire_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 22c4.117 0 7.5-3.263 7.5-7.45 0-1.03-.052-2.131-.622-3.844s-.685-1.934-1.288-2.992c-.257 2.159-1.634 3.058-1.985 3.327 0-.28-.833-3.373-2.096-5.224C12.269 4 10.582 2.808 9.593 2c0 1.535-.432 3.817-1.05 4.98-.619 1.162-.735 1.205-1.507 2.07s-1.127 1.133-1.772 2.182c-.646 1.05-.764 2.449-.764 3.477C4.5 18.897 7.883 22 12 22Z"
      />
    </g>
    <defs>
      <clipPath id="fire_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFire;
