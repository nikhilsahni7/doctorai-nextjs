"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full h-full flex flex-col justify-center items-center bg-gray-800 shadow-md rounded-lg p-10">
        <h1 className="text-5xl font-bold text-center text-white mb-4 animate-fadeIn">
          Welcome to Our Website!
        </h1>
        <p className="text-lg text-center text-gray-300 mb-8 animate-fadeIn">
          Join us today and explore a world of opportunities.
        </p>
        <div className="space-y-4 animate-slideUp">
          <button
            className="w-48 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </button>
          <button
            className="w-48 bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              router.push("/register");
            }}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
