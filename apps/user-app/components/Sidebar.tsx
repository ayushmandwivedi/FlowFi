"use client";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import {
  CirclePercent,
  FileSpreadsheet,
  House,
  IndianRupee,
  Wallet,
} from "lucide-react";

export const Sidebar = () => {
  const router = useRouter();
  return (
    <aside className="w-1/5 p-6">
      <div
        className="flex justify-start items-center gap-2 hover:bg-[#edecec] p-3 rounded-md"
        onClick={() => router.push("/dashboard/account")}
      >
        <div>
          <svg
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
        <div className="text-sm font-semibold">
          Kevin Spacey
          <span className="block text-xs text-[#777777] font-normal">
            spacey@atex.com
          </span>
        </div>
      </div>
      <div className="w-full border-[#c6c5c5] border-t-1 my-6"></div>
      <nav>
        <ul>
          <SidebarLink
            path="/dashboard"
            label="Dashboard"
            icon={<House size={20} />}
          />
          <SidebarLink
            path="/dashboard/add-expense"
            label="Add Expense"
            icon={<Wallet size={20} />}
          />
          <SidebarLink
            path="/dashboard/add-income"
            label="Add Income"
            icon={<IndianRupee size={20} />}
          />
          <SidebarLink
            path="/dashboard/transactions"
            label="Transactions"
            icon={<FileSpreadsheet size={20} />}
          />
          <SidebarLink
            path="/dashboard/budgeting"
            label="Budgeting"
            icon={<CirclePercent size={20} />}
          />
        </ul>
      </nav>
    </aside>
  );
};

interface SidebarLinkProps {
  path: string;
  label: string;
  icon: ReactNode;
}

const SidebarLink = ({ path, label, icon }: SidebarLinkProps) => {
  const router = useRouter();
  return (
    <li
      className="flex gap-2 items-center p-4 m-2 text-xs text-[#777777] rounded-md hover:bg-[#edecec] hover:text-black"
      onClick={() => router.push(path)}
    >
      <div>{icon}</div>
      <div>{label}</div>
    </li>
  );
};
