
import Layout from "../components/Layout";
import { salesStats, salesData, topSellingProducts } from "../utils/mockData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from "recharts";
import { ArrowUp, DollarSign, Package, ShoppingCart, RefreshCcw } from "lucide-react";

const StatCard = ({ stat }: { stat: any }) => {
  const getIcon = () => {
    switch (stat.icon) {
      case "money":
        return <DollarSign className="text-inventory-blue" size={24} />;
      case "return":
        return <RefreshCcw className="text-inventory-purple" size={24} />;
      case "purchase":
        return <ShoppingCart className="text-inventory-green" size={24} />;
      case "invest":
        return <Package className="text-inventory-orange" size={24} />;
      default:
        return <DollarSign className="text-inventory-blue" size={24} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center text-3xl font-bold text-inventory-blue">
          {stat.value}
        </div>
        {getIcon()}
      </div>
      <div className="text-gray-500 text-sm mb-2">{stat.label}</div>
      {stat.change && (
        <div className="flex items-center text-sm text-green-500">
          <ArrowUp size={16} className="mr-1" />
          <span>{stat.change}%</span>
        </div>
      )}
    </div>
  );
};

const ProductPerformance = ({ product }: { product: any }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{product.name}</span>
        <span className="text-sm font-medium text-gray-700">{product.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-inventory-blue h-2 rounded-full"
          style={{ width: `${product.percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Sales = () => {
  return (
    <Layout pageTitle="Sales">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {salesStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">SALES</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Sales" fill="#6366F1" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-6">Top Products</h3>
          
          <div className="flex justify-center items-center mb-6">
            <div className="relative w-48 h-48">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#EBEDF5" strokeWidth="10" />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="40" 
                  fill="none" 
                  stroke="#6366F1" 
                  strokeWidth="10" 
                  strokeDasharray="251.2" 
                  strokeDashoffset="100.48"
                  transform="rotate(-90 50 50)" 
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold">60%</span>
                <span className="text-sm text-gray-500">Average</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {topSellingProducts.map((product, index) => (
              <ProductPerformance key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sales;
