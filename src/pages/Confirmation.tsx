import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";

const Confirmation = () => {
  const [searchParams] = useSearchParams();
  const recipient = searchParams.get("recipient") || "مستخدم";
  const amount = searchParams.get("amount") || "0";

  useEffect(() => {
    console.log("Transfer completed:", { recipient, amount });
  }, [recipient, amount]);

  return (
    <div className=" bg-gray-50 p-6">
      <div className="flex gap-10 shadow-md px-[300px] py-5 bg-white rounded-lg justify-end">
        <button className="text-xl font-semibold text-gray-700 ">More</button>
        <button className="text-xl font-semibold text-gray-700 ">
          Contacts
        </button>

        <button className="text-xl font-semibold text-gray-700 ">
          Request
        </button>
        <button className="text-xl font-semibold text-blue-600 border-2 rounded-full p-2 px-4 border-blue-500">
          Send
        </button>
      </div>
      <div className="max-w-md py-9 mx-auto text-center space-y-8 page-transition flex flex-col justify-center items-center">
        <div className="space-y-4 border border-black rounded-lg p-10 text-center">
          <h1 className="text-2xl font-semibold">
            You've sent {amount} USD to @{recipient}
          </h1>
        </div>

        <Link
          to="/transfer"
          className="block w-[200px] py-2 px-4 bg-blue-800  text-white rounded-full "
        >
          Send more money
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
