import { CashCard } from "components/CashCard";
import { TransferCard } from "components/TransferCard";
import WavyChart from "components/WavyChart";

export default function Dashboard() {
  return (
    <div className="bg-[#f0f0f0] p-4 h-screen w-full flex flex-col">
      <div className="text-2xl font-bold my-4 mx-6">Dashboard</div>
      <div className="w-full flex gap-2 flex-1">
        <div className="w-2/3 flex flex-col h-full">
          <div className="flex gap-2 mb-4">
            <CashCard variant={"income"} />
            <CashCard variant={"expense"} />
          </div>
          <WavyChart />
        </div>
        <TransferCard />
      </div>
    </div>
  );
}
