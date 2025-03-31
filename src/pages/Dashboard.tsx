
import Layout from "../components/Layout";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend, LineChart, Line } from "recharts";
import { dashboardStats, salesData } from "../utils/mockData";
import { ArrowUp, Package, ShoppingCart, Tag, AlertTriangle } from "lucide-react";

const StatCard = ({ stat }: { stat: any }) => {
  const getIcon = () => {
    switch (stat.icon) {
      case "categories":
        return <Tag className="text-inventory-blue" size={24} />;
      case "orders":
        return <ShoppingCart className="text-inventory-purple" size={24} />;
      case "inventory":
        return <Package className="text-inventory-green" size={24} />;
      case "liquidate":
        return <AlertTriangle className="text-inventory-orange" size={24} />;
      default:
        return <Tag className="text-inventory-blue" size={24} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <span className="text-gray-500 text-sm">{stat.label}</span>
        {getIcon()}
      </div>
      <div className="text-3xl font-bold mb-2">{stat.value}</div>
      {stat.change && (
        <div className="flex items-center text-sm text-green-500">
          <ArrowUp size={16} className="mr-1" />
          <span>{stat.change}%</span>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  return (
    <Layout pageTitle="Dashboard">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Welcome!</h2>
        <p className="text-gray-600 mb-4">It's good to see you again</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Sales & Purchase</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" name="Purchase" fill="#1E40AF" barSize={20} />
                <Bar dataKey="value" name="Sales" fill="#10B981" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Orders"
                  stroke="#1E40AF"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  name="Delivered"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Top Selling Stock</h3>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-3">Name</th>
                <th className="pb-3">Qty</th>
                <th className="pb-3">Remaining Quantity</th>
                <th className="pb-3">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3">Soft Food</td>
                <td className="py-3">30</td>
                <td className="py-3">15</td>
                <td className="py-3">₹ 450</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Mix</td>
                <td className="py-3">21</td>
                <td className="py-3">10</td>
                <td className="py-3">₹ 207</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">Pepsi</td>
                <td className="py-3">19</td>
                <td className="py-3">17</td>
                <td className="py-3">₹ 300</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold mb-4">Low Quantity Stock</h3>
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500">
                <th className="pb-3">Sale Date</th>
                <th className="pb-3">Product</th>
                <th className="pb-3">Remaining Quantity</th>
                <th className="pb-3">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3">15/06/2023</td>
                <td className="py-3">Charger</td>
                <td className="py-3">10 Packets</td>
                <td className="py-3">₹ 450</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">14/06/2023</td>
                <td className="py-3">Lays</td>
                <td className="py-3">15 Packets</td>
                <td className="py-3">₹ 350</td>
              </tr>
              <tr className="border-t">
                <td className="py-3">13/06/2023</td>
                <td className="py-3">Mobile</td>
                <td className="py-3">10 Packets</td>
                <td className="py-3">₹ 450</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
