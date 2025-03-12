// Example: apps/user-app/pages/index.tsx
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      {/* Navbar starts */}
      <div className="h-full w-full py-6 px-18 flex justify-between items-center sticky top-0 bg-white">
        <div className="font-lato font-bold text-xl">FlowFi</div>
        <div className="flex items-center">
          <div className="mx-4 text-[#777777] text-sm">Home</div>
          <div className="mx-4 text-[#777777] text-sm">Features</div>
          <div className="mx-4 text-[#777777] text-sm">Pricing</div>
          <div className="mx-4 text-[#777777] text-sm">About</div>
        </div>
        <div>
          <button
            onClick={() => router.push("/signin")}
            className="mx-2 border border-[#777777] rounded-full px-4 py-2 text-sm text-[#777777]"
          >
            Log In
          </button>
          <button
            onClick={() => router.push("/signup")}
            className="mx-2 rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD]"
          >
            Sign Up
          </button>
        </div>
      </div>
      {/* Navbar ends */}
      {/* Mid Screen starts */}
      <div className="m-4 border rounded-2xl border-[#c5c0c0] overflow-hidden">
        <div className="w-1/2 mx-auto">
          <div className="text-6xl font-semibold text-center w-full mb-4 pt-14">
            Take Control Of Your{" "}
            <span className="text-[#4dc2f1]">Finances</span> Today
          </div>
          <div className="text-center text-[#777777] text-sm mb-4">
            Take charge of your financial future by tracking expenses, setting
            budgets, and building savings. Start today for a secure and
            stress-free tomorrow!
          </div>
          <div className="text-center">
            <button
              onClick={() => router.push("/signup")}
              className="mx-2 rounded-full px-4 py-2 text-sm text-white bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD]"
            >
              Take Control Now
            </button>
          </div>
        </div>
        {/* Mid Screen ends */}
        {/* Phone UI part starts */}
        <div className="bg-[linear-gradient(to_bottom,white,transparent),linear-gradient(to_right,#9C8EF7,#E5B1FD)] pt-12">
          {/* Phone's Screen */}
          <div className=" w-65 rounded-t-4xl mx-auto border-6 border-b-0 bg-white relative">
            <div className="w-20 h-6 mx-auto my-2 bg-black rounded-full"></div>
            <div className="m-4 text-xl font-semibold">
              <span className="text-[#777777] font-normal">Hi Cartez,</span>
              <br></br>
              Welcome Back
            </div>
            <div className="flex flex-col items-center gap-2 pb-4">
              <div className="text-xs text-[#777777]">Available Balance</div>
              <div className="text-3xl font-bold">$3,100</div>
              <div className="flex justify-center items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-[#777777]"></div>
                <div className="h-1.5 w-1.5 rounded-full bg-black"></div>
                <div className="h-1 w-1 rounded-full bg-[#777777]"></div>
              </div>
              <div className="flex gap-5 m-3">
                <svg
                  className="h-9 w-9 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <svg
                  className="h-9 w-9 text-black"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <path stroke="none" d="M0 0h24v24H0z" />{" "}
                  <line x1="10" y1="14" x2="21" y2="3" />{" "}
                  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />
                </svg>
                <svg
                  className="h-9 w-9 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-white rounded-lg w-50 absolute top-2/5 right-5/6 drop-shadow-lg p-5 overflow-hidden">
              <div className="text-sm flex justify-between items-center mb-2">
                <div>
                  <span className="text-xs text-[#a19f9f]">Balance</span>{" "}
                  <br></br>
                  $9.978
                </div>
                <svg
                  className="h-5 w-5 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="text-[10px] font-semibold flex justify-between items-center mb-2">
                <div>
                  <span className="font-normal text-[#a19f9f]">
                    CARD HOLDER
                  </span>
                  <br></br>
                  Eddy Cusuma
                </div>
                <div>
                  <span className="font-normal text-[#a19f9f]">VALID THRU</span>
                  <br></br>
                  12/12
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">3772**** *** 2877</div>
                <div className="h-4 w-4 rounded-full relative bg-[#777777]">
                  <div className="h-4 w-4 rounded-full absolute left-1/2 bg-[#d2e940]"></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg  absolute top-1/4 -right-65 drop-shadow-lg py-5 px-6">
              <div className="bg-white rounded-lg w-45 absolute bottom-0 right-5/6 drop-shadow-lg p-5">
                <div className="mb-4 text-sm font-bold">Report</div>
                <div className="relative w-25 h-25 rounded-full bg-gray-200 mx-auto mb-4">
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#e7e4e4_0%_75%,#000000_75%_100%)]"></div>
                  <div className="absolute inset-2 bg-white rounded-full flex flex-col items-center justify-center gap-1">
                    <div className="text-sm font-semibold">3.100</div>
                    <div className="rounded-lg text-[10px] text-[#777777] bg-[#f3f1f1] p-0.5">
                      +20%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <div className="flex items-center text-xs">
                    <div className="h-2 w-3 rounded-md bg-[#e7e4e4] mr-1"></div>{" "}
                    Income{" "}
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-2 w-3 rounded-md bg-[#000000] mr-1"></div>{" "}
                    Expense
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <svg
                  className="h-20 w-20 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <div className="text-md font-bold">Salary</div>
                <div className="text-xs text-[#777777]">Total Income</div>
                <div className="text-sm font-bold">+2.400</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
