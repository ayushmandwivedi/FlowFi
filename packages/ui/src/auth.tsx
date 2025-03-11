export const Auth = ({ props }: { props: "signin" | "signup" }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-2/5 flex flex-col items-center justify-center gap-8 p-10 rounded-2xl border-2 border-[#dad5d5] ">
        {props === "signup" ? (
          <div className="text-4xl font-semibold">Create an Account</div>
        ) : (
          <div className="text-4xl font-semibold">Signin to FlowFi</div>
        )}
        <div className="flex justify-center items-center gap-3">
          <span className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-white"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </span>
          <span className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
            <svg
              className="h-5 w-5 text-white"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
              <rect x="2" y="9" width="4" height="12" />{" "}
              <circle cx="4" cy="4" r="2" />
            </svg>
          </span>
          <span className="bg-black rounded-full h-8 w-8 flex items-center justify-center">
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M17.788 5.108A9 9 0 1021 12h-8" />
            </svg>
          </span>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {props === "signup" ? (
            <input
              placeholder="Name"
              type="text"
              className="bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-sm px-6 py-3 rounded-xl outline-0 text-white"
            ></input>
          ) : null}
          <input
            placeholder="Email"
            type="email"
            className="bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-sm px-6 py-3 rounded-xl outline-0 text-white"
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-sm px-6 py-3 rounded-xl outline-0 text-white"
          ></input>
        </div>
        <div>
          {props === "signup" ? (
            <button className=" px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-sm text-white">
              SignUp
            </button>
          ) : (
            <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#9C8EF7] to-[#E5B1FD] text-sm text-white">
              SignIn
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
