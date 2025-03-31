
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-9xl font-bold text-inventory-blue mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mb-6">Oops! Page not found</p>
        <p className="text-gray-500 mb-8">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-inventory-blue hover:bg-blue-600 px-8 py-3">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
