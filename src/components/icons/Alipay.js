import * as React from "react";
const SvgAlipay = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#alipay_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        fill="#333"
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0m0 2.182c-5.422 0-9.818 4.396-9.818 9.818S6.578 21.818 12 21.818a9.81 9.81 0 0 0 8.11-4.282 32 32 0 0 1-3.341-1.202q-.928-.39-2.771-1.229C12.528 16.587 10.385 18 8.088 18c-1.595-.008-4.27-.814-4.27-3.327s2.478-3.112 4.086-3.112q1.46 0 5.166 1.611l.037.015a6.8 6.8 0 0 0 1.366-2.827l.05-.231H8.087v-1.16h2.929v-1.45h-4.1v-.87h4.1v-1.74h2.344v1.74h4.687v.87H13.36v1.45h3.743q-.082.543-.186.986l-.042.173q-.258.934-1.162 2.721a7.4 7.4 0 0 1-.683 1.07q1.383.512 2.8.995 1.834.624 3.173 1.01A9.8 9.8 0 0 0 21.818 12c0-5.422-4.396-9.818-9.818-9.818m-6.842 12.09c0 1.599 3.344 2.236 6.054.553q.457-.285.855-.607l-.009-.004-.213-.13Q9.308 12.54 7.904 12.41c-.86-.08-2.746.263-2.746 1.862m9.365-4.144h1.104z"
      />
    </g>
    <defs>
      <clipPath id="alipay_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAlipay;
