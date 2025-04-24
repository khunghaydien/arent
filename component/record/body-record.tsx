import clsx from "clsx";
import { useTranslations } from "next-intl";
import React, { useMemo, useState, useCallback } from "react";
import { LineChart } from "../chart";
import CardRecord from "./card-record";

type TimePeriodData = {
  date: string[];
  lineOne: number[];
  lineTwo: number[];
};

type TimePeriodKey = "day" | "week" | "month" | "year";

export type ChartDataRecord = {
  lineChart?: Record<TimePeriodKey, TimePeriodData>;
};

const BodyRecord = ({ lineChart }: ChartDataRecord) => {
  const t = useTranslations();
  const filterLineChartItems: { key: TimePeriodKey; label: string }[] = [
    { key: "day", label: t("day") },
    { key: "week", label: t("week") },
    { key: "month", label: t("month") },
    { key: "year", label: t("year") },
  ];
  const [actived, setActived] = useState<TimePeriodKey>("year");
  const currentChartData = useMemo(() => {
    if (!lineChart || !lineChart[actived]) {
      return undefined;
    }
    return lineChart[actived];
  }, [lineChart, actived]);

  const handleClick = useCallback((key: TimePeriodKey) => {
    setActived(key);
  }, []);

  return (
    <CardRecord
      title="BODY RECORD"
      subTitle="2021.05.21"
      className="body-record"
    >
      {currentChartData && (
        <LineChart
          data={currentChartData}
          height={208}
          width={980}
          background="#414141"
        />
      )}
      <div className="flex items-center gap-4">
        {filterLineChartItems.map(({ key, label }) => {
          return (
            <button
              type="button"
              key={key}
              onClick={() => handleClick(key)}
              className={clsx(
                "w-14 h-6 rounded-[11px] flex items-center justify-center text-[15px] cursor-pointer transition-colors duration-150 ease-in-out", // Thêm transition
                actived === key
                  ? "bg-primary-300 text-white"
                  : "bg-white text-primary-300"
              )}
            >
              {label}
            </button>
          );
        })}
      </div>
    </CardRecord>
  );
};

export default BodyRecord;
