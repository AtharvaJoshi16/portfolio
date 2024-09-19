import * as React from "react";
const SvgArrow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={72}
    height={72}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="arrow_svg__icon arrow_svg__icon-tabler arrow_svg__icons-tabler-outline arrow_svg__icon-tabler-arrow-badge-right"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 7H7l4 5-4 5h6l4-5z" />
  </svg>
);
export default SvgArrow;
