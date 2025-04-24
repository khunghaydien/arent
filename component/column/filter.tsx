import { useTranslations } from "next-intl";
type FilterProps = {
  onClick: (key: string) => void;
};
const ColumnFilter = ({ onClick }: FilterProps) => {
  const t = useTranslations();
  const columnFilterItems = [
    {
      key: "recommendColumn",
      label: t("recommendColumn"),
      japanLabel: t("recommendColumnJapan"),
    },
    {
      key: "recommendDiet",
      label: t("recommendDiet"),
      japanLabel: t("recommendDietJapan"),
    },
    {
      key: "recommendBeauty",
      label: t("recommendBeauty"),
      japanLabel: t("recommendBeautyJapan"),
    },
    {
      key: "recommendHealth",
      label: t("recommendHealth"),
      japanLabel: t("recommendHealthJapan"),
    },
  ];
  return (
    <div className="flex justify-center items-center gap-8 mt-14">
      {columnFilterItems.map(({ key, label, japanLabel }) => (
        <div
          key={key}
          className="flex items-center flex-col gap-[10px] cursor-pointer justify-center w-[216px] h-[144px] bg-dark-600 "
          onClick={() => onClick(key)}
        >
          <div className="text-primary-300 text-[22px] font-normal text-center">
            {label}
          </div>
          <div className="w-14 h-[1px] bg-white"></div>
          <div className="text-white font-[18px]">{japanLabel}</div>
        </div>
      ))}
    </div>
  );
};
export default ColumnFilter;
