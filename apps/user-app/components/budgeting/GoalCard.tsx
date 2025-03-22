"use client";
import dynamic from "next/dynamic";
import React from "react";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export const GoalCard: React.FC = () => {
  // Sample previous month data for comparison
  const previousData = { savings: 4000, expenses: 6000, investments: 2000 };
  const currentData = { savings: 5000, expenses: 5500, investments: 2500 };

  // Calculate percentage change
  const getChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return change.toFixed(1);
  };

  const options: ApexOptions = {
    chart: { type: "pie" },
    labels: ["Savings", "Expenses", "Investments"],
    colors: ["#4CAF50", "#F44336", "#FF9800"], // Green, Red, Orange
    legend: { position: "bottom" },
    dataLabels: { enabled: false },
  };

  const series = [
    currentData.savings,
    currentData.expenses,
    currentData.investments,
  ];

  type Datakey = keyof typeof currentData;

  return (
    <div className="bg-white p-4 rounded-2xl w-full h-full flex flex-col space-y-4">
      <div className="font-semibold text-lg">Financial Goals Progress</div>

      {/* Data Overview */}
      <div className="grid grid-cols-3 gap-4 text-center">
        {Object.keys(currentData).map((key) => {
          const change = getChange(
            currentData[key as Datakey],
            previousData[key as Datakey]
          );
          const isPositive = Number(change) >= 0;

          return (
            <div key={key} className="p-4 rounded-2xl bg-[#f0f0f4] text-center">
              <p className="text-sm capitalize">{key}</p>
              <p className="text-lg font-semibold">
                ₹{currentData[key as Datakey]}
              </p>
              <p
                className={`text-sm ${isPositive ? "text-green-500" : "text-red-500"}`}
              >
                {isPositive ? "▲" : "▼"} {change}%
              </p>
            </div>
          );
        })}
      </div>

      {/* Pie Chart */}
      <div className="flex-1 flex items-center justify-center">
        <ReactApexChart
          options={options}
          series={series}
          type="pie"
          height="100%"
        />
      </div>
    </div>
  );
};
