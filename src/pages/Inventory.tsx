
import { useState } from "react";
import Layout from "../components/Layout";
import { products } from "../utils/mockData";
import { Button } from "@/components/ui/button";
import { Package, Plus, Trash2 } from "lucide-react";

const Inventory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Layout pageTitle="Inventory">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold mb-4 md:mb-0">Products</h2>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm w-full md:w-auto">
            <div className="flex items-center space-x-3">
              <Package className="text-inventory-blue" size={24} />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Total Products</span>
                <span className="text-2xl font-bold">{products.length}</span>
              </div>
            </div>
            <Plus className="text-green-500" size={20} />
          </div>
          
          <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm w-full md:w-auto">
            <div className="flex items-center space-x-3">
              <Package className="text-red-500" size={24} />
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Low Products</span>
                <span className="text-2xl font-bold">
                  {products.filter(p => p.status === "low-stock").length}
                </span>
              </div>
            </div>
            <Plus className="text-green-500" size={20} />
          </div>
          
          <div className="flex space-x-2">
            <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
              <Trash2 className="mr-1" size={16} />
              Delete Products
            </Button>
            <Button className="bg-inventory-blue hover:bg-blue-600">
              <Plus className="mr-1" size={16} />
              Add Product
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Buying Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Threshold Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Expiry Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Availability
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentItems.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.buyingPrice}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.threshold}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.expiryDate}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.status === "in-stock" && (
                      <span className="status-badge status-in-stock">In stock</span>
                    )}
                    {product.status === "out-of-stock" && (
                      <span className="status-badge status-out-of-stock">Out of stock</span>
                    )}
                    {product.status === "low-stock" && (
                      <span className="status-badge status-low-stock">Low stock</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Page {currentPage} of {totalPages}
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Inventory;
