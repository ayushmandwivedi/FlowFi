import { AccountCard } from "components/AccountCard";

export default function Account() {
  return (
    <div className="bg-[#f0f0f0] p-4 h-screen w-full flex flex-col">
      <div className="text-2xl font-bold my-4 mx-6">My Account</div>
      <AccountCard />
    </div>
  );
}
