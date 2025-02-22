import logo from "../../../public/pnaypal.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#fefefe] !py-3 !px-6 shadow-sm z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo placeholder */}
          <div className="text-2xl font-bold  text-white p-2 rounded-full">
            <img src={logo} alt="logo" width={80} height={80} />
          </div>

          {/* Main navigation */}
          <div className="relative flex items-center gap-6">
            <Link
              to={"/"}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600 transition-colors"
            >
              <span>Home</span>
            </Link>

            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600 transition-colors">
              <span>Activities</span>
            </button>

            <div className="relative group">
              <button className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                <span>Pay and Receive Payment</span>
              </button>
              <div className="absolute hidden group-hover:block top-full right-0 mt-0 w-[900px] bg-white text-black rounded-lg shadow-lg border">
                <div className="flex p-4 gap-4">
                  {/* Column 4 (with 6 rows) */}
                  <div className="flex flex-col space-y-2">
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Accept payments
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Request money
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Electronic payment via PayPal
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Payment links and payment button
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      PayPal.Me
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Social Media Selling
                    </button>
                  </div>
                  {/* Column 3 */}
                  <div className="flex flex-col space-y-2">
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Pay Payments
                    </button>
                    <Link
                      to={"find"}
                      className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap"
                    >
                      Send payments
                    </Link>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Mass Payments
                    </button>
                  </div>

                  {/* Column 2 */}
                  <div className="flex flex-col space-y-2">
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      The invoice
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Create and manage invoice
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Create and manage estimates
                    </button>
                  </div>
                  {/* Column 1 */}
                  <div className="flex flex-col space-y-2">
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Wallet
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Payments
                    </button>
                    <button className="text-left py-1 px-2 hover:bg-gray-100 rounded transition-colors whitespace-nowrap">
                      Bank accounts and cards
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600 transition-colors">
              <span>Marketing for Business Growth</span>
            </button>

            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 border-b-2 border-transparent hover:border-blue-600 transition-colors">
              <span>Corporate Tools</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
