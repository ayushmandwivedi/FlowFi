import { AddEICard } from "components/AddEICard";

export default function AddExpense() {
  return (
    <div className="bg-[#f0f0f0] p-4 h-screen w-full flex flex-col">
      <div className="text-2xl font-bold my-4 mx-6">Add Expense</div>
      <AddEICard type="expense" />
    </div>
  );
}
