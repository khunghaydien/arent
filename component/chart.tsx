import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import React from "react";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type LineChartProps = {
  data: {
    date: string[];
    lineOne: number[];
    lineTwo: number[];
  };
  width?: number;
  height?: number;
  background?: string;
};

export const LineChart = ({
  data,
  width,
  height,
  background,
}: LineChartProps) => {
  const chartData = {
    labels: data.date,
    datasets: [
      {
        data: data.lineOne,
        tension: 0,
        borderColor: "#FFCC21",
        backgroundColor: "#FFCC21",
      },
      {
        data: data.lineTwo,
        tension: 0,
        borderColor: "#8FE9D0",
        backgroundColor: "#8FE9D0",
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        suggestedMax: 28,
      },
      x: {
        grid: {
          color: "#777777",
        },
        ticks: {
          color: "#FFFFFF",
        },
        border: {
          width: 0,
        },
        display: true,
      },
    },
    responsive: true,
  };
  const linePlugin = {
    id: "linePlugin",
    beforeDraw: (chart: any) => {
      const { ctx, chartArea } = chart;
      ctx.save();
      ctx.fillStyle = background;
      ctx.fillRect(
        chartArea.left,
        chartArea.top,
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );
      ctx.restore();
    },
  };
  return (
    <Line
      data={chartData}
      options={options}
      height={height}
      width={width}
      plugins={[linePlugin]}
    />
  );
};

ChartJS.register(ArcElement, Tooltip, Legend);
interface DoughnutChartProps {
  size?: number;
  thickness?: number;
  data: {
    date: string;
    percentage: number;
  };
}

export const DoughnutChart = ({
  data,
  size = 181,
  thickness = 2,
}: DoughnutChartProps) => {
  const remaining = 100 - data.percentage;

  const chartData = {
    labels: ["Filled", "Remaining"],
    datasets: [
      {
        data: [data.percentage, remaining],
        backgroundColor: ["#ffffff", "transparent"],
        borderColor: ["transparent", "transparent"],
        borderWidth: 0,
      },
    ],
  };
  const radius = size / 2;
  const cutoutRadius = radius - thickness;
  const cutoutPercentage = (cutoutRadius / radius) * 100;

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: `${cutoutPercentage}%`,
    rotation: 0,
    circumference: 360,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    layout: {
      padding: 0,
    },
  };
  const doughnutPlugin = {
    id: "doughnutPlugin",
    beforeDraw: (chart: any) => {
      const ctx = chart.ctx;
      const arcs = chart.getDatasetMeta(0).data;
      ctx.fillStyle = "rgba(0, 0, 0, 0)";
      arcs.forEach((arc: any, index: number) => {
        if (index === 0) {
          ctx.save();
          ctx.shadowColor = "#FC7400";
          ctx.shadowBlur = 6;
          arc.draw(ctx);
          ctx.restore();
        }
      });
    },
  };
  return (
    <>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full">
        <div className="w-[181px] h-[181px]">
          <Doughnut
            data={chartData}
            options={options}
            plugins={[doughnutPlugin]}
          />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center w-full h-full text-white">
        <div
          className="flex items-end"
          style={{ textShadow: "0px 0px 6px #FC7400" }}
        >
          <div className="text-[18px] leading-[33px]">{data.date}</div>
          <div className="text-[25px]">{data.percentage}%</div>
        </div>
      </div>
    </>
  );
};
