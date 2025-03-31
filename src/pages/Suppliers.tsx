
import { useState } from "react";
import Layout from "../components/Layout";
import { suppliers } from "../utils/mockData";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const Suppliers = () => {
  return (
    <Layout pageTitle="Suppliers">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Suppliers</h2>
        
        <div className="flex space-x-2">
          <Button variant="destructive" className="bg-red-500 hover:bg-red-600">
            <Trash2 className="mr-1" size={16} />
            Delete Suppliers
          </Button>
          <Button className="bg-inventory-blue hover:bg-blue-600">
            <Plus className="mr-1" size={16} />
            Add Suppliers
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Supplier Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact Number
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  On the way
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {suppliers.map((supplier) => (
                <tr key={supplier.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {supplier.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {supplier.product}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {supplier.contactNumber}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {supplier.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {supplier.type === "Taking Return" ? (
                      <span className="status-badge status-in-stock">Taking Return</span>
                    ) : (
                      <span className="status-badge status-out-of-stock">Not Taking Return</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {supplier.onTheWay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Suppliers;
