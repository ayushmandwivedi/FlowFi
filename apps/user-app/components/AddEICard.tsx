export const AddEICard = ({ type }: { type: "expense" | "income" }) => {
  return (
    <div className="w-1/2 mx-auto space-y-4 bg-white rounded-2xl p-8">
      <div className="w-full">
        <input
          className="w-full bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-xs px-6 py-3 rounded-2xl outline-0 text-white"
          type="number"
          placeholder="Amount"
        />
      </div>
      {type === "expense" ? (
        <div className="w-full">
          <select className="w-full px-6 py-3 outline-none text-xs rounded-2xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-white appearance-none">
            <option hidden className=" text-gray">
              Select Category
            </option>
            <option className="text-[#777777]">Food</option>
            <option className="text-[#777777]">Transport</option>
            <option className="text-[#777777]">Rent</option>
          </select>
        </div>
      ) : (
        <div className="w-full">
          <select className="w-full px-6 py-3 outline-none text-xs rounded-2xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-white appearance-none">
            <option hidden className=" text-gray">
              Select Category
            </option>
            <option className="text-[#777777]">Salary</option>
            <option className="text-[#777777]">Freelance</option>
            <option className="text-[#777777]">Passive Income</option>
          </select>
        </div>
      )}

      <div className="w-full">
        <input
          type="date"
          placeholder="Date"
          className="w-full px-6 py-3 text-white rounded-2xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-xs outline-0"
        />
      </div>
      <div className="w-full">
        <textarea
          placeholder="Description"
          className="w-full h-30 text-white rounded-2xl px-6 py-3 text-xs outline-0 bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD]"
        />
      </div>
      <div className="flex justify-center items-center">
        <button className="px-6 py-3 text-xs rounded-2xl text-white bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD]">
          Add {type === "expense" ? "Expense" : "Income"}
        </button>
      </div>
    </div>
  );
};
