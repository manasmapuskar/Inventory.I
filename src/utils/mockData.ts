
// Mock data for the inventory management system

export const products = [
  { id: 1, name: "Maggi", buyingPrice: "₹430", quantity: "43 Packets", threshold: "12 Packets", expiryDate: "11/12/22", status: "in-stock" },
  { id: 2, name: "Bru", buyingPrice: "₹257", quantity: "22 Packets", threshold: "12 Packets", expiryDate: "21/12/22", status: "out-of-stock" },
  { id: 3, name: "Red Bull", buyingPrice: "₹405", quantity: "36 Packets", threshold: "9 Packets", expiryDate: "5/12/22", status: "in-stock" },
  { id: 4, name: "Bourn Vita", buyingPrice: "₹502", quantity: "14 Packets", threshold: "6 Packets", expiryDate: "8/12/22", status: "out-of-stock" },
  { id: 5, name: "Horlicks", buyingPrice: "₹630", quantity: "5 Packets", threshold: "5 Packets", expiryDate: "9/1/23", status: "in-stock" },
  { id: 6, name: "Harpic", buyingPrice: "₹605", quantity: "10 Packets", threshold: "5 Packets", expiryDate: "9/1/23", status: "in-stock" },
  { id: 7, name: "Ariel", buyingPrice: "₹408", quantity: "23 Packets", threshold: "7 Packets", expiryDate: "15/12/23", status: "out-of-stock" },
  { id: 8, name: "Scotch Brite", buyingPrice: "₹359", quantity: "43 Packets", threshold: "8 Packets", expiryDate: "6/6/23", status: "in-stock" },
  { id: 9, name: "Coca Cola", buyingPrice: "₹205", quantity: "41 Packets", threshold: "10 Packets", expiryDate: "11/11/22", status: "low-stock" },
];

export const suppliers = [
  { id: 1, name: "Richard Martin", product: "Kit Kat", contactNumber: "7687764556", email: "richard@gmail.com", type: "Taking Return", onTheWay: "13" },
  { id: 2, name: "Tom Homan", product: "Maaza", contactNumber: "9867545368", email: "tomhoman@gmail.com", type: "Taking Return", onTheWay: "-" },
  { id: 3, name: "Veandir", product: "Dairy Milk", contactNumber: "9867545566", email: "veandier@gmail.com", type: "Not Taking Return", onTheWay: "-" },
  { id: 4, name: "Charin", product: "Tomato", contactNumber: "9267545457", email: "charin@gmail.com", type: "Taking Return", onTheWay: "12" },
  { id: 5, name: "Hoffman", product: "Milk Bikis", contactNumber: "9367546531", email: "hoffman@gmail.com", type: "Taking Return", onTheWay: "-" },
  { id: 6, name: "Fainden Juke", product: "Marie Gold", contactNumber: "9667545982", email: "fainden@gmail.com", type: "Not Taking Return", onTheWay: "9" },
  { id: 7, name: "Martin", product: "Saffola", contactNumber: "9867545457", email: "martin@gmail.com", type: "Taking Return", onTheWay: "-" },
  { id: 8, name: "Joe Nike", product: "Good day", contactNumber: "9567545769", email: "joenike@gmail.com", type: "Taking Return", onTheWay: "-" },
];

export const salesData = [
  { month: "JAN", value: 450 },
  { month: "FEB", value: 730 },
  { month: "MAR", value: 620 },
  { month: "APR", value: 620 },
  { month: "MAY", value: 520 },
  { month: "JUN", value: 820 },
  { month: "JUL", value: 890 },
  { month: "AUG", value: 450 },
  { month: "SEP", value: 850 },
  { month: "OCT", value: 780 },
  { month: "NOV", value: 980 },
  { month: "DEC", value: 1000 },
];

export const topSellingProducts = [
  { name: "Charger", percentage: 60 },
  { name: "Phone", percentage: 60 },
  { name: "Airpods", percentage: 60 },
];

export const dashboardStats = [
  { id: 1, value: 12, label: "Number of categories", icon: "categories" },
  { id: 2, value: 270, label: "Today's total orders", icon: "orders", change: 12, direction: "up" },
  { id: 3, value: 500, label: "Quantity in hand", icon: "inventory" },
  { id: 4, value: 100, label: "To be liquidated", icon: "liquidate" },
];

export const salesStats = [
  { id: 1, value: "30,000", label: "Revenue", icon: "money", change: 12, direction: "up" },
  { id: 2, value: "270", label: "Sales Return", icon: "return", change: 12, direction: "up" },
  { id: 3, value: "500", label: "Purchase", icon: "purchase", change: 12, direction: "up" },
  { id: 4, value: "10000", label: "Total Invested", icon: "invest", change: 12, direction: "up" },
];

export const users = [
  { id: 1, email: "admin@example.com", password: "password123", name: "Admin User" },
  { id: 2, email: "user@example.com", password: "password123", name: "Regular User" },
];
