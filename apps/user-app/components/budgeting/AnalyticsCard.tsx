"use client";

import { Armchair } from "lucide-react";
import { useState } from "react";

export const AnalyticsCard = () => {
  const [seloption, setSelOption] = useState<"Week" | "Month" | "Year">("Week");
  const ToggleSwitch = () => {
    return (
      <div className="flex bg-[#f0f0f4] rounded-2xl">
        {["Week", "Month", "Year"].map((option) => (
          <button
            key={option}
            className={`px-4 py-2 text-xs rounded-2xl transition ${seloption === option ? "bg-[#cdcdcf] text-black" : "text-[#777777]"}`}
            onClick={() => setSelOption(option as "Week" | "Month" | "Year")}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-4 rounded-2xl space-y-4">
      <div className="text-lg font-semibold">Your Analytics</div>
      <div className="flex justify-between items-center">
        <div className="text-xs rounded-2xl bg-[#f0f0f4] py-2 px-4">
          This {seloption}
        </div>
        <ToggleSwitch />
      </div>
      <div>
        <div className="flex items-center justify-between">
          <div className="text-sm">{seloption + "ly Expense"}</div>
          <div>
            <button className="bg-black rounded-2xl text-white text-xs px-4 py-2">
              View Report
            </button>
          </div>
        </div>
        <div className="text-[#777777] text-xs">{`From ${getStartDate(seloption)} to ${new Date().toLocaleDateString(
          "en-GB",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )}`}</div>
      </div>
      <CategoryExpense
        icon={<Armchair size={15} />}
        type="Food"
        expense={450}
        total={1000}
      />
      <CategoryExpense
        icon={<Armchair size={15} />}
        type="Food"
        expense={450}
        total={1000}
      />
      <CategoryExpense
        icon={<Armchair size={15} />}
        type="Food"
        expense={450}
        total={1000}
      />
      <CategoryExpense
        icon={<Armchair size={15} />}
        type="Food"
        expense={600}
        total={1000}
      />
    </div>
  );
};

const getStartDate = (range: "Week" | "Month" | "Year") => {
  const today = new Date();
  const startDate = new Date(today);

  if (range === "Week") {
    startDate.setDate(today.getDate() - 7);
  } else if (range === "Month") {
    startDate.setMonth(today.getMonth() - 1);
  } else if (range === "Year") {
    startDate.setFullYear(today.getFullYear() - 1);
  }
  return startDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

interface CategoryExpenseProps {
  type: string;
  icon: React.ReactNode;
  expense: number;
  total: number;
}

const CategoryExpense = ({
  type,
  icon,
  expense,
  total,
}: CategoryExpenseProps) => {
  return (
    <div className="flex justify-around items-center gap-2 mt-8 text-xs">
      <div>{icon}</div>
      <div>{type}</div>
      <div className="w-full mx-6 bg-gray-200 rounded-full h-0.25">
        <div
          className={`${expense / total >= 0.5 ? "bg-red-600" : "bg-green-600"} h-0.25 rounded-full`}
          style={{ width: `${(expense / total) * 100}%` }}
        ></div>
      </div>
      <div>{expense}</div>
    </div>
  );
};
