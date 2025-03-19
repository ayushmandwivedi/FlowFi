"use client";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const WavyChart: React.FC = () => {
  const [chartHeight, setChartHeight] = useState(300); // Default height

  useEffect(() => {
    const updateHeight = () => setChartHeight(window.innerHeight * 0.4); // 40% of screen height
    updateHeight(); // Set initial height
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const options: ApexOptions = {
    chart: { type: "area", toolbar: { show: false } },
    stroke: { curve: "smooth", width: 2, colors: ["#5c82ff"] },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["rgba(92, 130, 255, 0)"],
        opacityFrom: 0.6,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    markers: { size: 0, hover: { size: 6 } },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"] },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
  };

  const series = [
    { name: "Expenses", data: [1200, 1800, 1500, 2200, 1700, 2500] },
  ];

  return (
    <div className="bg-white p-6 rounded-lg w-full flex flex-col h-full">
      <div className="font-semibold text-lg">Expenses</div>
      <div className="flex-1">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={chartHeight}
        />
      </div>
    </div>
  );
};

export default WavyChart;
