import * as React from "react";
const SvgShadcn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="shadcn_svg__h-6 shadcn_svg__w-6"
    viewBox="0 0 256 256"
    width={72}
    height={72}
    {...props}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#fff"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={16}
      d="m208 128-80 80M192 40 40 192"
    />
  </svg>
);
export default SvgShadcn;
