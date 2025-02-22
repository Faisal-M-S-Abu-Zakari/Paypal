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
      <div className="max-w-md mx-auto text-center space-y-8 page-transition">
        <div className="bg-primary/10 w-20 h-20 rounded-full mx-auto flex items-center justify-center">
          <Check className="w-10 h-10 text-primary" />
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">تم التحويل بنجاح!</h1>
          <p className="text-gray-600">
            You are successfully transferred {amount} USD to {recipient}
          </p>
        </div>

        <Link
          to="/"
          className="block w-full py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-all duration-300"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default Confirmation;
