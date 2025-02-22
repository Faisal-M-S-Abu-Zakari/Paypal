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

  const EXCHANGE_RATE = 1.3614; // USD to CAD rate
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
        <div className="flex items-center gap-4 pb-6 justify-center">
          <div className="bg-blue-500 border rounded-full p-2">
            <img src={market} alt="market" className="w-10 h-10" />
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
          <div className="flex justify-center items-center w-full">
            <div className="flex gap-2 flex-col justify-center items-center">
              <span className="text-sm text-gray-600">أنت ترسل</span>
              <div className="flex items-center gap-2 flex-col">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 p-3 outline-none text-4xl text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-auto min-w-[100px]"
                  placeholder="0.00"
                  style={{
                    width: `${Math.max(100, amount.length * 30)}px`,
                  }}
                />
                <span className="text-black">USD</span>
              </div>
            </div>
            <div className="flex gap-2 flex-col justify-center items-center">
              <span className="text-sm text-gray-600">يستلم المتلقي</span>
              <div className="flex items-center gap-2 flex-col">
                <span className="p-3 outline-none text-4xl text-center">
                  {calculateCAD(amount)}
                </span>
                <span className="text-black">CAD</span>
              </div>
            </div>
          </div>
        </div>
        {/* Exchange Rate Info */}
        <div className="text-sm text-gray-500 space-y-1 text-center">
          <div>سعر التحويل: USD - {EXCHANGE_RATE} CAD</div>
          <div>يشمل هذا السعر فرق تحويل العملات</div>
        </div>
        {/* Purpose Input */}
        <input
          type="text"
          value={purpose}
          onChange={(e) => setPurpose(e.target.value)}
          placeholder="ما الغرض من هذه الدفعة"
          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="w-[500px]  flex flex-col mt-4 space-y-4 justify-center items-center">
        <a href="#" className="block text-center text-sm text-gray-600">
          لمزيد من المعلومات يرجى قراءة تعليمات المستخدم لدينا
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
          التالي
        </Link>
      </div>
    </div>
  );
};
export default Transfer;
