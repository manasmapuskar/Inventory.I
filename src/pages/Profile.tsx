
import Layout from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useState } from "react";
import { UserRound, Mail, Phone, MapPin, Briefcase, Calendar } from "lucide-react";

const Profile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "123-456-7890",
    address: "123 Inventory Lane, Stock City",
    position: "Inventory Manager",
    joinedDate: "January 2023"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    toast.success("Profile updated successfully");
  };

  return (
    <Layout pageTitle="Profile">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">My Profile</h2>
        <p className="text-gray-600 mb-4">Manage your personal information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="md:col-span-1">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg" alt={user?.name} />
              <AvatarFallback>{user?.name?.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <CardTitle>{user?.name}</CardTitle>
            <CardDescription>{formData.position}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <UserRound size={18} className="text-gray-500" />
                <span>{formData.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-500" />
                <span>{formData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-500" />
                <span>{formData.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-gray-500" />
                <span>{formData.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase size={18} className="text-gray-500" />
                <span>{formData.position}</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-gray-500" />
                <span>Joined {formData.joinedDate}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Position</Label>
                  <Input 
                    id="position" 
                    name="position" 
                    value={formData.position}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="avatar">Profile Picture</Label>
                <Input id="avatar" type="file" />
              </div>
              
              <Button type="button" onClick={handleSave} className="mt-4">Save Changes</Button>
            </form>
          </CardContent>
        </Card>

        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
            <CardDescription>Recent login activity for your account</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-4">
                <div>
                  <p className="text-sm font-medium">Last Login</p>
                  <p className="text-sm text-gray-500">Today, 10:30 AM</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500">New York, USA</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Device</p>
                  <p className="text-sm text-gray-500">Chrome on Windows</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-4">
                <div>
                  <p className="text-sm font-medium">Previous Login</p>
                  <p className="text-sm text-gray-500">Yesterday, 5:45 PM</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Location</p>
                  <p className="text-sm text-gray-500">New York, USA</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Device</p>
                  <p className="text-sm text-gray-500">Safari on macOS</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Profile;
