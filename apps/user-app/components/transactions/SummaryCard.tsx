import { ChevronDown, File, Filter, IndianRupee } from "lucide-react";

export const SummaryCard = () => {
  return (
    <div className="bg-white rounded-2xl p-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-[#f2f2f4] hover:bg-[#ceced1] font-medium rounded-2xl text-xs px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            <Filter size={10} className="mr-1" />
            All filters{" "}
          </button>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-[#f2f2f4] hover:bg-[#ceced1] font-medium rounded-2xl text-xs px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            Date <ChevronDown size={10} className="ml-1" />
          </button>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-[#f2f2f4] hover:bg-[#ceced1] font-medium rounded-2xl text-xs px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            Amount <ChevronDown size={10} className="ml-1" />
          </button>
        </div>
        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="text-white bg-black hover:bg-[#ceced1] font-medium rounded-2xl text-xs px-4 py-2 text-center inline-flex items-center"
            type="button"
          >
            <File size={10} className="mr-1" /> Export
          </button>
        </div>
      </div>
      {/* That mid line */}
      <div className="bg-[#d0d0d4] h-[0.75px] w-full my-6"></div>
      {/* That mid line */}
      <div className="flex items-center gap-6">
        <div className="text-[#777777] text-xs border-r-1 pr-5">
          Money in{" "}
          <div className="flex items-center text-xl text-black font-semibold mt-1">
            <IndianRupee size={20} /> 254, 915
          </div>
        </div>
        <div className="text-[#777777] text-xs border-r-1 pr-5">
          Money out{" "}
          <div className="flex items-center text-xl text-black font-semibold mt-1">
            <IndianRupee size={20} />
            254, 915
          </div>
        </div>
        <div className="text-[#777777] text-xs">
          Total txns{" "}
          <div className="text-xl text-black font-semibold mt-1">1030</div>
        </div>
      </div>
    </div>
  );
};
