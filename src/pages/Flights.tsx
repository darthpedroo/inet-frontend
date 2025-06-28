
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plane, MapPin, Calendar, Users, Clock, ArrowRight } from "lucide-react";

const Flights = () => {
  const [searchData, setSearchData] = useState({
    from: "",
    to: "",
    departure: "",
    return: "",
    passengers: "1"
  });

  const flights = [
    {
      id: 1,
      airline: "SkyWings",
      from: "New York",
      to: "London",
      departure: "08:30",
      arrival: "20:45",
      duration: "7h 15m",
      price: 899,
      stops: "Direct",
      class: "Economy"
    },
    {
      id: 2,
      airline: "AirGlobal",
      from: "New York",
      to: "London",
      departure: "14:20",
      arrival: "02:15+1",
      duration: "7h 55m",
      price: 749,
      stops: "Direct",
      class: "Economy"
    },
    {
      id: 3,
      airline: "FlightExpress",
      from: "New York",
      to: "London",
      departure: "22:10",
      arrival: "09:30+1",
      duration: "7h 20m",
      price: 1299,
      stops: "Direct",
      class: "Business"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">TravelHub</h1>
            </div>
            <nav className="flex items-center space-x-6">
              <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="/flights" className="text-blue-600 font-medium">Flights</a>
              <a href="/hotels" className="text-gray-600 hover:text-gray-900">Hotels</a>
              <a href="/transport" className="text-gray-600 hover:text-gray-900">Transport</a>
              <a href="/experiences" className="text-gray-600 hover:text-gray-900">Experiences</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Search Section */}
      <section className="bg-blue-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Find Your Perfect Flight</h2>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                <div className="space-y-2">
                  <Label>From</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Departure city" 
                      className="pl-10"
                      value={searchData.from}
                      onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>To</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Destination city" 
                      className="pl-10"
                      value={searchData.to}
                      onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Departure</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="date" 
                      className="pl-10"
                      value={searchData.departure}
                      onChange={(e) => setSearchData({...searchData, departure: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Return</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      type="date" 
                      className="pl-10"
                      value={searchData.return}
                      onChange={(e) => setSearchData({...searchData, return: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Passengers</Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="1 passenger" 
                      className="pl-10"
                      value={searchData.passengers}
                      onChange={(e) => setSearchData({...searchData, passengers: e.target.value})}
                    />
                  </div>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                Search Flights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Available Flights</h3>
            
            <div className="space-y-4">
              {flights.map((flight) => (
                <Card key={flight.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="bg-blue-100 p-2 rounded-lg">
                            <Plane className="h-5 w-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{flight.airline}</h4>
                            <p className="text-sm text-gray-600">{flight.class}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{flight.departure}</p>
                            <p className="text-sm text-gray-600">{flight.from}</p>
                          </div>
                          
                          <div className="flex-1 text-center">
                            <div className="flex items-center justify-center space-x-2">
                              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                              <div className="flex-1 h-0.5 bg-gray-300"></div>
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                              <div className="flex-1 h-0.5 bg-gray-300"></div>
                              <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-center space-x-2 mt-2">
                              <Clock className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{flight.duration}</span>
                            </div>
                            <Badge variant="secondary" className="mt-1">{flight.stops}</Badge>
                          </div>
                          
                          <div className="text-center">
                            <p className="text-2xl font-bold text-gray-900">{flight.arrival}</p>
                            <p className="text-sm text-gray-600">{flight.to}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right ml-8">
                        <p className="text-3xl font-bold text-blue-600">${flight.price}</p>
                        <p className="text-sm text-gray-600 mb-4">per person</p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          Select Flight
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Flights;
