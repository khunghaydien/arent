import React from "react";
import { DoughnutChart, LineChart } from "../chart";
import { isEmpty } from "lodash";

export type ChartProps = {
  doughnutChart: {
    date: string;
    percentage: number;
  };
  lineChart: {
    date: string[];
    lineOne: number[];
    lineTwo: number[];
  };
};

const BannerHome = ({ lineChart, doughnutChart }: Partial<ChartProps>) => {
  return (
    <div className="flex w-full bg-dark-600">
      <div className="w-[40%] max-h-[312px] relative">
        <img
          src="/image/d01.jpg"
          alt="banner"
          className="w-full h-full object-none"
        />
        <div className="bg-[linear-gradient(225deg,_#FFCC21_0%,_#FF963C_100%)] opacity-[99.88%] mix-blend-soft-light absolute inset-0"></div>
        {!isEmpty(doughnutChart) && <DoughnutChart data={doughnutChart} />}
      </div>
      <div className="w-[60%] max-h-[312px] flex items-center justify-center ">
        {!isEmpty(lineChart) && (
          <LineChart data={lineChart} background="#2E2E2E" />
        )}
      </div>
    </div>
  );
};

export default BannerHome;
