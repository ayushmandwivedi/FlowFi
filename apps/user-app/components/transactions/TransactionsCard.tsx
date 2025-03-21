import { Apple } from "lucide-react";

export const TransactionsCard = () => {
  return (
    <div className="bg-white p-4 rounded-2xl">
      <div>
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-[#777777] bg-white font-medium rounded-2xl text-xs px-4 py-2 text-center inline-flex items-center hover:text-black border-1"
          type="button"
        >
          Today, 5 November
        </button>
      </div>
      <TransactionList
        icon={<Apple size={20} className="mr-2 inline" />}
        title="iCloud"
        type="Software"
        statusType="completed"
        variant="Purchase"
        time="18:02"
        amount={40000}
      />
      <TransactionList
        icon={<Apple size={20} className="mr-2 inline" />}
        title="iCloud"
        type="Software"
        statusType="in process"
        variant="Purchase"
        time="18:02"
        amount={40000}
      />
      <TransactionList
        icon={<Apple size={20} className="mr-2 inline" />}
        title="iCloud"
        type="Software"
        statusType="failed"
        variant="Purchase"
        time="18:02"
        amount={40000}
      />
      <TransactionList
        icon={<Apple size={20} className="mr-2 inline" />}
        title="iCloud"
        type="Software"
        statusType="completed"
        variant="Purchase"
        time="18:02"
        amount={40000}
      />
      <TransactionList
        icon={<Apple size={20} className="mr-2 inline" />}
        title="iCloud"
        type="Software"
        statusType="completed"
        variant="Purchase"
        time="18:02"
        amount={40000}
      />
    </div>
  );
};

interface TransactionListProps {
  icon: React.ReactNode;
  title: string;
  type: string;
  statusType: "completed" | "in process" | "failed";
  variant: string;
  time: string;
  amount: number;
}

function TransactionList({
  icon,
  title,
  type,
  statusType,
  variant,
  time,
  amount,
}: TransactionListProps) {
  return (
    <div className="flex justify-around items-center border-b-1 border-[#d0d0d4] py-4 bg-white">
      <div className="flex justify-center items-center">
        <div>{icon}</div>
        <div>
          <div className="text-xs">{title}</div>
          <div className="text-[10px] text-[#777777]">{type}</div>
        </div>
      </div>
      <div
        className={`rounded-2xl px-4 py-2 text-xs
    ${statusType === "completed" ? "text-green-600 border border-green-600" : ""}
    ${statusType === "in process" ? "text-yellow-600 border border-yellow-600" : ""}
    ${statusType === "failed" ? "text-red-600 border border-red-600 px-7" : ""}
  `}
      >
        {statusType}
      </div>
      <div>
        <div className="text-xs">
          {icon}
          {variant}
        </div>
      </div>
      <div className="text-xs text-[#777777]">{time}</div>
      <div className="text-xs">-{amount}</div>
    </div>
  );
}
