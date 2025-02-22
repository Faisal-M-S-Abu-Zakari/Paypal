import { useState, useEffect } from "react";

import market from "../../public/market.png";
import { Link } from "react-router-dom";
interface StoredUser {
  name: string;
  email: string;
}
const Transfer = () => {
  const [amount, setAmount] = useState<string>("");

  const [recipient, setRecipient] = useState<StoredUser | null>(null);
  const [purpose, setPurpose] = useState("");

  const EXCHANGE_RATE = 0.85; // USD to CAD rate
  useEffect(() => {
    // Get the last user from localStorage
    const users = JSON.parse(localStorage.getItem("userNames") || "[]");
    if (users.length > 0) {
      setRecipient(users[users.length - 1]);
    }
  }, [recipient]);
  const calculateCAD = (usdAmount: string): string => {
    const usd = parseFloat(usdAmount) || 0;
    return (usd * EXCHANGE_RATE).toFixed(2);
  };

  return (
    <div className="border flex flex-col items-center py-16">
      <div className="w-[500px] bg-white p-6 shadow-sm space-y-6 border border-black rounded-lg">
        {/* Recipient Info */}
        <div className="flex items-center gap-8 pb-6 justify-center">
          <div className="bg-blue-500 border rounded-full p-2 flex justify-center items-center w-16 h-16 ">
            <span className="text-white font-bold text-2xl ">
              {recipient?.name
                ?.split(" ")
                .map((word) => word.charAt(0))
                .slice(0, 2) // Ensures only the first two words are considered
                .join("")
                .toUpperCase()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-900 font-bold text-2xl">
              {recipient?.name}
            </span>
            <span className="text-sm text-gray-500">{recipient?.email}</span>
          </div>
        </div>
        <div className="flex">
          {/* Amount Input */}
          <div className="flex justify-around items-center w-full">
            <div className="flex gap-2 flex-col justify-between items-center">
              <span className="text-sm text-black"> You send</span>
              <div className="flex items-center gap-2 flex-col">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 p-3 outline-none text-4xl text-black text-center [appearance:textfield] placeholder:text-black [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-auto min-w-[100px]"
                  placeholder="0.00"
                  style={{
                    width: `${Math.max(100, amount.length * 30)}px`,
                  }}
                />
                <div className="bg-slate-200 px-4 py-1 rounded-xl">
                  <span className="text-black">USD</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 flex-col justify-center items-center">
              <span className="text-sm text-black">The recipient recives </span>
              <div className="flex items-center gap-2 flex-col">
                <span className="p-3 outline-none text-4xl text-center text-black">
                  {calculateCAD(amount)}
                </span>
                <div className="bg-slate-200 px-4 py-1 rounded-xl">
                  <span className="text-black">EUR</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Exchange Rate Info */}
        <div className="text-sm text-gray-500 space-y-1 text-center">
          <div> Please enter the amount to see the exchange rate</div>
        </div>
        {/* Purpose Input */}
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="  What is the purpose of this payment ? "
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-[500px]  flex flex-col mt-4 space-y-4 justify-center items-center">
        <a href="#" className="block text-center text-sm text-gray-600">
          For more information , please read out{" "}
          <span className="text-blue-600">User Agreement</span>
        </a>
        <Link
          to={
            "/confirmation?recipient=" +
            recipient?.name +
            "&amount=" +
            ` ${amount}`
          }
          className="w-full text-center bg-black text-white py-3 px-6 rounded-xl font-medium hover:bg-black/90 transition-all duration-300"
        >
          The next
        </Link>
        <a href="#" className="text-blue-600 border-b-2 border-blue-600">
          Cancellation
        </a>
      </div>
    </div>
  );
};
export default Transfer;
