
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Star, Plane, Hotel, Car, Camera } from "lucide-react";

const Index = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const featuredPackages = [
    {
      id: 1,
      name: "Paradise Getaway",
      destination: "Maldives",
      price: 2499,
      originalPrice: 2999,
      duration: "7 days",
      rating: 4.9,
      reviews: 324,
      image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&h=300&fit=crop",
      includes: ["Flight", "Resort", "All-inclusive", "Spa"],
      description: "Luxury overwater villas with pristine beaches"
    },
    {
      id: 2,
      name: "European Adventure",
      destination: "Paris, Rome, Barcelona",
      price: 1899,
      originalPrice: 2299,
      duration: "12 days",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=500&h=300&fit=crop",
      includes: ["Flights", "Hotels", "Tours", "Transport"],
      description: "Explore Europe's most iconic cities"
    },
    {
      id: 3,
      name: "Tropical Escape",
      destination: "Costa Rica",
      price: 1299,
      originalPrice: 1599,
      duration: "8 days",
      rating: 4.7,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
      includes: ["Flight", "Eco-lodge", "Adventures", "Wildlife"],
      description: "Rainforest adventures and pristine beaches"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                TravelHub
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Packages</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900 transition-colors">Flights</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900 transition-colors">Hotels</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900 transition-colors">Transport</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900 transition-colors">Experiences</a>
            </nav>

            <div className="flex items-center space-x-3">
              <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Welcome Back</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Sign In
                    </Button>
                    <div className="text-center text-sm text-slate-600">
                      Don't have an account?{" "}
                      <button 
                        onClick={() => {setLoginOpen(false); setRegisterOpen(true);}}
                        className="text-blue-600 hover:underline"
                      >
                        Sign up
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={registerOpen} onOpenChange={setRegisterOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Create Your Account</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 pt-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input id="registerEmail" type="email" placeholder="john@example.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input id="registerPassword" type="password" placeholder="Create a password" />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Create Account
                    </Button>
                    <div className="text-center text-sm text-slate-600">
                      Already have an account?{" "}
                      <button 
                        onClick={() => {setRegisterOpen(false); setLoginOpen(true);}}
                        className="text-blue-600 hover:underline"
                      >
                        Sign in
                      </button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-blue-50"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Your Next
              <span className="block text-blue-600">
                Adventure Awaits
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover amazing travel packages, book flights, find perfect accommodations, 
              and create unforgettable memories around the world.
            </p>
            
            {/* Search Bar */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-12">
              <Tabs defaultValue="packages" className="w-full">
                <TabsList className="grid w-full grid-cols-4 mb-6">
                  <TabsTrigger value="packages">Packages</TabsTrigger>
                  <TabsTrigger value="flights">Flights</TabsTrigger>
                  <TabsTrigger value="hotels">Hotels</TabsTrigger>
                  <TabsTrigger value="experiences">Experiences</TabsTrigger>
                </TabsList>
                
                <TabsContent value="packages" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label>Destination</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input placeholder="Where to?" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-in</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Check-out</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input type="date" className="pl-10" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Guests</Label>
                      <div className="relative">
                        <Users className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <Input placeholder="2 guests" className="pl-10" />
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                    Search Packages
                  </Button>
                </TabsContent>
                
                <TabsContent value="flights">
                  <div className="text-center py-8 text-slate-500">
                    <Button 
                      onClick={() => window.location.href = '/flights'}
                      className="bg-blue-600 hover:bg-blue-700"
                    >
                      Go to Flights
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="hotels">
                  <div className="text-center py-8 text-slate-500">
                    <Button 
                      onClick={() => window.location.href = '/hotels'}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Go to Hotels
                    </Button>
                  </div>
                </TabsContent>
                
                <TabsContent value="experiences">
                  <div className="text-center py-8 text-slate-500">
                    <Button 
                      onClick={() => window.location.href = '/experiences'}
                      className="bg-orange-600 hover:bg-orange-700"
                    >
                      Go to Experiences
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Featured Travel Packages</h3>
            <p className="text-xl text-gray-600">Handpicked destinations for your perfect getaway</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <Card key={pkg.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-red-500 hover:bg-red-600 text-white">
                      Save ${pkg.originalPrice - pkg.price}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-sm text-slate-500">({pkg.reviews})</span>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{pkg.name}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm text-slate-500 line-through">${pkg.originalPrice}</div>
                      <div className="text-2xl font-bold text-blue-600">${pkg.price}</div>
                    </div>
                  </div>
                  <CardDescription className="flex items-center space-x-4 text-sm">
                    <span className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{pkg.destination}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.includes.map((item, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {item === "Flight" && <Plane className="h-3 w-3 mr-1" />}
                        {item === "Hotel" && <Hotel className="h-3 w-3 mr-1" />}
                        {item === "Transport" && <Car className="h-3 w-3 mr-1" />}
                        {item === "Tours" && <Camera className="h-3 w-3 mr-1" />}
                        {item}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Explore by Category</h3>
            <p className="text-xl text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Flights", icon: Plane, color: "bg-blue-600", href: "/flights" },
              { name: "Hotels", icon: Hotel, color: "bg-green-600", href: "/hotels" },
              { name: "Transport", icon: Car, color: "bg-purple-600", href: "/transport" },
              { name: "Experiences", icon: Camera, color: "bg-orange-600", href: "/experiences" }
            ].map((category) => (
              <Card 
                key={category.name} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-0 bg-white"
                onClick={() => window.location.href = category.href}
              >
                <CardContent className="p-8 text-center">
                  <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{category.name}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Plane className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">TravelHub</h4>
              </div>
              <p className="text-slate-400">Your gateway to extraordinary travel experiences around the world.</p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Destinations</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Europe</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Asia</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Americas</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Africa</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Services</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/flights" className="hover:text-white transition-colors">Flight Booking</a></li>
                <li><a href="/hotels" className="hover:text-white transition-colors">Hotel Reservations</a></li>
                <li><a href="/transport" className="hover:text-white transition-colors">Car Rentals</a></li>
                <li><a href="/experiences" className="hover:text-white transition-colors">Travel Experiences</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 TravelHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
