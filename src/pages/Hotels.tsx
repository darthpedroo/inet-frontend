
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Hotel, MapPin, Calendar, Users, Star, Wifi, Car, Coffee } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import ShoppingCartComponent from "@/components/ShoppingCart";
import AuthComponent from "@/components/AuthComponent";

const Hotels = () => {
  const { addToCart } = useCart();
  const [searchData, setSearchData] = useState({
    destination: "",
    checkin: "",
    checkout: "",
    guests: "2"
  });

  const hotels = [
    {
      id: "hotel-1",
      name: "Grand Plaza Hotel",
      location: "Downtown, New York",
      rating: 4.8,
      reviews: 1247,
      price: 289,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop",
      amenities: ["Free WiFi", "Parking", "Restaurant", "Gym"],
      description: "Luxury hotel in the heart of the city"
    },
    {
      id: "hotel-2",
      name: "Sunset Beach Resort",
      location: "Beachfront, Miami",
      rating: 4.6,
      reviews: 892,
      price: 199,
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=400&h=250&fit=crop",
      amenities: ["Beach Access", "Pool", "Spa", "Free WiFi"],
      description: "Oceanfront resort with stunning views"
    },
    {
      id: "hotel-3",
      name: "Mountain Lodge",
      location: "Alpine District, Colorado",
      rating: 4.9,
      reviews: 634,
      price: 149,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=250&fit=crop",
      amenities: ["Mountain View", "Fireplace", "Hiking", "Restaurant"],
      description: "Cozy lodge with mountain adventures"
    }
  ];

  const handleAddToCart = (hotel: any) => {
    addToCart({
      id: hotel.id,
      name: hotel.name,
      price: hotel.price,
      type: 'HOTEL',
      image: hotel.image,
      description: hotel.description,
      details: {
        location: hotel.location,
        rating: hotel.rating,
        amenities: hotel.amenities
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Hotel className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/flights" className="text-gray-600 hover:text-gray-900">Flights</a>
              <a href="/hotels" className="text-green-600 font-medium">Hotels</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900">Transport</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900">Experiences</a>
              <div className="flex items-center space-x-3">
                <AuthComponent />
                <ShoppingCartComponent />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-green-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Find Your Perfect Stay</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                <div className="space-y-2">
                  <Label>Destination</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Where are you going?" 
                      className="pl-10"
                      value={searchData.destination}
                      onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Check-in</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="date" 
                      className="pl-10"
                      value={searchData.checkin}
                      onChange={(e) => setSearchData({...searchData, checkin: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Check-out</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="date" 
                      className="pl-10"
                      value={searchData.checkout}
                      onChange={(e) => setSearchData({...searchData, checkout: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Guests</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="2 guests" 
                      className="pl-10"
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12">
                Search Hotels
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Hotels</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {hotels.map((hotel) => (
                <Card key={hotel.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  <div className="flex">
                    <div className="w-1/3">
                      <img 
                        src={hotel.image} 
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-2/3 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">{hotel.name}</h4>
                          <p className="text-sm text-gray-600 flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {hotel.location}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{hotel.rating}</span>
                            <span className="text-sm text-gray-500">({hotel.reviews})</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{hotel.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {amenity === "Free WiFi" && <Wifi className="h-3 w-3 mr-1" />}
                            {amenity === "Parking" && <Car className="h-3 w-3 mr-1" />}
                            {amenity === "Restaurant" && <Coffee className="h-3 w-3 mr-1" />}
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-green-600">${hotel.price}</span>
                          <span className="text-sm text-gray-600">/night</span>
                        </div>
                        <div className="space-x-2">
                          <Button 
                            variant="outline" 
                            onClick={() => handleAddToCart(hotel)}
                            className="text-green-600 border-green-600 hover:bg-green-50"
                          >
                            Add to Cart
                          </Button>
                          <Button className="bg-green-600 hover:bg-green-700">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hotels;
