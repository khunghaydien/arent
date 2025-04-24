import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
type FilterProps = {
  onClick: (key: string) => void;
};
export const FilterRecord = ({ onClick }: FilterProps) => {
  const t = useTranslations();
  const recordItems = [
    {
      key: "body-record",
      label: t("bodyRecord"),
      buttonLabel: t("bodyRecordButton"),
      image: {
        src: "/image/MyRecommend-1.jpg",
        alt: t("bodyRecord"),
        className: "object-[-8%] scale-110",
        width: 240,
        height: 240,
      },
    },
    {
      key: "exercise-record",
      label: t("myExercise"),
      buttonLabel: t("myExerciseButton"),
      image: {
        src: "/image/MyRecommend-2.jpg",
        alt: t("myExercise"),
        className: "object-[30%] scale-110",
        width: 240,
        height: 240,
      },
    },
    {
      key: "diary-record",
      label: t("myDiary"),
      buttonLabel: t("myDiaryButton"),
      image: {
        src: "/image/MyRecommend-3.jpg",
        alt: t("myDiary"),
        className: "scale-110 object-[55%]",
        width: 240,
        height: 240,
      },
    },
  ];
  return (
    <div className="flex justify-center items-center gap-12 my-14">
      {recordItems.map(({ key, label, image, buttonLabel }) => (
        <div
          key={key}
          className="relative flex items-center justify-center cursor-pointer border-[24px] border-primary-300"
          onClick={() => onClick(key)}
        >
          <div className="w-[240px] h-[240px] overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={clsx(
                "grayscale object-cover w-full h-full",
                image.className
              )}
            />
          </div>
          <div className="mix-blend-luminosity bg-[#000] opacity-40 absolute inset-0"></div>
          <div className="absolute flex flex-col items-center text-primary-300 gap-3 text-[25px]">
            {label}
            <div className="w-40 h-6 bg-primary-400 text-white text-[14px] text-center">
              {buttonLabel}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
