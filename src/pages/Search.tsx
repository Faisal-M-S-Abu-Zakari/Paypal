import { useState, useEffect } from "react";
import { FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
interface User {
  firstName: string;
  lastName: string;
  email: string;
}
interface StoredUser {
  name: string;
  email: string;
}
const Search = () => {
  const [name, setName] = useState("");
  const [storedUsers, setStoredUsers] = useState<StoredUser[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("userNames") || "[]");
    setStoredUsers(users);
  }, [storedUsers]);
  const fetchSuggestions = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setSuggestions([]);
      return;
    }
    try {
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      const data = await response.json();
      setSuggestions(data.users?.slice(0, 5) || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };
  const searchUsers = async (searchName: string) => {
    try {
      setIsSearching(true);
      const response = await fetch(
        `https://dummyjson.com/users/search?q=${searchName}`
      );
      const data = await response.json();

      if (data.users && data.users.length > 0) {
        // User found in dummyJSON
        const user = data.users[0];
        const newUser = {
          name: `${user.firstName} ${user.lastName}`,
          email: user.email,
        };

        // Save to local storage
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem("userNames", JSON.stringify(updatedUsers));
        setStoredUsers(updatedUsers);

        toast.success("User found and saved!");
      } else {
        // No user found, save the search term as a new user
        const newUser = {
          name: searchName,
          email: `${searchName.toLowerCase().replace(/\s+/g, ".")}@example.com`,
        };

        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem("userNames", JSON.stringify(updatedUsers));
        setStoredUsers(updatedUsers);

        toast.info("Name saved as a new user");
      }

      // Save the current search name for the transfer page
      localStorage.setItem("searchName", searchName);
      navigate("/transfer");
    } catch (error) {
      toast.error("Error searching for users");
      console.error("Error searching users:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    fetchSuggestions(value);
  };
  const handleSuggestionClick = async (user: User) => {
    const newUser = {
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
    };
    const updatedUsers = [...storedUsers, newUser];
    localStorage.setItem("userNames", JSON.stringify(updatedUsers));
    setStoredUsers(updatedUsers);
    localStorage.setItem("searchName", newUser.name);
    setSuggestions([]);
    setName("");
    toast.success("User selected and saved!");
    navigate("/transfer");
  };

  const handleSearch = () => {
    if (!name.trim()) return;
    searchUsers(name);
    setName("");
    navigate("/transfer");
  };

  return (
    <div className="mt-5 ">
      <div className="flex gap-10 shadow-md px-[400px] py-5 bg-white rounded-lg">
        <button className="text-xl font-semibold text-gray-700 border-b-2 border-blue-500">
          Send
        </button>
        <button className="text-xl font-semibold text-gray-700 ">Demand</button>
        <button className="text-xl font-semibold text-gray-700 ">
          Contacts
        </button>
        <button className="text-xl font-semibold text-gray-700 ">More</button>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Left column */}
          <div className="space-y-6 col-span-7">
            <h2 className="text-2xl font-bold text-black">Send payments</h2>
            <div className="bg-white p-6 rounded-lg relative">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Name, Username, Email, Mobile Number"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {suggestions.length > 0 && (
                <ul className="absolute left-0 right-0 mt-1 mx-6 bg-white border rounded-lg shadow-lg z-10">
                  {suggestions.map((user, index) => (
                    <li
                      key={index}
                      className="p-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                      onClick={() => handleSuggestionClick(user)}
                    >
                      <div className="font-medium text-gray-800">
                        {user.firstName} {user.lastName}
                      </div>
                      <div className="text-sm text-gray-600">{user.email}</div>
                    </li>
                  ))}
                </ul>
              )}
              <button
                onClick={handleSearch} // Call handleSearch
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                disabled={!name.trim()}
              >
                the next
              </button>
            </div>

            <a href="" className="text-blue-500 hover:text-blue-700 text-sm  ">
              Show all contacts
            </a>
          </div>

          {/* Right column */}
          <div className="space-y-6 col-span-5">
            <h2 className="text-2xl font-bold text-black">
              Other ways to send
            </h2>
            <div className="bg-white p-6 rounded-lg w-full">
              {" "}
              {/* Set width to full */}
              <div className="flex items-center space-x-3">
                <FileText className="w-6 h-6 text-gray-600" />
                <div>
                  <h3 className="font-medium text-gray-800">Send Invoice</h3>
                  <p className="text-sm text-gray-600">
                    Customers track and receive your invoices
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
