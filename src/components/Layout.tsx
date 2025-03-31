
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useAuth } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout = ({ children, pageTitle }: LayoutProps) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-16 w-full min-h-screen bg-gray-50 p-6">
        <Header pageTitle={pageTitle} />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
