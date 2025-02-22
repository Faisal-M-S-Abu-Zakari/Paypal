import { ShoppingCart, Link2, Send } from "lucide-react";
import business from "../../public/layer-removebg-preview.png";
import invoicing from "../../public/receipt.png";
import recive from "../../public/receive-money-removebg-preview.png";
const Home = () => {
  return (
    <div className="min-h-screen bg-amber-10 !p-8">
      <div className="max-w-5xl mx-auto space-y-8 ">
        {/* Top section with Balance and Quick Links */}
        <div className="flex justify-between items-start gap-8">
          {/* Made PayPal Balance card wider */}
          <div className="bg-white rounded-lg !p-6 border w-1/3 min-h-[250px] relative z-0">
            <div className="flex items-baseline justify-between">
              <h2 className="text-lg font-semibold mb-2">PayPal Balance</h2>
              <span className="text-xl">:</span>
            </div>
            <div className="text-3xl mb-2 text-gray-700 font-roboto font-thin absolute top-20">
              USD 1,765,820
              <p className="text-sm text-gray-600">available</p>
            </div>
            <button className="absolute bottom-6 right-3 text-blue-600 text-sm">
              Setting up automatic transfers
            </button>
          </div>

          {/* Quick Links Section - adjusted width */}
          <div className="bg-white rounded-lg !p-6 border flex-grow">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <div className="grid grid-cols-6 gap-4 items-start">
              <div className="border-l border-gray-300 pl-4">
                <QuickLinkButton
                  icon={
                    <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                      <img
                        src={business}
                        alt="business"
                        className="w-10 h-70"
                      />
                    </div>
                  }
                  label={
                    <span className="text-gray-700 font-semibold">
                      Business Tools
                    </span>
                  }
                />
              </div>
              <QuickLinkButton
                icon={
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                    <img src={invoicing} alt="invoicing" className="w-10 h-8" />
                  </div>
                }
                label={
                  <span className="text-gray-700 font-semibold">Billing</span>
                }
              />
              <QuickLinkButton
                icon={
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                    <img src={recive} alt="recive" className="w-10 h-8 ml-1" />
                  </div>
                }
                label={
                  <span className="text-gray-700 font-semibold">
                    Receive Payments
                  </span>
                }
              />

              <QuickLinkButton
                icon={
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                    <Send className="w-10 h-8 text-blue-600" />
                  </div>
                }
                label={
                  <span className="text-gray-700 font-semibold">
                    Send payments
                  </span>
                }
              />
              <QuickLinkButton
                icon={
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                    <Link2 className="w-10 h-8 text-blue-600" />
                  </div>
                }
                label={
                  <span className="text-gray-700 font-semibold">PayPal.Me</span>
                }
              />
              <QuickLinkButton
                icon={
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-full">
                    <ShoppingCart className="w-10 h-8 text-blue-800" />
                  </div>
                }
                label={
                  <span className="text-gray-700 font-semibold">
                    PayPal Checkout
                  </span>
                }
              />
            </div>
          </div>
        </div>
        <div className="!-mt-5">
          <div className="flex justify-between items-center !mr-[350px] my-0">
            <h4 className="w-10 text-xl m-0">prepreation procedure</h4>
          </div>
        </div>
        {/* Bottom section with 3 columns */}
        <div className="grid grid-cols-12 gap-4 !mt-0">
          {/* Statistics section - made narrower */}
          <div className="col-span-4 space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Statistics</h3>
              <select className="text-blue-600">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>

            <div className="bg-white rounded-lg p-2 pb-14 border">
              <div className="mt-2">
                <h4 className="text-xl text-black pb-10">Incoming</h4>
                <p className="text-lg font-semibold ">USD 0.00</p>
                <p className="text-xs text-gray-600">Total incoming</p>
              </div>
            </div>

            <div className="bg-white rounded-lg !p-6 border">
              <h4 className="text-xl text-black pb-10">Payments sent</h4>
              <p className="text-lg font-semibold">USD 0.00</p>
            </div>
          </div>

          {/* Invoice section - made wider */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg p-6 border h-full">
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold mb-4">
                  Create an Invoice
                </h2>
                <span>:</span>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Customer Email"
                />
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="product name"
                />
                <div className="flex gap-4">
                  <input
                    type="number"
                    className="w-full mt-1 p-2 border rounded-md"
                    placeholder="item amount"
                  />
                  <select className="w-full mt-1 p-2 border rounded-md">
                    <option>USD</option>
                  </select>
                </div>
                <div className="flex gap-2">
                  <button className="bg-blue-400 text-white text-sm !px-10 py-2 rounded-full">
                    Send
                  </button>
                  <button className="text-blue-400 text-sm font-bold">
                    Add more data
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Link section - made wider */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg p-6 border h-full">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Create a payment link</h2>
                <span>:</span>
              </div>
              <div className="space-y-4">
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Product or service name"
                />
                <div className="flex gap-4">
                  <div className="w-1/3">
                    <select className="w-full !mt-1 !p-2 border rounded-md">
                      <option>USD</option>
                    </select>
                  </div>
                  <div className="w-2/3">
                    <input
                      type="text"
                      className="w-full mt-1 p-2 border rounded-md"
                      placeholder="The Price"
                    />
                  </div>
                </div>
                <p className="text-xl text-black ">
                  Create a shareable link so you can receive payments via email,
                  text, or on social media
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuickLinkButton = ({ icon, label }) => {
  return (
    <button className="flex flex-col items-center justify-center p-2 hover:bg-gray-50 rounded-lg transition-colors">
      <div className="text-gray-600 mb-2">{icon}</div>
      <span className="text-xs text-center">{label}</span>
    </button>
  );
};

export default Home;
