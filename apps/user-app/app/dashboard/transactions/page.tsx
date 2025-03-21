import { SummaryCard } from "components/transactions/SummaryCard";
import { TransactionsCard } from "components/transactions/TransactionsCard";

export default function Transactions() {
  return (
    <div className="bg-[#f0f0f0] p-4 w-full flex flex-col gap-4">
      <div className="text-2xl font-bold my-4 mx-6">Transactions</div>
      <SummaryCard />
      <TransactionsCard />
    </div>
  );
}
