import React from "react";
import BackgroundButton from "./icon/background-button";
import IconArrowUp from "./icon/icon-arrow-up";
type ButtonProps = {
  label: string;
  onClick: () => void;
};
export const ButtonLoadMore = ({ label, onClick }: ButtonProps) => {
  return (
    <div
      className="relative flex items-center justify-center cursor-pointer mb-16"
      onClick={onClick}
    >
      <BackgroundButton />
      <div className="text-white absolute inset-0 flex items-center justify-center">
        {label}
      </div>
    </div>
  );
};
export const ButtonToTop = () => {
  const handleScrollToTop = () => {
    const top = document.querySelector(".main-layout-header") as HTMLElement;

    if (top) {
      top.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      onClick={handleScrollToTop}
      className="fixed bottom-[272px] right-24 cursor-pointer w-12 h-12 rounded-full border border-dark-400 flex items-center justify-center bg-white"
    >
      <IconArrowUp />
    </div>
  );
};
