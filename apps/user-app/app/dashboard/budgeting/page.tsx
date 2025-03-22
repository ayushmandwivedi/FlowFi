import { AnalyticsCard } from "components/budgeting/AnalyticsCard";
import { GoalCard } from "components/budgeting/GoalCard";

export default function Budgeting() {
  return (
    <div className="bg-[#f0f0f0] p-4 w-full flex flex-col gap-4">
      <div className="text-2xl font-bold my-4 mx-6">Budgeting</div>
      <AnalyticsCard />
      <GoalCard />
    </div>
  );
}
