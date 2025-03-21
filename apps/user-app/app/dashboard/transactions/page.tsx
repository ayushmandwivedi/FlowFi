import { SummaryCard } from "components/transactions/SummaryCard";

export default function Transactions() {
  return (
    <div className="bg-[#f0f0f0] p-4 h-screen w-full flex flex-col">
      <div className="text-2xl font-bold my-4 mx-6">Transactions</div>
      <SummaryCard />
    </div>
  );
}
