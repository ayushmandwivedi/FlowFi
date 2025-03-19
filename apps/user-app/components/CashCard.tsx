import { IndianRupee, Plus } from "lucide-react";

export const CashCard = ({ variant }: { variant: "income" | "expense" }) => {
  return (
    <div
      className={`w-full ${variant === "income" ? "rounded-l-2xl" : "rounded-r-2xl"} bg-white p-4`}
    >
      <div className="flex justify-between items-center mb-4">
        <div className="text-xs text-[#777777]">
          Total {variant === "income" ? "Balance" : "Expenses"}
        </div>
        <div className="flex justify-center items-center gap-1">
          <Plus size={12} strokeWidth={3} />
          <button className="text-xs font-semibold">
            Add {variant === "income" ? "Income" : "Expense"}
          </button>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-0.5 mb-3">
        <div
          className="bg-[#5c82ff] h-0.5 rounded-full"
          style={{ width: "50%" }}
        ></div>
      </div>
      <div>
        <div className="flex justify-start items-center text-lg font-semibold">
          <IndianRupee size={15} />
          65,915
        </div>
      </div>
    </div>
  );
};
