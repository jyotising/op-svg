import * as React from "react";
const SvgBaby = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#baby_svg__a)">
      <path fill="#fff" fillOpacity={0.01} d="M24 0H0v24h24z" />
      <path
        stroke="#333"
        strokeWidth={2}
        d="M12 21.8c4.216 0 7.78-3.34 8.947-7.175.262-.862 2.053-.862 2.053-2.725s-1.808-1.97-2.1-2.876C19.685 5.267 16.16 2 12 2 7.837 2 4.31 5.27 3.099 9.03 2.807 9.934 1 10.004 1 11.9c0 1.895 1.796 1.895 2.067 2.77C4.248 18.483 7.801 21.8 12 21.8Z"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M20.9 9.024C19.685 5.267 16.16 2 12 2"
      />
      <path
        fill="#333"
        stroke="#333"
        strokeWidth={0.5}
        d="M9.55 10.8c0 .413-.112.776-.28 1.028-.17.254-.376.372-.57.372s-.4-.118-.57-.372c-.168-.252-.28-.615-.28-1.028s.112-.776.28-1.028c.17-.254.376-.372.57-.372s.4.118.57.372c.168.252.28.615.28 1.028ZM16.15 10.8c0 .413-.112.776-.28 1.028-.17.254-.376.372-.57.372s-.4-.118-.57-.372c-.168-.252-.28-.615-.28-1.028s.112-.776.28-1.028c.17-.254.376-.372.57-.372s.4.118.57.372c.168.252.28.615.28 1.028Z"
      />
      <path
        fill="#333"
        fillRule="evenodd"
        d="M9.249 15.875q1.448.975 2.756.975 1.305 0 2.59-.973"
        clipRule="evenodd"
      />
      <path
        stroke="#333"
        strokeLinecap="round"
        strokeWidth={2}
        d="M9.249 15.875q1.448.975 2.756.975 1.305 0 2.59-.973M15.864 3.1q.202 1.45-.884 2.12-1.086.668-3.528.626"
      />
    </g>
    <defs>
      <clipPath id="baby_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgBaby;
