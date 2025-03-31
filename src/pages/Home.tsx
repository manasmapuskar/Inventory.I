
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Package, 
  Truck, 
  DollarSign,
  ShieldCheck
} from "lucide-react";

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-inventory-blue">Inventory.I</span>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Link to="/dashboard">
                <Button className="bg-inventory-blue hover:bg-blue-600">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-inventory-blue hover:bg-blue-600">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 mb-6">
                Streamline Your Inventory Management
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Take control of your inventory with our powerful, easy-to-use management system. 
                Track products, manage suppliers, and boost your sales with real-time insights.
              </p>
              <div className="flex space-x-4">
                {isAuthenticated ? (
                  <Link to="/dashboard">
                    <Button className="bg-inventory-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
                      Go to Dashboard
                    </Button>
                  </Link>
                ) : (
                  <Link to="/signup">
                    <Button className="bg-inventory-blue hover:bg-blue-600 text-white px-8 py-3 rounded-lg text-lg">
                      Get Started
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="/lovable-uploads/warehouse.jpg" 
                alt="Inventory Dashboard"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our inventory management system comes packed with everything you need to run your business efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="text-inventory-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dashboard Analytics</h3>
              <p className="text-gray-600">
                Get real-time insights with visual charts and analytics to make data-driven decisions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Package className="text-inventory-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Inventory Tracking</h3>
              <p className="text-gray-600">
                Manage your stock levels, set thresholds, and get alerts for low inventory items.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="text-inventory-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Supplier Management</h3>
              <p className="text-gray-600">
                Maintain a database of suppliers, track orders, and manage relationships.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="text-inventory-blue" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sales Tracking</h3>
              <p className="text-gray-600">
                Monitor your sales performance, identify trends, and optimize your revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Businesses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See what our customers are saying about our inventory management solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="text-amber-400 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  "This inventory system has transformed our operations. We've reduced stockouts by 80% and improved our order fulfillment speed significantly."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-gray-700 font-medium">
                      {String.fromCharCode(64 + i)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium">Customer {i}</h4>
                    <p className="text-sm text-gray-500">Retail Store Owner</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-inventory-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Inventory Management?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Join thousands of businesses that use our platform to streamline their operations.
            </p>
            <Link to={isAuthenticated ? "/dashboard" : "/signup"}>
              <Button className="bg-white text-inventory-blue hover:bg-gray-100 px-8 py-3 rounded-lg text-lg">
                {isAuthenticated ? "Go to Dashboard" : "Get Started for Free"}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Inventory Pro</h3>
              <p className="text-gray-400">
                The complete inventory management solution for businesses of all sizes.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>Testimonials</li>
                <li>FAQ</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          
          
        </div>
      </footer>
    </div>
  );
};

export default Home;
