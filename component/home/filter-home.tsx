import React from "react";
import { useTranslations } from "next-intl";
import IconKnife from "../icon/icon-knife";
import IconCup from "../icon/icon-cup";
import IconHexagonal from "../icon/icon-hexagonal";
type FilterProps = {
  onClick: (key: string) => void;
};

const FilterHome = ({ onClick }: FilterProps) => {
  const t = useTranslations();
  const filterHomeItems = [
    {
      key: "morning",
      label: t("morning"),
      icon: <IconKnife />,
    },
    {
      key: "lunch",
      label: t("lunch"),
      icon: <IconKnife />,
    },
    {
      key: "dinner",
      label: t("dinner"),
      icon: <IconKnife />,
    },
    {
      key: "snack",
      label: t("snack"),
      icon: <IconCup />,
    },
  ];
  return (
    <div className="flex justify-center items-center gap-16 mt-6">
      {filterHomeItems.map(({ key, label, icon }) => (
        <div
          key={key}
          className="relative flex items-center justify-center cursor-pointer"
          onClick={() => onClick(key)}
        >
          <IconHexagonal />
          <div className="absolute flex flex-col items-center text-[20px] text-white">
            {icon}
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};
export default FilterHome;
