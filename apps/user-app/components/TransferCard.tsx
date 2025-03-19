import { BadgeDollarSign } from "lucide-react";

export const TransferCard = () => {
  return (
    <div className="p-4 bg-white rounded-2xl h-full flex-1">
      <div className="font-semibold text-lg mb-8">Transfers</div>
      <div className="flex items-center gap-2 mb-4">
        <div className="text-xs text-[#777777]">5 November</div>
        <div className="h-[0.75px] flex-1 bg-[#e0e0e0] rounded-2xl"></div>
      </div>
      <TransactionList
        icon={<BadgeDollarSign size={15} />}
        name="iPad"
        type="purchase"
        price={4000000}
        time="18:30"
      />
      <TransactionList
        icon={<BadgeDollarSign size={15} />}
        name="iPad"
        type="purchase"
        price={4000000}
        time="18:30"
      />
      <TransactionList
        icon={<BadgeDollarSign size={15} />}
        name="iPad"
        type="purchase"
        price={4000000}
        time="18:30"
      />
      <TransactionList
        icon={<BadgeDollarSign size={15} />}
        name="iPad"
        type="purchase"
        price={4000000}
        time="18:30"
      />
      <div className="flex justify-center items-center mt-6">
        <button className="text-xs text-[#777777] bg-[#f0f0f0] rounded-2xl px-4 py-2 hover:bg-[#d4d2d2] hover:text-black">
          View All
        </button>
      </div>
    </div>
  );
};

interface TransactionListProps {
  icon: React.ReactNode;
  name: string;
  type: string;
  price: number;
  time: string;
}
function TransactionList({
  icon,
  name,
  type,
  price,
  time,
}: TransactionListProps) {
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center gap-2">
        <div>{icon}</div>
        <div className="text-sm">
          {name} <span className="block text-xs text-[#c9c9c9]">{type}</span>
        </div>
      </div>
      <div className="text-sm">
        {price / 100 + ".00"}{" "}
        <span className="block text-xs text-[#c9c9c9]">{time}</span>
      </div>
    </div>
  );
}
