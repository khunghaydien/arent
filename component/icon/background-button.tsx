import React, { SVGProps } from "react";

const BackgroundButton = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="296"
      height="56"
      viewBox="0 0 296 56"
      fill="none"
      {...props}
    >
      <path
        d="M5.03401 0H290.966C293.746 0 296 2.23858 296 5V51C296 53.7614 293.746 56 290.966 56H5.03401C2.2538 56 0 53.7614 0 51V5C0 2.23858 2.2538 0 5.03401 0Z"
        fill="url(#paint0_linear_60409_531)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_60409_531"
          x1="199.618"
          y1="72.4081"
          x2="208.304"
          y2="1.57695"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCC21" />
          <stop offset="1" stopColor="#FF963C" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BackgroundButton;
