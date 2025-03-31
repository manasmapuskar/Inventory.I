
import { Bell, Search } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

interface HeaderProps {
  pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
  const { user } = useAuth();

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg mb-6">
      <div className="text-2xl font-bold text-gray-700">{pageTitle}</div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-inventory-blue focus:border-transparent bg-white"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </div>
        </div>
        
        <div className="relative">
          <Bell size={24} className="text-gray-500 hover:text-inventory-blue cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            1
          </span>
        </div>
        
        <div className="flex items-center">
          <div className="mr-2">
            <span className="font-medium text-sm">{user?.name || "User"}</span>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {user?.name ? (
              <span className="text-lg font-semibold">{user.name.charAt(0)}</span>
            ) : (
              <span className="text-lg font-semibold">U</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
