export const AccountCard = () => {
  return (
    <div className="p-8 rounded-2xl bg-white space-y-6">
      <div className="flex justify-between">
        <div className="font-semibold text-md">Basic Info</div>
        <div className="border rounded-md text-xs px-6 py-1 font-semibold">
          Edit
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
        <div className="text-xl flex justify-center items-center h-24 w-24 rounded-full bg-[#f0f0f0] text-[#777777]">
          KV
        </div>
        <div className="flex-1">
          <InputBar type="First Name" value="Kevin" />
          <InputBar type="Email" value="spacey@atex.com" />
        </div>
        <div className="flex-1">
          <InputBar type="Last Name" value="Spacey" />
          <InputBar type="Phone" value="+91-9999912299" />
        </div>
      </div>
      <div className="w-full border-t border-[#bcb8b8]"></div>
      <div className="space-y-3">
        <div className="font-semibold text-md">Password</div>
        <button className="rounded-xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-white px-6 py-2 text-xs font-semibold">
          Reset Password
        </button>
      </div>
    </div>
  );
};

interface InputBarProps {
  type: string;
  value: string;
}

const InputBar = ({ type, value }: InputBarProps) => {
  return (
    <div className="mb-2">
      <div className="text-sm font-semibold mb-2">{type}</div>
      <div className="text-sm w-full rounded-md bg-[#f0f0f0] px-4 py-2 text-[#777777]">
        {value}
      </div>
    </div>
  );
};
