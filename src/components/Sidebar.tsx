
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { 
  Home, 
  Package, 
  Truck, 
  BarChart3, 
  Settings, 
  LogOut, 
  DollarSign,
  UserRound
} from "lucide-react";

const Sidebar = () => {
  const location = useLocation();
  const { logout, user } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-black shadow-lg z-10">
      <div className="sidebar-icon text-white">I.</div>
      
      <div className="mt-8">
        <Link to="/dashboard">
          <div className={`sidebar-icon ${isActive('/dashboard') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <Home size={20} />
          </div>
        </Link>
        
        <Link to="/inventory">
          <div className={`sidebar-icon ${isActive('/inventory') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <Package size={20} />
          </div>
        </Link>
        
        <Link to="/suppliers">
          <div className={`sidebar-icon ${isActive('/suppliers') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <Truck size={20} />
          </div>
        </Link>
        
        <Link to="/sales">
          <div className={`sidebar-icon ${isActive('/sales') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <DollarSign size={20} />
          </div>
        </Link>
      </div>
      
      <div className="mt-auto mb-8">
        <Link to="/settings">
          <div className={`sidebar-icon ${isActive('/settings') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <Settings size={20} />
          </div>
        </Link>
        
        <div className="sidebar-icon cursor-pointer" onClick={logout}>
          <LogOut size={20} />
        </div>
        
        <Link to="/profile">
          <div className={`sidebar-icon ${isActive('/profile') ? 'bg-gray-900 text-white rounded-xl' : ''}`}>
            <UserRound size={20} />
            {user && (
              <span className="absolute w-3 h-3 bg-green-500 rounded-full bottom-0 right-0"></span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
